import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.jsx";
import Grammar from "./Pages/Grammar.jsx";

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

    window.addEventListener("navigate-to-manual", handleNavigateToManual);
    window.addEventListener("navigate-to-grammar", handleNavigateToGrammar);
    window.addEventListener("navigate-to-home", handleNavigateToHome);

    return () => {
      window.removeEventListener("navigate-to-manual", handleNavigateToManual);
      window.removeEventListener(
        "navigate-to-grammar",
        handleNavigateToGrammar
      );
      window.removeEventListener("navigate-to-home", handleNavigateToHome);
    };
  }, []);

  return (
    <>
      {currentPage === "home" && <HomePage />}
      {currentPage === "grammar" && <Grammar />}
      {currentPage === "manual" && <Grammar />}
    </>
  );
}

export default App;
