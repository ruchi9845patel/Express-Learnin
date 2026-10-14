import express from "express";
import morgan from "morgan";
const app=express()

app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/user",(req,res)=>{
    res.send("user page")
})
app.get("/wait",(req,res)=>{
    setTimeout(()=>{
res.send("result after one second")
    },1000)
})
app.listen(3209,()=>{
    console.log(`http://localhost:${3209}`)
})