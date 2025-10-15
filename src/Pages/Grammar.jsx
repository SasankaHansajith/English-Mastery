import React, { useState } from "react";
import { ArrowLeftCircle, XCircle } from "lucide-react";
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
    "Tenses",
    "Active Voice",
    "Passive Voice",
    "Articles",
    "Prepositions",
    "Reported Speech",
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

  const renderContent = () => {
    if (activeTopic === "Tenses") return renderTenses();
    if (activeTopic === "Articles") return renderArticles();
    if (activeTopic === "Prepositions") return renderPrepositions();
    if (activeTopic === "Active Voice") return renderActiveVoice();
    if (activeTopic === "Passive Voice") return renderPassiveVoice();
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
      <nav className="flex justify-between items-center px-10 py-6 bg-[#fffaf3] shadow-sm">
        <div className="flex items-center gap-3">
          <ArrowLeftCircle
            onClick={() => (window.location.href = "/")}
            className="text-[#d4a017] w-6 h-6 cursor-pointer hover:text-[#b88d10]"
          />
          <h1 className="text-2xl font-bold text-[#d4a017]">
            English සිංහලෙන්
          </h1>
        </div>
      </nav>

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
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              activeTopic === topic
                ? "bg-[#d4a017] text-white shadow-md"
                : "bg-white text-[#d4a017] border border-[#d4a017] hover:bg-[#fff2cc]"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-10 pb-16">{renderContent()}</div>

      {/* Popup */}
      {renderPopup()}

      {/* Footer */}
      <footer className="bg-[#262626] text-gray-300 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} English සිංහලෙන් | Learn English in
          Sinhala 🇱🇰
        </p>
      </footer>
    </div>
  );
}
