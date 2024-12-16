import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiHome } from "react-icons/ci";


const SideNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

  return (
    <nav>
        <HiMenuAlt3 onClick={handleNav} size={20} className="absolute top-4 right-4 z-[99] md:hidden"/>
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
                    <CiHome size={20}/>
                    <span className="pl-4">Projects</span>
                </a>
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in delay-300"
                >
                    <CiHome size={20}/>
                    <span className="pl-4">Resume</span>
                </a>
                <a href="#"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in delay-300"
                >
                    <CiHome size={20}/>
                    <span className="pl-4">Contact</span>
                </a>
            </div>
        ) : (
            <div>

            </div>
        )}

    </nav>
  )
}

export default SideNav