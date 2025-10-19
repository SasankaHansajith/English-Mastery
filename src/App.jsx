import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.jsx";
import Grammar from "./Pages/Grammar.jsx";
import Vocabulary from "./Pages/Vocabulary.jsx";
import CalendarNotebook from "./Pages/CalendarNotebook.jsx";

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

    window.addEventListener("navigate-to-manual", handleNavigateToManual);
    window.addEventListener("navigate-to-grammar", handleNavigateToGrammar);
    window.addEventListener("navigate-to-home", handleNavigateToHome);
    window.addEventListener(
      "navigate-to-vocabulary",
      handleNavigateToVocabulary
    );
    window.addEventListener("navigate-to-calendar", handleNavigateToCalendar);

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
    };
  }, []);

  return (
    <>
      {currentPage === "home" && <HomePage />}
      {currentPage === "grammar" && <Grammar />}
      {currentPage === "manual" && <Grammar />}
      {currentPage === "vocabulary" && <Vocabulary />}
      {currentPage === "calendar" && <CalendarNotebook />}
    </>
  );
}

export default App;
