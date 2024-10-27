import React from "react";
import {useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import Input from "./Input";
import authServices from "../appwrite/auth"
import { login } from "../store/authSlice"
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/login_image.avif"
import { toast } from "react-toastify"




function Signup(){


const { register, handleSubmit } = useForm();
const dispatch = useDispatch();
const navigate = useNavigate();
//const { register, handleSubmit } = useForm()

    const create = async (data)=>{
        const userData =  await authServices.createAccount(data);
        if(userData){
            const currentUser = await authServices.getCurrentUser();
            console.log(currentUser);
            dispatch(login(currentUser));
            toast.success("Account created successfully")
            navigate("/");

        }
        else{
            console.log("error in create");
            
        }
    }

    return(
        <div className="w-[400px] px-10 py-8 bg-[rgba(255,243,243,0.3)] shadow-2xl rounded-lg text-white" style={{backdropFilter: "blur(10px"}}>
        <h2 className="text-4xl font-extrabold text-[rgb(238,255,196)] text-center">SignUp</h2>
        <form onSubmit={handleSubmit(create)} >
        <Input
        label="Name"
        type = "text"
        placeholder = "Enter your name"
        {...register("name",{
        required:true
        })}
        />
        <Input
        label="Email"
        type = "text"
        placeholder = "Enter your email"
        {...register("email",{
        required:true,
        validate: {
            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
        }
        })}
        />
        <Input
        label="Password"
        type = "text"
        placeholder = "Enter your password"
        {...register("password",{
        required:true
        })}
        />
        <button type="submit" className="w-full h-11">Submit</button>
        </form>
        <p className="text-center font-extrabold text-[rgb(45,47,42)] mt-3">Already have an Account? <Link to="/auth/login" className="text-purple-800 font-extrabold">LogIn</Link></p>
    </div>
    )
}

export default Signup;