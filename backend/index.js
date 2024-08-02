import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
import companyRoute from "./routes/company.route.js";
import userRoute from "./routes/user.route.js";
import applicationRoute from "./routes/application.route.js";
import jobRoute from "./routes/job.route.js";

dotenv.config({});

const app = express();
app.get("/home",(req,res)=>{
    res.status(200).json({
        message:"i am comming from backend",
        success:true
    })
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOption = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));

//APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/job", jobRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    connectDB();
 console.log(`running on port ${PORT}`)
})
