'use client'
// import Link from "next/link";
// import { useEffect , useState } from "react";

// export default function Header(){
//     return(
//         <div className="navBar flex items-center h-[70px] bg-[#fff] text-[#000] font-medium justify-between "> 
//             <div className="pl-[40px] text-3xl font-thin text-[#EB8317]">Kinza Aftab</div>
//         <div className="flex gap-[90px] mr-[100px] text-[#10375C] ">
//             <Link href="/">
//             <h3 className="options">Home</h3 >
//             </Link>
//             <Link href="/about">
//             <h3 className="options">About</h3>
//             </Link>
//             <Link href="/project">
//              <h3 className="options">Project</h3>
//              </Link>
//             <Link href="/contact">
//             <h3 className="options">Contact</h3>
//             </Link>
//         </div>
//      </div>
  
//     )
// }

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
 // Font Awesome icons for mobile menu

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navBar flex items-center h-[70px] bg-[#fff] text-[#000] font-medium justify-between px-5 md:px-[40px]">
            <div className="text-3xl font-thin text-[#EB8317]">Kinza Aftab</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-[90px] mr-[100px] text-[#10375C]">
                <Link href="/"><h3 className="options cursor-pointer">Home</h3></Link>
                <Link href="/about"><h3 className="options cursor-pointer">About</h3></Link>
                <Link href="/project"><h3 className="options cursor-pointer">Project</h3></Link>
                <Link href="/contact"><h3 className="options cursor-pointer">Contact</h3></Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
                className="md:hidden text-2xl text-[#10375C]"
                onClick={toggleMenu}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-[#fff] flex flex-col items-center gap-5 py-5 shadow-md md:hidden">
                    <Link href="/" onClick={toggleMenu}><h3 className="options">Home</h3></Link>
                    <Link href="/about" onClick={toggleMenu}><h3 className="options">About</h3></Link>
                    <Link href="/project" onClick={toggleMenu}><h3 className="options">Project</h3></Link>
                    <Link href="/contact" onClick={toggleMenu}><h3 className="options">Contact</h3></Link>
                </div>
            )}
        </header>
    );
}
