import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiHome } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";


const SideNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

  return (
    <nav>
        <HiMenuAlt3 onClick={handleNav} size={30} className="absolute top-4 right-4 z-[99] md:hidden"/>
        {nav ? (
            <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in delay-300"
                >
                    <CiHome size={20}/>
                    <span className="pl-4">Home</span>
                </a>
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in delay-300"
                >
                    <AiOutlineProject size={20} />
                    <span className="pl-4">Projects</span>
                </a>
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out delay-300 "
                >
                    <BsPerson size={20} />
                    <span className="pl-4">Resume</span>
                </a>
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in delay-300"
                >
                    <AiOutlineMail size={20} />
                    <span className="pl-4">Contact</span>
                </a>
            </div>
        ) : (
            ''
        )}
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a href="main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <CiHome size={20}/>
                </a>
                <a href="projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineProject size={20} />
                </a>
                <a href="contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsPerson size={20} />
                </a>
                <a href="mail" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail size={20} />
                </a>
            </div>
        {/* 
        <AiOutlineProject size={20} />
        <BsPerson size={20} />
        <AiOutlineMail size={20} /> */}
        </div>

    </nav>
  )
}

export default SideNav