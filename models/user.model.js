import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required :true
    },

    email:{
        type:String,
        required :true,
        unique:true
    },

    phoneNumber:{
        type:Number,
        required :true
    },

    password:{
        type:String,
        required :true
    },

    role:{
        type:String,
        enum:['students','recruiter'],
        required:true

    },
    profile:{
        bio:{type:String},
        skills:[{type:string}],
        resume:{type:string}, //url to resume file
        resumeOriginalName:{type:string},
        company:{type:mongoose.Schema.Types.objectId, ref:'company'},
        profilePhoto:{
            type:string,
            default:" "
        },
    },
},{timestamp:true});
export const User = mongoose.model("User",userSchema);