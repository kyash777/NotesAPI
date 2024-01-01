import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import validator from "validator"
dotenv.config()


export const signUp = async (request, response) => {
    try {

        const { email, password } = request.body

        let user_exist = await User.findOne({ email: email });

        if (user_exist) {
            return response.status(409).json({ msg: "User with this email already exists" })
        }
        else {

            const hashPassword = await bcrypt.hash(password, 10);

            if (!validator.isEmail(email)) {
                return response.status(400).json({ message: "Invalid Email Adress" })
            }

            const user = {
                email: request.body.email,
                password: hashPassword
            }
            const newUser = new User(user)
            await newUser.save()
            return response.status(200).json({ message: "Signed up Successfully" })
        }


    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal Server Error" })
    }
}

export const login=async(request,response)=>{
    try{
        const {email,password}=request.body;
        console.log(email,password)
        let user= await User.findOne({email:email})
        
        if(!user){
            return response.status(400).json({msg:"No User With This Email.Plase Signup"})
        }
        
        let match=await bcrypt.compare(password,user.password)
        
        if(match){

            const Token=jwt.sign(user.toJSON(),process.env.JWT_KEY,{expiresIn:"1h"})
            
            return response.status(200).json({message:"Authentication Successfull ",Token:Token})

        }else{
            response.status(400).json({msg:"Password Does Not Match"})
        }
    }catch(error){

        return response.status(500).json({msg:"Error while login in user"})
    }
}