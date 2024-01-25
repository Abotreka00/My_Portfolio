import { motion } from "framer-motion"
import { GrGithub } from "react-icons/gr"
import { MdEmail } from "react-icons/md"

function Contact() {
    
  return (
    <div id="Contact" className="my-[100px] md:min-h-[650px]">
        <h2 className="text-white text-3xl mb-10 w-[90%] z-[200] mx-auto">Cont<span className="text-first">act Me</span></h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 items-center px-5 md:px-10">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: -100}, visible:{opacity: 1, x: 0}}}  className="text-white py-5 text-center font-semibold border-2 border-bordercolor bg-background rounded-lg">
                    <MdEmail className="text-2xl md:text-5xl bg-last mx-auto mb-5 p-1 rounded-md"/>
                    <div>saleh.hossam799@gmail.com</div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4, type: "spring", stiffness: 100, delay: .5}} variants={{hidden: {opacity: 0, x: -100}, visible:{opacity: 1, x: 0}}}  className="text-white py-5 text-center font-semibold border-2 border-bordercolor bg-background rounded-lg">
                    <GrGithub className="text-2xl md:text-5xl bg-last mx-auto mb-5 p-1 rounded-md"/>
                    <div>https://github.com/Abotreka00</div>
                </motion.div>
            </div>
            <div className="w-full md:w-1/2">
                <form className=" flex flex-col gap-3">
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  className="flex gap-5">
                        <motion.input initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4,delay: 0.2, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  required className="w-full py-[10px] pl-5 rounded-md bg-background border-2 border-bordercolor focus:border-first text-white focus:outline-none" type="text" name="First" placeholder="First Name" />
                        <motion.input initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4,delay: 0.5, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  required className="w-full py-[10px] pl-5 rounded-md bg-background border-2 border-bordercolor focus:border-first text-white focus:outline-none" type="text" name="Last" placeholder="Last Name" />
                    </motion.div>
                    <motion.input initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4,delay: 0.8, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  required className=" py-[10px] pl-5 rounded-md bg-background border-2 border-bordercolor focus:border-first text-white focus:outline-none" type="email" name="email" placeholder="Email" />
                    <motion.textarea initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4,delay: 1.1, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  className="py-[10px] pl-5 rounded-md bg-background border-2 border-bordercolor focus:border-first text-white resize-none min-h-[150px] focus:outline-none" name="Message" placeholder="Message"></motion.textarea>
                    <motion.input initial="hidden" whileInView="visible" viewport={{once: true, amount: .5}} transition={{duration: .4,delay: 1.4, type: "spring", stiffness: 100}} variants={{hidden: {opacity: 0, x: 100}, visible:{opacity: 1, x: 0}}}  className="py-3 bg-gradient-to-r from-first to-last rounded-lg text-white font-semibold hover:opacity-80 duration-300 cursor-pointer" type="submit" value='S E N D' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact