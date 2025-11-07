import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Tools = () => {
  return (
    <div className="bg-[#fffaf3] min-h-screen text-gray-900">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
        <div className="bg-gradient-to-r from-[#fff7ed] via-[#fff4e6] to-[#fffaf3] rounded-2xl p-6 md:p-8 shadow-sm text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b]">🔧 Tools</h1>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">Useful tools are on the way — we're building helpers like a dictionary, verb conjugator, and pronunciation guide to support your learning.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6 sm:px-10 text-center">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-2">Feature coming soon</h2>
          <p className="text-gray-600 mb-4">We're working on tools to make learning easier. Check back soon!</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("navigate-to-home"))}
              className="px-4 py-2 bg-[#d4a017] text-white rounded-full"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("navigate-to-grammar"))}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full"
            >
              Explore Grammar
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
