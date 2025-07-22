import React from "react";
import data from "../data/projects.json";

const Projects = ({ darkMode }) => {
  return (
    <div
      id="projects"
      className={`w-full py-44 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-black"
      }`}
    >
      <h2 className="text-center text-4xl lg:text-6xl font-extrabold mb-12 tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-screen-xl mx-auto">
        {data.map((el) => (
          <div
            className="relative backdrop-blur-lg bg-white/30 dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
            key={el.id}
          >
            <img
              className="w-full h-48 object-cover rounded-t-3xl"
              src={el.image}
              alt={el.title}
            />

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {el.title}
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {el.description}
                </p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={el.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black rounded-full shadow-md transition-all w-1/2"
                >
                  <span>Code</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href={el.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-md transition-all w-1/2"
                >
                  <span>Demo</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
