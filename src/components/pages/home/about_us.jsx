import React from "react";
import layers from "../../../image/pages/about/layers.png";
import Mobile_coding from "../../../image/pages/about/Mobile_coding.png";
import uxDesign from "../../../image/pages/about/ux-design.png";
import webProgramming from "../../../image/pages/about/web-programming.png";
import zoom from "../../../image/pages/about/zoom.png";
import About_img from "../../../image/pages/about/about.jpg";

const about_us = () => {
  return (
    <section className="bg-white pt-20 pb-40 flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl text-[#333333] font-bold text-center">
        ABOUT US
      </h2>

      <div className="flex flex-col lg:flex-row justify-center text-center mt-10 lg:mt-20 space-y-8 lg:space-y-0 lg:space-x-10">
        {[
          { img: uxDesign, title: "UI/UX Design" },
          { img: webProgramming, title: "Web Development" },
          { img: layers, title: "Product Design" },
          { img: Mobile_coding, title: "Mobile Apps" },
          { img: zoom, title: "SEO" },
        ].map((service, index) => (
          <article key={index} className="flex flex-col items-center">
            <img src={service.img} alt={`${service.title} icon`} width={70} />
            <span className="mt-4 text-sm md:text-base text-black font-semibold">
              {service.title}
            </span>
          </article>
        ))}
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 px-4">
        <div className="flex flex-col text-center lg:text-right">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333333]">
            Welcome to AVO A <br /> Personal Portfolio <br /> Web Agency
          </h2>
          <span className="text-sm md:text-base text-[#A3A3B7] mt-4 md:mt-5">
            Separated they live in Bookmarksgrove
            <br /> right at the coast of the Semantics, a large
            <br /> language ocean. A small river named
            <br /> Duden flows by their place and supplies it
            <br /> with the necessary regelialia. It is a
            <br /> paradisematic country, in which roasted
            <br /> parts of sentences fly into your mouth.
          </span>
        </div>
        <div
          className="w-56 h-60 md:w-72 md:h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${About_img})`,
          }}
        ></div>
        <div className="flex flex-col text-center lg:text-left">
          <span className="text-sm md:text-base text-[#A3A3B7]">
            Far far away, behind the word mountains,
            <br /> far from the countries Vokalia and
            <br /> Consonantia, there live the blind texts.
            <br /> Separated they live in Bookmarksgrove
            <br /> right at the coast of the Semantics, a large
            <br /> language ocean. A small river named
            <br /> Duden flows by their place and supplies it
            <br /> with the necessary regelialia. It is a
            <br /> paradisematic country, in which roasted
            <br /> parts of sentences fly into your mouth.
          </span>
          <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
            <button className="text-white px-4 py-2 text-sm bg-[#D1002C] rounded-sm">
              View all projects
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-10 px-4">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="flex w-full lg:w-72 space-x-3 "
            >
              <span className="text-4xl h-16 md:text-6xl text-[#D1002C] border-b-2 border-opacity-15">
                {num < 10 ? `0${num}` : num}
              </span>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-[#333333]">
                  Search Engine Optimization
                </h4>
                <p className="text-sm md:text-base text-[#A3A3B7]">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default about_us;
