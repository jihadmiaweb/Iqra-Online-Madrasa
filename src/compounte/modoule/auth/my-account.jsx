import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

// --- Firebase Config ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // Listen for auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            resetForm();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            resetForm();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-1";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transition hover:shadow-cyan-400/30">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? "Welcome Back" : "Create Account"}
                </h1>

                {/* Toggle */}
                <div className="flex gap-4 mb-6">
                    <button
                        className={`flex-1 py-2 rounded-xl font-semibold ${isLogin ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-700"
                            }`}
                        onClick={() => {
                            setIsLogin(true);
                            resetForm();
                        }}
                    >
                        Log In
                    </button>
                    <button
                        className={`flex-1 py-2 rounded-xl font-semibold ${!isLogin ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-700"
                            }`}
                        onClick={() => {
                            setIsLogin(false);
                            resetForm();
                        }}
                    >
                        Register
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                {/* Form */}
                {isLogin ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClass}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClass}
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition"
                        >
                            {loading ? "Logging In..." : "Log In"}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClass}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClass}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={inputClass}
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading || password !== confirmPassword}
                            className="w-full py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition"
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                )}

                {/* Display current user */}
                {currentUser && (
                    <p className="mt-4 text-center text-sm text-cyan-700">
                        Logged in as: {currentUser.email}
                    </p>
                )}
            </div>
        </div>
    );
}
