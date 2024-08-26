import React from "react";
import BackgroundImage from "../../main/backgroundImage";
import About_US from "../home/about_us.jsx";
import GetStarted from "../home/GetStarted.jsx";
import Team from "./team.jsx";
import Testimonials from "../home/testimonials.jsx";
import Footer from "../../footer/footer.jsx";
const About = () => {
  return (
    <div>
      <BackgroundImage title="About Us" />
      <About_US />
      <GetStarted />
      <Team />
      <Testimonials />
      <div style={{
        clipPath: "polygon(34% 0, 100% 5%, 100% 100%, 47% 100%, 0 100%, 0 6%)",
      }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
