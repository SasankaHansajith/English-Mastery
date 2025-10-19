import React, { useState } from "react";
import { XCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import PastContinuousImg from "../assets/Images/PastContinous.png";
import PastPerfectImg from "../assets/Images/PastPerfect.png";
import PastPerfectContImg from "../assets/Images/PastPerfectCont.png";
import PresentPerfectContImg from "../assets/Images/PresentPerfectCont.png";
import FuturePerfectContImg from "../assets/Images/FuturePerfectCont.png";
import SimplefutureImg from "../assets/Images/Simplefuture.png";
import SimplepresentImg from "../assets/Images/Simplepresent.png";
import SimplePastImg from "../assets/Images/SimplePast.png";
import FutureperfectImg from "../assets/Images/Futureperfect.png";
import FutureContinousImg from "../assets/Images/FutureContinous.png";
import PresentperfectImg from "../assets/Images/Presentperfect.png";
import PresentContinousImg from "../assets/Images/PresentContinous.png";

export default function Grammar() {
  const [activeTopic, setActiveTopic] = useState("Tenses");
  const [selectedTense, setSelectedTense] = useState(null);

  const topics = [
    "Parts of Speech",
    "Tenses",
    "Articles",
    "Prepositions",
    "Sentence Structure",
    "Question Formation",
    "Active Voice",
    "Passive Voice",
    "Reported Speech",
    "Conditionals",
    "Modals, Gerunds & more",
    "Conjunctions & Linking Words",
    "Comparatives & Superlatives",
    "Clauses",
    "Phrasal Verbs & Idioms",
    "Punctuation & Capitalization",
    "Common Grammar Mistakes",
  ];

  // ----- ARTICLES DATA -----
  const articlesData = {
    title: "Articles in English",
    english:
      "Articles are words that define a noun as specific or unspecific. There are two types: Definite (the) and Indefinite (a, an).",
    sinhala:
      "Articles කියන්නේ නාමපදයක් විශේෂිත (specific)ද නොවිශේෂිත (unspecific)ද කියලා පෙන්නන වචන වේ. ඒ දෙවර්ගයකි: Definite Article (the) සහ Indefinite Articles (a, an).",
    categories: [
      {
        name: "Indefinite Articles (A / An)",
        english:
          "Used when talking about something for the first time or something not specific.",
        sinhala:
          "පළමු වතාවට කතා කරන දේකට හෝ විශේෂිත නොවන දේකට භාවිතා කරනු ලබනවා.",
        rules: [
          "Use 'a' before consonant sounds (e.g., a car, a dog).",
          "Use 'an' before vowel sounds (e.g., an apple, an umbrella).",
        ],
        examples: [
          {
            en: "I saw a dog in the park.",
            si: "මම උද්‍යානයේ කුකුළාක් දැක්කා.",
          },
          { en: "She ate an apple.", si: "ඇය ඇපල් එකක් කෑවා." },
          { en: "He bought a book.", si: "ඔහු පොතක් ගත්තා." },
        ],
      },
      {
        name: "Definite Article (The)",
        english:
          "Used when talking about something specific or already known to the listener.",
        sinhala: "පේන දේකට, හෝ කලින්ම දන්නා විශේෂිත දේකට භාවිතා කරනු ලබනවා.",
        rules: [
          "Use 'the' before something mentioned before or known (e.g., the sun, the moon).",
          "Use 'the' before superlatives (e.g., the best, the tallest).",
        ],
        examples: [
          {
            en: "The sun rises in the east.",
            si: "සූර්යයා නැගෙන දිගින් නැගෙනවා.",
          },
          { en: "The book on the table is mine.", si: "මේසය මත ඇති පොත මගේ." },
          { en: "He is the best player.", si: "ඔහු හොඳම ක්‍රීඩකයා." },
        ],
      },
    ],
  };

  // -------------------- ALL 12 TENSES --------------------
  const tenses = [
    {
      title: "Simple Present Tense",
      english:
        "Used to describe habits, general truths, and repeated actions. Structure: Subject + base verb (+s/es).",
      sinhala:
        "නිතර සිදුවන ක්‍රියා, සාමාන්‍ය සත්‍යයන් සහ ආචාර විස්තර කිරීමට භාවිතා වේ.",
      structureImage: SimplepresentImg,
      details: {
        affirmative: [
          {
            en: "I play football every day.",
            si: "මම දිනපතා පාපන්දු ක්‍රීඩා කරනවා.",
          },
          { en: "She reads books.", si: "ඇය පොත් කියවනවා." },
        ],
        negative: [
          { en: "I do not play football.", si: "මම පාපන්දු ක්‍රීඩා නොකරනවා." },
          { en: "She doesn’t read books.", si: "ඇය පොත් නොකියවනවා." },
        ],
        question: [
          { en: "Do you play football?", si: "ඔයා පාපන්දු ක්‍රීඩා කරනවද?" },
          { en: "Does she read books?", si: "ඇය පොත් කියවනවද?" },
        ],
      },
    },
    {
      title: "Present Continuous Tense",
      english:
        "Describes actions happening now or around this moment. Structure: Subject + am/is/are + verb(+ing).",
      sinhala: "දැන් හෝ මේ මොහොතේ සිදුවන ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PresentContinousImg,
      details: {
        affirmative: [
          { en: "I am studying English.", si: "මම ඉංග්‍රීසි ඉගෙන ගන්නවා." },
          { en: "She is cooking rice.", si: "ඇය බත් රඳවනවා." },
        ],
        negative: [
          { en: "I am not studying.", si: "මම ඉගෙන ගන්නෙ නැහැ." },
          { en: "She isn’t cooking rice.", si: "ඇය බත් රඳවන්නේ නැහැ." },
        ],
        question: [
          { en: "Are you studying?", si: "ඔයා ඉගෙන ගන්නවද?" },
          { en: "Is she cooking rice?", si: "ඇය බත් රඳවනවද?" },
        ],
      },
    },
    {
      title: "Present Perfect Tense",
      english:
        "Used for actions completed at an unspecified time. Structure: Subject + has/have + past participle.",
      sinhala: "නිශ්චිත නොවන වේලාවක අවසන් වූ ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PresentperfectImg,
      details: {
        affirmative: [
          {
            en: "I have finished my homework.",
            si: "මම ගෘහකාර්යය අවසන් කරලා.",
          },
          { en: "She has visited Kandy.", si: "ඇය මහනුවර ගිහින් තියෙනවා." },
        ],
        negative: [
          { en: "I haven’t finished yet.", si: "මම තව අවසන් කරලා නැහැ." },
          { en: "She hasn’t visited Kandy.", si: "ඇය මහනුවර ගිහින් නැහැ." },
        ],
        question: [
          { en: "Have you finished?", si: "ඔයා අවසන් කරලාද?" },
          { en: "Has she visited Kandy?", si: "ඇය මහනුවර ගියාද?" },
        ],
      },
    },
    {
      title: "Present Perfect Continuous Tense",
      english:
        "Used for actions that started in the past and continue to the present. Structure: Subject + has/have been + verb(+ing).",
      sinhala:
        "අතීතයේ ආරම්භවී දැන් දක්වා පවතින ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PresentPerfectContImg,
      details: {
        affirmative: [
          {
            en: "I have been studying since morning.",
            si: "මම උදේ සිට ඉගෙන ගන්නවා.",
          },
        ],
        negative: [
          { en: "I haven’t been studying.", si: "මම ඉගෙන ගන්නෙ නැහැ." },
        ],
        question: [{ en: "Have you been studying?", si: "ඔයා ඉගෙන ගන්නවද?" }],
      },
    },
    {
      title: "Simple Past Tense",
      english:
        "Describes completed actions in the past. Structure: Subject + past verb.",
      sinhala: "අතීතයේ අවසන් වූ ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: SimplePastImg,
      details: {
        affirmative: [
          { en: "I went to school yesterday.", si: "මම ඊයේ පාසලට ගියා." },
        ],
        negative: [
          { en: "I did not go to school.", si: "මම පාසලට ගියේ නැහැ." },
        ],
        question: [{ en: "Did you go to school?", si: "ඔයා පාසලට ගියාද?" }],
      },
    },
    {
      title: "Past Continuous Tense",
      english:
        "Used for actions happening at a specific time in the past. Structure: Subject + was/were + verb(+ing).",
      sinhala: "අතීතයේ විශේෂ වේලාවකදී පවතින ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PastContinuousImg,
      details: {
        affirmative: [
          {
            en: "I was reading when he called.",
            si: "ඔහු අමතා සිටියදී මම කියවමින් හිටියා.",
          },
        ],
        negative: [{ en: "I wasn’t reading.", si: "මම කියවමින් හිටියේ නැහැ." }],
        question: [{ en: "Were you reading?", si: "ඔයා කියවමින් හිටියද?" }],
      },
    },
    {
      title: "Past Perfect Tense",
      english:
        "Describes actions completed before another past action. Structure: Subject + had + past participle.",
      sinhala:
        "අතීතයේ වෙනත් ක්‍රියාවකට පෙර සිදුවූ ක්‍රියාවක් විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PastPerfectImg,
      details: {
        affirmative: [
          {
            en: "I had eaten before he arrived.",
            si: "ඔහු පැමිණීමට පෙර මම කෑවා.",
          },
        ],
        negative: [
          {
            en: "I hadn’t eaten before he arrived.",
            si: "ඔහු පැමිණීමට පෙර මම කා නැහැ.",
          },
        ],
        question: [
          {
            en: "Had you eaten before he arrived?",
            si: "ඔහු පැමිණීමට පෙර ඔයා කාද?",
          },
        ],
      },
    },
    {
      title: "Past Perfect Continuous Tense",
      english:
        "Used for continuous action before another past action. Structure: Subject + had been + verb(+ing).",
      sinhala:
        "අතීතයේ වෙනත් ක්‍රියාවකට පෙර පවතිමින් තිබූ ක්‍රියාවක් විස්තර කිරීමට භාවිතා වේ.",
      structureImage: PastPerfectContImg,

      details: {
        affirmative: [
          {
            en: "I had been studying for two hours before dinner.",
            si: "ආහාරයට පෙර පැය දෙකක් ඉගෙන ගන්න හිටියා.",
          },
        ],
        negative: [
          { en: "I hadn’t been studying.", si: "මම ඉගෙන ගන්න හිටියේ නැහැ." },
        ],
        question: [
          { en: "Had you been studying?", si: "ඔයා ඉගෙන ගන්න හිටියද?" },
        ],
      },
    },
    {
      title: "Future Simple Tense",
      english:
        "Describes actions that will happen in the future. Structure: Subject + will + base verb.",
      sinhala: "අනාගතයේ සිදුවන ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: SimplefutureImg,
      details: {
        affirmative: [
          { en: "I will call you tomorrow.", si: "මම ඔයාට හෙට ඇමතන්නම්." },
        ],
        negative: [
          { en: "I will not call you tomorrow.", si: "මම හෙට ඇමතන්නෙ නැහැ." },
        ],
        question: [
          { en: "Will you call me tomorrow?", si: "ඔයා මට හෙට ඇමතනවද?" },
        ],
      },
    },
    {
      title: "Future Continuous Tense",
      english:
        "Used for actions that will be happening at a specific time in the future. Structure: Subject + will be + verb(+ing).",
      sinhala: "අනාගතයේ විශේෂ වේලාවකදී පවතින ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: FutureContinousImg,
      details: {
        affirmative: [
          {
            en: "I will be studying at 8 p.m.",
            si: "මම රාත්‍රි 8ට ඉගෙන ගන්නවා.",
          },
        ],
        negative: [
          {
            en: "I won’t be studying at 8 p.m.",
            si: "මම රාත්‍රි 8ට ඉගෙන ගන්නෙ නැහැ.",
          },
        ],
        question: [{ en: "Will you be studying?", si: "ඔයා ඉගෙන ගන්නවද?" }],
      },
    },
    {
      title: "Future Perfect Tense",
      english:
        "Used for actions that will be completed before a specific future time. Structure: Subject + will have + past participle.",
      sinhala:
        "අනාගතයේ විශේෂ වේලාවකට පෙර අවසන් වන ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: FutureperfectImg,
      details: {
        affirmative: [
          {
            en: "I will have finished my work by 5 p.m.",
            si: "මම සවස 5ට වැඩ අවසන් කරලා.",
          },
        ],
        negative: [
          {
            en: "I won’t have finished by 5 p.m.",
            si: "මම සවස 5ට අවසන් කරලා නැහැ.",
          },
        ],
        question: [
          {
            en: "Will you have finished by 5 p.m.?",
            si: "ඔයා සවස 5ට අවසන් කරලාද?",
          },
        ],
      },
    },
    {
      title: "Future Perfect Continuous Tense",
      english:
        "Used to describe actions continuing up to a point in the future. Structure: Subject + will have been + verb(+ing).",
      sinhala:
        "අනාගතයේ විශේෂ වේලාවක් දක්වා පවතින ක්‍රියා විස්තර කිරීමට භාවිතා වේ.",
      structureImage: FuturePerfectContImg,
      details: {
        affirmative: [
          {
            en: "I will have been studying for 3 hours by 9 p.m.",
            si: "මම රාත්‍රි 9ට පැය 3ක් ඉගෙන ගන්නවා.",
          },
        ],
        negative: [
          { en: "I won’t have been studying.", si: "මම ඉගෙන ගන්නෙ නැහැ." },
        ],
        question: [
          { en: "Will you have been studying?", si: "ඔයා ඉගෙන ගන්නවද?" },
        ],
      },
    },
  ];

  // ----- PREPOSITIONS DATA -----
  const prepositionsData = {
    title: "Prepositions in English",
    english:
      "Prepositions are words used before nouns or pronouns to show their relationship with other words in the sentence.",
    sinhala:
      "Prepositions කියන්නේ නාමපදයකට හෝ සර්වනාමයකට පෙර යොදා ඒක වෙනත් වචන සමඟ සම්බන්ධ කරන වචන වේ.",
    categories: [
      {
        name: "1. Prepositions of Place (ස්ථානය)",
        english: "Used to show where something is located.",
        sinhala: "දෙයක් කොහේද කියලා පෙන්වන්න භාවිතා කරනවා.",
        rules: [
          "Use 'in' for enclosed spaces (e.g., in the room, in the box).",
          "Use 'on' for surfaces (e.g., on the table, on the wall).",
          "Use 'at' for points (e.g., at the bus stop, at home).",
        ],
        examples: [
          { en: "The cat is in the box.", si: "බළලා කොටුවේ තුළ ඉන්නවා." },
          { en: "The book is on the table.", si: "පොත මේසය මත තියෙනවා." },
          { en: "She is at the bus stop.", si: "ඇය බස් නැවතුම අසල ඉන්නවා." },
        ],
      },
      {
        name: "2. Prepositions of Time (කාලය)",
        english: "Used to indicate when something happens.",
        sinhala: "ක්‍රියාවක් කාලය පෙන්වන්න භාවිතා කරනවා.",
        rules: [
          "Use 'in' for months, years, and seasons (e.g., in June, in 2020).",
          "Use 'on' for days and dates (e.g., on Monday, on 5th May).",
          "Use 'at' for specific times (e.g., at 6 o’clock, at night).",
        ],
        examples: [
          { en: "I was born in 2000.", si: "මම 2000 වසරේ උපන්වා." },
          { en: "We met on Monday.", si: "අපි සඳුදා හමු වුණා." },
          { en: "He sleeps at night.", si: "ඔහු රාත්‍රියේ නිදාගනී." },
        ],
      },
      {
        name: "3. Prepositions of Direction (දෙස)",
        english: "Used to show movement from one place to another.",
        sinhala: "එක් තැනකින් අනෙක් තැනකට යන චලනය පෙන්වන්න භාවිතා කරයි.",
        rules: [
          "Use 'to' for movement towards a place (e.g., go to school).",
          "Use 'into' for entering something (e.g., jump into the pool).",
          "Use 'towards' to show direction (e.g., walk towards the station).",
        ],
        examples: [
          { en: "He is going to school.", si: "ඔහු පාසලට යනවා." },
          {
            en: "The dog jumped into the river.",
            si: "බල්ලා ගඟට තුළට පනින්නා.",
          },
          {
            en: "They ran towards the park.",
            si: "ඔවුන් උද්‍යානය දෙසට ධාවනය වුණා.",
          },
        ],
      },
      {
        name: "4. Prepositions of Manner (කෙසේද යන්න)",
        english: "Used to show how something is done.",
        sinhala: "ක්‍රියාවක් කෙසේද යන්න පෙන්වන්න භාවිතා කරයි.",
        rules: [
          "Use 'by' to show means (e.g., by bus, by car).",
          "Use 'with' to show the instrument used (e.g., with a knife).",
        ],
        examples: [
          { en: "She goes to work by bus.", si: "ඇය බස් මඟින් වැඩට යනවා." },
          {
            en: "He cut the apple with a knife.",
            si: "ඔහු කත්තක් සමඟ පපොල් කපනවා.",
          },
          {
            en: "She painted with a brush.",
            si: "ඇය පින්තූරය බුරුසුවකින් අඳිනවා.",
          },
        ],
      },
      {
        name: "5. Prepositions of Reason/Purpose (හේතුව/අරමුණ)",
        english: "Used to express why something happens.",
        sinhala: "ක්‍රියාවක් සිදු වීමේ හේතුව හෝ අරමුණ පෙන්වන්න භාවිතා කරයි.",
        rules: [
          "Use 'for' to show purpose (e.g., for health, for fun).",
          "Use 'because of' to show reason (e.g., because of the rain).",
        ],
        examples: [
          {
            en: "I bought a gift for my mother.",
            si: "මම මගේ අම්මට තෑග්ගක් ගත්තා.",
          },
          {
            en: "The match was canceled because of the rain.",
            si: "වර්ෂාව නිසා තරගය අවලංගු වුණා.",
          },
          { en: "He works hard for his family.", si: "ඔහු පවුල සඳහා කැපවෙයි." },
        ],
      },
    ],
  };

  // ----- ACTIVE VOICE DATA -----
  const activeVoiceData = {
    title: "Active Voice",
    english:
      "Active voice is used when the subject performs the action. It makes sentences clear and direct.",
    sinhala:
      "Active voice යනු විෂයය ක්‍රියාව කරන්නේ විට භාවිතා වන ආකාරයයි. මෙය වාක්‍යය පැහැදිලි හා සෘජු කරයි.",
    structure: {
      english: "Subject + Verb + Object",
      sinhala: "විෂයය + ක්‍රියාපදය + කර්මය",
      example: {
        en: "The boy kicks the ball.",
        si: "කොල්ලා බෝලය අරිනවා.",
      },
    },
    notes: [
      {
        en: "Use Active Voice to make sentences sound stronger and more natural.",
        si: "වාක්‍යය ශක්තිමත් හා ස්වාභාවික කිරීමට Active Voice භාවිතා කරන්න.",
      },
      {
        en: "Common in storytelling, news, and daily speech.",
        si: "කතාන්දර, පුවත් සහ දෛනික කතාබහවලදී බහුලව යොදාගනී.",
      },
    ],
    tenseExamples: [
      {
        tense: "Present Simple",
        general: "Expresses actions happening regularly or facts.",
        activeVoice: "Subject performs the action itself, showing who does it.",
        example: "She writes a letter.",
        sinhala: "ඇය ලිපියක් ලියනවා.",
      },
      {
        tense: "Present Continuous",
        general: "Shows actions happening right now or around the present.",
        activeVoice:
          "Subject is actively performing the action at this moment.",
        example: "She is reading a book.",
        sinhala: "ඇය පොතක් කියවමින් සිටිනවා.",
      },
      {
        tense: "Present Perfect",
        general:
          "Describes actions completed recently or with relevance to now.",
        activeVoice: "Subject has performed the action; focus on completion.",
        example: "She has read the book.",
        sinhala: "ඇය පොත කියවා අවසන් කරලා.",
      },
      {
        tense: "Past Simple",
        general:
          "Describes actions that happened at a specific time in the past.",
        activeVoice: "Subject performed the action in the past.",
        example: "She wrote a book.",
        sinhala: "ඇය පොතක් ලියා.",
      },
      {
        tense: "Past Continuous",
        general: "Shows actions ongoing at a particular past time.",
        activeVoice: "Subject was actively performing the action in the past.",
        example: "She was writing a book.",
        sinhala: "ඇය පොතක් ලියමින් සිටියා.",
      },
      {
        tense: "Future Simple",
        general: "Indicates actions that will happen in the future.",
        activeVoice: "Subject will perform the action in the future.",
        example: "She will write a book.",
        sinhala: "ඇය පොතක් ලියයි.",
      },
      {
        tense: "Future Continuous",
        general: "Shows actions that will be ongoing at a future time.",
        activeVoice: "Subject will be performing the action in the future.",
        example: "She will be reading a book at 5 PM.",
        sinhala: "ඇය සවස 5 ට පොතක් කියවමින් සිටීවි.",
      },
      {
        tense: "Future Perfect",
        general:
          "Indicates actions that will be completed before a future time.",
        activeVoice: "Subject will have completed the action by that time.",
        example: "She will have finished the book by tomorrow.",
        sinhala: "ඇය හෙට පෙර පොත අවසන් කරලා තිබෙනවා.",
      },
    ],

    mistakes: [
      {
        wrong: "The book reads by her.",
        correct: "She reads the book.",
        sinhala: "වැරදි වාක්‍යය හා නිවැරදි වාක්‍යය අතර වෙනස.",
      },
    ],

    comparison: {
      title: "Key Differences: Simple vs Active Voice (All Tenses)",
      table: [
        {
          aspect: "Definition",
          simple: "Shows the tense itself.",
          active: "Shows tense + subject actively performing the action.",
        },
        {
          aspect: "Focus/Emphasis",
          simple: "Time or frequency of action.",
          active: "Who is performing the action.",
        },
        {
          aspect: "Example (Present Simple)",
          simple: "It rains a lot in April.",
          active: "She writes a letter every day.",
        },
        {
          aspect: "Example (Past Simple)",
          simple: "It rained yesterday.",
          active: "She wrote a book yesterday.",
        },
        {
          aspect: "Example (Future Simple)",
          simple: "It will rain tomorrow.",
          active: "She will write a book tomorrow.",
        },
      ],
    },
  };

  // ----- PASSIVE VOICE DATA -----
  const passiveVoiceData = {
    title: "Passive Voice",
    english:
      "Passive voice is used when the subject receives the action rather than doing it. It focuses on the action or the object rather than the doer.",
    sinhala:
      "Passive Voice යනු විෂයය ක්‍රියාවක් ලබන විට භාවිතා වන ආකාරයයි. මෙහි අවධානය යොමු වන්නේ ක්‍රියාවට හෝ කර්මයට වන අතර, ක්‍රියාව කරන පුද්ගලයාට නොවෙයි.",

    structure: {
      english: "Object + Verb (to be) + Past Participle + (by Subject)",
      sinhala: "කර්මය + 'to be' ක්‍රියාපදය + Past Participle + (විෂයය)",
      example: {
        en: "The ball is kicked by the boy.",
        si: "බෝලය කොල්ලා විසින් අරින ලදේ ය.",
      },
    },

    notes: [
      {
        en: "Use Passive Voice when the doer is unknown, unimportant, or less relevant than the action.",
        si: "ක්‍රියාව කරන පුද්ගලයා නොදන්නා, අසාධාරණ හෝ අසම්බන්ධ වන විට Passive Voice භාවිතා කරයි.",
      },
      {
        en: "Common in formal writing, news reports, and scientific texts.",
        si: "සාමාන්‍යයෙන් විද්‍යාත්මක ලේඛන, පුවත් හා නිල ලිපි වලදී බහුලව භාවිතා වේ.",
      },
    ],

    tenseExamples: [
      {
        tense: "Present Simple",
        general: "Expresses actions happening regularly or facts.",
        passiveVoice: "The subject receives the action in present time.",
        example: "Letters are written by her.",
        sinhala: "ලිපි ඇය විසින් ලියනු ලබයි.",
      },
      {
        tense: "Present Continuous",
        general: "Shows actions happening now.",
        passiveVoice: "The subject is receiving the action currently.",
        example: "The book is being read by her.",
        sinhala: "පොත ඇය විසින් කියවමින් පවතී.",
      },
      {
        tense: "Present Perfect",
        general: "Describes completed actions relevant to the present.",
        passiveVoice: "The subject has received the action.",
        example: "The book has been read by her.",
        sinhala: "පොත ඇය විසින් කියවී අවසන් වී ඇත.",
      },
      {
        tense: "Past Simple",
        general: "Describes completed actions in the past.",
        passiveVoice: "The subject received the action in the past.",
        example: "A letter was written by her.",
        sinhala: "ලිපියක් ඇය විසින් ලියන ලදී.",
      },
      {
        tense: "Past Continuous",
        general: "Shows actions ongoing at a past time.",
        passiveVoice: "The subject was receiving the action in the past.",
        example: "The book was being written by her.",
        sinhala: "පොත ඇය විසින් ලියමින් පවතිණි.",
      },
      {
        tense: "Future Simple",
        general: "Indicates future actions.",
        passiveVoice: "The subject will receive the action in the future.",
        example: "A book will be written by her.",
        sinhala: "පොතක් ඇය විසින් ලියනු ලැබේ.",
      },
      {
        tense: "Future Continuous",
        general:
          "Less commonly used in passive form; shows ongoing future action.",
        passiveVoice:
          "The subject will be receiving the action at a future time.",
        example: "The house will be being painted by workers.",
        sinhala: "මනේ කම්කරුවන් විසින් අනාගතයේදී පැන්ට් කරමින් පවතිනු ඇත.",
      },
      {
        tense: "Future Perfect",
        general: "Indicates actions completed before a future time.",
        passiveVoice: "The subject will have received the action by that time.",
        example: "The work will have been finished by them.",
        sinhala: "කාර්යය ඔවුන් විසින් එතෙක් අවසන් කර තිබේ.",
      },
    ],

    mistakes: [
      {
        wrong: "The book has wrote by her.",
        correct: "The book has been written by her.",
        sinhala:
          "මෙහි 'has been written' ලෙස නිවැරදි Passive Voice භාවිතා කළ යුතුය.",
      },
    ],

    comparison: {
      title: "Key Differences: Active vs Passive Voice (All Tenses)",
      table: [
        {
          aspect: "Definition",
          active: "The subject performs the action.",
          passive: "The subject receives the action.",
        },
        {
          aspect: "Focus/Emphasis",
          active: "On the doer (subject).",
          passive: "On the action or the receiver of the action.",
        },
        {
          aspect: "Example (Present Simple)",
          active: "She writes letters.",
          passive: "Letters are written by her.",
        },
        {
          aspect: "Example (Past Simple)",
          active: "She wrote a book.",
          passive: "A book was written by her.",
        },
        {
          aspect: "Example (Future Simple)",
          active: "She will write a book.",
          passive: "A book will be written by her.",
        },
      ],
    },
  };

  const reportedSpeechData = {
    title: "Reported Speech (Indirect Speech)",
    english:
      "Reported Speech is used to tell what someone said without quoting their exact words. It's also called Indirect Speech.",
    sinhala:
      "Reported Speech යනු වෙනත් කෙනෙකු කී දේ ඔහුගේ නිවැරදි වචන නොමැතිව අර්ථය පමණක් පවසන ආකාරයයි.",

    structure: {
      english: "Subject + Reporting Verb (said/told/asked) + that/if + clause",
      sinhala: "කථා කරන පුද්ගලයා + කී වචනය + that / if + වාක්‍යය",
      example: {
        en: "He said that he was tired.",
        si: "ඔහු කීවේ ඔහු दमවෙලා කියලා.",
      },
    },

    notes: [
      {
        en: "Backshift the tense when the reporting verb is in the past.",
        si: "Reporting verb එක අතීත කාලේ නම් tense එක එක් පියවරකින් අතීතයට යයි.",
      },
      {
        en: "Pronouns and time words often change to fit the new context.",
        si: "පුරුෂ ප්‍රනාම සහ කාල වචන නව කථනයට ගැලපෙන ලෙස වෙනස් වේ.",
      },
    ],

    tenseChanges: [
      { direct: "Present Simple", reported: "Past Simple" },
      { direct: "Present Continuous", reported: "Past Continuous" },
      { direct: "Present Perfect", reported: "Past Perfect" },
      { direct: "Past Simple", reported: "Past Perfect" },
      { direct: "Will", reported: "Would" },
    ],

    timePlaceWords: [
      { direct: "today", reported: "that day" },
      { direct: "yesterday", reported: "the day before" },
      { direct: "tomorrow", reported: "the next day" },
      { direct: "now", reported: "then" },
      { direct: "here", reported: "there" },
    ],

    examples: [
      {
        type: "Statement",
        direct: "He said, “I eat rice.”",
        reported: "He said that he ate rice.",
        sinhala: "ඔහු කීවේ ඔහු බත් කෑව කියලා.",
      },
      {
        type: "Question (Yes/No)",
        direct: "She asked, “Do you like tea?”",
        reported: "She asked if I liked tea.",
        sinhala: "ඇය අහලා මට තේ කැමතිද කියලා.",
      },
      {
        type: "Question (WH)",
        direct: "He asked, “Where are you going?”",
        reported: "He asked where I was going.",
        sinhala: "ඔහු අහලා මට කෙතෙක් යනවද කියලා.",
      },
      {
        type: "Command / Request",
        direct: "He said, “Sit down.”",
        reported: "He told me to sit down.",
        sinhala: "ඔහු මට බසින්න කියලා කීවා.",
      },
      {
        type: "Negative Command",
        direct: "She said, “Don’t go.”",
        reported: "She told me not to go.",
        sinhala: "ඇය මට යන්න එපා කියලා කීවා.",
      },
    ],

    mistakes: [
      {
        wrong: "❌ He said me",
        correct: "✅ He told me",
        sinhala: "“said me” වැරදියි. “told me” යන්න භාවිතා කළ යුතුයි.",
      },
      {
        wrong: "❌ She asked that if I come",
        correct: "✅ She asked if I would come",
        sinhala: "“asked that if” එකක් නැහැ.",
      },
      {
        wrong: "❌ He said that “I am tired”",
        correct: "✅ He said that he was tired",
        sinhala: "Reported Speech එකේ උපුටා දැක්වීම් ලකුණු ඉවත් කරන්න.",
      },
    ],
  };

  // ----- PARTS OF SPEECH DATA -----
  const partsOfSpeechData = {
    title: "Parts of Speech",
    english:
      "Parts of Speech are the basic building blocks of English grammar. They explain the role of each word in a sentence.",
    sinhala:
      "Parts of Speech යනු ඉංග්‍රීසි ව්‍යාකරණයේ මූලික කොටස් වේ. ඒවා වාක්‍යයක පදයක භූමිකාව පැහැදිලි කරයි.",
    parts: [
      {
        name: "Noun",
        sinhala: "නාමපද",
        description: "Names of people, places, things, or ideas.",
        examples: [
          { en: "boy, school, book", si: "කොල්ලා, පාසල, පොත" },
          { en: "happiness, freedom", si: "සතුට, නිදහස" },
        ],
      },
      {
        name: "Pronoun",
        sinhala: "සර්වාධාර පද",
        description: "Replaces nouns to avoid repetition.",
        examples: [
          { en: "he, she, it, they", si: "ඔහු, ඇය, එය, ඔවුහු" },
          { en: "this, that, these, those", si: "මෙය, ඒය, මෙවැනි, ඒවැනි" },
        ],
      },
      {
        name: "Verb",
        sinhala: "ක්‍රියාව",
        description: "Shows action or state of being.",
        examples: [
          { en: "run, write, is, have", si: "දුවන්න, ලියන්න, වේ, ඇත" },
          { en: "She writes a letter.", si: "ඇය ලිපියක් ලියනවා." },
        ],
      },
      {
        name: "Adjective",
        sinhala: "විශේෂණ",
        description: "Describes nouns or pronouns.",
        examples: [
          { en: "big, red, intelligent", si: "වැඩි, රතු, බුද්ධිමත්" },
          { en: "A tall boy.", si: "ඉහළ කොල්ලෙක්." },
        ],
      },
      {
        name: "Adverb",
        sinhala: "ක්‍රියා විශේෂණ",
        description: "Modifies verbs, adjectives, or other adverbs.",
        examples: [
          { en: "quickly, very, well", si: "වැඩිපුර, හොඳින්, ඉක්මනින්" },
          { en: "She runs quickly.", si: "ඇය ඉක්මනින් දුවනවා." },
        ],
      },
      {
        name: "Preposition",
        sinhala: "උපසර්ග",
        description:
          "Shows relationship between a noun/pronoun and another word.",
        examples: [
          { en: "in, on, at, between", si: "අතුළ, මත, වෙත, අතර" },
          { en: "The book is on the table.", si: "පොත මේසය මත තිබෙනවා." },
        ],
      },
      {
        name: "Conjunction",
        sinhala: "සම්බන්ධක",
        description: "Connects words, phrases, or clauses.",
        examples: [
          { en: "and, but, because, or", si: "හා, නමුත්, නිසා, හෝ" },
          { en: "I like tea and coffee.", si: "මම තේ සහ කෝපි කැමතියි." },
        ],
      },
      {
        name: "Interjection",
        sinhala: "උද්ගාර පද",
        description: "Expresses sudden emotion or feeling.",
        examples: [
          { en: "wow!, oh!, hey!", si: "අපූරු!, ඔහෝ!, අයියෝ!" },
          { en: "Wow! That’s amazing.", si: "අපූරු! ඒක අමුතුයි." },
        ],
      },
    ],
    notes: [
      {
        en: "Understanding Parts of Speech helps in sentence building and grammar mastery.",
        si: "Parts of Speech අවබෝධ කර ගැනීම වාක්‍ය ගොඩනැගීමේදී සහ ව්‍යාකරණ පරගාමීතාවේදී උපකාරී වේ.",
      },
      {
        en: "Always identify the part of speech before forming sentences.",
        si: "වාක්‍යය නිර්මාණය කිරීමට පෙර පදයේ භූමිකාව හඳුනා ගන්න.",
      },
    ],
  };

  const sentenceStructureData = {
    title: "Sentence Structure (වාක්‍ය සංරචනය)",
    english:
      "Sentence structure refers to how words are arranged to form complete thoughts. It includes the subject, verb, and sometimes objects or complements.",
    sinhala:
      "Sentence Structure කියන්නේ වාක්‍යයක් සම්පූර්ණ අදහසක් ලබාදෙන්න වචන සැකසෙන ආකාරයයි. එක තුළ විෂයය (subject), ක්‍රියාව (verb), සහ කර්මය හෝ පූරණය (object/complement) ඇතුළත් වේ.",

    basicPatterns: [
      {
        pattern: "SV",
        english: "Birds fly.",
        sinhala: "කුකුළන් උඩ ගියා.",
      },
      {
        pattern: "SVO",
        english: "She reads books.",
        sinhala: "ඇය පොත් කියවයි.",
      },
      {
        pattern: "SVC",
        english: "He is a teacher.",
        sinhala: "ඔහු ගුරුයෙකුය.",
      },
      {
        pattern: "SVIDO",
        english: "She gave me a gift.",
        sinhala: "ඇය මට තෑග්ගක් දුන්නා.",
      },
      {
        pattern: "SVOC",
        english: "They elected him president.",
        sinhala: "ඔවුන් ඔහුව ජනාධිපති ලෙස තෝරා ගත්තා.",
      },
    ],

    sentenceTypesFunction: [
      {
        type: "Declarative",
        description: "States a fact or opinion.",
        sinhala: "විස්තරාත්මක වාක්‍යයක් – තත්ත්වයක් හෝ අදහසක් පවසනවා.",
        example: "She is happy.",
        sinhalaExample: "ඇය සතුටුයි.",
      },
      {
        type: "Interrogative",
        description: "Asks a question.",
        sinhala: "ප්‍රශ්න වාක්‍යයක්.",
        example: "Are you ready?",
        sinhalaExample: "ඔයා සූදානම්ද?",
      },
      {
        type: "Imperative",
        description: "Gives command or request.",
        sinhala: "නියෝග හෝ ඉල්ලීම පවසනවා.",
        example: "Please sit down.",
        sinhalaExample: "කරුණාකර බසින්න.",
      },
      {
        type: "Exclamatory",
        description: "Expresses strong emotion.",
        sinhala: "දැඩි හැඟීමක් පවසන වාක්‍යයක්.",
        example: "What a beautiful day!",
        sinhalaExample: "කොතරම් ලස්සන දවසක්ද!",
      },
    ],

    sentenceTypesStructure: [
      {
        type: "Simple Sentence",
        description: "One independent clause.",
        example: "I study English.",
        sinhala: "මම ඉංග්‍රීසි ඉගෙන ගන්නවා.",
      },
      {
        type: "Compound Sentence",
        description: "Two independent clauses joined by a conjunction.",
        example: "I study English and I read books.",
        sinhala: "මම ඉංග්‍රීසි ඉගෙන ගන්නවා සහ පොත් කියවන්නවා.",
      },
      {
        type: "Complex Sentence",
        description: "One main clause + one or more dependent clauses.",
        example: "I study English because I want a good job.",
        sinhala: "මම හොඳ රැකියාවක් අවශ්‍ය නිසා ඉංග්‍රීසි ඉගෙන ගන්නවා.",
      },
      {
        type: "Compound-Complex Sentence",
        description: "Two independent + one dependent clause.",
        example: "I study English and I read books because I love learning.",
        sinhala:
          "මම ඉංග්‍රීසි ඉගෙන ගන්නවා සහ පොත් කියවන්නවා, මට ඉගෙනීම ගැන ආදරය නිසා.",
      },
    ],

    mistakes: [
      {
        wrong: "Is playing football.",
        correct: "He is playing football.",
        sinhala: "විෂයය නැති නිසා වාක්‍යය අසම්පූර්ණයි.",
      },
      {
        wrong: "To the park I go every day.",
        correct: "I go to the park every day.",
        sinhala: "විෂයය පළමුව එළවිය යුතුය.",
      },
      {
        wrong: "Too long and confusing sentences.",
        correct: "Keep sentences short and clear — one main idea per sentence.",
        sinhala:
          "වාක්‍යයන් සරල හා පැහැදිලිව තබන්න — එක් අදහසක් පමණක් එක් වාක්‍යයකින් පවසන්න.",
      },
    ],
  };

  // ----- QUESTION FORMATION DATA -----
  const questionFormationData = {
    title: "Question Formation",
    english:
      "Question formation is how we turn statements into questions. It usually involves changing word order or adding helping verbs.",
    sinhala:
      "ප්‍රශ්න නිර්මාණය යනු ප‍්‍රකාශනවලින් ප්‍රශ්න වාක්‍යයක් සෑදීමයි. මෙය සාමාන්‍යයෙන් වචන පිළිවෙළ වෙනස් කිරීමක් හෝ උපකාරක ක්‍රියාපද එකතු කිරීමක් වේ.",

    structure: {
      english: "Helping Verb + Subject + Main Verb + Object?",
      sinhala: "උපකාරක ක්‍රියාපදය + විෂයය + ප්‍රධාන ක්‍රියාපදය + කර්මය?",
      example: {
        en: "Do you like apples?",
        si: "ඔබට අළු මල් කැමතිද?",
      },
    },

    notes: [
      {
        en: "In English, most questions start with an auxiliary (helping) verb like Do, Does, Did, Is, Are, Was, Were, Will, etc.",
        si: "ඉංග්‍රීසියෙන් බොහෝ ප්‍රශ්න 'Do', 'Does', 'Did', 'Is', 'Are', 'Was', 'Were', 'Will' වැනි උපකාරක ක්‍රියාපදයකින් ආරම්භ වේ.",
      },
      {
        en: "If the question starts with a question word (what, when, where, why, how), it is called a WH-question.",
        si: "ප්‍රශ්නයක් 'what', 'when', 'where', 'why', 'how' වැනි වචනයකින් ආරම්භ නම්, එය WH-Question එකකි.",
      },
    ],

    types: [
      {
        type: "Yes / No Questions",
        description:
          "These questions can be answered with 'Yes' or 'No'. Use helping verbs.",
        example: {
          en: "Do you speak English?",
          si: "ඔබ ඉංග්‍රීසි කථා කරනවාද?",
        },
      },
      {
        type: "WH-Questions",
        description:
          "These begin with question words (What, When, Where, Who, Why, How).",
        example: {
          en: "Where do you live?",
          si: "ඔබ කොහෙද ජීවත්වෙන්නේ?",
        },
      },
      {
        type: "Tag Questions",
        description:
          "A short question added to the end of a statement, to confirm information.",
        example: {
          en: "You are a student, aren’t you?",
          si: "ඔයා සිසුයෙක් නේද?",
        },
      },
    ],

    tenseExamples: [
      {
        tense: "Present Simple",
        rule: "Use 'Do' or 'Does' before the subject.",
        example: "Do they play football?",
        sinhala: "ඔවුන් පාපන්දුක් ක්‍රීඩා කරනවාද?",
      },
      {
        tense: "Present Continuous",
        rule: "Use 'Am/Is/Are' before the subject.",
        example: "Is she reading a book?",
        sinhala: "ඇය පොතක් කියවමින් සිටිනවාද?",
      },
      {
        tense: "Past Simple",
        rule: "Use 'Did' before the subject.",
        example: "Did he watch the movie?",
        sinhala: "ඔහු චිත්‍රපටය නැරඹුවාද?",
      },
      {
        tense: "Past Continuous",
        rule: "Use 'Was/Were' before the subject.",
        example: "Were they studying last night?",
        sinhala: "ඔවුන් ඊයේ රාත්‍රීයේ අධ්‍යයනය කරමින් සිටියාද?",
      },
      {
        tense: "Future Simple",
        rule: "Use 'Will' before the subject.",
        example: "Will you go to school tomorrow?",
        sinhala: "ඔබ හෙට පාසලට යාවිද?",
      },
      {
        tense: "Present Perfect",
        rule: "Use 'Have/Has' before the subject.",
        example: "Have you finished your homework?",
        sinhala: "ඔබගේ ගෘහකාර්යය අවසන් කරලාද?",
      },
    ],

    mistakes: [
      {
        wrong: "You like coffee?",
        correct: "Do you like coffee?",
        sinhala:
          "ප්‍රශ්නයක් සෑදිය යුත්තේ උපකාරක ක්‍රියාපදය ආරම්භයේදී යෙදීමෙන්ය.",
      },
      {
        wrong: "Where you are going?",
        correct: "Where are you going?",
        sinhala: "'Be' ක්‍රියාපදය විෂයයට පෙර යෙදිය යුතුය.",
      },
    ],

    comparison: {
      title: "Key Differences: Statements vs Questions",
      table: [
        {
          aspect: "Definition",
          statement: "Gives information.",
          question: "Asks for information.",
        },
        {
          aspect: "Word Order",
          statement: "Subject + Verb + Object",
          question: "Helping Verb + Subject + Verb + Object?",
        },
        {
          aspect: "Example",
          statement: "You play cricket.",
          question: "Do you play cricket?",
        },
        {
          aspect: "Ending Punctuation",
          statement: "Ends with a period (.)",
          question: "Ends with a question mark (?)",
        },
      ],
    },
  };

  // ----- CONDITIONALS DATA -----
  const conditionalsData = {
    title: "Conditionals",
    english:
      "Conditionals are sentences that describe a situation and its possible result. They often use the word 'if' to express conditions.",
    sinhala:
      "Conditionals යනු තත්ත්වයක් සහ එම තත්ත්වයට අනුව ඇති විය හැකි ප්‍රතිඵලයක් විස්තර කරන වාක්‍යයන් වේ. සාමාන්‍යයෙන් 'if' යන වචනය භාවිතා කරයි.",

    structure: {
      english: "If + Condition (clause) → Result (clause)",
      sinhala: "'If' + තත්ත්වය (clause) → ප්‍රතිඵලය (clause)",
      example: {
        en: "If it rains, I will stay home.",
        si: "වැස්ස වැසි නම්, මම ගෙදර ඉඳිනවා.",
      },
    },

    notes: [
      {
        en: "Conditionals are used to talk about real or imaginary situations and their results.",
        si: "Conditionals භාවිතා කරන්නේ සැබෑ හෝ අසත්‍ය තත්ත්වයන් සහ ඒවායේ ප්‍රතිඵල ගැන කතා කිරීමටය.",
      },
      {
        en: "There are four main types: Zero, First, Second, and Third Conditionals.",
        si: "Conditionals ප්‍රධාන වශයෙන් වර්ග 4 ක් ඇත: Zero, First, Second සහ Third.",
      },
    ],

    types: [
      {
        type: "Zero Conditional",
        usage:
          "Used for universal truths, facts, or things that are always true.",
        structure: "If + Present Simple → Present Simple",
        example: {
          en: "If you heat water, it boils.",
          si: "ඔබ ජලය උණුකරනවා නම්, එය උණුවෙයි.",
        },
      },
      {
        type: "First Conditional",
        usage: "Used for real and possible situations in the future.",
        structure: "If + Present Simple → Will + Verb",
        example: {
          en: "If it rains, we will cancel the trip.",
          si: "වැස්ස වැසි නම්, අපි ගමන අවලංගු කරමු.",
        },
      },
      {
        type: "Second Conditional",
        usage: "Used for unreal or imaginary present/future situations.",
        structure: "If + Past Simple → Would + Verb",
        example: {
          en: "If I had a car, I would drive to work.",
          si: "මට කාර්යක් තිබුණා නම්, මම වැඩට යන්න ධාවනය කරෙන්නම්.",
        },
      },
      {
        type: "Third Conditional",
        usage: "Used for unreal past situations (things that didn’t happen).",
        structure: "If + Past Perfect → Would have + Past Participle",
        example: {
          en: "If she had studied, she would have passed the exam.",
          si: "ඇය අධ්‍යයනය කරලා නම්, ඇය විභාගය उत्तීර්ණ වෙලා අවිත්.",
        },
      },
    ],

    mixedConditional: {
      title: "Mixed Conditional",
      description:
        "A mixed conditional combines two different time references: one in the condition and another in the result.",
      example: {
        en: "If I had studied medicine, I would be a doctor now.",
        si: "මම වෛද්‍ය විද්‍යාව ඉගෙනගෙන තිබුණා නම්, දැන් මම වෛද්‍යවරයෙක් වෙනවා.",
      },
    },

    comparison: {
      title: "Key Differences: Types of Conditionals",
      table: [
        {
          aspect: "Type",
          form: "Structure",
          meaning: "Usage",
          example: "Example Sentence",
        },
        {
          aspect: "Zero Conditional",
          form: "If + Present → Present",
          meaning: "General truths / Facts",
          example: "If you mix red and blue, you get purple.",
        },
        {
          aspect: "First Conditional",
          form: "If + Present → Will + Verb",
          meaning: "Real and possible future",
          example: "If it rains, I will stay home.",
        },
        {
          aspect: "Second Conditional",
          form: "If + Past → Would + Verb",
          meaning: "Unreal or imaginary present/future",
          example: "If I were rich, I would travel the world.",
        },
        {
          aspect: "Third Conditional",
          form: "If + Past Perfect → Would have + Verb3",
          meaning: "Unreal past situations",
          example: "If she had left earlier, she would have caught the bus.",
        },
      ],
    },

    mistakes: [
      {
        wrong: "If I will see him, I will tell him.",
        correct: "If I see him, I will tell him.",
        sinhala:
          "‘If’ clause එක තුළ ‘will’ යොදා නොගනී. එය ප්‍රධාන වාක්‍යයේ පමණක් යොදාගනී.",
      },
      {
        wrong: "If I knew her, I will talk to her.",
        correct: "If I knew her, I would talk to her.",
        sinhala: "Unreal situations සඳහා 'would' යොදා ගත යුතුය.",
      },
    ],
  };

  // ----- MODALS, GERUNDS & MORE DATA -----
  const modalsGerundsData = {
    title: "Modals, Gerunds & More",
    english:
      "This section covers modal verbs (can, must, should, etc.), gerunds (-ing forms), and infinitives (to + verb) — essential tools for expressing ability, obligation, permission, and purpose.",
    sinhala:
      "මෙම කොටසෙහි 'Modal Verbs' (can, must, should ආදිය), 'Gerunds' (verb + ing) සහ 'Infinitives' (to + verb) පිළිබඳ විස්තර කරයි. මෙවන් වචන භාවිතා කරන්නේ හැකියාව, බාධ్యత, අවසරය සහ අරමුණ පෙන්වීමටය.",

    sections: [
      {
        title: "1️⃣ Modal Verbs",
        english:
          "Modal verbs are helping verbs used to express ability, possibility, permission, necessity, or advice.",
        sinhala:
          "Modal Verbs යනු උපකාරක ක්‍රියා පද වේ. ඒවා භාවිතා කරන්නේ හැකියාව, අවශ්‍යතාවය, අවසරය, හෝ උපදෙස් පෙන්වීමටය.",
        commonModals: [
          {
            modal: "Can / Could",
            usage: "Ability or permission",
            example: {
              en: "I can swim. / Could you help me?",
              si: "මට നീந்தන්න පුළුවන්. / ඔයාට මට උදව් කරන්න පුළුවන්ද?",
            },
          },
          {
            modal: "Must / Have to",
            usage: "Strong obligation or necessity",
            example: {
              en: "You must wear a helmet.",
              si: "ඔබට හිස් කඩය ඕනෑම විටකදීම දාගෙන යාම අත්‍යවශ්‍යය.",
            },
          },
          {
            modal: "Should / Ought to",
            usage: "Advice or suggestion",
            example: {
              en: "You should study for the exam.",
              si: "ඔබ විභාගයට අධ්‍යයනය කළ යුතුය.",
            },
          },
          {
            modal: "May / Might",
            usage: "Possibility or permission",
            example: {
              en: "It may rain today.",
              si: "අද වැස්ස විය හැක.",
            },
          },
          {
            modal: "Will / Would",
            usage: "Future or polite request",
            example: {
              en: "I will call you later. / Would you like tea?",
              si: "මම පස්සේ ඔයාට කතා කරනවා. / ඔයාට තේක් බොන්න අවශ්‍යද?",
            },
          },
        ],
        notes: [
          {
            en: "Modal verbs are always followed by the base form of the verb (without ‘to’).",
            si: "Modal verb එකක් හැම විටම verb එකේ මූලික හැඩය (to නැතිව) සමඟ යොදා ගනී.",
            example: {
              en: "She can sing. (❌ She can to sing.)",
              si: "ඇයට ගායනා කළ හැක.",
            },
          },
        ],
      },
      {
        title: "2️⃣ Gerunds",
        english:
          "A gerund is the -ing form of a verb that acts as a noun. It can be a subject, object, or complement in a sentence.",
        sinhala:
          "Gerund යනු verb එකක් ‘-ing’ එකක් එකතු කර noun එකක් ලෙස ක්‍රියා කරන හැඩයකි. එය වාක්‍යයක විෂයයක් හෝ කර්මයක් විය හැක.",
        examples: [
          {
            en: "Swimming is fun.",
            si: "නීන්දාව ආසාවෙන් පිරුණු ක්‍රියාවකි.",
          },
          {
            en: "I enjoy reading books.",
            si: "මම පොත් කියවීමෙන් රස විඳිමි.",
          },
          {
            en: "Her hobby is dancing.",
            si: "ඇයගේ ප්‍රිය විනෝදය නර්තනය ය.",
          },
        ],
        notes: [
          {
            en: "After some verbs (like enjoy, avoid, finish), we always use the -ing form.",
            si: "enjoy, avoid, finish වැනි verbs පසුකරන්නා වූ විට, හැම විටම -ing හැඩය භාවිතා වේ.",
          },
        ],
      },
      {
        title: "3️⃣ Infinitives",
        english:
          "An infinitive is the 'to + verb' form. It often shows purpose, intention, or result.",
        sinhala:
          "Infinitive යනු ‘to + verb’ හැඩයකි. එය බොහෝ විට අරමුණක් හෝ කැමැත්තක් පෙන්වීමට භාවිතා වේ.",
        examples: [
          {
            en: "I want to learn English.",
            si: "මට ඉංග්‍රීසි ඉගෙනගන්න කැමතියි.",
          },
          {
            en: "She came to help me.",
            si: "ඇය මට උදව් කිරීමට ආවා.",
          },
          {
            en: "He works hard to succeed.",
            si: "ඔහු ජයගැනීමට දැඩිව වැඩ කරයි.",
          },
        ],
        notes: [
          {
            en: "After some verbs like want, need, decide, plan — use ‘to + verb’.",
            si: "want, need, decide, plan වැනි verbs පසු ‘to + verb’ භාවිතා කරයි.",
          },
        ],
      },
    ],

    comparison: {
      title: "Comparison: Gerunds vs Infinitives",
      table: [
        {
          aspect: "Use after",
          gerund: "enjoy, avoid, suggest, finish",
          infinitive: "want, need, decide, plan",
        },
        {
          aspect: "Example",
          gerund: "I enjoy reading books.",
          infinitive: "I want to read books.",
        },
        {
          aspect: "Sinhala meaning",
          gerund: "පෙරතම ක්‍රියාවක් ගැන කියා දීම.",
          infinitive: "අරමුණක් හෝ කැමැත්තක් පෙන්වීම.",
        },
      ],
    },
  };

  // ----- PHRASAL VERBS & IDIOMS DATA -----
  const phrasalVerbsAndIdiomsData = {
    title: "Phrasal Verbs & Idioms",
    english:
      "Phrasal verbs are verbs combined with prepositions or adverbs that create new meanings. Idioms are common expressions with meanings different from the literal words.",
    sinhala:
      "Phrasal verbs කියන්නේ ක්‍රියාපදයක් සහ පදයක් එකට යොදා අර්ථය වෙනස් වන වාක්‍ය ඛණ්ඩ වේ. Idioms කියන්නේ වචනවල සෘජු අර්ථයෙන් වෙනස් වූ නිතර භාවිතා වන ප්‍රකාශන වේ.",

    phrasalVerbs: [
      {
        phrase: "Wake up",
        meaning: "To stop sleeping.",
        example: { en: "I wake up at 6 a.m.", si: "මම පැය 6ට නැගිටෙමි." },
      },
      {
        phrase: "Look after",
        meaning: "To take care of someone.",
        example: {
          en: "She looks after her brother.",
          si: "ඇය තම අයියා ගැන කටයුතු කරයි.",
        },
      },
      {
        phrase: "Give up",
        meaning: "To stop doing something.",
        example: { en: "Don’t give up!", si: "හැරදියන්න එපා!" },
      },
      {
        phrase: "Turn on",
        meaning: "To start or activate something.",
        example: { en: "Turn on the fan.", si: "පංකාව අරඹන්න." },
      },
      {
        phrase: "Take off",
        meaning: "To remove or for an airplane to begin flying.",
        example: { en: "The plane took off.", si: "ගුවන් යානය ගුවන් ගත්තා." },
      },
    ],

    idioms: [
      {
        phrase: "Break the ice",
        meaning: "To start a friendly conversation.",
        example: {
          en: "He told a joke to break the ice.",
          si: "ඔහු සාධාරණ සංවාදයක් ආරම්භ කළා.",
        },
      },
      {
        phrase: "Once in a blue moon",
        meaning: "Something that happens very rarely.",
        example: {
          en: "I go to the beach once in a blue moon.",
          si: "මම ඉතා දුර්ලභවම වෙරළට යන්නෙමි.",
        },
      },
      {
        phrase: "Piece of cake",
        meaning: "Something very easy.",
        example: {
          en: "This exam is a piece of cake.",
          si: "මෙම විභාගය ඉතා පහසුය.",
        },
      },
    ],
  };

  // ----- CLAUSES DATA -----
  const clausesData = {
    title: "Clauses",
    english:
      "A clause is a group of words that contains a subject and a verb. It may stand alone or depend on another clause.",
    sinhala:
      "Clause එකක් කියන්නේ කතෘ සහ ක්‍රියා තිබෙන වචන සමූහයක්. එය තනිවම හෝ වෙනත් වාක්‍යයක කොටසක් ලෙස සිටිය හැක.",

    types: [
      {
        type: "Independent Clause",
        description: "Can stand alone as a complete sentence.",
        example: { en: "I like coffee.", si: "මම කෝපි කැමතියි." },
      },
      {
        type: "Dependent Clause",
        description: "Cannot stand alone; depends on another clause.",
        example: { en: "Because I was tired.", si: "මම දුක්හිලා වූ නිසා." },
      },
    ],

    dependentTypes: [
      {
        name: "Adjective Clause",
        explanation: "Describes or gives more information about a noun.",
        example: {
          en: "The man who is tall is my friend.",
          si: "උස මිනිසා මගේ මිතුරා ය.",
        },
      },
      {
        name: "Adverb Clause",
        explanation: "Tells how, when, or why something happens.",
        example: {
          en: "I went home because it rained.",
          si: "මම වැසි වැටුනි නිසා ගෙදර ගියෙමි.",
        },
      },
      {
        name: "Noun Clause",
        explanation: "Acts as a noun in the sentence.",
        example: {
          en: "I know that she is honest.",
          si: "ඇය විශ්වාසවන්තියක් බව මම දනිමි.",
        },
      },
    ],
  };

  // ----- COMPARATIVES & SUPERLATIVES DATA -----
  const comparativesAndSuperlativesData = {
    title: "Comparatives & Superlatives",
    english:
      "Comparative adjectives compare two things, while superlative adjectives compare three or more.",
    sinhala:
      "Comparative කියන්නේ දෙයක් වඩාත් යම් විශේෂයක් ලෙස පෙන්වීමයි. Superlative කියන්නේ සියල්ලට වඩා යන අදහස පෙන්වයි.",

    examples: [
      {
        adjective: "Tall",
        comparative: "Taller",
        superlative: "Tallest",
        example: "Saman is taller than Nimal.",
        sinhala: "සමන් නිමාල්ට වඩා උසයි.",
      },
      {
        adjective: "Beautiful",
        comparative: "More beautiful",
        superlative: "Most beautiful",
        example: "She is the most beautiful girl in the class.",
        sinhala: "ඇය පන්තියේ වඩාත්ම ලස්සන ගැහැණිය ය.",
      },
      {
        adjective: "Good",
        comparative: "Better",
        superlative: "Best",
        example: "Your English is better than mine.",
        sinhala: "ඔබගේ ඉංග්‍රීසි මාව වඩා හොඳයි.",
      },
    ],

    notes: [
      {
        en: "Short adjectives add '-er' and '-est' (tall → taller → tallest).",
        si: "කෙටි විශේෂණ වලට '-er' සහ '-est' එකතු කරයි.",
      },
      {
        en: "Long adjectives use 'more' and 'most' (beautiful → more beautiful → most beautiful).",
        si: "දිගු විශේෂණ සඳහා 'more' සහ 'most' යොදයි.",
      },
      {
        en: "Irregular adjectives change completely (good → better → best).",
        si: "අසම්මත විශේෂණවල අකාරය සම්පූර්ණයෙන් වෙනස් වේ.",
      },
    ],
  };

  // ----- CONJUNCTIONS & LINKING WORDS DATA -----
  const conjunctionsData = {
    title: "Conjunctions & Linking Words",
    english:
      "Conjunctions are words used to connect clauses, sentences, or words. Linking words help show relationships between ideas.",
    sinhala:
      "Conjunctions කියන්නේ වාක්‍ය, වාක්‍ය ඛණ්ඩ හෝ වචන එකට සම්බන්ධ කරන පද වේ. Linking words යනු අදහස් අතර සම්බන්ධය පෙන්වන පද වේ.",

    types: [
      {
        type: "Coordinating Conjunctions",
        description:
          "Connect two equal ideas (and, but, or, nor, for, so, yet).",
        examples: [
          { en: "I like tea and coffee.", si: "මම තේ සහ කෝපි කැමතියි." },
          {
            en: "She is tired but happy.",
            si: "ඇය දුක්හිලියක් නමුත් සතුටුයි.",
          },
        ],
      },
      {
        type: "Subordinating Conjunctions",
        description:
          "Join a dependent clause to an independent one (because, although, if, when, since).",
        examples: [
          {
            en: "I stayed home because it rained.",
            si: "වර්ෂාව වැටුනි නිසා මම ගෙදර රැඳී සිටියේය.",
          },
          {
            en: "I will call you when I arrive.",
            si: "මම පැමිණි විට ඔබට ඇමතෙමි.",
          },
        ],
      },
      {
        type: "Correlative Conjunctions",
        description:
          "Work in pairs to connect ideas (either...or, neither...nor, both...and).",
        examples: [
          {
            en: "Either you study or you fail.",
            si: "ඔබ ඉගෙන ගන්නා හෝ අසමත් වෙනවා.",
          },
          { en: "Both my parents are teachers.", si: "මගේ දෙදෙනාම ගුරු වනවා." },
        ],
      },
    ],
  };

  // ----- COMMON GRAMMAR MISTAKES DATA -----
  const grammarMistakesData = {
    title: "Common Grammar Mistakes",
    english:
      "Learning English often involves making small grammar mistakes. Recognizing and correcting them helps improve accuracy, fluency, and confidence when speaking or writing.",
    sinhala:
      "ඉංග්‍රීසි ඉගෙන ගන්නා විට කුඩා ව්‍යාකරණ දෝෂ සිදුවීම සාමාන්‍ය දෙයකි. ඒවා හඳුනා ගෙන නිවැරදි කිරීම නිවැරදිව, සංකීර්ණව සහ විශ්වාසව කතා කිරීම සහ ලිවීම උදව් කරයි.",

    categories: [
      {
        name: "1️⃣ Subject–Verb Agreement Errors",
        explanation:
          "In the present simple tense, we must add ‘s’ or ‘es’ to the verb when the subject is he, she, or it.",
        sinhala:
          "Present Simple Tense එකේදී, විෂයය he/she/it නම් ක්‍රියාවට ‘s’ හෝ ‘es’ එකතු කළ යුතුය.",
        examples: [
          {
            wrong: "He go to school.",
            correct: "He goes to school.",
            si: "ඔහු පාසලට යයි.",
          },
          {
            wrong: "She play piano.",
            correct: "She plays piano.",
            si: "ඇය පියානෝ වාදනය කරයි.",
          },
          {
            wrong: "It make noise.",
            correct: "It makes noise.",
            si: "එය ශබ්දයක් නිපදවයි.",
          },
        ],
        note: "✅ Always remember: I/You/We/They → base form | He/She/It → +s or +es",
      },
      {
        name: "2️⃣ Using Wrong Verb Forms After 'Did'",
        explanation:
          "After ‘did’, always use the base form of the verb. Never use the past tense form again.",
        sinhala:
          "‘Did’ පසුව සෑම විටම ක්‍රියාපදයේ මූලික (base) ආකාරය භාවිතා කළ යුතුය. Past tense එක නැවත භාවිතා නොකරන්න.",
        examples: [
          {
            wrong: "I didn’t went there.",
            correct: "I didn’t go there.",
            si: "මම එහි ගියෙමි නැහැ.",
          },
          {
            wrong: "He didn’t saw me.",
            correct: "He didn’t see me.",
            si: "ඔහු මාව දැක නැහැ.",
          },
        ],
        note: "❗ Rule: Did + base verb (go, see, eat, come...)",
      },
      {
        name: "3️⃣ Wrong Use of Articles (a, an, the)",
        explanation:
          "‘A’ and ‘an’ are used for singular, general things. ‘The’ is used for specific or known things.",
        sinhala:
          "‘A’ සහ ‘an’ එකක් භාවිතා කරන්නේ ඒකවචන, සාමාන්‍ය දෙයක් සඳහාය. ‘The’ භාවිතා කරන්නේ විශේෂිත හෝ දන්නා දෙයක් සඳහාය.",
        examples: [
          {
            wrong: "She is a honest girl.",
            correct: "She is an honest girl.",
            si: "ඇය ඉතා පරිශ්‍රමශීලී ගැහැණියකි.",
          },
          {
            wrong: "I saw the tiger in zoo.",
            correct: "I saw a tiger in the zoo.",
            si: "මම සත්ත්ව උද්‍යානයේ වෘකයෙක් දැක්කා.",
          },
        ],
        note: "🧩 Use ‘an’ before vowel sounds (a, e, i, o, u).",
      },
      {
        name: "4️⃣ Preposition Mistakes",
        explanation:
          "Many learners use the wrong prepositions. English prepositions must be learned by usage, not by direct translation.",
        sinhala:
          "ඇතැම් විට ඉංග්‍රීසි preposition නිවැරදිව තේරුම් නොගැනීම නිසා වැරදිව යෙදෙයි. ඒවා පුරුදු කරගත යුතුය.",
        examples: [
          {
            wrong: "She is married with a doctor.",
            correct: "She is married to a doctor.",
            si: "ඇය වෛද්‍යවරයෙකුට විවාහ වී ඇත.",
          },
          {
            wrong: "I am good in English.",
            correct: "I am good at English.",
            si: "මට ඉංග්‍රීසි විශය නියමයි.",
          },
          {
            wrong: "He depends from his parents.",
            correct: "He depends on his parents.",
            si: "ඔහු දෙමාපියන්ට රඳා පවතිනවා.",
          },
        ],
      },
      {
        name: "5️⃣ Double Negatives",
        explanation:
          "Avoid using two negative words in one sentence. In English, one negative is enough.",
        sinhala:
          "එක වාක්‍යයකදී නාකාර පද දෙකක් එකට භාවිතා නොකළ යුතුය. ඉංග්‍රීසියෙහි නාකාරය තනි වචනයකින් පෙන්වයි.",
        examples: [
          {
            wrong: "I don’t know nothing.",
            correct: "I don’t know anything.",
            si: "මට කිසිවක් දන්නේ නැහැ.",
          },
          {
            wrong: "She didn’t see no one.",
            correct: "She didn’t see anyone.",
            si: "ඇය කිසිවෙකු දැක නැහැ.",
          },
        ],
      },
      {
        name: "6️⃣ Incorrect Use of Continuous Tense",
        explanation:
          "Don’t use continuous tense with stative verbs (like, know, believe, love, hate).",
        sinhala:
          "Stative verbs (like, know, love, hate) Continuous tense එකක භාවිතා නොකළ යුතුය.",
        examples: [
          {
            wrong: "I am knowing the answer.",
            correct: "I know the answer.",
            si: "මට පිළිතුර දැනෙනවා.",
          },
          {
            wrong: "She is liking coffee.",
            correct: "She likes coffee.",
            si: "ඇයට කෝපි කැමතියි.",
          },
        ],
      },
      {
        name: "7️⃣ Wrong Use of ‘There’, ‘Their’, and ‘They’re’",
        explanation: "These words sound the same but have different meanings.",
        sinhala:
          "‘There’, ‘Their’, සහ ‘They’re’ එකම ලෙස ශබ්ද වන නමුත් වෙනස් අර්ථ ඇත.",
        examples: [
          {
            wrong: "Their is a book on the table.",
            correct: "There is a book on the table.",
            si: "මෙසේ මේසය මත පොතක් ඇත.",
          },
          {
            wrong: "I like there car.",
            correct: "I like their car.",
            si: "මට ඔවුන්ගේ රථය කැමතියි.",
          },
          {
            wrong: "Their going to school.",
            correct: "They’re going to school.",
            si: "ඔවුන් පාසලට යමින් සිටියි.",
          },
        ],
      },
      {
        name: "8️⃣ Countable vs. Uncountable Nouns",
        explanation:
          "Some nouns can’t take plural forms or ‘a/an’. Examples: information, advice, furniture.",
        sinhala:
          "නියමිත නාම පද කිහිපයක් බහුවචන නොවන අතර ‘a/an’ එක්ක භාවිතා කළ නොහැක.",
        examples: [
          {
            wrong: "He gave me many informations.",
            correct: "He gave me much information.",
            si: "ඔහු මට විශාල තොරතුරු ලබාදුන්නේය.",
          },
          {
            wrong: "She gave me an advice.",
            correct: "She gave me some advice.",
            si: "ඇය මට උපදෙස් කිහිපයක් දුන්නා.",
          },
        ],
      },
    ],
  };

  // ----- RENDER COMPARATIVES & SUPERLATIVES -----
  const renderComparativesAndSuperlatives = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {comparativesAndSuperlativesData.title}
      </h2>
      <p className="text-gray-800">{comparativesAndSuperlativesData.english}</p>
      <p className="text-gray-600 italic mb-4">
        {comparativesAndSuperlativesData.sinhala}
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Adjective</th>
              <th className="p-2 text-left">Comparative</th>
              <th className="p-2 text-left">Superlative</th>
              <th className="p-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {comparativesAndSuperlativesData.examples.map((ex, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2">{ex.adjective}</td>
                <td className="p-2">{ex.comparative}</td>
                <td className="p-2">{ex.superlative}</td>
                <td className="p-2">
                  {ex.example}
                  <br />
                  <span className="text-gray-600 italic">{ex.sinhala}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#b8860b] mb-3">🧠 Notes</h3>
      <ul className="list-disc list-inside text-gray-700">
        {comparativesAndSuperlativesData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // ----- RENDER CLAUSES -----
  const renderClauses = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {clausesData.title}
      </h2>
      <p className="text-gray-800">{clausesData.english}</p>
      <p className="text-gray-600 italic mb-4">{clausesData.sinhala}</p>

      <h3 className="text-xl font-semibold text-[#b8860b] mb-3">
        🔹 Basic Clause Types
      </h3>
      {clausesData.types.map((t, i) => (
        <div key={i} className="bg-white p-4 rounded-lg border mb-3">
          <h4 className="font-bold text-[#d4a017]">{t.type}</h4>
          <p className="text-gray-700">{t.description}</p>
          <p className="mt-1">
            <strong>{t.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{t.example.si}</span>
          </p>
        </div>
      ))}

      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-3">
        📗 Dependent Clause Types
      </h3>
      {clausesData.dependentTypes.map((d, i) => (
        <div key={i} className="bg-white p-4 rounded-lg border mb-3">
          <h4 className="font-bold text-[#d4a017]">{d.name}</h4>
          <p className="text-gray-700">{d.explanation}</p>
          <p className="mt-1">
            <strong>{d.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{d.example.si}</span>
          </p>
        </div>
      ))}
    </div>
  );

  // ----- RENDER PHRASAL VERBS & IDIOMS -----
  const renderPhrasalVerbsAndIdioms = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {phrasalVerbsAndIdiomsData.title}
      </h2>
      <p className="text-gray-800">{phrasalVerbsAndIdiomsData.english}</p>
      <p className="text-gray-600 italic mb-6">
        {phrasalVerbsAndIdiomsData.sinhala}
      </p>

      <h3 className="text-xl font-semibold text-[#b8860b] mb-3">
        📘 Common Phrasal Verbs
      </h3>
      {phrasalVerbsAndIdiomsData.phrasalVerbs.map((pv, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border mb-4">
          <h4 className="font-bold text-[#d4a017]">{pv.phrase}</h4>
          <p className="text-gray-700">{pv.meaning}</p>
          <p className="mt-1">
            <strong>{pv.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{pv.example.si}</span>
          </p>
        </div>
      ))}

      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-3">
        💡 Common Idioms
      </h3>
      {phrasalVerbsAndIdiomsData.idioms.map((id, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border mb-3">
          <h4 className="font-bold text-[#d4a017]">{id.phrase}</h4>
          <p className="text-gray-700">{id.meaning}</p>
          <p className="mt-1">
            <strong>{id.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{id.example.si}</span>
          </p>
        </div>
      ))}
    </div>
  );

  // ----- PUNCTUATION & CAPITALIZATION DATA -----
  const punctuationData = {
    title: "Punctuation & Capitalization",
    english:
      "Punctuation marks help organize and clarify writing. Capitalization shows the beginning of a sentence or proper nouns.",
    sinhala:
      "Punctuation යනු ලිවීම සකස් කර පැහැදිලි කිරීමට උපකාරී ලකුණු වේ. Capitalization යනු වාක්‍ය ආරම්භය හෝ විශේෂ නාම පෙන්වයි.",

    punctuationMarks: [
      {
        mark: ".",
        name: "Full Stop",
        use: "Used to end a sentence.",
        example: { en: "I like apples.", si: "මම ඇපල් කැමතියි." },
      },
      {
        mark: ",",
        name: "Comma",
        use: "Used to separate ideas or list items.",
        example: {
          en: "I bought apples, oranges, and bananas.",
          si: "මම ඇපල්, දොඩම් සහ කෙසෙල් මිළදී ගත්තා.",
        },
      },
      {
        mark: "?",
        name: "Question Mark",
        use: "Used at the end of a question.",
        example: { en: "Are you coming?", si: "ඔබ එනවාද?" },
      },
      {
        mark: "!",
        name: "Exclamation Mark",
        use: "Used to show strong feelings.",
        example: { en: "What a surprise!", si: "කෙතරම් විස්මයද!" },
      },
      {
        mark: "'",
        name: "Apostrophe",
        use: "Used for possession or contractions.",
        example: { en: "It’s raining.", si: "වර්ෂාව වැටෙයි." },
      },
    ],

    capitalizationRules: [
      {
        rule: "Capitalize the first word of a sentence.",
        example: { en: "She is reading a book.", si: "ඇය පොතක් කියවයි." },
      },
      {
        rule: "Capitalize names of people and places.",
        example: { en: "I live in London.", si: "මම ලන්ඩනයේ ජීවත්වෙමි." },
      },
      {
        rule: "Capitalize days, months, and holidays.",
        example: { en: "We will meet on Monday.", si: "අපි සඳුදා හමුවෙමු." },
      },
    ],
  };

  const renderPartsOfSpeech = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {partsOfSpeechData.title}
      </h2>
      <p className="text-gray-700 mb-1">{partsOfSpeechData.english}</p>
      <p className="text-gray-600 italic mb-4">{partsOfSpeechData.sinhala}</p>

      {/* --- Each Part of Speech --- */}
      <div className="space-y-6 mb-6">
        {partsOfSpeechData.parts.map((part, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-[#d4a017] mb-2">
              {part.name} -{" "}
              <span className="italic text-gray-600">{part.sinhala}</span>
            </h3>
            <p className="text-gray-700 mb-2">{part.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {part.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-[#fffaf3] p-3 rounded-md border-l-4 border-[#d4a017]"
                >
                  <p className="text-gray-800">
                    <strong>Example:</strong> {ex.en}
                  </p>
                  <p className="text-gray-600 italic">{ex.si}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {partsOfSpeechData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderTenses = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {tenses.map((tense, index) => (
        <div
          key={index}
          onClick={() => setSelectedTense(tense)}
          className="bg-[#fffaf3] p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
        >
          <h3 className="text-lg font-bold text-[#d4a017] mb-2">
            {tense.title}
          </h3>
          <p className="text-gray-700 text-sm mb-1">{tense.english}</p>
          <p className="text-gray-500 text-xs italic">{tense.sinhala}</p>
        </div>
      ))}
    </div>
  );

  const renderPopup = () => {
    if (!selectedTense) return null;
    const { title, english, sinhala, details, structureImage } = selectedTense;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
          <button
            onClick={() => setSelectedTense(null)}
            className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          >
            <XCircle size={28} />
          </button>
          <h2 className="text-2xl font-bold text-[#d4a017] mb-2">{title}</h2>
          <p className="text-gray-700 mb-1">{english}</p>
          <p className="text-gray-600 mb-4 italic">{sinhala}</p>

          <div className="my-5 flex justify-center">
            <img
              src={structureImage}
              alt="structure"
              className="max-w-md rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            {Object.entries(details).map(([category, examples]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-[#b8860b] capitalize mb-2">
                  {category} Form
                </h3>
                <ul className="space-y-2">
                  {examples.map((ex, i) => (
                    <li key={i} className="border-b border-gray-200 pb-1">
                      <strong>{ex.en}</strong>
                      <br />
                      <span className="text-gray-600">{ex.si}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderArticles = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {articlesData.title}
      </h2>
      <p className="text-gray-700 mb-1">{articlesData.english}</p>
      <p className="text-gray-600 italic mb-6">{articlesData.sinhala}</p>

      {articlesData.categories.map((cat, i) => (
        <div key={i} className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
            {cat.name}
          </h3>
          <p className="text-gray-700 mb-1">{cat.english}</p>
          <p className="text-gray-600 italic mb-3">{cat.sinhala}</p>

          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {cat.rules.map((rule, r) => (
              <li key={r}>{rule}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-[#d4a017] mb-2">Examples:</h4>
          <ul className="space-y-2">
            {cat.examples.map((ex, j) => (
              <li
                key={j}
                className="border-b border-gray-100 pb-2 text-sm leading-relaxed"
              >
                <strong>{ex.en}</strong>
                <br />
                <span className="text-gray-600">{ex.si}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderPrepositions = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {prepositionsData.title}
      </h2>
      <p className="text-gray-700 mb-1">{prepositionsData.english}</p>
      <p className="text-gray-600 italic mb-6">{prepositionsData.sinhala}</p>

      {prepositionsData.categories.map((cat, i) => (
        <div key={i} className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
            {cat.name}
          </h3>
          <p className="text-gray-700 mb-1">{cat.english}</p>
          <p className="text-gray-600 italic mb-3">{cat.sinhala}</p>

          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {cat.rules.map((rule, r) => (
              <li key={r}>{rule}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-[#d4a017] mb-2">Examples:</h4>
          <ul className="space-y-2">
            {cat.examples.map((ex, j) => (
              <li
                key={j}
                className="border-b border-gray-100 pb-2 text-sm leading-relaxed"
              >
                <strong>{ex.en}</strong>
                <br />
                <span className="text-gray-600">{ex.si}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  const renderActiveVoice = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {activeVoiceData.title}
      </h2>
      <p className="text-gray-700 mb-1">{activeVoiceData.english}</p>
      <p className="text-gray-600 italic mb-4">{activeVoiceData.sinhala}</p>

      {/* --- Structure Section --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
        Structure
      </h3>
      <p className="text-gray-700">{activeVoiceData.structure.english}</p>
      <p className="text-gray-600 italic mb-3">
        {activeVoiceData.structure.sinhala}
      </p>
      <div className="bg-[#fff] border-l-4 border-[#d4a017] p-3 rounded-md mb-4">
        <strong>{activeVoiceData.structure.example.en}</strong>
        <br />
        <span className="text-gray-600">
          {activeVoiceData.structure.example.si}
        </span>
      </div>

      {/* --- Usage Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {activeVoiceData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>

      {/* --- Examples by Tense --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
        Active Voice Examples for Each Tense
      </h3>
      <div className="space-y-6 mb-8">
        {activeVoiceData.tenseExamples.map((ex, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017] mb-2">
              {ex.tense}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800">📝 General Use:</p>
                <p className="text-gray-700">{ex.general}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">💪 Active Voice:</p>
                <p className="text-gray-700">{ex.activeVoice}</p>
              </div>
            </div>
            <div className="bg-[#fffaf3] mt-3 p-3 rounded-lg border-l-4 border-[#d4a017]">
              <p className="text-gray-800">
                <strong>Example:</strong> {ex.example}
              </p>
              <p className="text-gray-600 italic">{ex.sinhala}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Comparison Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {activeVoiceData.comparison.title}
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Aspect</th>
              <th className="p-2 text-left">Simple Tense</th>
              <th className="p-2 text-left">Active Voice</th>
            </tr>
          </thead>
          <tbody>
            {activeVoiceData.comparison.table.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2 font-medium">{row.aspect}</td>
                <td className="p-2">{row.simple}</td>
                <td className="p-2">{row.active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Common Mistakes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Common Mistakes
      </h3>
      {activeVoiceData.mistakes.map((m, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
        >
          <p className="text-red-600">
            ❌ <strong>{m.wrong}</strong>
          </p>
          <p className="text-green-600">
            ✅ <strong>{m.correct}</strong>
          </p>
          <p className="text-gray-600 italic">{m.sinhala}</p>
        </div>
      ))}
    </div>
  );
  const renderPassiveVoice = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {passiveVoiceData.title}
      </h2>
      <p className="text-gray-700 mb-1">{passiveVoiceData.english}</p>
      <p className="text-gray-600 italic mb-4">{passiveVoiceData.sinhala}</p>

      {/* --- Structure --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
        Structure
      </h3>
      <p className="text-gray-700">{passiveVoiceData.structure.english}</p>
      <p className="text-gray-600 italic mb-3">
        {passiveVoiceData.structure.sinhala}
      </p>
      <div className="bg-[#fff] border-l-4 border-[#d4a017] p-3 rounded-md mb-4">
        <strong>{passiveVoiceData.structure.example.en}</strong>
        <br />
        <span className="text-gray-600">
          {passiveVoiceData.structure.example.si}
        </span>
      </div>

      {/* --- Usage Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {passiveVoiceData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>

      {/* --- Examples for Each Tense --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
        Passive Voice Examples for Each Tense
      </h3>
      <div className="space-y-6 mb-8">
        {passiveVoiceData.tenseExamples.map((ex, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017] mb-2">
              {ex.tense}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800">📝 General Use:</p>
                <p className="text-gray-700">{ex.general}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">📌 Passive Voice:</p>
                <p className="text-gray-700">{ex.passiveVoice}</p>
              </div>
            </div>
            <div className="bg-[#fffaf3] mt-3 p-3 rounded-lg border-l-4 border-[#d4a017]">
              <p className="text-gray-800">
                <strong>Example:</strong> {ex.example}
              </p>
              <p className="text-gray-600 italic">{ex.sinhala}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Comparison Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {passiveVoiceData.comparison.title}
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Aspect</th>
              <th className="p-2 text-left">Active Voice</th>
              <th className="p-2 text-left">Passive Voice</th>
            </tr>
          </thead>
          <tbody>
            {passiveVoiceData.comparison.table.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2 font-medium">{row.aspect}</td>
                <td className="p-2">{row.active}</td>
                <td className="p-2">{row.passive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Common Mistakes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Common Mistakes
      </h3>
      {passiveVoiceData.mistakes.map((m, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
        >
          <p className="text-red-600">
            ❌ <strong>{m.wrong}</strong>
          </p>
          <p className="text-green-600">
            ✅ <strong>{m.correct}</strong>
          </p>
          <p className="text-gray-600 italic">{m.sinhala}</p>
        </div>
      ))}
    </div>
  );

  const renderReportedSpeech = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {reportedSpeechData.title}
      </h2>
      <p className="text-gray-700 mb-1">{reportedSpeechData.english}</p>
      <p className="text-gray-600 italic mb-4">{reportedSpeechData.sinhala}</p>

      {/* --- Structure --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
        Structure
      </h3>
      <p className="text-gray-700">{reportedSpeechData.structure.english}</p>
      <p className="text-gray-600 italic mb-3">
        {reportedSpeechData.structure.sinhala}
      </p>
      <div className="bg-[#fff] border-l-4 border-[#d4a017] p-3 rounded-md mb-4">
        <strong>{reportedSpeechData.structure.example.en}</strong>
        <br />
        <span className="text-gray-600">
          {reportedSpeechData.structure.example.si}
        </span>
      </div>

      {/* --- Usage Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {reportedSpeechData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>

      {/* --- Tense Changes Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Tense Changes
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Direct Speech</th>
              <th className="p-2 text-left">Reported Speech</th>
            </tr>
          </thead>
          <tbody>
            {reportedSpeechData.tenseChanges.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2">{row.direct}</td>
                <td className="p-2">{row.reported}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Time & Place Changes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Time & Place Word Changes
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Direct</th>
              <th className="p-2 text-left">Reported</th>
            </tr>
          </thead>
          <tbody>
            {reportedSpeechData.timePlaceWords.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2">{row.direct}</td>
                <td className="p-2">{row.reported}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Examples --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">Examples</h3>
      <div className="space-y-6 mb-8">
        {reportedSpeechData.examples.map((ex, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017] mb-2">{ex.type}</h4>
            <p className="text-gray-800">
              <strong>Direct:</strong> {ex.direct}
            </p>
            <p className="text-gray-800">
              <strong>Reported:</strong> {ex.reported}
            </p>
            <p className="text-gray-600 italic">{ex.sinhala}</p>
          </div>
        ))}
      </div>

      {/* --- Common Mistakes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Common Mistakes
      </h3>
      {reportedSpeechData.mistakes.map((m, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
        >
          <p className="text-red-600">{m.wrong}</p>
          <p className="text-green-600">{m.correct}</p>
          <p className="text-gray-600 italic">{m.sinhala}</p>
        </div>
      ))}
    </div>
  );

  const SentenceStructure = () => {
    return (
      <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
        {/* --- Title & Intro --- */}
        <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
          {sentenceStructureData.title}
        </h2>
        <p className="text-gray-700 mb-1">{sentenceStructureData.english}</p>
        <p className="text-gray-600 italic mb-4">
          {sentenceStructureData.sinhala}
        </p>

        {/* --- Basic Patterns --- */}
        <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
          Basic Sentence Patterns
        </h3>
        <div className="space-y-3 mb-6">
          {sentenceStructureData.basicPatterns.map((p, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#d4a017]"
            >
              <p className="text-gray-800 font-semibold">{p.pattern}</p>
              <p className="text-gray-700">{p.english}</p>
              <p className="text-gray-600 italic">{p.sinhala}</p>
            </div>
          ))}
        </div>

        {/* --- Sentence Types by Function --- */}
        <h3 className="text-xl font-semibold text-[#b8860b] mb-3">
          Sentence Types by Function
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {sentenceStructureData.sentenceTypesFunction.map((t, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <h4 className="text-lg font-bold text-[#d4a017] mb-1">
                {t.type}
              </h4>
              <p className="text-gray-700">{t.description}</p>
              <p className="text-gray-600 italic mb-2">{t.sinhala}</p>
              <div className="bg-[#fffaf3] p-2 rounded border-l-4 border-[#d4a017]">
                <strong>{t.example}</strong>
                <br />
                <span className="text-gray-600 italic">{t.sinhalaExample}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Sentence Types by Structure --- */}
        <h3 className="text-xl font-semibold text-[#b8860b] mb-3">
          Sentence Types by Structure
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-[#f8f3e9] text-gray-800">
              <tr>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Example</th>
                <th className="p-2 text-left">Sinhala</th>
              </tr>
            </thead>
            <tbody>
              {sentenceStructureData.sentenceTypesStructure.map((row, i) => (
                <tr key={i} className="border-t border-gray-300">
                  <td className="p-2 font-medium">{row.type}</td>
                  <td className="p-2">{row.description}</td>
                  <td className="p-2">{row.example}</td>
                  <td className="p-2">{row.sinhala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Common Mistakes --- */}
        <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
          Common Mistakes
        </h3>
        {sentenceStructureData.mistakes.map((m, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
          >
            <p className="text-red-600">
              ❌ <strong>{m.wrong}</strong>
            </p>
            <p className="text-green-600">
              ✅ <strong>{m.correct}</strong>
            </p>
            <p className="text-gray-600 italic">{m.sinhala}</p>
          </div>
        ))}
      </div>
    );
  };

  // ----- RENDER QUESTION FORMATION -----
  const renderQuestionFormation = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {questionFormationData.title}
      </h2>
      <p className="text-gray-700 mb-1">{questionFormationData.english}</p>
      <p className="text-gray-600 italic mb-4">
        {questionFormationData.sinhala}
      </p>

      {/* --- Structure --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
        Structure
      </h3>
      <p className="text-gray-700">{questionFormationData.structure.english}</p>
      <p className="text-gray-600 italic mb-3">
        {questionFormationData.structure.sinhala}
      </p>
      <div className="bg-[#fff] border-l-4 border-[#d4a017] p-3 rounded-md mb-4">
        <strong>{questionFormationData.structure.example.en}</strong>
        <br />
        <span className="text-gray-600">
          {questionFormationData.structure.example.si}
        </span>
      </div>

      {/* --- Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {questionFormationData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>

      {/* --- Types of Questions --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
        Types of Questions
      </h3>
      <div className="space-y-4 mb-6">
        {questionFormationData.types.map((t, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017]">{t.type}</h4>
            <p className="text-gray-700">{t.description}</p>
            <div className="bg-[#fffaf3] mt-2 p-2 rounded-lg border-l-4 border-[#d4a017]">
              <p className="text-gray-800">
                <strong>Example:</strong> {t.example.en}
              </p>
              <p className="text-gray-600 italic">{t.example.si}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Tense Examples --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
        Question Examples by Tense
      </h3>
      <div className="space-y-6 mb-8">
        {questionFormationData.tenseExamples.map((ex, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017] mb-2">
              {ex.tense}
            </h4>
            <p className="font-semibold text-gray-800">🧩 Rule:</p>
            <p className="text-gray-700 mb-2">{ex.rule}</p>
            <div className="bg-[#fffaf3] mt-2 p-3 rounded-lg border-l-4 border-[#d4a017]">
              <p className="text-gray-800">
                <strong>Example:</strong> {ex.example}
              </p>
              <p className="text-gray-600 italic">{ex.sinhala}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Comparison Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {questionFormationData.comparison.title}
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Aspect</th>
              <th className="p-2 text-left">Statement</th>
              <th className="p-2 text-left">Question</th>
            </tr>
          </thead>
          <tbody>
            {questionFormationData.comparison.table.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2 font-medium">{row.aspect}</td>
                <td className="p-2">{row.statement}</td>
                <td className="p-2">{row.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Common Mistakes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Common Mistakes
      </h3>
      {questionFormationData.mistakes.map((m, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
        >
          <p className="text-red-600">
            ❌ <strong>{m.wrong}</strong>
          </p>
          <p className="text-green-600">
            ✅ <strong>{m.correct}</strong>
          </p>
          <p className="text-gray-600 italic">{m.sinhala}</p>
        </div>
      ))}
    </div>
  );

  const renderConditionals = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title & Intro --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {conditionalsData.title}
      </h2>
      <p className="text-gray-700 mb-1">{conditionalsData.english}</p>
      <p className="text-gray-600 italic mb-4">{conditionalsData.sinhala}</p>

      {/* --- Structure --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
        Structure
      </h3>
      <p className="text-gray-700">{conditionalsData.structure.english}</p>
      <p className="text-gray-600 italic mb-3">
        {conditionalsData.structure.sinhala}
      </p>
      <div className="bg-[#fff] border-l-4 border-[#d4a017] p-3 rounded-md mb-4">
        <strong>{conditionalsData.structure.example.en}</strong>
        <br />
        <span className="text-gray-600">
          {conditionalsData.structure.example.si}
        </span>
      </div>

      {/* --- Usage Notes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        Usage Notes
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {conditionalsData.notes.map((n, i) => (
          <li key={i}>
            {n.en}
            <br />
            <span className="text-gray-600 italic">{n.si}</span>
          </li>
        ))}
      </ul>

      {/* --- Types of Conditionals --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
        Types of Conditionals
      </h3>
      <div className="space-y-4 mb-6">
        {conditionalsData.types.map((t, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-bold text-[#d4a017]">{t.type}</h4>
            <p className="text-gray-700">
              <strong>Usage:</strong> {t.usage}
            </p>
            <p className="text-gray-700">
              <strong>Structure:</strong> {t.structure}
            </p>
            <div className="bg-[#fffaf3] mt-2 p-2 rounded-lg border-l-4 border-[#d4a017]">
              <p className="text-gray-800">
                <strong>Example:</strong> {t.example.en}
              </p>
              <p className="text-gray-600 italic">{t.example.si}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Mixed Conditional --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {conditionalsData.mixedConditional.title}
      </h3>
      <p className="text-gray-700 mb-2">
        {conditionalsData.mixedConditional.description}
      </p>
      <div className="bg-[#fffaf3] p-3 rounded-lg border-l-4 border-[#d4a017] mb-6">
        <p className="text-gray-800">
          <strong>Example:</strong>{" "}
          {conditionalsData.mixedConditional.example.en}
        </p>
        <p className="text-gray-600 italic">
          {conditionalsData.mixedConditional.example.si}
        </p>
      </div>

      {/* --- Comparison Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {conditionalsData.comparison.title}
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Structure</th>
              <th className="p-2 text-left">Meaning</th>
              <th className="p-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {conditionalsData.comparison.table.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2 font-medium">{row.aspect}</td>
                <td className="p-2">{row.form}</td>
                <td className="p-2">{row.meaning}</td>
                <td className="p-2">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Common Mistakes --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        Common Mistakes
      </h3>
      {conditionalsData.mistakes.map((m, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 mb-4"
        >
          <p className="text-red-600">
            ❌ <strong>{m.wrong}</strong>
          </p>
          <p className="text-green-600">
            ✅ <strong>{m.correct}</strong>
          </p>
          <p className="text-gray-600 italic">{m.sinhala}</p>
        </div>
      ))}
    </div>
  );

  const renderModalsGerunds = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      {/* --- Title --- */}
      <h2 className="text-2xl font-bold text-[#d4a017] mb-2">
        {modalsGerundsData.title}
      </h2>
      <p className="text-gray-700 mb-1">{modalsGerundsData.english}</p>
      <p className="text-gray-600 italic mb-6">{modalsGerundsData.sinhala}</p>

      {/* --- Each Section --- */}
      {modalsGerundsData.sections.map((sec, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
            {sec.title}
          </h3>
          <p className="text-gray-700">{sec.english}</p>
          <p className="text-gray-600 italic mb-3">{sec.sinhala}</p>

          {/* Common Modals */}
          {sec.commonModals && (
            <div className="space-y-4 mt-4">
              {sec.commonModals.map((m, j) => (
                <div
                  key={j}
                  className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#d4a017]"
                >
                  <p className="font-bold text-[#d4a017]">{m.modal}</p>
                  <p className="text-gray-700">
                    <strong>Usage:</strong> {m.usage}
                  </p>
                  <p className="text-gray-800">
                    <strong>Example:</strong> {m.example.en}
                  </p>
                  <p className="text-gray-600 italic">{m.example.si}</p>
                </div>
              ))}
            </div>
          )}

          {/* Gerunds / Infinitive Examples */}
          {sec.examples && (
            <div className="space-y-2 mt-3">
              {sec.examples.map((ex, j) => (
                <div
                  key={j}
                  className="bg-[#fffaf3] border-l-4 border-[#d4a017] p-2 rounded"
                >
                  <p className="text-gray-800">{ex.en}</p>
                  <p className="text-gray-600 italic">{ex.si}</p>
                </div>
              ))}
            </div>
          )}

          {/* Notes */}
          {sec.notes && (
            <ul className="list-disc list-inside text-gray-700 mt-3">
              {sec.notes.map((n, j) => (
                <li key={j}>
                  {n.en}
                  <br />
                  <span className="text-gray-600 italic">{n.si}</span>
                  {n.example && (
                    <div className="bg-white mt-1 p-2 rounded border-l-4 border-[#b8860b]">
                      <p className="text-gray-800">{n.example.en}</p>
                      <p className="text-gray-600 italic">{n.example.si}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* --- Comparison Table --- */}
      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        {modalsGerundsData.comparison.title}
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[#f8f3e9] text-gray-800">
            <tr>
              <th className="p-2 text-left">Aspect</th>
              <th className="p-2 text-left">Gerund (-ing)</th>
              <th className="p-2 text-left">Infinitive (to + verb)</th>
            </tr>
          </thead>
          <tbody>
            {modalsGerundsData.comparison.table.map((row, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-2 font-medium">{row.aspect}</td>
                <td className="p-2">{row.gerund}</td>
                <td className="p-2">{row.infinitive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // ----- RENDER CONJUNCTIONS & LINKING WORDS -----
  const renderConjunctions = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {conjunctionsData.title}
      </h2>
      <p className="text-gray-800">{conjunctionsData.english}</p>
      <p className="text-gray-600 italic mb-4">{conjunctionsData.sinhala}</p>

      {conjunctionsData.types.map((t, i) => (
        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border mb-4">
          <h3 className="font-bold text-[#b8860b] text-lg mb-1">{t.type}</h3>
          <p className="text-gray-700">{t.description}</p>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            {t.examples.map((ex, j) => (
              <li key={j}>
                {ex.en}
                <br />
                <span className="text-gray-600 italic">{ex.si}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // ----- RENDER PUNCTUATION & CAPITALIZATION -----
  const renderPunctuation = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {punctuationData.title}
      </h2>
      <p className="text-gray-800">{punctuationData.english}</p>
      <p className="text-gray-600 italic mb-4">{punctuationData.sinhala}</p>

      <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
        🔹 Common Punctuation Marks
      </h3>
      {punctuationData.punctuationMarks.map((p, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border mb-3">
          <h4 className="font-bold text-[#d4a017]">
            {p.mark} — {p.name}
          </h4>
          <p className="text-gray-700">{p.use}</p>
          <p>
            <strong>{p.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{p.example.si}</span>
          </p>
        </div>
      ))}

      <h3 className="text-xl font-semibold text-[#b8860b] mt-6 mb-2">
        🔠 Capitalization Rules
      </h3>
      {punctuationData.capitalizationRules.map((r, i) => (
        <div key={i} className="bg-white p-4 rounded-lg border mb-3">
          <p className="text-gray-700">{r.rule}</p>
          <p>
            <strong>{r.example.en}</strong>
            <br />
            <span className="text-gray-600 italic">{r.example.si}</span>
          </p>
        </div>
      ))}
    </div>
  );

  // ----- RENDER COMMON GRAMMAR MISTAKES -----
  const renderGrammarMistakes = () => (
    <div className="bg-[#fffaf3] p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#d4a017] mb-3">
        {grammarMistakesData.title}
      </h2>
      <p className="text-gray-800">{grammarMistakesData.english}</p>
      <p className="text-gray-600 italic mb-4">{grammarMistakesData.sinhala}</p>

      {grammarMistakesData.categories.map((cat, i) => (
        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border mb-5">
          <h3 className="text-xl font-bold text-[#b8860b] mb-1">{cat.name}</h3>
          <p className="text-gray-800">{cat.explanation}</p>
          <p className="text-gray-600 italic mb-2">{cat.sinhala}</p>

          <ul className="list-disc list-inside text-gray-800">
            {cat.examples.map((ex, j) => (
              <li key={j} className="mb-1">
                <span className="text-red-600 font-bold">❌ {ex.wrong}</span>
                <br />
                <span className="text-green-600 font-bold">
                  ✅ {ex.correct}
                </span>
                <br />
                <span className="text-gray-600 italic">{ex.si}</span>
              </li>
            ))}
          </ul>
          {cat.note && (
            <p className="mt-2 text-sm text-blue-700 font-semibold">
              {cat.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTopic === "Tenses") return renderTenses();
    if (activeTopic === "Articles") return renderArticles();
    if (activeTopic === "Prepositions") return renderPrepositions();
    if (activeTopic === "Active Voice") return renderActiveVoice();
    if (activeTopic === "Passive Voice") return renderPassiveVoice();
    if (activeTopic === "Reported Speech") return renderReportedSpeech();
    if (activeTopic === "Parts of Speech") return renderPartsOfSpeech();
    if (activeTopic === "Modals, Gerunds & more") return renderModalsGerunds();
    if (activeTopic === "Sentence Structure") return <SentenceStructure />;
    if (activeTopic === "Question Formation") return renderQuestionFormation();
    if (activeTopic === "Conditionals") return renderConditionals();
    if (activeTopic === "Conjunctions & Linking Words")
      return renderConjunctions();
    if (activeTopic === "Punctuation & Capitalization")
      return renderPunctuation();
    if (activeTopic === "Common Grammar Mistakes")
      return renderGrammarMistakes();

    if (activeTopic === "Phrasal Verbs & Idioms")
      return renderPhrasalVerbsAndIdioms();
    if (activeTopic === "Comparatives & Superlatives")
      return renderComparativesAndSuperlatives();
    if (activeTopic === "Clauses") return renderClauses();

    return (
      <div className="bg-[#fffaf3] p-8 text-center rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-[#d4a017] mb-3">
          {activeTopic}
        </h2>
        <p className="text-gray-600">
          Sinhala & English explanations for <strong>{activeTopic}</strong> will
          be added soon.
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#fdfaf5] min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <section className="px-10 py-10 text-center">
        <h2 className="text-4xl font-bold mb-3 text-[#1e293b]">
          Grammar Lessons 📘
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn English Grammar with Sinhala explanations, examples, and
          real-life usage patterns. 🇱🇰
        </p>
      </section>

      {/* Topic Buttons */}
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {topics.map((topic) => {
          // Define difficulty levels
          const beginnerTopics = [
            "Parts of Speech",
            "Tenses",
            "Articles",
            "Prepositions",
            "Sentence Structure",
            "Question Formation",
          ];
          const intermediateTopics = [
            "Active Voice",
            "Passive Voice",
            "Reported Speech",
            "Conditionals",
            "Modals, Gerunds & more",
            "Conjunctions & Linking Words",
            "Comparatives & Superlatives",
          ];
          const advancedTopics = [
            "Clauses",
            "Phrasal Verbs & Idioms",
            "Punctuation & Capitalization",
            "Common Grammar Mistakes",
          ];

          // Determine level for current topic
          let level = "beginner";
          if (intermediateTopics.includes(topic)) level = "intermediate";
          if (advancedTopics.includes(topic)) level = "advanced";

          // Color mapping: beginner=light orange, intermediate=orange, advanced=dark red
          const getButtonColors = () => {
            if (activeTopic === topic) {
              // Selected state - bold colors
              if (level === "beginner")
                return "bg-[#ffb366] text-white shadow-md hover:bg-[#FF8A08]";
              if (level === "intermediate")
                return "bg-[#ff8c1a] text-white shadow-md hover:bg-[#FF6500]";
              if (level === "advanced")
                return "bg-[#cc3300] text-white shadow-md hover:bg-[#C40C0C]";
            }
            // Unselected state - light borders with white background
            if (level === "beginner")
              return "bg-white text-[#ffb366] border-2 border-[#ffb366] hover:bg-[#fff5eb]";
            if (level === "intermediate")
              return "bg-white text-[#ff8c1a] border-2 border-[#ff8c1a] hover:bg-[#fff0e6]";
            if (level === "advanced")
              return "bg-white text-[#cc3300] border-2 border-[#cc3300] hover:bg-[#ffe6e6]";
          };

          return (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-5 py-2 rounded-full font-semibold transition ${getButtonColors()}`}
            >
              {topic}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-10 pb-16">{renderContent()}</div>

      {/* Popup */}
      {renderPopup()}

      {/* Footer */}
      <Footer />
    </div>
  );
}
