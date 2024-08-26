import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// Register business logic
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    // Check if user already exist or not
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      });
    }
    // Now we will hash the password entered by the user
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile:{
        profilePhoto:cloudResponse.secure_url,
      }
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// Login business logic
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // check if role is correct or not
    if (role != user.role) {
      return res.status(400).json({
        message: "Account does'nt exist with current role.",
        success: false,
      });
    }
    // Generate Token
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d"
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};

// Logout business logic
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// Update profile business logic
export const updateProfile = async (req,res)=>{
    try{
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        const fileUri = getDataUri(file)

        const cloudResponse = await cloudinary.uploader.upload(fileUri.content)

    // if (!fullname || !email || !phoneNumber || !bio || !skills) {
    //   return res.status(400).json({
    //     message: "something is missing",
    //     success: false,
    //   });
    // }
    // Cloudinary code implementation will be added here later ...
      let skillsArray;
      if(skills){
        skillsArray = skills.split(",")
      }
    const userId = req.id; // middleware authentication (*)
    let user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            message: "User not found",
            success:false
        })
    }
    // update data
    if(fullname) user.fullname = fullname;
    if(email) user.email = email;
    if(phoneNumber) user.phoneNumber = phoneNumber;
    if(bio) user.profile.bio = bio;
    if(skills) user.profile.skills = skillsArray;
    // resume field should be implemented afterwards..(cloudinary)

    if(cloudResponse){
      user.profile.resume = cloudResponse.secure_url // save the cloudinary url
      user.profile.resumeOriginalName = file.originalname //save the original filename
    }

    await user.save();

    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };

      return res.status(200).json({
        message:"profile updated successfully",
        user,
        success:true
      })
    }catch(err){
        console.log(err)
    }
}

