import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
import { Link } from 'react-scroll';

const ulItems = [
  {link: "Home", path: "home"},
  {link: "Skills", path: "Skills"},
  {link: "Work Experience", path: "Work"},
  {link: "Projects", path: "project"},
]

type propsUL = {
    link: string,
    path: string
}

function Navbar() {
    const [isMenu, isSetmenu] = useState(true)
return (
    <div className={`fixed z-50 bg-[#0000001a] text-white backdrop-blur-[50px] top-0 left-0 right-0 w-full h-16 flex items-center`}>
        <nav className="relative flex justify-between px-5 items-center flex-1">
            <div>
                <a href="https://github.com/Abotreka00" className="text-3xl hover:text-first duration-300 uppercase font-thin">por<span className="text-first">tfolio..</span></a>
            </div>
            <ul className="hidden md:flex">
                {ulItems.map(({ link, path }: propsUL) => (
                        <Link className={`relative after:absolute after:bottom-0 after:-left-full overflow-hidden after:h-[2px] after:w-full after:bg-first after:duration-300 hover:after:left-0 ml-5 py-[5px] px-[7px] cursor-pointer text-white font-thin duration-300`} key={path} to={path} smooth={true} spy={true} activeClass="active" offset={-100} >{link}</Link>
                ))}
                <Link key="contact" to='Contact' smooth={true} spy={true} activeClass="active" offset={-100} className="py-2 px-5 rounded-md bg-gradient-to-r from-first to-last cursor-pointer ml-4 border-[1px] border-first hover:bg-none duration-300">Contact Me</Link>
            </ul>
            <div onClick={() => isSetmenu(!isMenu)} className="bg-first hover:bg-main border-[1px] border-first hover:text-first duration-300 py-1 px-2 text-2xl rounded-md md:hidden cursor-pointer">
                <button className="w-full h-full">
                    {isMenu ? <RiMenu4Fill /> : <AiOutlineClose /> }
                </button>
            </div>
            <div className={`absolute -top-3 ${isMenu ? "-left-full" : "left-0"} duration-300 w-[50%] h-screen bg-gradient-to-r from-[#342864] to-last py-10 md:hidden`}>
                <a href="https://github.com/Abotreka00" className="text-3xl hover:text-first duration-300 uppercase font-thin ml-10">Saleh..</a>
                <ul className="flex md:hidden flex-col gap-7 font-bold mt-10">
                    {ulItems.map(({ link, path }: propsUL) => (
                        <Link className="relative after:absolute after:bottom-0 after:-left-full overflow-hidden after:h-[2px] after:w-full w-fit after:bg-first after:duration-300 hover:after:left-0 ml-5 py-[5px] px-[7px] cursor-pointer text-white font-thin duration-300" key={path} to={path} smooth={true} spy={true} offset={-100} >{link}</Link>
                    ))}
                    <div className="py-2 px-5 rounded-md bg-gradient-to-r from-first to-last cursor-pointer ml-4 border-[1px] border-first hover:bg-none duration-300 mr-5 text-center">Hire Me</div>
                </ul>
            </div>
        </nav>
    </div>
)
}

export default Navbar