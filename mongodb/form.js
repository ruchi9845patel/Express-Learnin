import express from "express";
import { MongoClient } from "mongodb";
const dbName="school"
const url="mongodb://localhost:27017"

const client=new MongoClient(url)




const app=express()
app.use(express.urlencoded({extended:true}))
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
        res.send(`<form method="post" action="add-student">
            <input type="text" name="name" placeholder="enter studnet name" /><br/>
            <input type="text" name="email" placeholder="enter student email" /><br/>
            <input type="number" name="age" placeholder="enter studnet name" /> <br/>
            <button>add student</button>
        </form>`)
    })
    app.post("/add-student",async(req,res)=>{
        console.log(req.body);
          const collection=db.collection('students')
          const result= await collection.insertOne(req.body)
          console.log(result)
      
        res.send("data saved")
    })
})

    
   

app.listen(4007,()=>{
    console.log(`http://localhost:${4007}`)
})
