import express from "express";
import home from "./pages/home.js";
import submit from "./pages/submit.js";
const app=express();
app.get("/",(req,res)=>{
res.send(home())
}) 

app.get("/login",(rq,res)=>{
res.send(`
    <form action="/submit" method="post">
        <input type="text" placeholder="enter your name"/><br/><br/>
          <input type="password" placeholder="enter your password"/><br/><br/>
          <button>submit<button/>
          <br/> <br/>
          <a href='/' >Go to home</a>
    </form>`)
})
app.post("/submit",(rq,res)=>{
res.send(submit())
})
app.listen(3001,()=>{
    console.log(`http://localhost:${3001}`)
})