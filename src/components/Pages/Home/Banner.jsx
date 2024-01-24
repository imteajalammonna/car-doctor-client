import { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import banner1 from "../../../assets/images/banner/5.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/1.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"
import Button from '../../Button';
import ButtonFill from '../../ButtonFill';


const Banner = ({ autoPlayInterval }) => {
    const slides = [
        {
            imgSrc: banner1, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
        {
            imgSrc: banner2, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
        {
            imgSrc: banner3, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
        {
            imgSrc: banner4, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
        {
            imgSrc: banner5, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
        {
            imgSrc: banner6, textP: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            text: "Affordable Price For Car Servicing"
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    }; useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide, autoPlayInterval]);

    return (
        <div className="relative overflow-hidden rounded-2xl w-full h-[26vh] md:h-[70vh] mx-auto">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="w-full h-5/6" />
                        <div className="absolute top-0 bottom-0 right-0 text-white space-y-14 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
                            <h1 className={`text-[18px] md:text-7xl font-bold w-5/12 pl-40 mt-36 `} >{slide.text}</h1>
                            <p className="pl-40 capitalize w-5/12">{slide.textP}</p>
                            <div className="flex space-x-5 pl-40">
                                <ButtonFill name="Discover More" className="mr-5"></ButtonFill>
                                <Button name="Latest Project" border="border-white"></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[80%] right-20">
                <button className="arrow" onClick={prevSlide}><MdArrowBackIosNew></MdArrowBackIosNew></button>
                <button className="arrow" onClick={nextSlide}><MdArrowForwardIos></MdArrowForwardIos></button>
            </div>
        </div>
    );
};



export default Banner;