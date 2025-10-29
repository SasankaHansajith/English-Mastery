import React, { useState, useEffect } from "react";
import { onAuthChange, signOutUser } from "../firebase.js";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [skipped, setSkipped] = useState(() => {
    try {
      return localStorage.getItem("skipAuth") === "true";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const unsub = onAuthChange((u) => {
      setUser(u || null);
      if (u) {
        try {
          localStorage.removeItem("skipAuth");
          setSkipped(false);
        } catch (e) {}
      }
    });
    return () => unsub && unsub();
  }, []);

  const goHome = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-home"));
  const goGrammar = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-grammar"));
  const goRoadMap = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-roadmap"));
  const goVocabulary = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-vocabulary"));
  const goWriting = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-writing"));
  const goSpeaking = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-speaking"));
  const goSignIn = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-signin"));
  const goSignUp = () =>
    window.dispatchEvent(new CustomEvent("navigate-to-signup"));

  const doSignOut = async () => {
    try {
      await signOutUser();
      window.dispatchEvent(new CustomEvent("navigate-to-signin"));
    } catch (e) {
      console.error("Sign out failed", e);
    }
  };
  const doSkip = () => {
    try {
      localStorage.setItem("skipAuth", "true");
    } catch (e) {}
    setSkipped(true);
    window.dispatchEvent(new CustomEvent("navigate-to-home"));
  };

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

        <button
          onClick={goVocabulary}
          className="hover:text-[#d4a017] cursor-pointer transition"
        >
          Vocabulary
        </button>

        <button
          onClick={goWriting}
          className="hover:text-[#d4a017] cursor-pointer transition"
        >
          Writing
        </button>

        <button
          onClick={goSpeaking}
          className="hover:text-[#d4a017] cursor-pointer transition"
        >
          Speaking
        </button>
        <a href="#quiz" className="hover:text-[#d4a017]">
          Quizzes
        </a>
        <a href="#tools" className="hover:text-[#d4a017]">
          Tools
        </a>
      </div>
      <div className="flex items-center gap-3">
        {!user && (
          <>
            {/* Show Skip button only when not skipped */}
            {!skipped && (
              <button
                onClick={doSkip}
                className="bg-transparent text-sm text-gray-600 px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Skip
              </button>
            )}
            <button
              onClick={goSignUp}
              className="bg-transparent border border-[#d4a017] text-[#d4a017] px-4 py-2 rounded-full hover:bg-[#fff3e0] transition"
            >
              Sign Up
            </button>
            <button
              onClick={goSignIn}
              className="bg-[#d4a017] text-white px-5 py-2 rounded-full hover:bg-[#b88d10] transition"
            >
              Login
            </button>
          </>
        )}

        {user && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#d4a017] text-white flex items-center justify-center font-semibold">
              {((user.displayName && user.displayName[0]) || (user.email && user.email[0]) || "U").toUpperCase()}
            </div>
            <button
              onClick={doSignOut}
              className="text-sm text-gray-700 hover:underline"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
