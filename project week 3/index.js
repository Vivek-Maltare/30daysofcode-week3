const mysql=require('mysql');
const express=require('express');
const bodyparser=require('body-parser');
var app=express();
app.use(bodyparser.json());
const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodeex',
    multipleStatments:true
    });
    mysqlConnection.connect((err)=>{
        if(err)
        throw err;
        console.log("connection established");
    });
    app.get("/selectemployee",(req,res)=>{
        let sql="SELECT * FROM employeedetails";
        mysqlConnection.query(sql,(err,result)=>{
            if(err)
            throw err;
            console.log(result);
            res.send("data fetched");
        })
    });
    app.get("/selectsingleemployee/:id",(req,res)=>{
        let sql=`SELECT * FROM employeedetails WHERE empId=${req.params.id}`;
        mysqlConnection.query(sql,(err,result)=>{
            if(err)
            throw err;
            console.log(result);
            res.send("single table record fetched");
        })
    });

app.delete("/deleteemployee/:id",(req,res)=>{
    let sql=`DELETE FROM employeedetails where empId=${req.params.id}`;
    mysqlConnection.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log(result);
        res.send("post deleted");
    })
});
app.post('/insertemployee',(req,res)=>{
    let emp=req.body;
    var sql="SET @empId=?;SET @ename=?;SET @empcode=?;SET @salary=?;\
    CALL EmployeeAddOrEdit(@empId,@ename,@empcode,@salary);";
mysqlConnection.query(sql,[emp.empId,emp.ename,emp.empcode,emp.salary],(err,rows,fields)=>{
    if(!err)

    res.send("inserted successfully"+ rows);
   else
    console.log(err);
})
});
app.post('/updateemployee',(req,res)=>{
    let emp=req.body;
    var sql="SET @empId=?;SET @ename=?;SET @empcode=?;SET @salary=?;\
    CALL EmployeeAddOrEdit(@empId,@ename,@empcode,@salary);";
mysqlConnection.query(sql,[emp.empId,emp.ename,emp.empcode,emp.salary],(err,rows,fields)=>{
    if(!err)

    res.send("updated successfully");
   else
    console.log(err);
})
});
    app.listen(3000,()=>{
console.log("app listening on port 3000");
    })