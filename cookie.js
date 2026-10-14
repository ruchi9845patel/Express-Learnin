import express from "express";
const app=express()

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))

app.get("/login",(req,res)=>{
    res.render('login')

})
app.post("/profile",(req,res)=>{
    res.setHeader('set-cookie',["login=true",
        "name="+req.body.name]
    )
    res.render('profile')

})
app.get("/",(req,res)=>{
    let cookiedata=req.get('cookie')
    if(cookiedata===undefined) {
        return res.send("cookie not found")
    }
    cookiedata=cookiedata.split(";")
    cookiedata=cookiedata[1].split("=")
    console.log(cookiedata[1])
    res.render('home',{name:cookiedata[1]})

})
app.listen(3210,()=>{
    console.log(`http://localhost:${3210}`)
})