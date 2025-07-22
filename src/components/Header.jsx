import React from "react";

const Header = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
      id="home"
    >
      <div className="max-w-3xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Ankush Kumar
        </h1>
        <h2
          className={`mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Full Stack Developer
        </h2>
        <p
          className={`mt-6 text-lg md:text-xl font-normal leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I am a Full Stack Developer who enjoys solving problems and working on
          all parts of a project. I adapt well to new environments and am always
          eager to learn new skills. I look forward to contributing to
          meaningful projects and working with great teams.
        </p>
      </div>
    </section>
  );
};

export default Header;
