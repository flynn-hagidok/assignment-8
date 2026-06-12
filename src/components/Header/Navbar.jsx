import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import "./Navbar.css"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    const links = <>
        <NavLink to="/" className={({ isActive }) => (isActive ? "items active" : "items")}>Home</NavLink>
        <NavLink to="apps" className={({ isActive }) => (isActive ? "items active" : "items")}>Apps</NavLink>
        <NavLink to="installation" className={({ isActive }) => (isActive ? "items active" : "items")}>Installation</NavLink>
    </>
    return (
        <nav className="flex justify-between items-center px-2 lg:px-20 py-4 text-black cursor-pointer shadow-sm text-white">
            <div className="flex items-center gap-2" >
                <span className="md:hidden" onClick={(e) => { e.stopPropagation(); setOpen(!open) }}>
                    {open ? <X></X> : <Menu></Menu>}
                    <ul className={`flex flex-col py-4 px-3 gap-2 absolute ${open ? "top-16" : "-top-40"} shadow-sm left-0 bg-gray-600 font-semibold`}>
                        {links}
                    </ul>
                </span>

                <span onClick={() => navigate("/")} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-10" />
                    <h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">HERO.IO</h2>
                </span>
            </div>
            <div className="items space-x-6 font-semibold hidden md:flex">
                {links}
            </div>
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-md">
                <FaGithub className="rounded-xl"></FaGithub>
                <a href="https://github.com/flynn-hagidok" className="text-white text-transparent bg-clip-text font-semibold" target="blank">Contribute</a>
            </button>
        </nav>
    );
};

export default Navbar;