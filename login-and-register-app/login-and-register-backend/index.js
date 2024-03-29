import express from 'express' 
import cors from 'cors'
import mongoose from'mongoose'

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB connect")
}) 

//Routes
app.get("/",(req,res)=>{
    res.send("My API")
})
app.listen(9002,()=>{
    console.log("BE started at port 9002")
})