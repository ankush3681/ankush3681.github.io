import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";

const Tools = () => {
  return (
    <>
      <section id="tools">
        <div className="main-text">
          <h2>
            <span>Known </span>Tools
          </h2>
          {/* <p style={{ marginTop: "10px" }}>What I am Expert In ?</p> */}
        </div>

        <div className="nav-link skills" id="skills-part">
          <div className="skills-card">
            <div className="skills-card-img">
              <FaReact
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Postman
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandJavascript
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Github
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <AiOutlineHtml5
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Npm
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandCss3
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Thunder Client
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <SiRedux
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              MongoDB Atlas
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <DiNodejs
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
             Canvas
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <SiTypescript
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              VS Code
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <TfiWrite
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#009cfe" }}>
              Gitbash
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
