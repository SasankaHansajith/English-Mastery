import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.jsx";
import Grammar from "./Pages/Grammar.jsx";
import Vocabulary from "./Pages/Vocabulary.jsx";
import CalendarNotebook from "./Pages/CalendarNotebook.jsx";
import Writing from "./Pages/Writing.jsx";
import Speaking from "./Pages/Speaking.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleNavigateToManual = () => {
      setCurrentPage("manual");
    };

    const handleNavigateToGrammar = () => {
      setCurrentPage("grammar");
    };

    const handleNavigateToHome = () => {
      setCurrentPage("home");
    };

    const handleNavigateToVocabulary = () => {
      setCurrentPage("vocabulary");
    };

    const handleNavigateToCalendar = () => {
      setCurrentPage("calendar");
    };

    const handleNavigateToWriting = () => {
      setCurrentPage("writing");
    };

    const handleNavigateToSpeaking = () => {
      setCurrentPage("speaking");
    };

    window.addEventListener("navigate-to-manual", handleNavigateToManual);
    window.addEventListener("navigate-to-grammar", handleNavigateToGrammar);
    window.addEventListener("navigate-to-home", handleNavigateToHome);
    window.addEventListener(
      "navigate-to-vocabulary",
      handleNavigateToVocabulary
    );
    window.addEventListener("navigate-to-calendar", handleNavigateToCalendar);
    window.addEventListener("navigate-to-writing", handleNavigateToWriting);
    window.addEventListener("navigate-to-speaking", handleNavigateToSpeaking);

    return () => {
      window.removeEventListener("navigate-to-manual", handleNavigateToManual);
      window.removeEventListener(
        "navigate-to-grammar",
        handleNavigateToGrammar
      );
      window.removeEventListener("navigate-to-home", handleNavigateToHome);
      window.removeEventListener(
        "navigate-to-vocabulary",
        handleNavigateToVocabulary
      );
      window.removeEventListener(
        "navigate-to-calendar",
        handleNavigateToCalendar
      );
      window.removeEventListener(
        "navigate-to-writing",
        handleNavigateToWriting
      );
      window.removeEventListener(
        "navigate-to-speaking",
        handleNavigateToSpeaking
      );
    };
  }, []);

  return (
    <>
      {currentPage === "home" && <HomePage />}
      {currentPage === "grammar" && <Grammar />}
      {currentPage === "manual" && <Grammar />}
      {currentPage === "vocabulary" && <Vocabulary />}
      {currentPage === "calendar" && <CalendarNotebook />}
      {currentPage === "writing" && <Writing />}
      {currentPage === "speaking" && <Speaking />}
    </>
  );
}

export default App;
