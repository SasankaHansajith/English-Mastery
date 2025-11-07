import React, { useState, useEffect } from "react";
import beginnerData from "../Data/beginner.json";
import intermediateData from "../Data/intermediate.json";
import advancedData from "../Data/advanced.json";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import {
  auth,
  onAuthChange,
  getUserRememberedWords,
  addUserRememberedWord,
  removeUserRememberedWord,
  setUserRememberedWords,
} from "../firebase.js";

const Vocabulary = () => {
  const [level, setLevel] = useState("beginner");
  const [remembered, setRemembered] = useState([]);
  const [user, setUser] = useState(null);

  // Load remembered words from Firestore for authenticated users only
  useEffect(() => {
    const unsub = onAuthChange(async (u) => {
      setUser(u || null);
      if (u) {
        try {
          const remote = await getUserRememberedWords(u.uid);
          setRemembered(remote || []);
        } catch (err) {
          console.error("Failed to load remembered words from Firestore:", err);
          setRemembered([]);
        }
      } else {
        // Not signed in -> no remembered words (we no longer use localStorage)
        setRemembered([]);
      }
    });
    return () => unsub && unsub();
  }, []);

  // Save updates to localStorage
  const toggleRemember = async (word) => {
    const key = word["Present forms"];
    const isRemembered = remembered.includes(key);

    // Require authenticated user to persist remembered words to Firestore
    const user = auth.currentUser;
    if (!user) {
      // Not signed in: redirect to Sign In
      window.dispatchEvent(new CustomEvent("navigate-to-signin"));
      return;
    }

    let updated;
    if (isRemembered) {
      updated = remembered.filter((w) => w !== key);
    } else {
      updated = [...remembered, key];
    }
    setRemembered(updated);

    try {
      if (isRemembered) {
        await removeUserRememberedWord(user.uid, key);
      } else {
        await addUserRememberedWord(user.uid, key);
      }
    } catch (err) {
      console.error("Failed to persist remembered word:", err);
      // revert local state on failure
      setRemembered((prev) => (isRemembered ? [...prev, key] : prev.filter((w) => w !== key)));
    }
  };

  // Words by selected level from separate files
  const dataByLevel = {
    beginner: beginnerData.beginner || [],
    intermediate: intermediateData.intermediate || [],
    advanced: advancedData.advanced || [],
  };
  const words = dataByLevel[level] || [];

  // Progress
  const total = words.length;
  const learned = words.filter((w) =>
    remembered.includes(w["Present forms"])
  ).length;
  const progress = total ? Math.round((learned / total) * 100) : 0;

  // whether the visitor skipped auth (skipped users cannot use remember feature)
  const isSkipped = (() => {
    try {
      return localStorage.getItem("skipAuth") === "true";
    } catch (e) {
      return false;
    }
  })();

  const isDisabled = isSkipped || !user;

  return (
    <div className="bg-[#fffaf3] min-h-screen text-gray-900">
      <Navbar />

      {/* Header / Hero */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
        <div className="bg-gradient-to-r from-[#fff7ed] via-[#fff4e6] to-[#fffaf3] rounded-2xl p-6 md:p-8 shadow-sm text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b]">✨ Vocabulary</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Learn common verbs with Sinhala meanings and mark which ones you've remembered. Sign in to persist your progress across devices.</p>
        </div>
      </header>

      {/* Level Selector */}
      <div className="flex justify-center gap-4 mb-6 px-4 sm:px-0">
        {["beginner", "intermediate", "advanced"].map((lvl) => {
          // Color mapping: beginner=light orange, intermediate=orange, advanced=dark red
          const getButtonColors = (currentLvl) => {
            if (level === currentLvl) {
              // Selected state colors
              if (currentLvl === "beginner")
                return "bg-[#ffb366] text-white hover:bg-[#ff9933]";
              if (currentLvl === "intermediate")
                return "bg-[#ff8c1a] text-white hover:bg-[#e67300]";
              if (currentLvl === "advanced")
                return "bg-[#cc3300] text-white hover:bg-[#b32d00]";
            }
            // Unselected state - lighter versions
            if (currentLvl === "beginner")
              return "bg-[#ffe6cc] text-gray-800 hover:bg-[#ffd9b3]";
            if (currentLvl === "intermediate")
              return "bg-[#ffd6b3] text-gray-800 hover:bg-[#ffc299]";
            if (currentLvl === "advanced")
              return "bg-[#ffcccc] text-gray-800 hover:bg-[#ffb3b3]";
            return "bg-gray-200 text-gray-800 hover:bg-gray-300";
          };

          return (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-5 py-2 rounded-full font-semibold transition ${getButtonColors(
                lvl
              )}`}
            >
              {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
            </button>
          );
        })}
      </div>

  {/* Progress Bar */}
  <div className="max-w-xl mx-auto text-center mb-8 px-4 sm:px-0">
        <div className="h-3 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-3 bg-[#d4a017] transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          {learned} / {total} words remembered ({progress}%)
        </p>
      </div>

  {/* Table */}
  <div className="overflow-x-auto max-w-5xl mx-auto bg-white shadow-md rounded-2xl mb-16 px-4 sm:px-0">
        <table className="w-full border-collapse">
          <thead className="bg-[#f0e6d2] text-gray-800">
            <tr>
              <th className="p-3">Sinhala Meaning</th>
              <th className="p-3">Present forms</th>

              <th className="p-3">Past Forms</th>
              <th className="p-3">Past Participles</th>
              <th className="p-3">Remembered</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, i) => {
              const isRemembered = remembered.includes(word["Present forms"]);
              return (
                <tr
                  key={i}
                  className={`text-center border-t ${
                    isRemembered ? "bg-green-50" : "bg-white"
                  }`}
                >
                  <td className="p-3">{word.meaning}</td>
                  <td className="p-3 font-semibold">{word["Present forms"]}</td>

                  <td className="p-3">{word["Past Forms"]}</td>
                  <td className="p-3">{word["Past Participles"]}</td>
                  <td className="p-3">
                    <button
                      onClick={() => {
                        if (isDisabled) {
                          window.dispatchEvent(new CustomEvent("navigate-to-signin"));
                          return;
                        }
                        toggleRemember(word);
                      }}
                      disabled={isDisabled}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isRemembered
                          ? "bg-green-500 text-white"
                          : isDisabled
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
                      }`}
                    >
                      {isRemembered ? "✅ Remembered" : isDisabled ? "Sign in to remember" : "Mark"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Vocabulary;
