import React from 'react';
import image from "../../../image/pages/header/bg_1.jpg";

const GetStarted = () => {
  return (
    <div className='flex justify-center p-4 pb-40 '>
      <div className="relative flex items-center w-full max-w-3xl   ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="relative z-10 p-6 md:p-8 lg:p-12 w-full max-w-lg">
          <h6 className='text-sm text-[#C0042C] mb-2'>Get Started</h6>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#FAFAFA] font-bold mb-4">
            Fill in the brief and get the project estimate
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-[#9B9BAF] mb-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="bg-[#D1002C] text-white py-2 px-4 rounded-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
