import { motion } from "framer-motion"


type propsInfo = {
  title: string,
  skills: {skillsTitle: string, progress: string}[]
}


function SkillsInfo({title, skills}: propsInfo) {
  return (
    <div className="relative bg-black after:absolute after:bottom-0 after:right-0 after:w-[300px] after:h-[300px] after:bg-first after:rounded-full after:blur-[225px] border-[2px] border-bordercolor pt-5 pb-5 rounded-lg text-2xl">
      <div className="text-bordercolor border-b-2 border-bordercolor pb-5 pl-5">{title}</div>
      <div className="text-white text-[16px] mt-5">
        {
          skills.map(({skillsTitle, progress}) => (
            <>
              <div className="mb-5 px-5 z-50">
                <div className="flex justify-between mb-2">
                  <span>{skillsTitle}</span>
                  <span className="text-bordercolor">{progress}</span>
                </div>
                <div className="relative w-full h-[6px] rounded-lg bg-[#382e68]">
                  <motion.span whileInView={{width: progress}} transition={{duration: 2}} className="bg-gradient-to-l from-[#aa94fe] to-[#7d60e6] rounded-lg h-[2px] absolute top-0 left-0"></motion.span>
                </div>
            </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsInfo