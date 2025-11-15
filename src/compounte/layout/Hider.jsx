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

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md border-b border-white/30">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo/iqra-online-madrasa-logo.png"
                        alt="IQRA Online Madrasa Logo"
                        className="h-10 sm:h-12 rounded-xl transition duration-300 group-hover:scale-105 group-hover:brightness-110 shadow-sm"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://placehold.co/150x48/ffffff/0ea5e9?text=IQRA+Logo";
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className="hover:text-yellow-200 transition duration-300 pb-1 border-b-2 border-transparent hover:border-yellow-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Account Button */}
                <div className="hidden md:flex">
                    <Link
                        to="/AuthForm"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/20 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
                    >
                        <Lock className="h-4 w-4" />
                        আমার অ্যাকাউন্ট
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg text-white hover:text-yellow-200 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 px-4 pb-4 animate-fadeIn">
                    <ul className="flex flex-col space-y-2 pt-3 text-white font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full px-3 py-2 rounded-lg hover:bg-white/20 hover:text-yellow-200 transition"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Account Button */}
                    <Link
                        to="/AuthForm"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-white/20 text-white rounded-xl shadow-md hover:bg-white/30 transition duration-300"
                    >
                        <Lock className="mr-2 h-4 w-4" />
                        আমার অ্যাকাউন্ট
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Hider;
