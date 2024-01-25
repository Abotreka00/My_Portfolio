import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { WORKEXPERIENCE } from "../data/data"
import Slider from "react-slick";
import { useRef } from "react";

function Experience() {
    const sliderRef = useRef<Slider>(null)
    const handleNext = () => {
        if (sliderRef.current !== null) {
            sliderRef.current.slickNext();
        }
    };
    
    const handlePrev = () => {
        if (sliderRef.current !== null) {
            sliderRef.current.slickPrev();
        }
    };
    const settings = {
        dots: false,
        speed: 500,
        Infinity: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }}]
    };

return (
    <div id="Work" className="relative after:absolute after:bottom-0 after:right-0 after:w-[300px] after:h-[300px] after:bg-first after:rounded-full after:blur-[225px] md:pt-[140px]">
        <h2 className="text-white text-3xl mb-10 w-[90%] z-[200] mx-auto">Work Expe<span className="text-first">rience</span></h2>
        <div className="relative text-white md:pl-10 md:pr-[60px] px-10">
            <div onClick={() => handleNext()} className="text-2xl p-2 hover:text-white border-last border-[1px] absolute top-1/2 rounded-lg text-last hover:bg-first duration-300 cursor-pointer -translate-y-1/2 z-50 bg-main md:left-2 left-5"><BiChevronLeft /></div>
            <div onClick={() => handlePrev()} className="text-2xl p-2 hover:text-white border-last border-[1px] absolute top-1/2 rounded-lg text-last hover:bg-first duration-300 cursor-pointer -translate-y-1/2 z-50 bg-main md:right-2 right-5"><BiChevronRight /></div>
            <Slider ref={sliderRef} {...settings}>
            {
                WORKEXPERIENCE.map((work, index) => (
                    <>
                    <div key={index} className="border-2 md:ml-5 border-first rounded-lg py-5 px-7 min-h-[590px] md:min-h-[510px]">
                        <h2 className="text-[18px] md:text-2xl font-semibold">{work.title}</h2>
                        <p className="bg-bordercolor py-1 my-5 px-2 w-fit rounded-lg text-[12px] md:text-1xl">{work.date}</p>
                        <ul>
                            {work.paragaraph.map((paraga, index) => (<><li key={index} className="relative mb-3 ml-7 before:w-2 before:h-2 before:bg-first before:absolute before:top-1/2 before:-left-7 before:-translate-y-1/2 before:rounded-full opacity-80 text-[14px] md:text-1xl">{paraga}</li></>))}
                        </ul>
                    </div>
                    </>
                ))
            }
            </Slider>
        </div>
    </div>
)
}

export default Experience