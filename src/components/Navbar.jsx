import { useState } from "react";
import "../styles/topnavbar.css"
import { Mobilemenu } from "./mobilemenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [showmenu, setShowmenu] = useState(false)

    return (
        <div>
            <header id="header" className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inner-content flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-700">
                        <div className="header-con flex items-center gap-1 text-gray-800 dark:text-white">
                        
                            <div className="mobile-menu" onClick={()=> showmenu === false ? setShowmenu(true): setShowmenu(false)}>
                            <img src="/images/menu-icon.png" alt="Menu Icon" /> 
                            </div>
                            <img src="/images/logo.png" alt="Logo" className="h-14 w-22 text-primary"/>
                            <h1  className="h2 text-xl font-bold leading-tight tracking-tighter">BEACONLIGHT HOSPITAL</h1>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                        {/* <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Home</a> */}
                        <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("find-doctor").scrollIntoView({ behavior: "smooth" })}>Find a Doctor</a>
                        <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</a>
                        <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>Contact</a>
                        <Link to="Appointment">
                            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" >Book Appointment</a>
                        </Link>
                        
                        </nav>
                    </div>
                </div>
            </header>
            {showmenu === true ? <Mobilemenu />:
            ""
                
            }
        </div>
    );
}
