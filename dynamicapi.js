import express from "express";
import userdata from './user.json' with {type:'json'}
 const app=express()

app.get("/",(req,res) =>{
    console.log(userdata)
    res.send(userdata)
})
app.get("/user:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    let filterdata=userdata.filter((user)=>user.id==id)
    res.send(filterdata)
})
app.get("/username:name",(req,res)=>{
    const name=req.params.name
    console.log(name)
    let filterdata=userdata.filter((user)=>user.name==name)
    res.send(filterdata)
})
app.get("/useremail:email",(req,res)=>{
    const email=req.params.email
    console.log(email)
    let filterdata=userdata.filter((user)=>user.email==email)
    res.send(filterdata)
})

app.listen(3600,()=>{
    console.log(`http://localhost:${3600}`)
})