import React from "react";

const Navbar = () => {
  const goHome = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-home"));
  const goGrammar = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-grammar"));

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#fffaf3] shadow-sm">
      <h1
        className="text-2xl font-bold text-[#d4a017] cursor-pointer"
        onClick={goHome}
      >
        English සිංහලෙන්
      </h1>
      <div className="flex gap-8 text-[16px] font-medium">
        <button
          onClick={goHome}
          className="hover:text-[#d4a017] cursor-pointer transition"
        >
          Home
        </button>
        <button
          onClick={goGrammar}
          className="hover:text-[#d4a017] cursor-pointer transition"
        >
          Grammar
        </button>
        <a href="#vocab" className="hover:text-[#d4a017]">
          Vocabulary
        </a>
        <a href="#writing" className="hover:text-[#d4a017]">
          Writing
        </a>
        <a href="#speaking" className="hover:text-[#d4a017]">
          Speaking
        </a>
        <a href="#quiz" className="hover:text-[#d4a017]">
          Quizzes
        </a>
        <a href="#tools" className="hover:text-[#d4a017]">
          Tools
        </a>
      </div>
      <button className="bg-[#d4a017] text-white px-5 py-2 rounded-full hover:bg-[#b88d10] transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
