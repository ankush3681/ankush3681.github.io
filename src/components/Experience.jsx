import React from "react";
import data from "../data/experience.json";

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
        Experience
      </h2>

      <ol className="relative border-l-2 border-blue-500">
        {data &&
          data?.map((el, idx) => (
            <li className="mb-10 ms-6 group" key={idx}>
              <span
                className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 border-2 ${
                  darkMode
                    ? "bg-blue-600 border-blue-300"
                    : "bg-blue-100 border-blue-500"
                }`}
              >
                <svg
                  className={`w-3 h-3 ${
                    darkMode ? "text-white" : "text-blue-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div
                className={`p-6 pl-10 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3 className="text-lg font-bold">{el?.org_name}</h3>
                <h4 className="text-sm font-medium text-blue-500 mb-1">
                  {el?.title}
                </h4>
                <time className="block text-xs text-gray-400 mb-2">
                  {el?.duration}
                </time>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {el?.description}
                </p>
              </div>
            </li>
          ))}
      </ol>
    </section>
  );
};

export default Experience;
