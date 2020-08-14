const express=require('express');
const app=express();
app.use(express.static('day2/public'));
//creating server
app.listen(5050,()=>{
    console.log("app listening on port 5050");
})
//routing 
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})