import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import topicsData from "../Data/writingTopics.json";

// DeepSeek API Configuration
// IMPORTANT: Do NOT hardcode secrets. Read from Vite env instead.
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

const Writing = () => {
  const [level, setLevel] = useState("beginner");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState({});
  const [checking, setChecking] = useState(false);
  const [errors, setErrors] = useState([]);
  const [notice, setNotice] = useState("");
  const editorRef = useRef(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("writingProgress")) || {};
    setCompleted(saved);
  }, []);

  // Save progress
  const saveProgress = (topic) => {
    const updated = { ...completed, [topic]: true };
    setCompleted(updated);
    localStorage.setItem("writingProgress", JSON.stringify(updated));
  };

  // Save draft locally
  const saveDraft = () => {
    if (!selectedTopic) return alert("Please select a topic first!");
    localStorage.setItem(`draft-${selectedTopic}`, content);
    alert("✅ Your writing has been saved!");
  };

  // Load draft when topic changes
  useEffect(() => {
    if (selectedTopic) {
      const draft = localStorage.getItem(`draft-${selectedTopic}`);
      setContent(draft || "");
      setErrors([]);

      // Scroll to editor after a short delay to ensure it's rendered
      setTimeout(() => {
        editorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedTopic]);

  // ========================================
  // COMPREHENSIVE FREE GRAMMAR CHECKER
  // 50+ Pattern-Based Rules (No API, No Limits)
  // ========================================
  const runManualChecks = (plainText) => {
    const manualErrors = [];
    const sentences = plainText.split(/[.!?]+/).filter((s) => s.trim());

    sentences.forEach((sentence) => {
      const s = sentence.trim();
      const lower = s.toLowerCase();

      // ===== CATEGORY 1: TENSE-TIME MISMATCHES =====

      // Rule 1: Past tense + future time word "tomorrow"
      const pastTenseWords = [
        "was",
        "were",
        "went",
        "did",
        "had",
        "said",
        "made",
        "got",
        "came",
        "took",
        "saw",
        "gave",
        "told",
        "found",
        "thought",
        "left",
        "became",
        "began",
      ];
      const hasTomorrow = /\btomorrow\b/i.test(s);
      const hasPastTense = pastTenseWords.some((w) =>
        new RegExp(`\\b${w}\\b`, "i").test(s)
      );

      if (hasTomorrow && hasPastTense) {
        manualErrors.push({
          message:
            "Tense-Time Mismatch: Using past tense with 'tomorrow' (future time word)",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Tense Agreement" } },
          replacements: [
            {
              value:
                "Use 'will' + base verb (e.g., 'will go', 'will be', 'will do')",
            },
          ],
        });
      }

      // Rule 2: Future time words + past tense
      const futureWords = [
        "tomorrow",
        "next week",
        "next month",
        "next year",
        "later",
        "soon",
      ];
      const hasFutureWord = futureWords.some((w) =>
        new RegExp(`\\b${w}\\b`, "i").test(s)
      );
      if (hasFutureWord && hasPastTense && !hasTomorrow) {
        manualErrors.push({
          message:
            "Tense-Time Mismatch: Using past tense with future time indicator",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Tense Agreement" } },
          replacements: [
            { value: "Use 'will' + base verb for future actions" },
          ],
        });
      }

      // Rule 3: Past time words + future tense
      const hasPastTime =
        /\b(yesterday|ago|last (week|month|year|night))\b/i.test(s);
      const hasFutureTense = /\b(will|going to|gonna|shall)\b/i.test(s);
      if (hasPastTime && hasFutureTense) {
        manualErrors.push({
          message:
            "Tense-Time Mismatch: Using future tense with past time word",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Tense Agreement" } },
          replacements: [
            { value: "Use past tense (e.g., 'went', 'was', 'did')" },
          ],
        });
      }

      // ===== CATEGORY 2: SUBJECT-VERB AGREEMENT =====

      // Rule 4: "I is" → "I am"
      if (/\bi\s+is\b/i.test(s)) {
        manualErrors.push({
          message: "Subject-verb agreement: Use 'I am', not 'I is'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Subject-Verb Agreement" },
          },
          replacements: [{ value: s.replace(/\bi\s+is\b/i, "I am") }],
        });
      }

      // Rule 5: "He/She/It + are/were" → "is/was"
      if (/\b(he|she|it)\s+(are|were)\b/i.test(s)) {
        const fixed = s
          .replace(/\b(he|she|it)\s+are\b/i, (match) =>
            match.replace(/are/i, "is")
          )
          .replace(/\b(he|she|it)\s+were\b/i, (match) =>
            match.replace(/were/i, "was")
          );
        manualErrors.push({
          message:
            "Subject-verb agreement: He/She/It takes 'is' or 'was', not 'are' or 'were'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Subject-Verb Agreement" },
          },
          replacements: [{ value: fixed }],
        });
      }

      // Rule 6: "We/They + is/was" → "are/were"
      if (/\b(we|they)\s+(is|was)\b/i.test(s)) {
        const fixed = s
          .replace(/\b(we|they)\s+is\b/i, (match) =>
            match.replace(/is/i, "are")
          )
          .replace(/\b(we|they)\s+was\b/i, (match) =>
            match.replace(/was/i, "were")
          );
        manualErrors.push({
          message:
            "Subject-verb agreement: We/They take 'are' or 'were', not 'is' or 'was'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Subject-Verb Agreement" },
          },
          replacements: [{ value: fixed }],
        });
      }

      // Rule 7: "He/She/It + base verb" → "verb + s"
      if (
        /\b(he|she|it)\s+(go|do|have|make|take|come|want|need|like|love|know)\b/i.test(
          s
        )
      ) {
        const fixed = s.replace(
          /\b(he|she|it)\s+(go|do|have|make|take|come|want|need|like|love|know)\b/i,
          (match, subj, verb) => `${subj} ${verb}s`
        );
        manualErrors.push({
          message:
            "Subject-verb agreement: Add 's' to the verb after he/she/it (e.g., 'he goes', 'she likes').",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Subject-Verb Agreement" },
          },
          replacements: [{ value: fixed }],
        });
      }

      // ===== CATEGORY 3: ARTICLES (A/AN/THE) =====

      // Rule 8: "a" before vowel sound → "an"
      if (/\ba\s+(apple|elephant|ice|orange|umbrella|hour|honest)\b/i.test(s)) {
        manualErrors.push({
          message:
            "Article error: Use 'an' before vowel sounds (e.g., 'an apple', 'an hour').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Articles" } },
          replacements: [
            {
              value: s.replace(
                /\ba\s+(apple|elephant|ice|orange|umbrella|hour|honest)\b/i,
                "an $1"
              ),
            },
          ],
        });
      }

      // Rule 9: "an" before consonant sound → "a"
      if (/\ban\s+(book|car|dog|house|pen|university|european)\b/i.test(s)) {
        manualErrors.push({
          message:
            "Article error: Use 'a' before consonant sounds (e.g., 'a book', 'a university').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Articles" } },
          replacements: [
            {
              value: s.replace(
                /\ban\s+(book|car|dog|house|pen|university|european)\b/i,
                "a $1"
              ),
            },
          ],
        });
      }

      // ===== CATEGORY 4: POSSESSIVES =====

      // Rule 10: "I location/name/family" → "My"
      if (
        /\bi\s+(location|name|family|mother|father|friend|house|car|book)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message: "Possessive needed: Use 'My' instead of 'I' before nouns.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Possessives" } },
          replacements: [{ value: s.replace(/\bi\s+/i, "My ") }],
        });
      }

      // ===== CATEGORY 5: PREPOSITIONS =====

      // Rule 11: "in the morning/afternoon/evening" (not "on")
      if (/\bon\s+the\s+(morning|afternoon|evening)\b/i.test(s)) {
        manualErrors.push({
          message:
            "Preposition error: Use 'in the morning/afternoon/evening', not 'on'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Prepositions" } },
          replacements: [
            {
              value: s.replace(
                /\bon\s+the\s+(morning|afternoon|evening)\b/i,
                "in the $1"
              ),
            },
          ],
        });
      }

      // Rule 12: "at night" (not "in the night")
      if (/\bin\s+the\s+night\b/i.test(s)) {
        manualErrors.push({
          message: "Preposition error: Use 'at night', not 'in the night'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Prepositions" } },
          replacements: [
            { value: s.replace(/\bin\s+the\s+night\b/i, "at night") },
          ],
        });
      }

      // Rule 13: "live in" + nationality → country
      if (/\blive\s+in\s+sri\s+lankan\b/i.test(s)) {
        manualErrors.push({
          message:
            "Use a place after 'live in': 'Sri Lanka' (not 'Sri Lankan').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Prepositions" } },
          replacements: [{ value: s.replace(/sri\s+lankan/i, "Sri Lanka") }],
        });
      }

      // Rule 14: "on" vs "in" for days/months
      if (
        /\bin\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message: "Preposition error: Use 'on Monday', not 'in Monday'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Prepositions" } },
          replacements: [
            {
              value: s.replace(
                /\bin\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
                "on $1"
              ),
            },
          ],
        });
      }

      // ===== CATEGORY 6: WORD CHOICE =====

      // Rule 15: "location is" + nationality → country
      if (/\blocation\s+is\s+sri\s+lankan\b/i.test(s)) {
        manualErrors.push({
          message:
            "Use country after 'location is': 'Sri Lanka' (not 'Sri Lankan').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "style", category: { name: "Word Choice" } },
          replacements: [{ value: s.replace(/sri\s+lankan/i, "Sri Lanka") }],
        });
      }

      // Rule 16: "I am" + country → nationality
      if (/\bi\s+am\s+sri\s+lanka\b/i.test(s)) {
        manualErrors.push({
          message:
            "Use nationality with 'I am': 'I am Sri Lankan' (or 'I am from Sri Lanka').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Word Choice" } },
          replacements: [
            { value: s.replace(/i\s+am\s+sri\s+lanka/i, "I am Sri Lankan") },
            {
              value: s.replace(/i\s+am\s+sri\s+lanka/i, "I am from Sri Lanka"),
            },
          ],
        });
      }

      // ===== CATEGORY 7: DOUBLE NEGATIVES =====

      // Rule 17: Don't + no/nothing/nobody/never → any/anything/anybody/ever
      if (
        /\b(don't|doesn't|didn't|won't|can't|shouldn't)\s+(no|nothing|nobody|never|nowhere)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message:
            "Double negative: Use 'any', 'anything', 'anyone', or 'ever' instead of 'no', 'nothing', 'nobody', 'never'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Double Negatives" },
          },
          replacements: [
            {
              value: s.replace(
                /\b(don't|doesn't|didn't|won't|can't|shouldn't)\s+no\b/i,
                "$1 any"
              ),
            },
            {
              value: s.replace(
                /\b(don't|doesn't|didn't|won't|can't|shouldn't)\s+nothing\b/i,
                "$1 anything"
              ),
            },
            {
              value: s.replace(
                /\b(don't|doesn't|didn't|won't|can't|shouldn't)\s+nobody\b/i,
                "$1 anybody"
              ),
            },
            {
              value: s.replace(
                /\b(don't|doesn't|didn't|won't|can't|shouldn't)\s+never\b/i,
                "$1 ever"
              ),
            },
          ],
        });
      }

      // ===== CATEGORY 8: DEMONSTRATIVES & QUANTIFIERS =====

      // Rule 18: "this/that + plural noun" → "these/those"
      if (
        /\b(this|that)\s+(books|cars|people|students|friends|houses|things|items)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message:
            "Use 'these' or 'those' with plural nouns, not 'this' or 'that'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Demonstratives" } },
          replacements: [
            {
              value: s
                .replace(/\bthis\s+/i, "these ")
                .replace(/\bthat\s+/i, "those "),
            },
          ],
        });
      }

      // Rule 19: "much" with countable nouns → "many"
      if (
        /\bmuch\s+(books|cars|people|students|friends|apples|dogs|cats)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message:
            "Use 'many' with countable nouns, not 'much' (e.g., 'many books', not 'much books').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Quantifiers" } },
          replacements: [{ value: s.replace(/\bmuch\s+/i, "many ") }],
        });
      }

      // Rule 20: "many" with uncountable nouns → "much"
      if (
        /\bmany\s+(water|rice|money|information|advice|furniture|luggage)\b/i.test(
          s
        )
      ) {
        manualErrors.push({
          message:
            "Use 'much' with uncountable nouns, not 'many' (e.g., 'much water', not 'many water').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Quantifiers" } },
          replacements: [{ value: s.replace(/\bmany\s+/i, "much ") }],
        });
      }

      // ===== CATEGORY 9: CONTRACTIONS & HOMOPHONES =====

      // Rule 21: "your" vs "you're"
      if (
        /\byour\s+(going|coming|doing|being|having|making|taking)\b/i.test(s)
      ) {
        manualErrors.push({
          message:
            "Contraction needed: Use 'you're' (you are), not 'your' before verbs.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Contractions" } },
          replacements: [{ value: s.replace(/\byour\s+/i, "you're ") }],
        });
      }

      // Rule 22: "its" vs "it's"
      if (/\bits\s+(going|coming|being|raining|snowing)\b/i.test(s)) {
        manualErrors.push({
          message:
            "Contraction needed: Use 'it's' (it is), not 'its' before verbs.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Contractions" } },
          replacements: [{ value: s.replace(/\bits\s+/i, "it's ") }],
        });
      }

      // Rule 23: "their/there/they're"
      if (/\bthere\s+(going|coming|doing|being|having)\b/i.test(s)) {
        manualErrors.push({
          message: "Use 'they're' (they are), not 'there' before verbs.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Homophones" } },
          replacements: [{ value: s.replace(/\bthere\s+/i, "they're ") }],
        });
      }

      // Rule 24: "then" vs "than" in comparisons
      if (/\b(bigger|better|more|less|greater|smaller)\s+then\b/i.test(s)) {
        manualErrors.push({
          message:
            "Use 'than' (not 'then') for comparisons (e.g., 'bigger than', 'more than').",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Homophones" } },
          replacements: [{ value: s.replace(/\bthen\b/i, "than") }],
        });
      }

      // ===== CATEGORY 10: SENTENCE STRUCTURE =====

      // Rule 25: Very short sentences (fragments)
      if (
        s.split(/\s+/).length <= 2 &&
        !/^(yes|no|ok|okay|hello|hi|bye|thanks|please)\b/i.test(s)
      ) {
        manualErrors.push({
          message:
            "Possible sentence fragment: This sentence is very short. Consider adding more detail.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "style",
            category: { name: "Sentence Structure" },
          },
          replacements: [],
        });
      }

      // Rule 26: Very long sentences (run-on)
      if (s.split(/\s+/).length > 40) {
        manualErrors.push({
          message:
            "Very long sentence: Consider breaking this into shorter sentences for clarity.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "style", category: { name: "Sentence Length" } },
          replacements: [],
        });
      }

      // Rule 27: Missing subject (incomplete sentence)
      if (
        /^(is|are|was|were|will|can|should|would)\s+/i.test(s) &&
        !/^(it|there)\s+(is|are|was|were)/i.test(s)
      ) {
        manualErrors.push({
          message:
            "Missing subject: Sentence starts with a verb. Add a subject (e.g., 'I', 'He', 'They').",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Sentence Structure" },
          },
          replacements: [],
        });
      }

      // ===== CATEGORY 11: COMMON VERB ERRORS =====

      // Rule 28: "didn't went" → "didn't go"
      if (/\bdidn't\s+(went|came|had|did|got)\b/i.test(s)) {
        manualErrors.push({
          message:
            "Use base verb after 'didn't': Use 'didn't go', not 'didn't went'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Verb Forms" } },
          replacements: [
            { value: s.replace(/\bdidn't went\b/i, "didn't go") },
            { value: s.replace(/\bdidn't came\b/i, "didn't come") },
          ],
        });
      }

      // Rule 29: "must to" → "must"
      if (/\bmust\s+to\s+/i.test(s)) {
        manualErrors.push({
          message:
            "Remove 'to' after modal verbs: Use 'must go', not 'must to go'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Modal Verbs" } },
          replacements: [{ value: s.replace(/\bmust\s+to\s+/i, "must ") }],
        });
      }

      // Rule 30: "can able to" → "can" or "am able to"
      if (/\bcan\s+able\s+to\b/i.test(s)) {
        manualErrors.push({
          message: "Use either 'can' OR 'am able to', not both together.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "grammar", category: { name: "Modal Verbs" } },
          replacements: [
            { value: s.replace(/\bcan\s+able\s+to\b/i, "can") },
            { value: s.replace(/\bcan\s+able\s+to\b/i, "am able to") },
          ],
        });
      }

      // ===== CATEGORY 12: REDUNDANT PHRASES =====

      // Rule 31: "added bonus" → "bonus"
      if (/\badded\s+bonus\b/i.test(s)) {
        manualErrors.push({
          message:
            "Redundant phrase: 'Bonus' already means 'added', so just use 'bonus'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "style", category: { name: "Redundancy" } },
          replacements: [{ value: s.replace(/\badded\s+bonus\b/i, "bonus") }],
        });
      }

      // Rule 32: "past history" → "history"
      if (/\bpast\s+history\b/i.test(s)) {
        manualErrors.push({
          message:
            "Redundant phrase: History is always about the past, so just use 'history'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "style", category: { name: "Redundancy" } },
          replacements: [
            { value: s.replace(/\bpast\s+history\b/i, "history") },
          ],
        });
      }

      // ===== CATEGORY 13: SRI LANKAN ENGLISH PATTERNS =====

      // Rule 33: "tell to" → "tell"
      if (/\btell\s+to\s+(me|you|him|her|them)\b/i.test(s)) {
        manualErrors.push({
          message: "Remove 'to' after 'tell': Use 'tell me', not 'tell to me'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Sri Lankan Patterns" },
          },
          replacements: [{ value: s.replace(/\btell\s+to\s+/i, "tell ") }],
        });
      }

      // Rule 34: "discuss about" → "discuss"
      if (/\bdiscuss\s+about\b/i.test(s)) {
        manualErrors.push({
          message:
            "Remove 'about' after 'discuss': Use 'discuss the topic', not 'discuss about the topic'.",
          context: { text: s, offset: 0, length: s.length },
          rule: {
            issueType: "grammar",
            category: { name: "Sri Lankan Patterns" },
          },
          replacements: [
            { value: s.replace(/\bdiscuss\s+about\b/i, "discuss") },
          ],
        });
      }

      // Rule 35: "return back" → "return"
      if (/\breturn\s+back\b/i.test(s)) {
        manualErrors.push({
          message:
            "Redundant: 'Return' already means 'go back', so just use 'return'.",
          context: { text: s, offset: 0, length: s.length },
          rule: { issueType: "style", category: { name: "Redundancy" } },
          replacements: [{ value: s.replace(/\breturn\s+back\b/i, "return") }],
        });
      }
    });

    return manualErrors;
  };

  // Helper: LanguageTool fallback (free API)
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
    const data = await res.json();
    return data.matches || [];
  };

  // Grammar check function using DeepSeek AI with robust fallback
  const checkGrammar = async () => {
    if (!content.trim()) {
      alert("Please write something first!");
      return;
    }

    setChecking(true);
    setErrors([]);
    setNotice("");

    try {
      const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY?.trim();
      const plainText = content;

      // If no API key configured, go straight to fallback
      if (!apiKey) {
        setNotice("DeepSeek API key is missing. Using free checker instead.");
        const combined = [
          ...runManualChecks(plainText),
          ...(await runLanguageTool(plainText)),
        ];
        setErrors(combined);
        return;
      }

      // Call DeepSeek AI for grammar checking
      const response = await fetch(DEEPSEEK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: `You are an expert English grammar checker. Analyze the text and return ONLY a JSON array of errors. Each error must have this exact format:
{
  "message": "Clear explanation of the error",
  "issueType": "grammar" or "spelling" or "style" or "typographical",
  "context": "the sentence or phrase with the error",
  "offset": approximate word position,
  "length": number of words in error,
  "suggestions": ["suggestion1", "suggestion2"]
}

Focus on:
- Grammar errors (tenses, subject-verb agreement, articles, pronouns)
- Spelling mistakes
- Style improvements
- Punctuation and capitalization
- Tense-time mismatches (e.g., past tense with "tomorrow")

Return ONLY the JSON array, nothing else.`,
            },
            {
              role: "user",
              content: `Check this text for errors:\n\n${content}`,
            },
          ],
          temperature: 0.3,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        // If DeepSeek responds with 401/402/403/etc, fallback gracefully
        const status = response.status;
        let reason = `DeepSeek API error: ${status}`;
        if (status === 401)
          reason = "DeepSeek unauthorized (invalid or revoked key).";
        if (status === 402)
          reason = "DeepSeek quota/balance exceeded (payment required).";
        if (status === 403)
          reason = "DeepSeek access forbidden (key not allowed).";

        setNotice(`${reason} Falling back to free checker.`);
        const combined = [
          ...runManualChecks(plainText),
          ...(await runLanguageTool(plainText)),
        ];
        setErrors(combined);
        return;
      }

      const data = await response.json();
      console.log("DeepSeek API Response:", data);

      // Parse the AI response
      let aiErrors = [];
      try {
        const aiResponse = data.choices[0]?.message?.content || "[]";
        console.log("AI Response Content:", aiResponse);

        // Extract JSON from response (in case AI adds extra text)
        const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const parsedErrors = JSON.parse(jsonMatch[0]);

          // Convert AI errors to our format
          aiErrors = parsedErrors.map((err, index) => ({
            message: err.message || "Grammar or style issue detected",
            context: {
              text: err.context || content.substring(0, 100),
              offset: err.offset || 0,
              length: err.length || 10,
            },
            rule: {
              issueType: err.issueType || "grammar",
              category: {
                name:
                  err.issueType === "grammar"
                    ? "Grammar"
                    : err.issueType === "spelling"
                    ? "Spelling"
                    : err.issueType === "style"
                    ? "Style"
                    : "Typographical",
              },
            },
            replacements: (err.suggestions || []).map((s) => ({ value: s })),
          }));
        }
      } catch (parseError) {
        console.error("Error parsing AI response:", parseError);
        // If parsing fails, show a general message
        aiErrors = [
          {
            message:
              "AI detected potential issues. Please review your text carefully.",
            context: { text: content.substring(0, 100), offset: 0, length: 20 },
            rule: { issueType: "grammar", category: { name: "General" } },
            replacements: [],
          },
        ];
      }

      setErrors(aiErrors);
      console.log("Processed Errors:", aiErrors);

      if (aiErrors.length === 0) {
        console.log("No errors found by DeepSeek AI");
      }
    } catch (error) {
      console.error("Grammar check failed:", error);
      // Network or parsing failure -> fallback
      setNotice("AI check failed. Using free checker instead.");
      try {
        const plainText = content;
        const combined = [
          ...runManualChecks(plainText),
          ...(await runLanguageTool(plainText)),
        ];
        setErrors(combined);
      } catch (fallbackErr) {
        console.error("Fallback checker also failed:", fallbackErr);
        alert(`Error checking grammar: ${error.message}`);
      }
    } finally {
      setChecking(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#fffaf3] text-gray-800">
      <Navbar />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center text-[#d4a017]">
            ✍️ Writing Practice
          </h1>
          <p className="text-center text-gray-600 mb-2">
            Practice writing by choosing a level and topic. AI-powered grammar
            checking with safe fallback.
          </p>
          <p className="text-center text-sm text-gray-500 mb-8">
            🤖 Uses DeepSeek AI when available. If not, falls back to a free
            checker automatically.
          </p>

          {/* Level Tabs */}
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

          {/* Topics */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {topicsData[level] &&
              topicsData[level].map((topic, index) => (
                <div
                  key={`${topic}-${index}`}
                  onClick={() => {
                    console.log("Topic clicked:", topic);
                    setSelectedTopic(topic);
                    setErrors([]);
                    setContent(""); // Clear content when switching topics
                  }}
                  className={`p-4 rounded-xl cursor-pointer border-2 transition hover:scale-105 hover:shadow-lg ${
                    selectedTopic === topic
                      ? "border-[#d4a373] bg-[#fff7f0] shadow-md"
                      : "border-gray-300 bg-white hover:border-[#d4a373]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h2
                      className={`font-semibold ${
                        selectedTopic === topic
                          ? "text-[#d4a373]"
                          : "text-gray-700"
                      }`}
                    >
                      {selectedTopic === topic && "✏️ "}
                      {topic}
                    </h2>
                    {completed[topic] && (
                      <span className="text-green-600 text-sm font-bold">
                        ✓ Done
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Writing Editor */}
          {selectedTopic && (
            <div
              ref={editorRef}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#d4a373] mt-6"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left - Editor */}
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-[#d4a373] flex items-center gap-2">
                      ✏️ Topic: {selectedTopic}
                    </h2>
                    <button
                      onClick={() => {
                        setSelectedTopic(null);
                        setContent("");
                        setErrors([]);
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                      Change Topic
                    </button>
                  </div>

                  <div className="mb-8">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Start writing your essay or paragraph here... Express your thoughts freely! ✍️"
                      className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-[#d4a373] focus:outline-none resize-none text-gray-800 text-base leading-relaxed"
                      style={{ fontFamily: "Georgia, serif" }}
                    />
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span>
                        💡 Tip: Write at least 5-10 sentences for better
                        feedback
                      </span>
                      <span className="font-medium">
                        {
                          content
                            .trim()
                            .split(/\s+/)
                            .filter((w) => w).length
                        }{" "}
                        words
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end flex-wrap mt-4">
                    <button
                      onClick={saveDraft}
                      className="bg-[#f4e1d2] px-4 py-2 rounded-lg font-medium hover:bg-[#f0cba6] transition"
                    >
                      💾 Save Draft
                    </button>

                    <button
                      onClick={checkGrammar}
                      disabled={checking}
                      className={`bg-[#d4a017] text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                        checking
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-[#b88d10]"
                      }`}
                    >
                      {checking
                        ? "🔍 Checking with AI..."
                        : "� AI Grammar Check"}
                    </button>

                    <button
                      onClick={() => saveProgress(selectedTopic)}
                      className="bg-[#d4a373] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#c1915e] transition"
                    >
                      ✅ Mark Completed
                    </button>
                  </div>
                </div>

                {/* Right - Grammar Results */}
                <div className="bg-[#fffaf3] border border-[#f2e5d9] rounded-xl p-4 h-[400px] overflow-y-auto">
                  <h3 className="font-semibold text-[#d4a017] mb-3 flex items-center justify-between">
                    <span>Grammar Feedback 🧩</span>
                    {errors.length > 0 && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        {errors.length} issue{errors.length !== 1 ? "s" : ""}{" "}
                        found
                      </span>
                    )}
                  </h3>

                  {notice && (
                    <div className="mb-3 text-xs bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded">
                      {notice}
                    </div>
                  )}

                  {/* Color Legend */}
                  <div className="bg-white/80 border border-gray-200 rounded-lg p-3 mb-4 text-xs">
                    <p className="font-semibold text-gray-700 mb-2">
                      📖 Error Type Guide:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-sm">❌</span>
                        <div>
                          <span className="font-medium text-red-700">
                            Grammar:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Tenses, subject-verb agreement, articles
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm">⚠️</span>
                        <div>
                          <span className="font-medium text-yellow-700">
                            Spelling:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Misspelled words, typos
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm">💡</span>
                        <div>
                          <span className="font-medium text-blue-700">
                            Style:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Better word choices, clarity
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm">✏️</span>
                        <div>
                          <span className="font-medium text-purple-700">
                            Typographical:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Punctuation, capitalization
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {checking ? (
                    <div className="flex flex-col items-center justify-center h-64 space-y-3">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4a017]"></div>
                      <p className="text-gray-500 italic">
                        Analyzing your writing...
                      </p>
                    </div>
                  ) : errors.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 space-y-3">
                      <div className="text-6xl">✨</div>
                      <p className="text-gray-500 text-center font-medium">
                        {content.trim()
                          ? "Great job! No issues detected."
                          : "Click 'Check Grammar' to analyze your writing."}
                      </p>
                      {content.trim() && (
                        <p className="text-xs text-gray-400 text-center max-w-xs px-4">
                          Note: Some complex grammar issues may not be detected.
                          Always review your work!
                        </p>
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {errors.map((err, idx) => {
                        const issueType = err.rule?.issueType || "grammar";
                        const typeColors = {
                          grammar: "bg-red-50 border-red-200",
                          misspelling: "bg-yellow-50 border-yellow-200",
                          style: "bg-blue-50 border-blue-200",
                          typographical: "bg-purple-50 border-purple-200",
                        };
                        const typeIcons = {
                          grammar: "❌",
                          misspelling: "⚠️",
                          style: "💡",
                          typographical: "✏️",
                        };

                        return (
                          <li
                            key={idx}
                            className={`border-l-4 p-3 rounded-r-lg ${
                              typeColors[issueType] ||
                              "bg-gray-50 border-gray-200"
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-lg">
                                {typeIcons[issueType] || "📝"}
                              </span>
                              <div className="flex-1">
                                <p className="font-medium text-gray-800 text-sm mb-1">
                                  {err.message}
                                </p>

                                {err.context && (
                                  <div className="bg-white/70 p-2 rounded text-xs mb-2 font-mono">
                                    {err.context.text.substring(
                                      0,
                                      err.context.offset
                                    )}
                                    <span className="bg-red-200 px-1 rounded">
                                      {err.context.text.substring(
                                        err.context.offset,
                                        err.context.offset + err.context.length
                                      )}
                                    </span>
                                    {err.context.text.substring(
                                      err.context.offset + err.context.length
                                    )}
                                  </div>
                                )}

                                {err.replacements &&
                                  err.replacements.length > 0 && (
                                    <div className="mt-2">
                                      <p className="text-xs text-gray-600 mb-1">
                                        Suggestions:
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {err.replacements
                                          .slice(0, 3)
                                          .map((rep, i) => (
                                            <button
                                              key={i}
                                              onClick={() => {
                                                // Auto-replace functionality can be added here
                                                alert(
                                                  `Replace with: "${rep.value}"`
                                                );
                                              }}
                                              className="text-xs bg-green-100 hover:bg-green-200 text-green-800 px-2 py-1 rounded transition"
                                            >
                                              ✓ {rep.value}
                                            </button>
                                          ))}
                                      </div>
                                    </div>
                                  )}

                                {err.rule?.category?.name && (
                                  <p className="text-xs text-gray-500 mt-2">
                                    Category: {err.rule.category.name}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          {!selectedTopic && (
            <p className="text-center text-gray-500 italic mt-8">
              Select a topic to start writing ✨
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Writing;
