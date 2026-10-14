import express from "express";
const app=express()
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))

app.get("/",(req,res)=>{
    const filePath=path.resolve("view/home.html")
    res.sendFile(filePath)
})



app.get("/login",(req,res)=>{
    res.send(
       ` <form action="/submit" method="post">
            <input type="text" placeholder="enter your name" name="name"/>
            <input type="text" placeholder="enter your password" name="password"/>
            <button>login</button>
        </form>`
    )
})
app.post("/submit",(req,res)=>{
    console.log("user login details are:",req.body)
    res.send("<h1>this is submit page</h1>")
})
app.get("/user",(req,res)=>{
    res.send("<h1>this is user page</h1>")
})
app.listen(3208,()=>{
    console.log(`http://localhost:${3208}`)
})