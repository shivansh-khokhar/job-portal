import express from "express";
import dotenv from "dotenv";
// import { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();
app.get("/home",(req,res)=>{
    res.status(200).json({
        message:"i am comming from great backend",
        success:true
    })
})

// middlewareback
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOption = {
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOption));


const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    connectDB();
 console.log(`running on port ${PORT}`)
})