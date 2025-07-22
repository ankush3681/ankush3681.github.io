import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${darkMode ? "bg-gray-900" : "bg-white"} border-t mt-4`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className={`text-md lg:text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Designed by Ankush Kumar
        </span>

        <div className="flex space-x-6 rtl:space-x-reverse">
          {/* GitHub */}
          <a
            href="https://github.com/ankush3681"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub account"
            className="hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <svg
              className={`${darkMode ? "text-white" : "text-black"} w-5 h-5`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.728-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.728.083-.728 1.205.084 1.836 1.236 1.836 1.236 1.07 1.835 2.807 1.305 3.49.997.11-.776.418-1.305.762-1.605-2.666-.3-5.466-1.34-5.466-5.964 0-1.318.47-2.393 1.235-3.236-.123-.302-.535-1.518.117-3.186 0 0 1.005-.32 3.3 1.236a11.52 11.52 0 013.003-.402c1.02.004 2.046.137 3.003.402 2.29-1.556 3.293-1.236 3.293-1.236.653 1.668.241 2.884.12 3.186.765.844 1.233 1.92 1.233 3.236 0 4.637-2.805 5.66-5.476 5.957.43.372.816 1.105.816 2.227v3.293c0 .32.215.694.827.576C20.565 22.092 24 17.598 24 12.297 24 5.67 18.627.297 12 .297z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankush-kumar-227058171/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn account"
            className="hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <svg
              className={`${
                darkMode ? "text-[#0A66C2]" : "text-[#0A66C2]"
              } w-5 h-5`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22.235 0H1.765C.788 0 0 .796 0 1.78v20.44C0 23.204.788 24 1.765 24h20.47C23.212 24 24 23.204 24 22.22V1.78C24 .796 23.212 0 22.235 0ZM7.057 20.252h-3.69V9.03h3.69v11.222ZM5.212 7.484a2.157 2.157 0 1 1 0-4.314 2.155 2.155 0 0 1 0 4.314Zm15.04 12.766H16.56v-5.607c0-1.505-.54-2.527-1.888-2.527-1.03 0-1.645.703-1.921 1.38-.098.238-.122.57-.122.902v5.852H9.992S10.08 10.75 9.992 9.03h3.695v1.52a3.61 3.61 0 0 1 3.343-1.95c2.44 0 4.27 1.59 4.27 5.007v6.645h-.048Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8878231626"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <svg
              className={`${
                darkMode ? "text-[#25D366]" : "text-[#25D366]"
              } w-5 h-5`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M16.001 2.4c-7.51 0-13.6 6.1-13.6 13.6 0 2.4.7 4.7 1.9 6.6L2 30l7.7-2.2c1.9 1 4 1.6 6.3 1.6 7.5 0 13.6-6.1 13.6-13.6s-6.1-13.6-13.6-13.6zm0 24.8c-2.1 0-4.1-.6-5.8-1.6l-.4-.3-4.6 1.3 1.3-4.4-.3-.4c-1.2-1.7-1.8-3.8-1.8-5.9 0-5.9 4.8-10.6 10.6-10.6S26.6 10.4 26.6 16.3c0 5.9-4.8 10.6-10.6 10.6zm6-7.8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.3-.7.1-2-.9-3.3-3-3.4-3.2-.2-.2 0-.5.2-.6.2-.1.4-.3.6-.4.2-.1.3-.2.4-.4.1-.1.1-.3 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3s-.9.8-.9 2c0 1.1.9 2.1 1 2.2.1.1 1.8 2.8 4.3 3.9 1.5.6 2.1.7 2.8.7.4 0 .9-.1 1.3..." />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
