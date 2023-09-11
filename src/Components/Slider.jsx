import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {

    
            const slides = [
                {  url: 'https://cdn.pixabay.com/photo/2017/03/27/13/33/beach-2178747_640.jpg' },
                {  url: 'https://cdn.pixabay.com/photo/2020/03/30/17/15/funes-4984899_640.jpg' },
                {  url: 'https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_640.jpg' }
            ];

            const [currentIndex, setCurrentIndex] = useState(0);

            const prevSlide = () => {
                const isFirstSlide = currentIndex === 0;
                const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
                setCurrentIndex(newIndex); 
            };

            const nextSlide = () => {
                const islastSlide = currentIndex === slides.length -1;
                const newIndex = islastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            };

            const goToSlide = (slideIndex) => {
                setCurrentIndex(slideIndex)
            }
    
    return ( 
        <div name="amen" className="max-w-5xl m-auto h-[400px] px-6 relative pb-2 ">  
            
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="group w-full h-full rounded-2xl bg-cover bg-center duration-500">

                        {/* Left Navigation arrow */}
                <div className="group-hover:opacity-70 group-hover:bg-transparent group-hover:bg-slate-700 group-hover:rounded-full absolute top-2/4 left-5 text-white mx-2 opacity-60 cursor-pointer"> 
                <BsChevronCompactLeft  onClick={prevSlide} size={50} /> </div>

                        {/* Right Navigation arrow */}
                <div className="group-hover:opacity-70 group-hover:bg-transparent group-hover:bg-slate-700 group-hover:rounded-full absolute top-2/4 right-5 text-white mx-2 opacity-60 cursor-pointer"> 
                <BsChevronCompactRight  onClick={nextSlide} size={50} /> </div>
            </div>

                <div className=" flex top-4 justify-center py-2">
                    {slides.map((slides, slideIndex) => {
                       <div
                        className="cursor-pointer text-2xl" key={slideIndex}
                        onClick={() => goToSlide(slideIndex)} > 
                        <RxDotFilled />
                        </div>
                    })}
                </div>

             </div>
    
     );
}
 
export default Slider;