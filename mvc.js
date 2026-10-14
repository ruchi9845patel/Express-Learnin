import express from "express";
import { handler } from "./controller/inputcontroller.js";
const app=express() 

app.set('view engine','ejs')
app.get('/input',handler);

app.listen(3201,()=>{
    console.log(`http://localhost:${3201}`)
})
