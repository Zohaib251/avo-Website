import React from "react";
import TeamCard from "./teamCard";
import team1 from "../../../image/pages/about/team-1.jpg";
import team2 from "../../../image/pages/about/team-2.jpg";
import team3 from "../../../image/pages/about/team-3.jpg";
import team4 from "../../../image/pages/about/team-4.jpg";
import team5 from "../../../image/pages/about/team-5.jpg";
import team6 from "../../../image/pages/about/team-6.jpg";
import team7 from "../../../image/pages/about/team-7.jpg";
import team8 from "../../../image/pages/about/team-8.jpg";
const team = () => {
  return (
    <div className="justify-center text-white text-center py-40 bg-[#F3F3F3]"
    style={{
      clipPath: "polygon(33% 0, 100% 2%, 100% 98%, 64% 100%, 0 98%, 0 2%)",
    }}>
      <h2 className="text-3xl md:text-4xl text-[#333333] uppercase font-bold text-center">
        Expert Team
      </h2>
      <div className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-7">
        <TeamCard image={team1} name="John Wilson" role="Web Designer" />
        <TeamCard image={team2} name="Robert Wills" role="Web Developer" />
        <TeamCard
          image={team3}
          name="Mike Smith"
          role="Graphic Designer"
        />
        <TeamCard
          image={team4}
          name="Adrian Henderson"
          role="System Analyst"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-7">
        <TeamCard image={team5} name="John Wilson" role="Web Programmer" />
        <TeamCard image={team6} name="Robert Wills" role="Web Designer" />
        <TeamCard
          image={team7}
          name="Mike Smith"
          role="Graphic Designer"
        />
        <TeamCard
          image={team8}
          name="Adrian Henderson"
          role="SEO"
        />
      </div>
    </div>
  );
};
export default team;
