import express from "express";
const app=express() 

app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render('hello',{name:"ruchi patel",learning:"express.js",age:20})
})
app.listen(3203,()=>{
    console.log(`http://localhost:${3203}`)
})