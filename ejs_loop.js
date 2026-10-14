import express from "express";
const app=express() 

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.get('/',(req,res)=>{
res.render('addUser')
})
app.post('/submit-user',(req,res)=>{
    console.log(req.body)
    res.render('submitUser',req.body)

})
app.get('/user',(req,res)=>{
    const users=['ruchi','kavya','avni','harshu']
    res.render('user',{users:users,isLogin:false});
})
app.listen(3700,()=>{
    console.log(`http://localhost:${3700}`)
})
