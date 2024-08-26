import React from "react";
import BackgroundImage from "../../main/backgroundImage";
import Message from "./message.jsx";
import Info from "./info.jsx";
import GoogleMap from "./googleMap.jsx";
import Footer from "../../footer/footer.jsx";
const contact = () => {
  return (
    <div>
      <BackgroundImage title="contact" />
      <div className="flex flex-col justify-center text-center mt-32 mb-10">
        <span className="text-[#D8294E] text-sm font-medium uppercase">Contact us</span>
        <h2 className="text-[#333333] text-4xl mt-2 uppercase font-bold">Have a Project?</h2>
        <p className="text-[#A0A0B4] mt-5">Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia</p>
      </div>
      <div className="flex justify-center flex-col md:flex-row space-x-4">
        <div>
          <Message />
        </div>
        <div className="">
          <Info />
        </div>
      </div>
      <GoogleMap />
      <div
        style={{
          clipPath:
            "polygon(34% 0, 100% 5%, 100% 100%, 47% 100%, 0 100%, 0 6%)",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default contact;
