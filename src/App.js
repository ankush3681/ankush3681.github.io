import React, { useEffect, useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="dark:bg-gray-900 bg-white text-gray-900 dark:text-white transition-colors ">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mx-auto  px-4 md:px-8 lg:px-12">
        <div
          className="flex flex-col items-center gap-10 min-h-[600px] lg:flex-row lg:gap-16"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="w-full lg:w-7/12  h-full">
            <Header darkMode={darkMode} />
          </div>
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-transparent dark:bg-transparent max-w-sm w-full h-96">
              <img
                src="images/mine.png"
                alt="Profile"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 transform scale-105 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}

        <div
          className=""
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Experience darkMode={darkMode} />
        </div>
        <div>
          <Skills darkMode={darkMode} />
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Projects darkMode={darkMode} />
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Contact darkMode={darkMode} />
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
