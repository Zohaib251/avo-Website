import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-28 pb-14 px-4 md:px-8 lg:px-16"
    >
      <div className="flex flex-col md:flex-row md:justify-center space-x-0 lg:space-x-10">
        {/* AVO */}
        <div className="w-full md:w-40 text-left mb-12 md:mb-0">
          <h3 className="font-semibold text-xl mb-9">avo</h3>
          <p className="text-[#B3B3B3]">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <div className="flex space-x-5 mt-12 md:justify-center justify-start">
            <span className="icon-twitter bg-[#1A1A1A] p-3 rounded-full cursor-pointer text-[#878787]"></span>
            <span className="icon-facebook bg-[#1A1A1A] p-3 rounded-full cursor-pointer text-[#878787]"></span>
            <span className="icon-instagram bg-[#1A1A1A] p-3 rounded-full cursor-pointer text-[#878787]"></span>
          </div>
        </div>

        {/* Community */}
        <div className="w-full md:w-36 text-left mb-12 md:mb-0">
          <h3 className="font-semibold text-xl mb-9">Community</h3>
          <div className="flex flex-col">
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Project</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Team</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Reviews</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">FAQs</span>
          </div>
        </div>

        {/* About Us */}
        <div className="w-full md:w-36 text-left mb-12 md:mb-0">
          <h3 className="font-semibold text-xl mb-9">About Us</h3>
          <div className="flex flex-col ">
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Our Story</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Meet the Team</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Careers</span>
          </div>
        </div>

        {/* Company */}
        <div className="w-full md:w-36 text-left mb-12 md:mb-0">
          <h3 className="font-semibold text-xl mb-9">Company</h3>
          <div className="flex flex-col ">
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">About Us</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Press</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Contact</span>
            <span className="icon-arrow_forward_ios text-[#7D7D7D] text-lg">Careers</span>
          </div>
        </div>

        {/* Have a Questions? */}
        <div className="w-full md:w-48 text-left">
          <h3 className="font-semibold text-xl mb-9">Have a Question?</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <span className="icon-map text-[#7D7D7D] text-2xl mr-3"></span>
              <p className="text-[#7D7D7D]">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex items-center">
              <span className="icon-phone1 text-[#7D7D7D] text-lg mr-4"></span>
              <p className="text-[#7D7D7D]">+2 392 3929 210</p>
            </div>
            <div className="flex items-center">
              <span className="icon-mail text-[#7D7D7D] text-lg mr-4"></span>
              <p className="text-[#7D7D7D]">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="my-16 text-[#AFAFAF] text-sm text-center">
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <span className="icon-heart"></span> by{" "}
        <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer" className="text-[#D1002C]">
          Colorlib
        </a>
      </p>
    </div>
  );
};

export default Footer;
