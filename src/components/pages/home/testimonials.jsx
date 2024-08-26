import React, { useState } from "react";
import Person_1 from "../../../image/pages/home/testimonials/person_2.jpg";
import Person_2 from "../../../image/pages/home/testimonials/person_1.jpg";
import Person_3 from "../../../image/pages/home/testimonials/person_3.jpg";

const slides = [
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_1,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_2,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_3,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_1,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_2,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_3,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: Person_1,
    name: "Roger Scott",
    location: "Marketing Manager",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="bg-white pt-28 pb-10 flex flex-col items-center px-4">
      <h2 className="text-4xl md:text-4xl text-[#333333] font-bold text-center">
        Clients Say About Us?
      </h2>
      <div className="flex items-center mt-10 w-full md:w-5/6 lg:w-[82%]">
        <div
          className="flex overflow-hidden w-full"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)`, display: 'flex' }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[30%] md:w-[30%] p-4 flex-none"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="flex flex-col bg-[#F3F3F3] p-6">
                  <span className="icon-quote-left text-[#D1002C] mt-[-40px] text-3xl md:text-3xl mr-2"></span>
                  <div className="text-sm text-[#BABAC8] md:text-base mb-4">
                    {slide.text}
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                    <div>
                      <span className="text-lg md:text-xl">{slide.name}</span>
                      <p className="text-sm md:text-base text-[#B3B3B3] font-normal">
                        {slide.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.slice(0, slides.length - 2).map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-[#D1002C]" : "bg-[#E5E5E5]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
