import cookieParser from "cookie-parser";
import express from "express";
const app=express()

app.use(cookieParser())

app.get("/",(req,res)=>{
    res.cookie("name","harsh");
    res.send("done");
})
app.get("/read",(req,res)=>{
    console.log(req.cookies)
    res.send("read the data")
})
app.listen(9001,()=>{
    console.log(`http://localhost:${9001}`)
})

polololo
$2b$10$VwVG6TF8aHs.snmAkUS5Fe0mUSSjp/O058lBFxZFuC39Z0MhStQ8a