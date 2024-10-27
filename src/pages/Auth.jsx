import React from 'react'
import img1 from "../assets/login_image.avif"
import { Outlet, useLocation } from 'react-router-dom'

function Auth() {
    const location = useLocation()
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center" style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}>
            <div className="h-full w-full flex justify-center items-center" style={{ backdropFilter: "blur(6px)" }}>
                <div className="w-[60%] oleo-script relative text-white flex flex-col gap-10 text-center">
                    <p className="text-7xl text-shadow">Welcome to the <span className="text-blue-400">EZ Book</span></p>
                    <p className="text-4xl text-shadow">Experience the Effortles Booking Facilities</p>
                    <p className="text-3xl text-shadow">{location.pathname ==="/auth/sign-up" ? "Create a new Account Now " : "Log In to your Existing Account "}<i className="fi fi-sr-arrow-circle-right relative top-[4px] ml-1"></i></p>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Auth
