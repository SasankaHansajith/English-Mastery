import React from "react";
import {
  BookOpen,
  Brain,
  MessageSquare,
  Edit3,
  Award,
  Volume2,
  Globe,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <div className="bg-[#fdfaf5] text-gray-900 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 md:py-24 bg-[#fffaf3]">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-5">
            Learn English <span className="text-[#d4a017]">Easily</span> <br />
            From Sinhala Step by Step 🇱🇰
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Master grammar, vocabulary, speaking, and writing with clear Sinhala
            explanations and examples.
            <br />
            සිංහලෙන් ඉංග්‍රීසි ඉගෙන ගන්න — ඉතා පහසුවෙන්, අදම ආරම්භ කරන්න!
          </p>
          <Button className="bg-[#d4a017] text-white px-6 py-3 rounded-full text-lg hover:bg-[#b88d10] transition">
            Start Learning Now
          </Button>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="/assets/images/hero-learning.png"
            alt="Learning English Illustration"
            className="w-[420px] md:w-[480px]"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#262626] text-white py-16 px-10 rounded-t-[40px]">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Main Learning Categories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            onClick={() =>
              window.dispatchEvent(new CustomEvent("navigate-to-grammar"))
            }
          >
            <CategoryCard
              icon={<BookOpen className="w-10 h-10 text-[#d4a017]" />}
              title="Grammar"
              text="Learn all grammar rules with Sinhala explanations and examples."
            />
          </div>
          <CategoryCard
            icon={<Brain className="w-10 h-10 text-[#d4a017]" />}
            title="Vocabulary"
            text="Build your word power with Sinhala meanings and daily word lists."
          />
          <CategoryCard
            icon={<Edit3 className="w-10 h-10 text-[#d4a017]" />}
            title="Writing"
            text="Practice essays, paragraphs, and letters step by step."
          />
          <CategoryCard
            icon={<MessageSquare className="w-10 h-10 text-[#d4a017]" />}
            title="Speaking"
            text="Improve pronunciation and conversation skills with audio."
          />
          <CategoryCard
            icon={<Award className="w-10 h-10 text-[#d4a017]" />}
            title="Quizzes"
            text="Test your knowledge and earn badges for your progress!"
          />
          <CategoryCard
            icon={<Globe className="w-10 h-10 text-[#d4a017]" />}
            title="Tools"
            text="Dictionary, verb forms, and pronunciation guides."
          />
        </div>
      </section>

      {/* Word of the Day Section */}
      <section className="py-16 px-10 text-center bg-[#fffaf3]">
        <h3 className="text-3xl font-semibold mb-4">Word of the Day 🗓️</h3>
        <p className="text-2xl font-bold mb-2">Journey – ගමන</p>
        <p className="text-gray-600 mb-8">“I enjoyed the journey.”</p>
        <Button className="bg-[#d4a017] text-white px-6 py-2 rounded-full hover:bg-[#b88d10] transition">
          See More Words
        </Button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Reusable Card Component
const CategoryCard = ({ icon, title, text }) => (
  <div className="bg-[#1a1a1a] rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition cursor-pointer">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

export default HomePage;
