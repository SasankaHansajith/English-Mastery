import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.jsx";
import Grammar from "./Pages/Grammar.jsx";
import Vocabulary from "./Pages/Vocabulary.jsx";
import CalendarNotebook from "./Pages/CalendarNotebook.jsx";
import Writing from "./Pages/Writing.jsx";
import Speaking from "./Pages/Speaking.jsx";
// SignIn will be loaded dynamically to avoid bundling/import-time issues
import { onAuthChange, signOutUser } from "./firebase.js";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);
  const [skipped, setSkipped] = useState(() => {
    try {
      return localStorage.getItem("skipAuth") === "true";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const handleNavigateToManual = () => {
      setCurrentPage("manual");
    };

    const handleNavigateToGrammar = () => {
      setCurrentPage("grammar");
    };

    const handleNavigateToSignIn = () => {
      // dynamically load SignIn when needed
      import("./Pages/SignIn.jsx")
        .then((mod) => {
          window.__LoadedSignIn = mod && (mod.default || mod.SignIn);
          setCurrentPage("signin");
        })
        .catch((err) => {
          console.error("Failed to load SignIn:", err);
        });
    };

    const handleNavigateToSignUp = () => {
      // dynamically load SignUp when needed
      import("./Pages/SignUp.jsx")
        .then((mod) => {
          window.__LoadedSignUp = mod && (mod.default || mod.SignUp);
          setCurrentPage("signup");
        })
        .catch((err) => {
          console.error("Failed to load SignUp:", err);
        });
    };

    const handleNavigateToHome = () => {
      setCurrentPage("home");
    };

    const handleSignOut = async () => {
      try {
        await signOutUser();
        setUser(null);
        // after signout go to signin
        setCurrentPage("signin");
      } catch (err) {
        console.error("Sign out failed:", err);
      }
    };

    const handleSkip = () => {
      try {
        localStorage.setItem("skipAuth", "true");
      } catch (e) {}
      setSkipped(true);
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
    window.addEventListener("navigate-to-signin", handleNavigateToSignIn);
    window.addEventListener("navigate-to-signup", handleNavigateToSignUp);
  window.addEventListener("navigate-to-signout", handleSignOut);
  window.addEventListener("navigate-to-skip", handleSkip);
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
      window.removeEventListener("navigate-to-signin", handleNavigateToSignIn);
      window.removeEventListener("navigate-to-signup", handleNavigateToSignUp);
  window.removeEventListener("navigate-to-signout", handleSignOut);
  window.removeEventListener("navigate-to-skip", handleSkip);
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
      {/* pass user/skipped into Navbar by letting pages read window events or App could be extended to render Navbar globally */}
      {currentPage === "grammar" && <Grammar />}
      {currentPage === "manual" && <Grammar />}
      {currentPage === "vocabulary" && <Vocabulary />}
      {currentPage === "calendar" && <CalendarNotebook />}
      {currentPage === "writing" && <Writing />}
      {currentPage === "speaking" && <Speaking />}
      {currentPage === "signin" && window.__LoadedSignIn && (
        React.createElement(window.__LoadedSignIn)
      )}
      {currentPage === "signup" && window.__LoadedSignUp && (
        React.createElement(window.__LoadedSignUp)
      )}
    </>
  );
}

export default App;
