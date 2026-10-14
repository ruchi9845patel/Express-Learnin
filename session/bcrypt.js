import express from "express";
import bcrypt from 'bcrypt';
const app=express()

app.get("/",(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("polololo", salt, function(err, hash) {
        console.log(hash);
       
    });
});
app.get("/compare",(req,res)=>{
    bcrypt.compare("polololo", "$2b$10$VwVG6TF8aHs.snmAkUS5Fe0mUSSjp/O058lBFxZFuC39Z0MhStQ8a", function(err, result) {
    console.log(result)
});
})
   
})
app.listen(9002,()=>{
    console.log(`http://localhost:${9002}`)
})