import express from "express";
const app=express()

function capital(x) {
    return x.charAt(0).toUpperCase()+x.slice(1);
}

app.get("/",(req,res)=>{
const users=['ruchi','kavya','deepak','krishna'];
let data=``
for(let i=0;i<users.length;i++) {
    data+=`<li><a href="user/${capital(users[i])}">${users[i]}</a></li>`
    console.log(users[i])
}
    res.send(data)
})

app.get("/user/:name",(req,res)=>{
    console.log(req.params.name);
    const userName=req.params.name
res.send(`this is ${capital(userName)} profile page`)
})
app.listen(3209,()=>{
    console.log(`http://localhost:${3209}`)
})