import { FaFacebook,FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import avatar from "../assets/Avatar.jpg"
import HTMLpng from "../assets/HTMLpng.png"
import css from "../assets/css.png"
import framer from "../assets/framer-motion.webp"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import tailwind from "../assets/tailwind.png"
import typescript from "../assets/typescript.png"
import {motion} from "framer-motion"

const title = "SALEH HOSSAM ABD ALAZIZ"


function Home() {
  return (
    <div id="home" className="w-full flex gap-5 mt-[100px]">
        <div className="w-full px-5 md:px-10 flex flex-col md:flex-row gap-5 items-center flex-1">
            <div className="relative w-full md:w-1/2 h-[400px] md:h-[700px] flex flex-col justify-center before:w-[400px] before:h-[400px] before:rounded-full before:bg-first before:absolute before:top-0 before:-left-20 before:z-[-1] before:blur-[225px]">
                <span className="text-2xl text-white">HI There.I'm</span>
                <motion.h1 initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{staggerChildren: 0.2}} variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-5xl text-white font-thin mb-5 leading-[70px] bg-gradient-to-r from-first to-last w-fit text-transparent bg-clip-text">
                {
                    title.split("").map((span, index) => (
                        <motion.span key={index} transition={{duration: 1}} variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}  className="text-4xl font-thin bg-gradient-to-r from-first to-last text-transparent bg-clip-text">{span}</motion.span>
                    ))
                }
                </motion.h1>
                <motion.p initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 1, type: "spring"}} className="text-white w-[90%] md:w-[80%]"><motion.span transition={{duration: 1, delay: .2}} variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-first">Frontend</motion.span> <motion.span transition={{duration: 1,delay: .5}} variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}>Web Developer,</motion.span> <motion.span transition={{duration: 1,delay: 1}} variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-first">Freelancer</motion.span></motion.p>
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{staggerChildren: 0.2}} variants={{hidden: {}, visible: {}}} className="flex mt-10 gap-5 text-first text-2xl">
                    <motion.a transition={{duration: 3, type: "spring"}} variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}} href="https://www.facebook.com/saleh.hossam.988"><FaFacebook /></motion.a>
                    <motion.a transition={{duration: 3, type: "spring"}} variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}} href="https://wa.me/201011073975"><FaWhatsapp /></motion.a>
                    <motion.a transition={{duration: 3, type: "spring"}} variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}} href="https://github.com/Abotreka00"><FaGithub /></motion.a>
                    <motion.a transition={{duration: 3, type: "spring"}} variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}} href="https://www.linkedin.com/in/saleh-hossam-a3a063256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></motion.a>
                </motion.div>
            </div>
            <div className="relative w-full md:w-1/2 h-fit md:h-[700px] flex flex-col md:flex-row gap-5 justify-center items-center before:h-[400px] before:w-[400px] before:rounded-full before:bg-first before:absolute before:top-0 before:-right-20 before:z-[-1] before:blur-[225px] ">
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{staggerChildren: 0.2}} variants={{hidden: {}, visible: {}}} className="flex md:flex-col flex-row gap-10 md:mb-20">
                    <motion.div transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, x: -400}, visible: {opacity: 1, x: 0}}}className="group relative">
                        <motion.img whileHover={{rotate: 10}} src={HTMLpng} alt=""   className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                        <span className="text-white font-bold absolute hidden duration-200 group-hover:block -top-10 md:top-1/2 md:-left-24 bg-last py-1 px-3 rounded-md  -translate-y-1/2">HTML</span>
                    </motion.div>
                    <motion.div transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, x: -400}, visible: {opacity: 1, x: 0}}}className="group relative">
                        <motion.img whileHover={{rotate: 10}} src={css} alt=""   className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                        <span className="text-white font-bold absolute hidden duration-200 group-hover:block -top-10 md:top-1/2 md:-left-20 bg-last py-1 px-3 rounded-md  -translate-y-1/2">CSS</span>
                    </motion.div>
                    <motion.div transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, x: -400}, visible: {opacity: 1, x: 0}}}className="group relative">
                        <motion.img whileHover={{rotate: 10}} src={javascript} alt=""   className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                        <span className="text-white font-bold absolute hidden duration-200 group-hover:block -top-10 md:top-1/2 md:-left-[70px] bg-last py-1 px-3 rounded-md  -translate-y-1/2">JS</span>
                    </motion.div>
                    <motion.div transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, x: -400}, visible: {opacity: 1, x: 0}}}className="group relative">
                        <motion.img whileHover={{rotate: 10}} src={tailwind} alt=""   className="w-14 h-[60px] border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                        <span className="text-white font-bold absolute hidden duration-200 group-hover:block -top-10 md:top-1/2 md:-left-[120px] bg-last py-1 px-3 rounded-md  -translate-y-1/2">Taliwind</span>
                    </motion.div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{staggerChildren: 0.2}} variants={{hidden: {}, visible: {}}} className="flex flex-col items-center gap-5">
                    <div className="w-[400px] h-[400px]">
                        <motion.img whileHover={{y: -10}} transition={{duration: .3}} src={avatar} alt="avatar" className="z-50 rounded-lg"/>
                    </div>
                    <div className="flex items-start gap-10">
                        <motion.div  transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, y: 400}, visible: {opacity: 1, y: 0}}} className="group relative">
                            <motion.img whileHover={{rotate: 10}} src={typescript} alt=""  className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                            <span className="text-white font-bold absolute hidden duration-200 group-hover:block top-20 left-1/2 bg-last py-1 px-3 rounded-md  -translate-x-1/2">Typescript</span>
                        </motion.div>
                        <motion.div  transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, y: 400}, visible: {opacity: 1, y: 0}}} className="group relative">
                            <motion.img whileHover={{rotate: 10}} src={react} alt=""  className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                            <span className="text-white font-bold absolute hidden duration-200 group-hover:block top-20 left-1/2 bg-last py-1 px-3 rounded-md  -translate-x-1/2">Reactjs</span>
                        </motion.div>
                        <motion.div  transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, y: 400}, visible: {opacity: 1, y: 0}}} className="group relative">
                            <motion.img whileHover={{rotate: 10}} src={framer} alt=""  className="w-14 border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                            <span className="text-white font-bold absolute hidden w-36 duration-200 group-hover:block top-20 left-1/2 bg-last py-1 px-3 rounded-md  -translate-x-1/2">Framer Motion</span>
                        </motion.div>
                        <motion.div  transition={{duration: 2, type: "spring"}} variants={{hidden: {opacity: 0, y: 400}, visible: {opacity: 1, y: 0}}} className="group relative">
                            <motion.img whileHover={{rotate: 10}} src={redux} alt=""  className="w-14 h-[60px] border-[2px] border-first rounded-lg p-2 cursor-pointer"/>
                            <span className="text-white font-bold absolute hidden duration-200 group-hover:block top-20 left-1/2 bg-last py-1 px-3 rounded-md  -translate-x-1/2">Redux</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Home