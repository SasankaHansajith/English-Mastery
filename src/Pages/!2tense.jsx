// import React from "react";
// import { ArrowLeft, Home } from "lucide-react";

// export default function 12tense() {
//   const tenses = [
//     {
//       title: "Present Simple (ඇතැම් විට වර්තමාන කාලය)",
//       explanation:
//         "Used for habits, general truths, and routines. (නිතර කරන ක්‍රියා, සත්‍ය දේ සහ සාමාන්‍ය රටාවන් දැක්වීමට භාවිතා කරයි.)",
//       examples: [
//         {
//           en: "I play football every Sunday.",
//           si: "මම සෑම ඉරිදාකමත් පන්දුයන්නේය.",
//         },
//         { en: "She works at a bank.", si: "ඇය බැංකුවක වැඩ කරයි." },
//         {
//           en: "The sun rises in the east.",
//           si: "සූර්යයා නැගෙනහිරින් උදාවෙයි.",
//         },
//       ],
//     },
//     {
//       title: "Present Continuous (වර්තමාන දිගු කාලය)",
//       explanation:
//         "Used for actions happening now. (දැන් සිදුවන ක්‍රියා සඳහා භාවිතා කරයි.)",
//       examples: [
//         {
//           en: "I am studying English now.",
//           si: "මම දැන් ඉංග්‍රීසි අධ්‍යයනය කරමින් සිටිමි.",
//         },
//         {
//           en: "She is cooking dinner.",
//           si: "ඇය රාත්‍රී ආහාරය සකස් කරමින් සිටී.",
//         },
//         {
//           en: "They are playing cricket.",
//           si: "ඔවුන් ක්‍රිකට් ක්‍රීඩා කරමින් සිටිති.",
//         },
//       ],
//     },
//     {
//       title: "Present Perfect (වර්තමාන සම්පූර්ණ කාලය)",
//       explanation:
//         "Used for actions that happened at an unspecified time or recently. (නියමිත නොවන කාලයක සිදු වූ හෝ මෑතකදී සිදු වූ ක්‍රියා.)",
//       examples: [
//         {
//           en: "I have finished my homework.",
//           si: "මම මගේ ගෙදර වැඩ අවසන් කරලා තියෙනවා.",
//         },
//         { en: "She has seen that movie.", si: "ඇය ඒ චිත්‍රපටය දැක්කා." },
//         { en: "They have gone to school.", si: "ඔවුන් පාසලට ගිහින් තියෙනවා." },
//       ],
//     },
//     {
//       title: "Present Perfect Continuous (වර්තමාන සම්පූර්ණ දිගු කාලය)",
//       explanation:
//         "Used for actions started in the past and still continuing. (අතීතයේ ආරම්භ වී තවමත් පවතින ක්‍රියා සඳහා.)",
//       examples: [
//         {
//           en: "I have been working here for two years.",
//           si: "මම අවුරුදු දෙකකට මෙහි වැඩ කරමින් සිටිමි.",
//         },
//         {
//           en: "She has been reading for an hour.",
//           si: "ඇය පැයකට විතර කියවමින් සිටී.",
//         },
//         {
//           en: "They have been waiting since morning.",
//           si: "ඔවුන් උදේ සිටම බලාගෙන ඉන්නවා.",
//         },
//       ],
//     },
//     {
//       title: "Past Simple (අතීත කාලය)",
//       explanation:
//         "Used for completed actions in the past. (අතීතයේ අවසන් වූ ක්‍රියා සඳහා භාවිතා කරයි.)",
//       examples: [
//         {
//           en: "I visited my grandmother yesterday.",
//           si: "මම ඊයේ මගේ ආච්චිව පරීක්ෂා කළා.",
//         },
//         { en: "He watched a movie.", si: "ඔහු චිත්‍රපටයක් බලලා." },
//         {
//           en: "They played cricket last week.",
//           si: "ඔවුන් පසුගිය සතියේ ක්‍රිකට් ක්‍රීඩා කළා.",
//         },
//       ],
//     },
//     {
//       title: "Past Continuous (අතීත දිගු කාලය)",
//       explanation:
//         "Used for actions that were happening at a certain time in the past. (අතීතයේ විශේෂිත වේලාවක සිදුවෙමින් තිබූ ක්‍රියා.)",
//       examples: [
//         {
//           en: "I was reading when you called.",
//           si: "ඔබ ඇමතුමක් දුන්නා වෙලාවේ මම කියවමින් හිටියා.",
//         },
//         {
//           en: "She was sleeping at 10 PM.",
//           si: "ඇය රාත්‍රී 10ට නිදාගෙන හිටියා.",
//         },
//         { en: "They were playing football.", si: "ඔවුන් පන්දුයමින් හිටියා." },
//       ],
//     },
//     {
//       title: "Past Perfect (අතීත සම්පූර්ණ කාලය)",
//       explanation:
//         "Used for actions completed before another past action. (අතීතයේ වෙනත් ක්‍රියාවකට පෙර අවසන් වූ ක්‍රියාවක්.)",
//       examples: [
//         {
//           en: "I had eaten before you arrived.",
//           si: "ඔබ පැමිණීමට පෙර මම කාගෙන හිටියා.",
//         },
//         { en: "She had finished the work.", si: "ඇය වැඩ අවසන් කරලා හිටියා." },
//         {
//           en: "They had gone home before it rained.",
//           si: "වැසි වැටීමට පෙර ඔවුන් ගෙදර ගියා.",
//         },
//       ],
//     },
//     {
//       title: "Past Perfect Continuous (අතීත සම්පූර්ණ දිගු කාලය)",
//       explanation:
//         "Used for actions that were ongoing until another past action occurred. (අතීතයේ වෙනත් ක්‍රියාවක් සිදු වීම තෙක් සිදුවූ ක්‍රියාවක්.)",
//       examples: [
//         {
//           en: "I had been working for two hours before lunch.",
//           si: "මම ආහාරයට පෙර පැය දෙකකට වැඩ කරමින් හිටියා.",
//         },
//         {
//           en: "She had been studying all night.",
//           si: "ඇය සෑම රාත්‍රියම පුරාවටම ඉගෙන ගන්නා ලදී.",
//         },
//         {
//           en: "They had been waiting for the bus.",
//           si: "ඔවුන් බස් එකට බලාගෙන හිටියා.",
//         },
//       ],
//     },
//     {
//       title: "Future Simple (භාවි කාලය)",
//       explanation:
//         "Used for actions that will happen in the future. (භාවියේ සිදුවන ක්‍රියා සඳහා භාවිතා කරයි.)",
//       examples: [
//         { en: "I will call you tomorrow.", si: "මම හෙට ඔබට ඇමතුමක් දෙන්නම්." },
//         { en: "She will travel next week.", si: "ඇය ඊළඟ සතියේ ගමන් කරනවා." },
//         {
//           en: "They will play cricket.",
//           si: "ඔවුන් ක්‍රිකට් ක්‍රීඩා කරනු ඇත.",
//         },
//       ],
//     },
//     {
//       title: "Future Continuous (භාවි දිගු කාලය)",
//       explanation:
//         "Used for actions that will be happening at a specific time in the future. (භාවියේ විශේෂිත වේලාවක සිදුවෙමින් ඇති ක්‍රියා සඳහා.)",
//       examples: [
//         {
//           en: "I will be working at 10 AM tomorrow.",
//           si: "මම හෙට පෙරවරු 10ට වැඩ කරමින් ඉන්නවා.",
//         },
//         {
//           en: "She will be studying this evening.",
//           si: "ඇය අද සවස ඉගෙන ගන්නා ලදී.",
//         },
//         {
//           en: "They will be traveling at that time.",
//           si: "ඔවුන් එම වේලාවේ ගමන් කරමින් ඉන්නවා.",
//         },
//       ],
//     },
//     {
//       title: "Future Perfect (භාවි සම්පූර්ණ කාලය)",
//       explanation:
//         "Used for actions that will be completed before a specific future time. (භාවියේ විශේෂිත වේලාවකට පෙර අවසන් වන ක්‍රියා.)",
//       examples: [
//         {
//           en: "I will have finished my work by 5 PM.",
//           si: "මම සවස 5ට පෙර මගේ වැඩ අවසන් කරලා තියෙන්නෙමි.",
//         },
//         { en: "She will have left by then.", si: "ඇය එවිට යාමට සූදානම් වේ." },
//         {
//           en: "They will have completed the project.",
//           si: "ඔවුන් ව්‍යාපෘතිය අවසන් කරලා තියෙන්නෙයි.",
//         },
//       ],
//     },
//     {
//       title: "Future Perfect Continuous (භාවි සම්පූර්ණ දිගු කාලය)",
//       explanation:
//         "Used for actions continuing up to a point in the future. (භාවියේ විශේෂිත වේලාවකට පුරාවට දිගුවන ක්‍රියා.)",
//       examples: [
//         {
//           en: "I will have been studying for three hours by 8 PM.",
//           si: "මම සවස 8ට පෙර පැය තුනක් ඉගෙන ගන්නවා වෙයි.",
//         },
//         {
//           en: "She will have been working all day.",
//           si: "ඇය සම්පූර්ණ දිනයම වැඩ කරමින් ඉන්නවා වෙයි.",
//         },
//         {
//           en: "They will have been traveling since morning.",
//           si: "ඔවුන් උදේ සිටම ගමන් කරමින් ඉන්නවා වෙයි.",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
//         <button
//           onClick={() =>
//             window.dispatchEvent(new CustomEvent("navigate-to-home"))
//           }
//           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Home
//         </button>
//         <h1 className="text-2xl font-bold text-blue-700">English Grammar</h1>
//         <button
//           onClick={() =>
//             window.dispatchEvent(new CustomEvent("navigate-to-home"))
//           }
//           className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
//         >
//           <Home className="w-5 h-5" />
//           Home
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="p-8">
//         <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
//           12 Tenses (කාල 12)
//         </h2>
//         <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
//           Master all 12 English tenses with clear Sinhala explanations and
//           practical examples.
//           <br />
//           සිංහල පැහැදිලි කිරීම් සහ ප්‍රායෝගික උදාහරණ සමඟ ඉංග්‍රීසි කාල 12 ම ඉගෙන
//           ගන්න.
//         </p>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tenses.map((tense, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
//             >
//               <h2 className="text-2xl font-semibold text-blue-600 mb-3">
//                 {tense.title}
//               </h2>
//               <p className="text-gray-700 mb-3">{tense.explanation}</p>
//               <h3 className="font-semibold text-gray-800 mb-2">
//                 Examples / උදාහරණ:
//               </h3>
//               <ul className="space-y-1">
//                 {tense.examples.map((ex, i) => (
//                   <li key={i} className="border-l-4 border-blue-400 pl-2">
//                     <p className="text-gray-900">{ex.en}</p>
//                     <p className="text-gray-600 italic">{ex.si}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
