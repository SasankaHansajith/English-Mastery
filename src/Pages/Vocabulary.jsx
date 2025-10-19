import React, { useState, useEffect } from "react";
import beginnerData from "../Data/beginner.json";
import intermediateData from "../Data/intermediate.json";
import advancedData from "../Data/advanced.json";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Vocabulary = () => {
  const [level, setLevel] = useState("beginner");
  const [remembered, setRemembered] = useState([]);

  // Load remembered words from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("rememberedWords")) || [];
    setRemembered(saved);
  }, []);

  // Save updates to localStorage
  const toggleRemember = (word) => {
    let updated;
    if (remembered.includes(word["Present forms"])) {
      updated = remembered.filter((w) => w !== word["Present forms"]);
    } else {
      updated = [...remembered, word["Present forms"]];
    }
    setRemembered(updated);
    localStorage.setItem("rememberedWords", JSON.stringify(updated));
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

  return (
    <div className="bg-[#fffaf3] min-h-screen text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold text-[#d4a017] mb-2">
          ✨ Vocabulary
        </h1>
        <p className="text-gray-600">
          Learn common verbs with Sinhala meanings and mark what you remember!
        </p>
      </section>

      {/* Level Selector */}
      <div className="flex justify-center gap-4 mb-6">
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
      <div className="max-w-xl mx-auto text-center mb-8">
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
      <div className="overflow-x-auto max-w-5xl mx-auto bg-white shadow-md rounded-2xl mb-16">
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
                      onClick={() => toggleRemember(word)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isRemembered
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
                      }`}
                    >
                      {isRemembered ? "✅ Remembered" : "Mark"}
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
