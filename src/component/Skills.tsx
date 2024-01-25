import { useState } from "react"
import { SKILLS } from "../data/data"
import { motion } from "framer-motion"
import SkillsInfo from "./skills/SkillsInfo"
import SkillsTechnical from "./skills/SkillsTechnical"

type propsData = {
    title: string; icon: JSX.Element; skills: { skillsTitle: string; progress: string }[]
}

function Skills() {
    const [isselected, setisselected] = useState(SKILLS[0])
    console.log(isselected);
    
    const handleSelectskill = (data: propsData) => {
        setisselected(data)
    }

  return (
    <div id="Skills" className="relative mt-[100px] md:mt-[150px] h-[700px] mb-[400px] md:mb-[100px] md:pt-[200px]">
        <h2 className="text-white text-3xl mb-10 w-[90%] z-[200] mx-auto">Technical Profi<span className="text-first">ciency</span></h2>
        <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-48 md:gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{staggerChildren: .7}} variants={{hidden:{}, visible:{}}}  className="w-full md:w-1/2 max-h-[315px] py-5 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 before:w-[400px] before:h-[400px] before:bg-first before:absolute before:top-0 before:left-0 before:rounded-full before:z-[-1] before:blur-[225px]">
                {
                    SKILLS.map((skillsAll) => (
                        <SkillsTechnical
                            key={skillsAll.title}
                            title={skillsAll.title}
                            icon={skillsAll.icon}
                            isActive={skillsAll.title === isselected.title}
                            click={() => handleSelectskill(skillsAll)} />
                    ))
                }
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 1,delay: 1, type: "spring", stiffness:100}} variants={{hidden:{opacity: 0,x: 100}, visible:{opacity: 1,x: 0}}} className="w-full md:w-1/2">
                <SkillsInfo title={isselected.title} skills={isselected.skills}/>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills