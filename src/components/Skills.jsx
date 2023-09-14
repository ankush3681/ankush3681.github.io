import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3,TbApi,TbBrandMatrix } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { BsFillBootstrapFill,BsGit  } from "react-icons/bs";
import { SiChakraui } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skill-main-text">
          <h2>
          My <span>Skills</span>
          </h2>
        </div>

        <div className="nav-link skills" id="skills-part">
          <div className="skills-card">
            <div className="skills-card-img">
              <AiOutlineHtml5
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              HTML
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandCss3
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              CSS
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandJavascript
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              JavaScript 
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <FaReact
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              React 
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <SiRedux
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Redux
            </h3>
          </div>
          {/* <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandMatrix
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Material UI
            </h3>
          </div> */}
          <div className="skills-card">
            <div className="skills-card-img">
              <SiChakraui
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Chakra UI
            </h3>
          </div>
          {/* <div className="skills-card">
            <div className="skills-card-img">
              <BsFillBootstrapFill
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Bootstrap
            </h3>
          </div> */}

          {/* <div className="skills-card">
            <div className="skills-card-img">
              <BsGit
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Git
            </h3>
          </div> */}
          {/* <div className="skills-card">
            <div className="skills-card-img">
              <TbApi
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Rest APIs
            </h3>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Skills;
