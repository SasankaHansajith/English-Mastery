import React, { useState } from "react";
import quizData from "../Data/quizData.json";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Quiz = () => {
  const [level, setLevel] = useState("beginner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = quizData[level] || [];
  const currentQuestion = questions[currentIndex] || { question: "No questions", options: [] };

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    if (!selected) return alert("Please select an answer!");

    // record the user's answer for this question
    setUserAnswers((prev) => {
      const copy = prev.slice(0, questions.length);
      copy[currentIndex] = selected;
      return copy;
    });

    if (selected === currentQuestion.answer) setScore((prev) => prev + 1);

    setSelected(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setUserAnswers([]);
    setShowAnswers(false);
  };

  // when the level changes, reset progress/answers
  React.useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setUserAnswers([]);
    setShowAnswers(false);
  }, [level]);

  return (
    <div className="bg-[#fffaf3] min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
        <div className="bg-gradient-to-r from-[#fff7ed] via-[#fff4e6] to-[#fffaf3] rounded-2xl p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e293b]">🧠 English Mastery Quizzes</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">Test your grammar, vocabulary and sentence skills with short levelled quizzes. Track progress and review answers at the end.</p>

          {/* Level Selector */}
          <div className="mt-4 flex flex-wrap gap-3">
            {["beginner", "intermediate", "advanced"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl);
                  handleRestart();
                }}
                className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                  level === lvl ? "bg-[#d4a017] text-white" : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Quiz Section */}
      <main className="max-w-3xl mx-auto px-6 sm:px-10 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center">
        {showResult ? (
          <>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">🎉 Quiz Completed!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Your Score: <span className="font-bold">{score}</span> / {questions.length}
            </p>
            <p className="text-gray-500 mb-6">{(score / Math.max(1, questions.length)) * 100 >= 80 ? "🔥 Excellent Work!" : "Keep Practicing 💪"}</p>
            <div className="flex justify-center gap-3">
              <button onClick={handleRestart} className="px-5 py-2 bg-[#d4a017] text-white rounded-lg font-semibold hover:bg-yellow-600">Restart Quiz</button>
              <button onClick={() => setShowAnswers((s) => !s)} className="px-5 py-2 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200">{showAnswers ? "Hide Answers" : "Show Answers"}</button>
            </div>

            {showAnswers && (
              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold mb-3">Answers for {level.charAt(0).toUpperCase() + level.slice(1)}</h3>
                <ol className="list-decimal pl-5 space-y-4">
                  {questions.map((q, idx) => {
                    const userAns = userAnswers[idx];
                    const correct = q.answer;
                    const isCorrect = userAns === correct;
                    return (
                      <li key={idx} className="p-3 rounded-md bg-gray-50">
                        <div className="font-medium">{q.question}</div>
                        <div className="mt-2">
                          <div>
                            Your answer: <span className={isCorrect ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{userAns ?? "(no answer)"}</span>
                          </div>
                          {!isCorrect && (
                            <div>Correct answer: <span className="text-green-600 font-semibold">{correct}</span></div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-[#d4a017]">{currentQuestion.question}</h2>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`border rounded-lg p-3 transition text-gray-700 ${
                    selected === option ? "bg-yellow-100 border-[#d4a017]" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleNext} className="px-5 py-2 bg-[#d4a017] text-white rounded-lg font-semibold hover:bg-yellow-600">
              {currentIndex + 1 === questions.length ? "Finish" : "Next →"}
            </button>

            {/* Progress */}
            <p className="text-sm text-gray-500 mt-4">Question {currentIndex + 1} of {questions.length}</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-[#d4a017] h-2 rounded-full" style={{ width: `${((currentIndex + 1) / Math.max(1, questions.length)) * 100}%` }}></div>
            </div>
          </>
        )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
