import express from "express";
import { MongoClient } from "mongodb";
const dbName="school"
const url="mongodb://localhost:27017"

const client=new MongoClient(url);
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
client.connect().then((connection)=>{
    app.set('view engine','ejs')
   const db= connection.db(dbName)
    app.get("/api",async(req,res)=>{
          const collection=db.collection('students')
        const students=await collection.find().toArray()
        res.send(students)
    })
    app.get("/ui",async(req,res)=>{
          const collection=db.collection('students')
        const students=await collection.find().toArray()
        res.render('students',{students})
    })
    app.get("/add",(req,res)=>{
        res.render('add-student')
    })
    app.post("/add-student",async(req,res)=>{
        console.log(req.body);
          const collection=db.collection('students')
          const result= await collection.insertOne(req.body)
          console.log(result)
      
        res.send("data saved")
    })

    // post api...
    // nbody ke andar se bhi data pass kr skte ahi

    app.post("/add-student-api",async(req,res)=>{
        console.log(req.body);
        const {name,age,email}=req.body;  
        if(!name || !age || !email) {
            res.send({message:"operation failed",sucess:false})
            return false
        }
         const collection=db.collection('students')
        const result=await db.collection.insertOne(req.body)
        res.send({"message":result})

        // recive data that is send on the user platform.....,..

        console.log(req.body)
    })
})

    
   

app.listen(4006,()=>{
    console.log(`http://localhost:${4006}`)
})
