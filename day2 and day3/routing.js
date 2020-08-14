const express=require('express');
const app=express();
//creating server
app.listen(8080,()=>{
    console.log("app listening on port 8080");
})
//routing 
app.get("/",(req,res)=>{
    res.send("Bydefault routing ");
})
app.get("/users",(req,res)=>{
    res.send("getting users data");
})
app.post("/users",(req,res)=>{
res.send("post request for users profile");
})
//route with parameters
app.get("/users/data/:id",(req,res)=>{
    res.send("id entered by user is"+req.params.id);
})
app.get("/flights/:from-:to",(req,res)=>{
res.send("the flight you searched is from"+req.params.from+"to"+req.params.to);
})
app.get("/flights/:from.:to",(req,res)=>{
    res.send("the flight you searched is from"+req.params.from+"to"+req.params.to);
    })
app.get("/flights/:from?.:to?",(req,res)=>{
     res.send("the flight you searched is from"+req.params);
        })
//passing expressions in parameters
app.get("/nodata/ab+cd",(req,res)=>{
    res.send("Bydefault routing1 ");
})
app.get("/nodata1/ab*cd",(req,res)=>{
    res.send("Bydefault routing2 ");
})
app.get("/nodata2/ab?cd",(req,res)=>{
    res.send("Bydefault routing3 ");
})
app.get(/.*fly$/,(req,res)=>{
    res.send("Bydefault routing4 ");
})


