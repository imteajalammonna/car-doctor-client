import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import Button from "./Button";


const Header = () => {


    const links = <>
        <NavLink className="nav" to="/">Home</NavLink>
        <NavLink className="nav" to="/about">About</NavLink>
        <NavLink className="nav" to="/services">Services</NavLink>
        <NavLink className="nav" to="/blog">Blog</NavLink>
    </>

    return (
        <div className="bg-base-100">
            <div className="container mx-auto navbar my-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <HiOutlineShoppingBag className="text-2xl mr-8 hover:text-[#FF3811]  duration-500"></HiOutlineShoppingBag>
                    <IoIosSearch className="text-2xl mr-8 hover:text-[#FF3811]  duration-500"></IoIosSearch>
                    <Link><Button name="Appointment" border="border"></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;