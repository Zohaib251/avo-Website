import React from "react";
import Work_1 from "../../../image/pages/home/OurWork/work-1.jpg";
import Work_2 from "../../../image/pages/home/OurWork/work-2.jpg";
import Work_3 from "../../../image/pages/home/OurWork/work-3.jpg";
import Work_4 from "../../../image/pages/home/OurWork/work-4.jpg";
import Work_5 from "../../../image/pages/home/OurWork/work-5.jpg";
import Work_6 from "../../../image/pages/home/OurWork/work-6.jpg";
import Person_1 from "../../../image/pages/home/testimonials/person_1.jpg";
import Person_2 from "../../../image/pages/home/testimonials/person_2.jpg";
import Person_3 from "../../../image/pages/home/testimonials/person_3.jpg";

const Work = () => {
  return (
    <div className="justify-center text-center  pt-24">
      <h2 className="text-3xl uppercase md:text-4xl text-[#333333] font-bold text-center">
        Our Works
      </h2>
      <div className="py-16">
        {/* Work 1 */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-14">
          <div className="w-full flex justify-center md:w-auto">
            <img src={Work_1} alt="Cassette Tape" className="w-full md:w-96" />
          </div>
          <div className="text-left py-5 md:py-0 px-4 md:px-0">
            <h6 className="text-sm text-[#2D2D2D] mb-2">Web Design</h6>
            <h2 className="text-3xl md:text-4xl text-[#000000] mb-4">
              Cassette Tape
            </h2>
            <p className="text-base text-[#AAAABC] mb-6">
              Far far away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
                <img
                  src={Person_1}
                  alt="Jamie Jonson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
                <span className="text-[#A6A6B9] text-sm">avo.com</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="mt-6 bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        {/* Work 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-center md:gap-20 items-center gap-0 ">
          <div className="w-full md:w-auto flex justify-center">
            <img src={Work_2} alt="Miniwall Clock" className="w-full md:w-96" />
          </div>
          <div className="text-left md:text-right my-5 ml-4 lg:my-0 md:ml-10">
            <h6 className="text-sm text-[#2D2D2D]">Application</h6>
            <h2 className="text-3xl lg:text-4xl text-[#000000] mb-4 mt-2">
              Miniwall Clock
            </h2>
            <p className="text-base text-[#AAAABC] mb-6">
              Far far away, behind the word mountains, far from the countries{" "}
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={Person_2}
                  alt="Jamie Jonson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
                <span className="text-[#A6A6B9] text-sm">avo.com</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6">
              <button className="bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        {/* Work 3 */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-14">
          <div className="w-full flex justify-center md:w-auto">
            <img
              src={Work_3}
              alt="Avo Portfolio Agency"
              className="w-full md:w-96"
            />
          </div>
          <div className="text-left py-5 md:py-0 px-4 md:px-0">
            <h6 className="text-sm text-[#2D2D2D]">UI/UX Design</h6>
            <h2 className="text-4xl text-[#000000] mb-4 mt-2">
              Avo Portfolio Agency
            </h2>
            <p className="text-base text-[#AAAABC] mb-6">
              Far far away, behind the word mountains, far from the countries{" "}
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
                <img src={Person_3} alt="Sam Smith" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-base text-[#000000]">Jamie Jonson</h3>
                <span className="text-[#A6A6B9] text-sm">avo.com</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="mt-6 bg-transparent uppercase text-black border-2 py-1 px-4 rounded-md">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Work 4 */}
        <div className="flex flex-col md:flex-row-reverse justify-center md:gap-20 items-center gap-0">
          <div className="w-full md:w-auto flex justify-center">
            <img src={Work_4} alt="Hand Writing" className="w-full md:w-96" />
          </div>
          <div className="text-left md:text-right my-5 ml-4 lg:my-0 md:ml-10">
            <h6 className="text-sm text-[#2D2D2D]">Web Development</h6>
            <h2 className="text-4xl text-[#000000] mb-4 mt-2">Hand Writing</h2>
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

        {/* Work 5 */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-14">
          <div className="w-full flex justify-center md:w-auto">
            <img src={Work_5} alt="Keyboard" className="w-full md:w-96" />
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

        {/* Work 6 */}
        <div className="flex flex-col md:flex-row-reverse justify-center md:gap-20 items-center gap-0">
          <div className="w-full md:w-auto flex justify-center">
            <img src={Work_6} alt="Audio Player" className="w-full md:w-96" />
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
                <img src={Person_2} alt="Sam Smith" />
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
      </div>
    </div>
  );
};

export default Work;
