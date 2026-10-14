import express from "express";
import path from 'path'
import abslPath from "./pages/absolute.js";
const app=express()
 
 const pubPath=path.resolve("public")
 app.use(express.static(pubPath));
app.get("",(req,res)=>{
   
    res.sendFile(abslPath()+"/home.html")
})
app.get("/login",(req,res)=>{
   
    res.sendFile(abslPath()+"/login.html")
})
app.get("about",(req,res)=>{
   
    res.sendFile(abslPath()+"/about.html")
})

app.use((req,res)=>{
    
 res.status(404).sendFile(abslPath()+"/404.html")
})
app.listen(3201,()=>{
    console.log(`http://localhost:${3201}`)
})
