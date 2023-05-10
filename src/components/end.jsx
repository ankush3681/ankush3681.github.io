import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
const End = () => {
  return (
    <>
      <section className="end">
        <div className="last" style={{display : "flex"}}>
        <AiOutlineCopyrightCircle color="#009cfe"/>
          <p style={{backgroundColor:"black"}}>
            Created by Ankush Kumar 2023 All Rights Reserved.
          </p>
         
        </div>
        <div className="top">
          <a href="#home">
            <BsArrowUpSquare size={50} style={{ color: "white" }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default End;
