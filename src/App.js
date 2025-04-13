import React, { useEffect } from "react";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components//Projects";
import Skills from "./components/skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 px-4 md:px-8 lg:px-12">
        <div
          className="flex flex-col items-center gap-10 min-h-96 lg:flex-row lg:gap-16"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="w-full lg:w-7/12">
            <Header />
          </div>
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={"images/mine.jpg"}
              alt="Profile"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl"
            />
          </div>
        </div>
        <div
          className="mt-12 lg:mt-20"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Experience />
        </div>
        <div>
          <Skills />
        </div>
        <div
          className="mt-12 lg:mt-20"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Projects />
        </div>
        <div
          className="mt-12 lg:mt-20"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
