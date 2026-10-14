import express from "express";
const app=express()

// function checkRoute(req,res,next) {
//     console.log("user aceess this " ,req.url)
//     next();
// }

app.use((req,res,next)=>{
    console.log(req.url);
    next()
})

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/user",(req,res)=>{
    res.send("user page")
})

app.get("/products",(req,res)=>{
    res.send("product page")
})
app.listen(3202,()=>{
    console.log(`http://localhost:${3202}`)
})
