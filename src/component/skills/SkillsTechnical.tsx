import { ReactNode } from "react"
import {motion} from "framer-motion"

type PropsSkillsTechn = {
    title: string,
    icon: ReactNode,
    isActive: boolean,
    click: () => void
}


function SkillsTechnical({title, icon, isActive, click}: PropsSkillsTechn) {

  return (
    <motion.div 
    transition={{duration: 1}} variants={{hidden:{opacity: 0, y: 200}, visible:{opacity: 1, y: 0}}} 
    onClick={() => click()} className={`relative ${isActive ? "bg-first" : ""} border-[1px] border-first rounded-lg hover:bg-gradient-to-t hover:from-first hover:to-last hover:duration-300 cursor-pointer flex items-center justify-center py-7 text-white font-semibold`}>
        <h2>{title}</h2>
        <div className="absolute -top-5 -left-5 border-[1px] border-first py-2 px-2 rounded-lg text-2xl bg-main text-first">{icon}</div>
    </motion.div>
  )
}

export default SkillsTechnical