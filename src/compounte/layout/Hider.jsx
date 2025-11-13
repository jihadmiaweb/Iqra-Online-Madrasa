import { useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Hider() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "হোম" },
        { path: "/about", label: "আমাদের সম্পর্কে" },
        { path: "/products", label: "আমাদের কোর্স" },
        { path: "/contact", label: "যোগাযোগ" },
    ];

    const animatedButtonClasses =
        "px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out animate-pulse hover:animate-none hover:-translate-y-1 hover:shadow-xl";

    const mobileButtonClasses =
        "w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-300";

    return (
        <nav className="bg-gradient-to-r from-blue-100 via-indigo-100 to-teal-100 p-4 border-b border-gray-200 shadow-lg sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-cyan-700 font-bold text-lg flex items-center space-x-4">
                    <Link to="/" className="flex items-center space-x-4 group">
                        <img
                            src="/logo/iqra-online-madrasa-logo.png"
                            alt="IQRA Online Madrasa Logo"
                            className="h-10 sm:h-12 rounded-lg transition-all duration-500 hover:brightness-110 animate-colorGlow"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/150x48/1d4ed8/ffffff?text=IQRA+Logo";
                            }}
                        />
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className="hover:text-cyan-700 transition duration-300 border-b-2 border-transparent hover:border-cyan-500 pb-1"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Icons */}
                <div className="flex items-center ">
                    {/* Desktop Account Button */}
                    <button className={`hidden md:flex items-center ${animatedButtonClasses}`}>
                        <Lock className="mr-2 h-4 w-4" />
                        আমার অ্যাকাউন্ট
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 text-2xl hover:text-cyan-600 p-2 rounded-lg transition duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 pb-3 border-t border-gray-200 pt-3 animate-fadeIn">
                    <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-base hover:bg-cyan-100 hover:text-cyan-700 transition duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Account Button */}
                    <button
                        className={`mt-4 ${mobileButtonClasses}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <Lock className="mr-2 h-4 w-4" />
                        আমার অ্যাকাউন্ট
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Hider;
