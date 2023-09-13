import React from "react";
import { useState } from "react";
import CV from "../Files/Ankush-Kumar-Resume.pdf";
import DropDown from "./Dropdown";
import {AiOutlineHome} from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          {" "}
          Ankush <span> Kumar </span>
        </a>
        <ul className="navlist">
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveNav("#about")}> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              {" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}>
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              {" "}
              Contact
            </a>
          </li>
          <li>
            <button id="resume-button-1">
              <a
                href={CV}
                target="_blank"
                download
                id="resume-link-1"
                className="nav-link resume"
                onClick={()=>window.open("https://drive.google.com/file/d/1xsWeIoOuzGnCPDy94uHUa4PrMQKtj7mv/view?usp=drive_link")}
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
        <div id="menu-icon">
          <DropDown
            options={[
              <a href="#home"><AiOutlineHome/></a>,
              <a href="#about">About</a>,
              <a href="#skills">Skills</a>,
              <a href="#projects">Projects</a>,
              <a href="#githubs">GitHub</a>,
              <a href="#contact">Contact</a>,
            ]}
            onSelect={handleOptionSelect}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
