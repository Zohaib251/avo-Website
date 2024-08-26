import React from "react";
import Work_7 from "../../../image/pages/home/OurWork/work-7.jpg";
import Work_8 from "../../../image/pages/home/OurWork/work-8.jpg";
import Work_9 from "../../../image/pages/home/OurWork/work-9.jpg";
import Person_2 from "../../../image/pages/home/testimonials/person_2.jpg";

const additionalWork = () => {
  return (
    <div className="justify-center text-center mb-20 mt-[-70px]">
      {/* Work 7 */}
      <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-14">
        <div className="w-full flex justify-center md:w-auto">
          <img src={Work_7} alt="Keyboard" className="w-full md:w-96" />
        </div>
        <div className="text-left py-5 md:py-0 px-4 md:px-0">
          <h6 className="text-sm text-[#2D2D2D]">Illustration</h6>
          <h2 className="text-4xl text-[#000000] mb-4 mt-2">Keyboard</h2>
          <p className="text-base text-[#AAAABC] mb-6">
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
              <img src={Person_2} alt="Jamie Jonson" />
            </div>
            <div>
              <div className="text-center md:text-left">
                <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
                <span className="text-[#A6A6B9] text-sm">avo.com</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Work 8 */}
      <div className="flex flex-col md:flex-row-reverse justify-center md:gap-20 items-center gap-0">
        <div className="w-full md:w-auto flex justify-center">
          <img src={Work_8} alt="Spiral" className="w-full md:w-96" />
        </div>
        <div className="text-left md:text-right my-5 ml-4 lg:my-0 md:ml-10">
          <h6 className="text-sm text-[#2D2D2D]">Web Development</h6>
          <h2 className="text-4xl text-[#000000] mb-4 mt-2">Spiral</h2>
          <p className="text-base text-[#AAAABC] mb-6">
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={Person_2} alt="Jamie Jonson" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
              <span className="text-[#A6A6B9] text-sm">avo.com</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6">
            <button className="mt-6 bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Work 9 */}
      <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-14">
        <div className="w-full flex justify-center md:w-auto">
          <img src={Work_9} alt="Keyboard" className="w-full md:w-96" />
        </div>
        <div className="text-left py-5 md:py-0 px-4 md:px-0">
          <h6 className="text-sm text-[#2D2D2D]">Illustration</h6>
          <h2 className="text-4xl text-[#000000] mb-4 mt-2">Keyboard</h2>
          <p className="text-base text-[#AAAABC] mb-6">
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
              <img src={Person_2} alt="Sam Smith" />
            </div>
            <div>
              <div className="text-center md:text-left">
                <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
                <span className="text-[#A6A6B9] text-sm">avo.com</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default additionalWork;
