import React from "react";
import CV from "../Files/CV.pdf";

const Home = () => {
  return (
    
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello ,</span>
            <span className="two">MY NAME IS</span>
          </div>
          <h1 id="user-detail-name"><span style={{ backgroundColor: "transparent" }}>Ankush</span> Kumar</h1>
          <h3 id="user-detail-skill">
            I am a MERN <span style={{ backgroundColor: "transparent" }}>Developer.</span>
          </h3>

          <br />
          
        </div>
       </section>
    
  );
};

export default Home;


