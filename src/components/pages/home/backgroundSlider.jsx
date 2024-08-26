import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../../image/pages/header/bg_1.jpg";
import bg2 from "../../../image/pages/header/bg_2.jpg";
import Navbar from "../../header/navbar.jsx";

const BackgroundSlider = () => {
  const slides = [
    {
      url: bg1,
      heading: "WE CREATE MODERN & MINIMAL WEBSITE",
      text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      buttons: ["Start Project"],
      number: 400,
      info: "More Than a hundred successful projects",
      alignment: "left",
    },
    {
      url: bg2,
      heading: "WE CREATE MODERN & MINIMAL WEBSITE",
      text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      buttons: ["Explore Project"],
      number: 21,
      info: "Years of Experienced",
      alignment: "left",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState(
    slides.map((slide) => ({ number: 0, hasAnimated: false }))
  );
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const duration = 2900;
      const steps = 100;
      const targetNumber = slides[currentIndex].number;
      const increment = targetNumber / steps;

      if (!animatedNumbers[currentIndex].hasAnimated) {
        const interval = setInterval(() => {
          setAnimatedNumbers((prev) => {
            const updated = [...prev];
            const nextValue = updated[currentIndex].number + increment;

            if (nextValue >= targetNumber) {
              updated[currentIndex] = {
                number: targetNumber,
                hasAnimated: true,
              };
              clearInterval(interval);
              return updated;
            }
            updated[currentIndex] = {
              number: nextValue,
              hasAnimated: false,
            };
            return updated;
          });
        }, duration / steps);
      }
    }
  }, [isInView, currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    // Reset animation state for the selected slide
    setAnimatedNumbers((prev) => {
      const updated = [...prev];
      updated[slideIndex] = { ...updated[slideIndex], hasAnimated: false };
      return updated;
    });
  };

  const getAlignmentClasses = (alignment) => {
    return alignment === "left"
      ? "items-start text-left pl-4 md:pl-24"
      : "items-center text-center";
  };

  return (
    <div className="relative group overflow-hidden" ref={ref}>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          clipPath:
            "polygon(52% 0, 100% 0, 100% 89%, 63% 100%, 0 86%, 0 0)",
        }}
        className={`w-full h-[400px] md:h-[530px] bg-center bg-cover duration-500 flex flex-col justify-center items-center px-4 md:px-8 ${getAlignmentClasses(
          slides[currentIndex].alignment
        )}`}
      >
        <div className="flex flex-col-reverse lg:flex-row w-full space-x-0 lg:space-x-72 max-w-6xl mx-auto">
          <div className="lg:w-1/2 lg:text-left text-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-3">
              {slides[currentIndex].heading}
            </h1>
            <h2 className="text-white text-lg md:text-xl mb-2">
              {slides[currentIndex].text}
            </h2>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 justify-center lg:justify-start">
              {slides[currentIndex].buttons.map((buttonText, index) => (
                <button
                  key={index}
                  className="px-4 py-2 md:px-6 md:py-4 rounded-sm text-sm bg-[#D1002C] text-white"
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-36 pb-4 lg:pb-0 lg:text-right text-center text-white">
            <p className="border-r-4 border-[#D1002C] text-3xl md:text-4xl pr-2">
              {Math.round(animatedNumbers[currentIndex].number)}
            </p>
            <p className="text-[#5C5C5C] text-sm md:text-base">
              {slides[currentIndex].info}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 lg:ml-10 ml-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-20">
        <div className="flex space-x-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer h-2 w-2 md:h-3 md:w-3 bg-white rounded-full ${
                currentIndex === slideIndex ? "opacity-100" : "opacity-20"
              }`}
            ></div>
          ))}
        </div>
        <p className="hidden lg:block cursor-pointer bg-[#D1002C] w-12 px-4 py-3 justify-center items-center text-center rounded-full mt-[-80px]">
          <span className="icon-play"></span>
        </p>
      </div>
    </div>
  );
};

export default BackgroundSlider;
