import React, { useEffect } from "react";
import "./Skills.css";
import skillData from "../../data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";
import toolsData from "../../data/tools.json";

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const firstRowSkills = skillData.slice(0, 6);
  const secondRowSkills = skillData.slice(6, 11);
  const thirdRowSkills = skillData.slice(11 , 15);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      id="skills"
      className={`skills-section text-6xl py-36 w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="skills-inner-container">
        <h2 className="text-center my-10">Skills</h2>

        <div className="skills-container first-row">
          {firstRowSkills.map((item) => (
            <div
              className={`tools rounded-lg border-2 shadow-[3px_3px_5px_2px] ${
                darkMode
                  ? "border-[#81d4fa] shadow-[#81d4fa]"
                  : "border-[#59b0bb] shadow-[#59b0bb]"
              }`}
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>

        <div className="skills-container second-row">
          {secondRowSkills.map((item) => (
            <div
              className={`tools rounded-lg border-2 shadow-[3px_3px_5px_2px] ${
                darkMode
                  ? "border-[#81d4fa] shadow-[#81d4fa]"
                  : "border-[#59b0bb] shadow-[#59b0bb]"
              }`}
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>

        <div className="skills-container third-row">
          {thirdRowSkills.map((item) => (
            <div
              className={`tools rounded-lg border-2 shadow-[3px_3px_5px_2px] ${
                darkMode
                  ? "border-[#81d4fa] shadow-[#81d4fa]"
                  : "border-[#59b0bb] shadow-[#59b0bb]"
              }`}
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="skills-inner-container">
        <h2 className="text-center my-10">Tools</h2>

        <div className="skills-container first-row">
          {toolsData.map((item) => (
            <div
              className={`tools rounded-lg border-2 shadow-[3px_3px_5px_2px] ${
                darkMode
                  ? "border-[#81d4fa] shadow-[#81d4fa]"
                  : "border-[#59b0bb] shadow-[#59b0bb]"
              }`}
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
