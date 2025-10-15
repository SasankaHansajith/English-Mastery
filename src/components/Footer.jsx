import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-gray-300 py-10 px-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h4 className="text-xl font-semibold text-[#d4a017] mb-4 md:mb-0">
          English සිංහලෙන්
        </h4>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-[#d4a017]">
            About
          </a>
          <a href="#contact" className="hover:text-[#d4a017]">
            Contact
          </a>
          <a href="#privacy" className="hover:text-[#d4a017]">
            Privacy
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} English සිංහලෙන් — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
