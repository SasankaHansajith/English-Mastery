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
      color: "from-[#fff3e6] to-[#ffe6cc]",
      title: "Beginner",
      desc: "Start your journey with clear basics and simple examples.",
      topics: ["Parts of Speech", "Sentence Basics", "Tenses", "Articles"],
      icon: <BookOpen className="w-8 h-8 text-[#d4a017]" />,
    },
    {
      id: "intermediate",
      color: "from-[#fff1e0] to-[#ffd6b3]",
      title: "Intermediate",
      desc: "Connect ideas and use more natural English.",
      topics: ["Conditionals", "Modals", "Passive Voice", "Reported Speech"],
      icon: <Brain className="w-8 h-8 text-[#d4a017]" />,
    },
    {
      id: "advanced",
      color: "from-[#fff0f0] to-[#ffcccc]",
      title: "Advanced",
      desc: "Master nuance, idioms and fluent expression.",
      topics: ["Clauses", "Punctuation", "Idioms", "Advanced Vocabulary"],
      icon: <Award className="w-8 h-8 text-[#d4a017]" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdfaf5] to-[#fffaf3] text-gray-900 font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#d4a017] text-white font-semibold">New</span>
              <span className="text-sm text-gray-600">Updated lessons & quizzes</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Learn English <span className="text-[#d4a017]">Easily</span>
              <br /> From Sinhala — Step by Step
            </h1>

            <p className="text-gray-700 mb-6 max-w-xl">
              Clear Sinhala explanations, bite-sized lessons, and interactive
              quizzes to build confidence. Practice daily and track progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-[#d4a017] text-white px-5 py-3 rounded-full hover:bg-[#b88d10] shadow-md"
                onClick={() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Learning 🚀
              </Button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("navigate-to-quiz"))}
                className="px-5 py-3 rounded-full border border-gray-200 bg-white text-gray-800 hover:shadow-md"
              >
                Try a Quiz
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <div className="relative">
              <div className="w-[260px] sm:w-[340px] md:w-[360px] lg:w-[460px] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl">
                <img loading="lazy" src={heroLearningImg} alt="Learning" className="w-full rounded-xl" />
              </div>
              <div className="absolute -bottom-4 -right-6 bg-gradient-to-tr from-[#ffd6b3] to-[#ffe6cc] p-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold">Beginner → Advanced</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap / Levels */}
      <section id="roadmap" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-[#d4a017] mb-4">📘 Learn by Level</h2>
          <p className="text-center text-gray-600 mb-8">Choose a level and follow the curated lessons and quizzes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((lvl, i) => (
              <motion.div key={lvl.id} whileHover={{ y: -6 }} className="relative group">
                <div className={`rounded-2xl p-4 md:p-6 shadow-lg bg-gradient-to-b ${lvl.color} border border-transparent transition transform`}> 
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/60 rounded-full p-3">{lvl.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{lvl.title}</h3>
                        <p className="text-sm text-gray-700">{lvl.desc}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{i + 1}/3</div>
                  </div>

                  <ul className="text-gray-700 text-sm mb-4 space-y-1">
                    {lvl.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#d4a017] rounded-full" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("navigate-to-grammar"))}
                      className="w-full px-4 py-2 bg-white text-[#d4a017] rounded-full font-semibold hover:shadow"
                    >
                      Start {lvl.title}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl text-center font-semibold mb-8">Main Learning Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard icon={<BookOpen />} title="Grammar" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-grammar'))} />
            <CategoryCard icon={<Brain />} title="Vocabulary" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-vocabulary'))} />
            <CategoryCard icon={<Edit3 />} title="Writing" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-writing'))} />
            <CategoryCard icon={<MessageSquare />} title="Speaking" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-speaking'))} />
            <CategoryCard icon={<Award />} title="Quizzes" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-quiz'))} />
            <CategoryCard icon={<Globe />} title="Tools" onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-tools'))} />
          </div>
        </div>
      </section>

      {/* Daily Notebook */}
      <section className="py-16 px-6 bg-[#fffaf3]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Daily Notebook 🗓️</h3>
          <p className="text-gray-700 mb-8">Track your progress, save notes and review vocabulary — all in one place.</p>
          <div className="flex justify-center">
            <div onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-calendar'))} className="cursor-pointer bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-6xl mb-4">📝</div>
              <h4 className="text-2xl font-bold mb-2 text-[#d4a017]">Calendar Notebook</h4>
              <p className="text-gray-600">Record your daily wins and revisits.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CategoryCard = ({ icon, title, onClick }) => (
  <motion.div whileHover={{ y: -6 }} className="bg-white/6 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-inner border border-white/10 cursor-pointer" onClick={onClick}>
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-white/10">
        {React.cloneElement(icon, { className: "w-7 h-7 text-[#d4a017]" })}
      </div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-300">Explore {title} lessons & practice</p>
      </div>
    </div>
  </motion.div>
);

export default HomePage;
