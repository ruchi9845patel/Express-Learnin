import express from "express";
const app=express();

function ageCheck(req,res,next) {
    if(!req.query.age || req.query.age<18) {
        res.send("Alert !, you can not acess this page")
    } else{
        next()
    }
}

app.use(ageCheck)

app.get("/",(req,res)=>{
    res.send("<h1>this is the home page</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>this is the login page</h1>")
})
app.get("/admin",(req,res)=>{
    res.send("<h1>this is the admin page</h1>")
})

app.listen(3204,()=>{
    console.log(`http://localhost:${3204}`)
})
