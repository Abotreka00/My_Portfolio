import { useState } from "react"
import { PROJECTS } from "../data/data"
import { motion } from "framer-motion"

const ItemUl:string[] = ["All","ReactJs","HTML"]


function Projects() {
    const [isSelected, setIsSelcted] = useState(PROJECTS[0]) // filter project
    const [isSelectedList, setIsSelctedList] = useState("All") // active li
    console.log(isSelected);

    const hansleState = (index: number, item: string) => {
        setIsSelcted(PROJECTS[index])
        setIsSelctedList(item)
    }

  return (
    <>
    <div id="project" className="relative before:absolute before:top-0 before:left-0 before:w-[300px] before:h-[300px] before:bg-first before:rounded-full before:blur-[225px] after:absolute after:bottom-0 after:right-0 after:w-[300px] after:h-[300px] after:bg-first after:rounded-full after:blur-[225px] md:pt-[50px] w-full mt-[150px]">
        <div className="relative flex flex-col gap-5 px-[20px] md:px-[40px]">
            <h2 className="text-white text-3xl mb-5 pl-5">My Pro<span className="text-first">jects</span></h2>
            <div className="w-full">
                <ul className="flex gap-5 items-center justify-center">
                    {
                        ItemUl.map((item, index) => (
                                <li onClick={() => hansleState(index, item)} key={index} className={`${item == isSelectedList ? "bg-first" : ""} text-white cursor-pointer border-[1px] border-last rounded-lg py-2 px-5 hover:bg-gradient-to-r hover:from-first hover:to-last duration-300`}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-full">
                <div className="w-[90%] my-10 text-white grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 gap-y-14 mx-auto flex-1">
                        {isSelected.map((items , index) => (
                                <motion.div key={index} initial={{ scale: .5, opacity: 0 }} viewport={{once: true, amount: .5}} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: .4, ease: [0, 0.7, 0.2, 1.01], scale: {type:"spring", damping: 5, stiffness: 100, restDelta: 0.001}}} whileHover={{y: -20, transition:{duration: .3}}} className="hover:rounded-xl text-white relative group w-full rounded-t-lg border-b-2 border-first min-h-[200px]">
                                <img src={items.imgSrc} alt={items.title} className="hover:rounded-xl w-full h-full hover:rounded-t-lg duration-300 cursor-pointer"/>
                                <div className="hover:rounded-xl pointer-events-none flex-col cursor-pointer bg-first/70 rounded-xl w-full hidden group-hover:flex h-full absolute top-0 left-0">
                                    <h3 className="text-black font-semibold text-2xl text-center mt-14">{items.title}</h3>
                                    <a href={items.URL} className="bg-gradient-to-r from-first to-last py-1 px-3 rounded-lg w-fit mx-auto mt-5" >Show Demo</a>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    </div>
     </>
  )
}

export default Projects