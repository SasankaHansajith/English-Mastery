// src/pages/CalendarNotebook.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function CalendarNotebook() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [vocabCount, setVocabCount] = useState("");
  const [grammarLessons, setGrammarLessons] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Grammar topics organized by level
  const grammarTopics = {
    beginner: [
      "Parts of Speech",
      "Tenses",
      "Articles",
      "Prepositions",
      "Sentence Structure",
      "Question Formation",
    ],
    intermediate: [
      "Active Voice",
      "Passive Voice",
      "Reported Speech",
      "Conditionals",
      "Modals, Gerunds & more",
      "Conjunctions & Linking Words",
      "Comparatives & Superlatives",
    ],
    advanced: [
      "Clauses",
      "Phrasal Verbs & Idioms",
      "Punctuation & Capitalization",
      "Common Grammar Mistakes",
    ],
  };

  const allTopics = [
    ...grammarTopics.beginner,
    ...grammarTopics.intermediate,
    ...grammarTopics.advanced,
  ];

  // Load saved notes
  useEffect(() => {
    const saved = localStorage.getItem("calendarNotes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  // Save notes when they change
  useEffect(() => {
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
  }, [notes]);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleSave = () => {
    const dateKey = formatDate(selectedDate);
    const updatedNotes = {
      ...notes,
      [dateKey]: {
        vocabCount,
        grammarLessons,
        noteText,
      },
    };
    setNotes(updatedNotes);
  };

  // Render a simple calendar grid
  const renderCalendar = () => {
    const startOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    const days = [];

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const dayDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        i
      );
      const dateKey = formatDate(dayDate);
      const hasNote = notes[dateKey];

      days.push(
        <div
          key={i}
          onClick={() => setSelectedDate(dayDate)}
          className={`p-2 border cursor-pointer rounded-lg text-center ${
            formatDate(selectedDate) === dateKey
              ? "bg-blue-100"
              : "hover:bg-gray-100"
          }`}
        >
          <div className="font-bold">{i}</div>
          {hasNote && <div className="text-xs text-green-600">📝</div>}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  // Load existing note for selected date
  useEffect(() => {
    const dateKey = formatDate(selectedDate);
    const dayNote = notes[dateKey] || {};
    setVocabCount(dayNote.vocabCount || "");
    setGrammarLessons(dayNote.grammarLessons || []);
    setNoteText(dayNote.noteText || "");
  }, [selectedDate, notes]);

  // Add a grammar lesson
  const addGrammarLesson = (topic) => {
    if (!grammarLessons.find((l) => l.topic === topic)) {
      setGrammarLessons([...grammarLessons, { topic, percentage: 0 }]);
    }
  };

  // Update lesson percentage
  const updateLessonPercentage = (topic, percentage) => {
    setGrammarLessons(
      grammarLessons.map((lesson) =>
        lesson.topic === topic
          ? { ...lesson, percentage: parseInt(percentage) }
          : lesson
      )
    );
  };

  // Remove a grammar lesson
  const removeGrammarLesson = (topic) => {
    setGrammarLessons(grammarLessons.filter((l) => l.topic !== topic));
  };

  return (
    <div className="bg-[#fffaf3] min-h-screen">
      <Navbar />

      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#d4a017]">
          📘 Calendar Notebook
        </h1>

        {/* Calendar Navigation */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  1
                )
              )
            }
            className="px-3 py-1 bg-gray-200 rounded"
          >
            ← Previous
          </button>
          <h2 className="text-lg font-semibold">
            {selectedDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  1
                )
              )
            }
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Next →
          </button>
        </div>

        {/* Calendar */}
        {renderCalendar()}

        {/* Notes for Selected Date */}
        <div className="mt-6 bg-white shadow p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">
            {selectedDate.toDateString()} 📝
          </h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Vocabulary Count
            </label>
            <input
              type="number"
              value={vocabCount}
              onChange={(e) => setVocabCount(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="How many words did you learn?"
            />
          </div>

          {/* Grammar Lessons Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Grammar Lessons
            </label>

            {/* Dropdown to add lessons */}
            <div className="mb-3">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addGrammarLesson(e.target.value);
                    e.target.value = "";
                  }
                }}
                className="w-full border rounded p-2 bg-white"
              >
                <option value="">+ Add a Grammar Lesson</option>
                <optgroup label="Beginner">
                  {grammarTopics.beginner.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Intermediate">
                  {grammarTopics.intermediate.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Advanced">
                  {grammarTopics.advanced.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Display added lessons with percentage sliders */}
            <div className="space-y-3">
              {grammarLessons.map((lesson) => (
                <div
                  key={lesson.topic}
                  className="bg-gray-50 p-3 rounded-lg border"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{lesson.topic}</span>
                    <button
                      onClick={() => removeGrammarLesson(lesson.topic)}
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      ✕ Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lesson.percentage}
                      onChange={(e) =>
                        updateLessonPercentage(lesson.topic, e.target.value)
                      }
                      className="flex-1"
                    />
                    <span className="text-sm font-semibold w-12 text-right">
                      {lesson.percentage}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#d4a017] transition-all"
                      style={{ width: `${lesson.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              {grammarLessons.length === 0 && (
                <p className="text-gray-400 text-sm italic">
                  No grammar lessons added yet. Select from the dropdown above.
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Notes</label>
            <textarea
              rows={3}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            ></textarea>
          </div>
          <button
            onClick={handleSave}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            💾 Save Notes
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
