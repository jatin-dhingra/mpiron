const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hello from server');
})

app.listen(8000,(req,res)=>{
    console.log("listening on port 8000");
})