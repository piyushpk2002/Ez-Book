import  React from "react"
import {Link, NavLink} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import LogoutBtn from "./LogoutBtn";
import Container  from "../container/Container.jsx";
import logo from '../../assets/Logo.jpg'

function Header(){

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.status)
    const navItems = [
        {
            name: "Home",
            active: false,
            slug: "/"
        },
        {
            name: "Services",
            active: true,
            slug: "/services"
        },

        {
            name: "Contact-us",
            active: true,
            slug: "/contact-us"
        },

        {
            name: "About us",
            active: true,
            slug: "/about-us",
        },
        {
            name: "Login",
            active: !authStatus,
            slug: "/auth/login",
        }
    ]
    return(
    <header className="flex w-screen bg-cyan-950 h-16 items-center justify-center">
        <Container className='w-screen mx-20'>
        
            <nav className="flex">
                <div className="mr-4 overflow-hidden">
                    <Link to = '/'>
                        <img src={logo} alt="Logo" className="w-16 transition-[2ms] hover:scale-105"></img>
                    </Link>
                </div>

                <ul className="flex flex-row ml-auto items-center">
                    {
                        navItems.map((item) =>
                            item.active? (
                            <li key={item.name}>
                                <NavLink to={item.slug} className={({isActive})=>` border border-transparent inline-block px-6 py-2 duration-20 hover:text-cyan-500 hover:border-purple-500 rounded-full bg-transparent text-white ml-2 ${isActive?'text-cyan-500':'bg-transparent'}`}>
                                    {item.name}
                                </NavLink>
                                    
                                
                            </li>
                            ):null
                         )
                    }

                    {
                        authStatus && (
                            <li className="ml-6">
                                <LogoutBtn />
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Container>

        
    </header>
    )
}

export default Header