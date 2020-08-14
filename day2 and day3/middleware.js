// middleware are functions that executes between request and response
var express=require('express');
const exportmiddleware = require('./exportmiddleware');
var app=express();
app.listen(5000,()=>{
console.log("server listening on port 5000");
})
app.use(exportmiddleware);
var middlefunction1 =function(req,res,next){
console.log("middleware executing");
next();
};
var middlefunction2=function(req,res,next){
    console.log("middleware working for users");
    next();
}
//app.use(middlefunction);
app.get("/",middlefunction1,(req,res)=>{
    res.send("welcome to middleware");
})
app.get("/users",middlefunction2,(req,res)=>{
    res.send("welcome to users page");
})
