import React from "react";
import "../../../image/icomoon/style.css";
import BackgroundSlider from "./backgroundSlider.jsx";
import About from "./about_us.jsx";
import Work from "./work.jsx";
import Testimonials from "./testimonials.jsx";
import GetStarted from "./GetStarted.jsx";
import Blog from "./Blog.jsx";
import Footer from "../../footer/footer.jsx";
const home = () => {
  return (
    <div>
      <BackgroundSlider />
      <About />
      <div
        style={{
          backgroundColor: "#F3F3F3",
          clipPath:"polygon(33% 0, 100% 1%, 100% 99%, 64% 100%, 0 99%, 0 1%)",
        }}
        className="py-10"
      >
        <Work />
      </div>

      <Testimonials />
      <GetStarted />
      <Blog />
     
        <Footer />
      </div>
  );
};

export default home;
