import express from "express";
const app=express() 
function ageCheck(req,res,next) {

    console.log(req.query.age);

    if(!req.query.age || req.query.age<18) {
        res.send("you are not allow to use this website..")
    } else {
        next();
    }
} 

// for the single middleware.........

// app.use(ageCheck)


function checkURL(req,res,age) {
    console.log("this request url is ",req.url)
}

app.get('',checkURL,(req,res)=>{
    res.send("<h1>this is home page</h1>")
})

app.get('/user',ageCheck,checkURL,(req,res)=>{
    res.send("<h1>this is user page</h1>")
})
app.get('/product',ageCheck,checkURL,(req,res)=>{
    res.send("<h1>this is product page</h1>")
})
app.listen(3201,()=>{
    console.log(`http://localhost:${3201}`)
})

