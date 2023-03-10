import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./Routes/sign.js";
import cors from "cors"
   
const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(bodyParser.text());

const port=5000;
mongoose.connect("mongodb://localhost:27017/MiniExam").then(()=>console.log("Mongodb success connected"))
.catch((err)=>console.log(err)) 

app.use("/samp",routes);

app.listen(port,()=>{
    console.log("server is running on port"+port+"....")
})




