import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.jsx";
import Grammar from "./Pages/Grammar.jsx";
import Vocabulary from "./Pages/Vocabulary.jsx";
import CalendarNotebook from "./Pages/CalendarNotebook.jsx";
import Writing from "./Pages/Writing.jsx";
import Speaking from "./Pages/Speaking.jsx";
import Quiz from "./Pages/Quiz.jsx";
import Tools from "./Pages/Tools.jsx";
// SignIn will be loaded dynamically to avoid bundling/import-time issues
import { onAuthChange, signOutUser } from "./firebase.js";

function App() {
  // show signin on first load unless visitor explicitly skipped
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      return localStorage.getItem("skipAuth") === "true" ? "home" : "signin";
    } catch (e) {
      return "signin";
    }
  });
  const [user, setUser] = useState(null);
  const [skipped, setSkipped] = useState(() => {
    try {
      return localStorage.getItem("skipAuth") === "true";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    // keep auth state and initial routing in sync
    const unsubAuth = onAuthChange((u) => {
      setUser(u || null);
      if (u) {
        // signed in -> show home
        setCurrentPage("home");
      } else {
        // not signed in -> if user didn't skip, show signin
        try {
          if (localStorage.getItem("skipAuth") !== "true") {
            // ensure SignIn component is loaded
            loadSignIn();
            setCurrentPage("signin");
          }
        } catch (e) {
          setCurrentPage("signin");
        }
      }
    });

    const handleNavigateToManual = () => {
      setCurrentPage("manual");
    };

    const handleNavigateToGrammar = () => {
      setCurrentPage("grammar");
    };

    const handleNavigateToSignIn = () => {
      loadSignIn();
    };

    const handleNavigateToSignUp = () => {
      loadSignUp();
    };

    // helper loaders so we can reuse them (defined here to capture setCurrentPage)
    function loadSignIn() {
      import("./Pages/SignIn.jsx")
        .then((mod) => {
          window.__LoadedSignIn = mod && (mod.default || mod.SignIn);
          setCurrentPage("signin");
        })
        .catch((err) => {
          console.error("Failed to load SignIn:", err);
        });
    }

    function loadSignUp() {
      import("./Pages/SignUp.jsx")
        .then((mod) => {
          window.__LoadedSignUp = mod && (mod.default || mod.SignUp);
          setCurrentPage("signup");
        })
        .catch((err) => {
          console.error("Failed to load SignUp:", err);
        });
    }

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
    const handleNavigateToQuiz = () => {
      setCurrentPage("quiz");
    };
    const handleNavigateToTools = () => {
      setCurrentPage("tools");
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
  window.addEventListener("navigate-to-quiz", handleNavigateToQuiz);
  window.addEventListener("navigate-to-tools", handleNavigateToTools);
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
    unsubAuth && unsubAuth();
  window.removeEventListener("navigate-to-signout", handleSignOut);
  window.removeEventListener("navigate-to-skip", handleSkip);
      window.removeEventListener(
        "navigate-to-vocabulary",
        handleNavigateToVocabulary
      );
      window.removeEventListener("navigate-to-quiz", handleNavigateToQuiz);
      window.removeEventListener("navigate-to-tools", handleNavigateToTools);
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
  {currentPage === "quiz" && <Quiz />}
    {currentPage === "tools" && <Tools />}
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
