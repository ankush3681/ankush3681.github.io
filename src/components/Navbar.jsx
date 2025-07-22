import React, { useState, useEffect } from "react";
import "flowbite";
import * as Icon from "react-feather";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // useEffect(() => {
  //   if (!window.location.hash) {
  //     setActiveLink("#home");
  //   } else {
  //     setActiveLink(window.location.hash);
  //   }

  //   const handleHashChange = () => {
  //     setActiveLink(window.location.hash || "#home");
  //   };

  //   window.addEventListener("hashchange", handleHashChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);
  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActiveLink(hash);

    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSetActiveLink = (hash) => {
    window.location.hash = hash;
    setActiveLink(hash);
    if (isOpen) toggleMenu();
  };

  const getLinkClass = (hash) => {
    const baseClasses =
      "block py-2 px-3 rounded md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500";
    const activeClasses = "text-[#0072bb] md:bg-transparent bg-gray-200";
    const inactiveClasses =
      "text-gray-900 hover:bg-gray-100 hover:text-[#005082] md:hover:bg-transparent md:hover:text-[#0072bb]";

    return `${baseClasses} ${
      activeLink === hash ? activeClasses : inactiveClasses
    }`;
  };
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3">
          {darkMode ? (
            <img
              src={"images/logo_dark.png"}
              alt="Flowbite Logo"
              className="w-16"
            />
          ) : (
            <img src={"images/logo.png"} alt="Flowbite Logo" className="w-16" />
          )}
        </a>

        {/* Right-side actions */}
        <div className="flex items-center gap-3 md:order-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 rounded hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none"
            title="Toggle dark mode"
          >
            {darkMode ? <Icon.Moon size={18} /> : <Icon.Sun size={18} />}
          </button>

          <a
            href="assets\Ankush_Kumar_Resume.pdf"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 text-sm"
            download
            smooth="true"
          >
            Resume
            <Icon.Download size={16} className="animate-bounce" />
          </a>

          {/* Hamburger icon for mobile */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {["home", "experience", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => handleSetActiveLink(`#${section}`)}
                    className={getLinkClass(`#${section}`)}
                    aria-current={
                      activeLink === `#${section}` ? "page" : undefined
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
