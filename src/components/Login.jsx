import React from 'react'
import { useForm } from 'react-hook-form'
import Input from "./Input";
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { login } from "../store/authSlice"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';



function Login() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const Login = async (data) => {
        const session = await authService.login(data);
        if (session) {
            const currentUser = authService.getCurrentUser();
            dispatch(login(currentUser));
            toast.success("Logged in Successfully")
            navigate("/");
        }
        else {
            console.log("error in login");
        }
    }

    return (
        <div className="w-[400px] px-10 py-8 bg-[rgba(255,243,243,0.3)] shadow-2xl rounded-lg text-white" style={{ backdropFilter: "blur(10px" }}>
                    <h2 className="text-4xl font-extrabold text-[rgb(238,255,196)] text-center mb-5">Login</h2>
                    <form onSubmit={handleSubmit(Login)} >
                        <Input
                            label="Email"
                            type="text"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="text"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <button type="submit" className="w-full h-11">Submit</button>
                    </form>
                    <p className="text-center font-extrabold text-[rgb(45,47,42)] mt-3">Create a New Account. <Link to="/auth/sign-up" className="text-purple-800 font-extrabold">SignUp</Link></p>
                </div>
    )
}

export default Login;