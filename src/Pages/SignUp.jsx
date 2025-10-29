import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
// dynamic import of firebase functions inside handlers (avoids static import-time issues)

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    console.log('SignUp: handleSubmit invoked', { email: form.email });
    e.preventDefault();
    setError("");
    setLoading(true);
    import("../firebase.js")
      .then((m) => m.signUp(form.email, form.password, form.name))
      .then((user) => {
        console.log("Registered:", user);
        window.dispatchEvent(new CustomEvent("navigate-to-home"));
      })
      .catch((err) => {
        console.error("Sign up error:", err);
        setError(err.message || "Failed to register");
      })
      .finally(() => setLoading(false));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("SignUp mounted");
  }, []);

  return (
    <div className="bg-[#fdfaf5] min-h-screen flex flex-col text-gray-900 font-sans">
      <section className="flex-grow flex items-center justify-center px-6 py-16 bg-[#fffaf3] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md z-10"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-[#d4a017]">
            Create an Account ✨
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Start learning English from Sinhala today — it’s free!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-[#fffaf3]">
                <User className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-transparent flex-1 outline-none text-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-[#fffaf3]">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-transparent flex-1 outline-none text-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-[#fffaf3]">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="bg-transparent flex-1 outline-none text-gray-800"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#d4a017] text-white py-3 rounded-full font-semibold hover:bg-[#b88d10] transition"
              disabled={loading}
            >
              Sign Up 🎉
            </Button>
          </form>

          {/* Skip button placed under the primary Sign Up button */}
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("navigate-to-skip"));
              }}
              className="text-sm text-gray-600 hover:underline"
            >
              Skip and continue without creating an account
            </button>
          </div>

          <div className="my-4">
            <button
              type="button"
              onClick={() => {
                setError("");
                setLoading(true);
                import("../firebase.js")
                  .then((m) => m.signInWithGoogle())
                  .then((user) => {
                    console.log("Google sign-in success:", user);
                    window.dispatchEvent(new CustomEvent("navigate-to-home"));
                  })
                  .catch((err) => {
                    console.error("Google sign-in error:", err);
                    setError(err.message || "Google sign-in failed");
                  })
                  .finally(() => setLoading(false));
              }}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-full hover:bg-gray-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.35 11.1h-9.18v2.92h5.26c-.23 1.42-1.08 2.62-2.3 3.43v2.86h3.72c2.18-2.01 3.44-4.96 3.44-8.77 0-.6-.05-1.18-.19-1.67z" fill="#4285F4"/>
                <path d="M12.17 22c2.43 0 4.47-.8 5.96-2.17l-3.72-2.86c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.15-4.53H1.2v2.84C2.7 19.78 7.05 22 12.17 22z" fill="#34A853"/>
                <path d="M6.02 13.49A6.99 6.99 0 015.6 12c0-.68.12-1.34.34-1.95V7.21H1.2A10.01 10.01 0 000 12c0 1.6.35 3.12.98 4.49l5.04-2.99z" fill="#FBBC05"/>
                <path d="M12.17 6.5c1.66 0 3.17.57 4.35 1.69l3.25-3.25C16.58 2.17 14.6 1.2 12.17 1.2 7.05 1.2 2.7 3.42 1.2 6.76l4.73 3.03C6.88 8.43 9.31 6.5 12.17 6.5z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {error && (
            <p className="text-center text-red-600 text-sm mt-3">{error}</p>
          )}

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("navigate-to-signin"));
              }}
              className="text-[#d4a017] font-semibold hover:underline cursor-pointer"
            >
              Sign in here
            </a>
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#fff3e0] to-transparent opacity-40 rounded-3xl"></div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
