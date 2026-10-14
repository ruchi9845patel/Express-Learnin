import express from "express";
const app=express()
app.get("/",(req,res)=>{
    res.send("this is the home")
})
app.get("/user",(req,res)=>{
    res.send("this is the user")
})
app.get("/error",(req,res)=>{
    res.send1("this is the error")
})

app.get("/error",(req,res,next)=>{
    const error=new Error('')
    error.status=404
    next(error)
})

// function errorHandle(error,req,res,next) {
//     res.status(error.status || 500).send("try after some time")
// }
app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("try after some time")
    
})

app.listen(3206,()=>{
    console.log(`http://localhost:${3206}`)
})

