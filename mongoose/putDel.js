import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
const app=express()

app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("-----connected-----")
})

app.get("/",async(req,res)=>{
    const studentData=await studentModel.find()
    res.send(studentData)
})

app.post("/save",async(req,res)=>{
    console.log(req.body)

    const {name,age,email}=req.body;
    if(!req.body || !age || !name || !email) {
        res.send({
            message:"data not send",
            sucess:false,
            storedInfo:null
        });
        return false
    }
    const studentData=await studentModel.create(req.body) 
    res.send({
         message: "data send",
        sucess: true,
        storedInfo:studentData

    })
})

app.put("/update/:userid",async(req,res)=>{
   
    const id=req.params.userid;
     console.log(req.body,id);
     const studentData=await studentModel.findByIdAndUpdate(id,{
        ...req.body
     })
    res.send({
        message:"data update",
        sucess:true,
        dataInfo:studentData
    })

})
app.delete("/delete/:userid",async(req,res)=>{
   
    const id=req.params.userid;
     const studentData=await studentModel.findByIdAndDelete(id)
    res.send({
        message:"data deleted",
        sucess:true,
        dataInfo:studentData
    })

})

app.listen(3106, () => {
    console.log(`http://localhost:${3106}`)
})