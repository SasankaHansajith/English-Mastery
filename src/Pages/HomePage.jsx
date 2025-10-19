import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  MessageSquare,
  Edit3,
  Award,
  Globe,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import heroLearningImg from "../assets/Images/hero-learning.png";

const HomePage = () => {
  const levels = [
    {
      id: "beginner",
      color: "bg-[#ffe6cc]",
      title: "Beginner",
      desc: "Start your journey with basic grammar and sentence building.",
      topics: ["Parts of Speech", "Sentence Basics", "Tenses", "Articles"],
    },
    {
      id: "intermediate",
      color: "bg-[#ffd6b3]",
      title: "Intermediate",
      desc: "Learn more complex grammar and how to connect ideas naturally.",
      topics: ["Conditionals", "Modals", "Passive Voice", "Reported Speech"],
    },
    {
      id: "advanced",
      color: "bg-[#ffcccc]",
      title: "Advanced",
      desc: "Master advanced grammar, punctuation, and idiomatic expressions.",
      topics: ["Clauses", "Punctuation", "Idioms", "Advanced Vocabulary"],
    },
  ];

  return (
    <div className="bg-[#fdfaf5] text-gray-900 font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-16 md:py-24 overflow-hidden bg-[#fffaf3]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-5">
            Learn English <span className="text-[#d4a017]">Easily</span> <br />
            From Sinhala Step by Step 🇱🇰
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Master grammar, vocabulary, speaking, and writing with clear Sinhala
            explanations and examples. <br />
            සිංහලෙන් ඉංග්‍රීසි ඉගෙන ගන්න — ඉතා පහසුවෙන්, අදම ආරම්භ කරන්න!
          </p>
          <Button
            className="bg-[#d4a017] text-white px-6 py-3 rounded-full text-lg hover:bg-[#b88d10] transition shadow-lg hover:shadow-xl"
            onClick={() =>
              document
                .getElementById("roadmap")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Learning Now 🚀
          </Button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={heroLearningImg}
          alt="Learning English"
          className="w-[380px] md:w-[480px] mt-10 md:mt-0 drop-shadow-xl"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#fff3e0] to-transparent opacity-40 rounded-3xl"></div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-10 relative bg-[#fffaf3]">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6 text-center text-[#d4a017]"
        >
          📘 Learn by Level
        </motion.h3>
        <p className="text-center text-gray-600 mb-12">
          Start from your level — Beginner, Intermediate, or Advanced — and grow
          step by step!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`${level.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2`}
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {level.title}
              </h2>
              <p className="text-gray-700 mb-3">{level.desc}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {level.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("navigate-to-grammar"))
                }
                className="w-full bg-[#d4a017] text-white py-2 rounded-full font-semibold hover:bg-[#c1910f] transition"
              >
                Start {level.title} →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative bg-[#262626] text-white py-20 px-10 rounded-t-[40px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#333] to-[#262626] opacity-70"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ repeat: Infinity, duration: 10 }}
        ></motion.div>

        <div className="relative z-10">
          <h3 className="text-3xl font-semibold mb-10 text-center">
            Main Learning Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CategoryCard
              icon={<BookOpen className="w-10 h-10 text-[#d4a017]" />}
              title="Grammar"
              text="Learn all grammar rules with Sinhala explanations and examples."
              onClick={() =>
                window.dispatchEvent(new CustomEvent("navigate-to-grammar"))
              }
            />
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
        </div>
      </section>

      {/* Daily Notebook Section */}
      <section className="py-20 px-10 text-center bg-[#fffaf3] relative">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Daily Notebook 🗓️
        </motion.h3>
        <p className="text-gray-600 mb-8">
          Track your daily learning progress with our smart Calendar Notebook
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-10 cursor-pointer hover:shadow-2xl transition-all"
          onClick={() =>
            window.dispatchEvent(new CustomEvent("navigate-to-calendar"))
          }
        >
          <div className="text-6xl mb-4">📝</div>
          <h4 className="text-2xl font-bold mb-2 text-[#d4a017]">
            Calendar Notebook
          </h4>
          <p className="text-gray-600 mb-4">
            Keep track of vocabulary learned, grammar lessons completed, and
            daily notes easily.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>📚 Vocabulary</span>
            <span>✍️ Grammar</span>
            <span>📅 Notes</span>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

const CategoryCard = ({ icon, title, text, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.07 }}
    className="bg-[#1a1a1a] rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition cursor-pointer border border-[#333]"
    onClick={onClick}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{text}</p>
  </motion.div>
);

export default HomePage;
