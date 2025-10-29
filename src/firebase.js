import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signUp = async (email, password, displayName) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) await updateProfile(userCred.user, { displayName });
  return userCred.user;
};

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  // optional: provider.addScope('profile');
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

// Firestore helpers for remembered words
export const getUserRememberedWords = async (uid) => {
  if (!uid) return [];
  const d = await getDoc(doc(db, "users", uid));
  if (!d.exists()) return [];
  const data = d.data();
  return data.rememberedWords || [];
};

export const setUserRememberedWords = async (uid, words) => {
  if (!uid) throw new Error("No uid");
  await setDoc(doc(db, "users", uid), { rememberedWords: words }, { merge: true });
};

export const addUserRememberedWord = async (uid, word) => {
  if (!uid) throw new Error("No uid");
  // Use updateDoc with arrayUnion; if doc doesn't exist, setDoc first
  const ref = doc(db, "users", uid);
  const d = await getDoc(ref);
  if (!d.exists()) {
    await setDoc(ref, { rememberedWords: [word] });
    return;
  }
  await updateDoc(ref, { rememberedWords: arrayUnion(word) });
};

export const removeUserRememberedWord = async (uid, word) => {
  if (!uid) throw new Error("No uid");
  const ref = doc(db, "users", uid);
  const d = await getDoc(ref);
  if (!d.exists()) return;
  await updateDoc(ref, { rememberedWords: arrayRemove(word) });
};

export const signOutUser = () => signOut(auth);

export const onAuthChange = (cb) => {
  return onAuthStateChanged(auth, cb);
};