import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
const app = express();

app.use(express.json())


await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("------connected-------")
})

app.get("/", async (req, res) => {
    const studentData = await studentModel.find()
    res.send(studentData);
})
app.post("/save", async (req, res) => {
    console.log(req.body)
    //  this is for the validation......
    const {name,age,email}=req.body;
    if(!req.body || !name || !age || !email) {
      res.send({
        message: "data not send",
        sucess: false,
        storedInfo:null

    });  
    //  we can return so that it can not go in the data database when the condition is not true............
    return false
    }

    const studentData=await studentModel.create(req.body)
    res.send({
        message: "data send",
        sucess: true,
        storedInfo:studentData

    });
})

app.listen(3108, () => {
    console.log(`http://localhost:${3108}`)
})