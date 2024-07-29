import { application } from "express";
import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },

    description:{
      type:string,
      required:true
    },

    requirements:{
        type:string
    },

    salary:{
        type:Number,
        required:true
    },
    
    location:{
        type:string,
        required:true
    },
    jobtype:{
        type:string,
        required:true
    },
    position:{                        //no.of opening
        type:Number,
        required:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',   
        required:true
    },
    applications:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Application'

    }
]
},{timestamps:true});
export const job = mongoose.model("job",jobSchema);

