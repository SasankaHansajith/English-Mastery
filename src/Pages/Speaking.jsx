import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import topicsData from "../Data/speakingTopics.json"; // { beginner: [], intermediate: [], advanced: [] }

const Speaking = () => {
  const [level, setLevel] = useState("beginner");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState("");
  const [grammarErrors, setGrammarErrors] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [completed, setCompleted] = useState({});
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // Load completed progress
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("speakingProgress")) || {};
    setCompleted(saved);

    // Initialize Web Speech API for live transcription
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          }
        }
        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Save progress
  const saveProgress = (topic) => {
    const updated = { ...completed, [topic]: true };
    setCompleted(updated);
    localStorage.setItem("speakingProgress", JSON.stringify(updated));
  };

  // 🎙️ Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mp3",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
      setTranscript(""); // Clear previous transcript
      
      // Start live speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
    } catch (error) {
      alert("Microphone access denied or not supported.");
    }
  };

  // ⏹️ Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
    
    // Stop speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  // 🧠 Grammar check using the same system as Writing page
  const analyzeSpeech = async () => {
    if (!transcript || transcript.trim().length === 0) {
      return alert("No transcript available! Please record your speech first and wait for transcription.");
    }

    setAnalyzing(true);
    setFeedback("");
    setGrammarErrors([]);

    try {
      // Use the same grammar checking approach as Writing page
      const errors = await checkGrammarFromTranscript(transcript);
      setGrammarErrors(errors);
      
      // Generate feedback summary
      const grammarCount = errors.filter(e => e.rule?.issueType === 'grammar').length;
      const spellingCount = errors.filter(e => e.rule?.issueType === 'spelling').length;
      const styleCount = errors.filter(e => e.rule?.issueType === 'style').length;
      
      const feedbackText = `
✅ Transcription completed (${transcript.split(/\s+/).length} words)

📊 Grammar Analysis:
${errors.length === 0 ? '✅ No errors found! Great job!' : `
❌ Found ${errors.length} issue(s):
   • ${grammarCount} grammar error(s)
   • ${spellingCount} spelling error(s)
   • ${styleCount} style suggestion(s)
`}

💡 Speaking Tips:
   • Speak clearly and at a moderate pace
   • Use varied sentence structures
   • Practice pronouncing difficult words
      `;
      
      setFeedback(feedbackText);
      
      if (errors.length === 0) {
        saveProgress(selectedTopic);
      }
    } catch (error) {
      setFeedback("Error analyzing speech. Please try again.");
      console.error(error);
    } finally {
      setAnalyzing(false);
    }
  };

  // Helper: Check grammar from transcript text
  const checkGrammarFromTranscript = async (text) => {
    const allErrors = [];
    
    // 1. Run manual pattern checks (same as Writing page)
    const manualErrors = runManualChecks(text);
    allErrors.push(...manualErrors);
    
    // 2. Run LanguageTool API check
    try {
      const ltErrors = await runLanguageTool(text);
      allErrors.push(...ltErrors);
    } catch (error) {
      console.error("LanguageTool error:", error);
    }
    
    return allErrors;
  };

  // Manual pattern checks (same 35+ rules from Writing page)
  const runManualChecks = (plainText) => {
    const manualErrors = [];
    const sentences = plainText.split(/[.!?]+/).filter((s) => s.trim());

    sentences.forEach((sentence) => {
      const s = sentence.trim();

      // Tense-time mismatches
      const pastTenseWords = ["was", "were", "went", "did", "had", "said", "made", "got", "came", "took", "saw"];
      const hasTomorrow = /\btomorrow\b/i.test(s);
      const hasPastTense = pastTenseWords.some((w) => new RegExp(`\\b${w}\\b`, "i").test(s));

      if (hasTomorrow && hasPastTense) {
        manualErrors.push({
          message: "Tense-Time Mismatch: Using past tense with 'tomorrow'",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Tense Agreement" } },
        });
      }

      // Subject-verb agreement: "I is"
      if (/\bi\s+is\b/i.test(s)) {
        manualErrors.push({
          message: "Subject-verb agreement: Use 'I am', not 'I is'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Subject-Verb Agreement" } },
        });
      }

      // Article errors
      if (/\ba\s+(apple|elephant|ice|orange|umbrella|hour)\b/i.test(s)) {
        manualErrors.push({
          message: "Article error: Use 'an' before vowel sounds",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Articles" } },
        });
      }

      // Double negatives
      if (/\b(don't|doesn't|didn't)\s+(no|nothing|nobody|never)\b/i.test(s)) {
        manualErrors.push({
          message: "Double negative: Use 'any', 'anything', or 'anyone'",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Double Negatives" } },
        });
      }
    });

    return manualErrors;
  };

  // LanguageTool API check
  const runLanguageTool = async (plainText) => {
    const res = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        text: plainText,
        language: "en-GB",
        enabledOnly: "false",
        level: "picky",
      }),
    });

    if (!res.ok) throw new Error("LanguageTool API failed");

    const data = await res.json();
    return data.matches.map((m) => ({
      message: m.message,
      context: m.context,
      rule: m.rule,
      replacements: m.replacements,
    }));
  };

  return (
    <div className="min-h-screen bg-[#fffaf3] text-gray-800">
      <Navbar />

      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center text-[#d4a017]">
            🗣️ Speaking Practice with Grammar Check
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Record your speech, get automatic transcription, and receive instant grammar feedback!
          </p>
          
          {/* How it works info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-3xl mx-auto">
            <h3 className="font-semibold text-blue-800 mb-2">🎯 How Grammar Tracking Works:</h3>
            <ol className="text-sm text-blue-900 space-y-1 list-decimal list-inside">
              <li><strong>Speech Recognition:</strong> Your voice is converted to text in real-time using browser technology</li>
              <li><strong>Grammar Analysis:</strong> The transcript is checked using 35+ grammar rules + LanguageTool API</li>
              <li><strong>Instant Feedback:</strong> Get detailed error reports with suggestions for improvement</li>
            </ol>
            <p className="text-xs text-blue-700 mt-2">
              💡 Works best in Chrome/Edge browsers with good microphone quality
            </p>
          </div>

          {/* Tabs for Levels */}
          <div className="flex justify-center mb-6 space-x-4">
            {["beginner", "intermediate", "advanced"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl);
                  setSelectedTopic(null);
                }}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  level === lvl
                    ? "bg-[#d4a373] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </button>
            ))}
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {topicsData[level].map((topic) => (
              <div
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`p-4 rounded-xl cursor-pointer border transition hover:scale-105 ${
                  selectedTopic === topic
                    ? "border-[#d4a373] bg-[#fff7f0]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{topic}</h2>
                  {completed[topic] && (
                    <span className="text-green-600 text-sm font-bold">
                      ✓ Done
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Recording Section */}
          {selectedTopic ? (
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-[#d4a373]">
                {selectedTopic}
              </h2>
              <p className="text-gray-600 mb-4">
                🎤 Speak for 1–2 minutes about this topic.
              </p>

              <div className="flex justify-center gap-4 mb-6">
                {!recording ? (
                  <button
                    onClick={startRecording}
                    className="bg-[#d4a373] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c1915e]"
                  >
                    🎙️ Start Recording
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600"
                  >
                    ⏹️ Stop Recording
                  </button>
                )}

                <button
                  onClick={analyzeSpeech}
                  disabled={analyzing || !transcript}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    analyzing || !transcript
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#d4a017] text-white hover:bg-[#c1915e]'
                  }`}
                >
                  {analyzing ? '� Analyzing...' : '🔍 Check Grammar'}
                </button>
              </div>

              {recording && (
                <div className="text-center mb-4">
                  <p className="text-red-600 font-semibold animate-pulse">
                    🔴 Recording... Speak now!
                  </p>
                </div>
              )}

              {audioURL && (
                <div className="text-center mb-6">
                  <audio
                    controls
                    src={audioURL}
                    className="mx-auto w-full md:w-2/3"
                  />
                </div>
              )}

              {transcript && (
                <div className="bg-[#fff7f0] p-4 rounded-lg mb-4 border border-[#d4a373]">
                  <h3 className="font-semibold text-[#d4a373] mb-2">
                    🗒️ Live Transcript
                  </h3>
                  <p className="text-gray-700 whitespace-pre-wrap">{transcript}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Words: {transcript.split(/\s+/).filter(w => w).length}
                  </p>
                </div>
              )}

              {grammarErrors.length > 0 && (
                <div className="bg-white p-4 rounded-lg mb-4 border-2 border-red-300">
                  <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    ❌ Grammar Issues Found ({grammarErrors.length})
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {grammarErrors.map((error, idx) => {
                      const issueType = error.rule?.issueType || 'grammar';
                      const colors = {
                        grammar: 'bg-red-50 border-red-300 text-red-800',
                        spelling: 'bg-yellow-50 border-yellow-300 text-yellow-800',
                        style: 'bg-blue-50 border-blue-300 text-blue-800',
                        typographical: 'bg-purple-50 border-purple-300 text-purple-800',
                      };
                      
                      return (
                        <div key={idx} className={`p-3 rounded border ${colors[issueType] || colors.grammar}`}>
                          <p className="font-medium mb-1">{error.message}</p>
                          {error.context?.text && (
                            <p className="text-sm italic">"{error.context.text}"</p>
                          )}
                          {error.replacements?.length > 0 && (
                            <p className="text-sm mt-1">
                              💡 Suggestion: {error.replacements[0].value}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {feedback && (
                <div className="bg-[#f4e1d2] p-4 rounded-lg border border-[#d4a373]">
                  <h3 className="font-semibold text-[#d4a373] mb-2">
                    💬 Feedback Summary
                  </h3>
                  <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                    {feedback}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic">
              Select a topic to start speaking 🎤
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Speaking;
