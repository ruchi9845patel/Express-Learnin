import express from "express";
import multer, { diskStorage } from "multer";
const app=express() 
const storage=multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'upload')
    },
    filename:function(req,file,cb) {
        cb(null, file.originalname)
    },
})
const upload=multer({storage})

app.get("/",(req,res)=>{
    res.send(`
        <form action='/upload' method="post" enctype="multipart/from-data">
            <input type="file" name="my file" />
            <button>upload file</button>
        </form>`
    )
})
app.post("/upload",upload.single('my file'),(req,res)=>{
    console.log(req.file)
    res.send({
        message:"file upload",
        info:req.file
    })
})
app.listen(3201,()=>{
    console.log(`http://localhost:${3201}`)
})