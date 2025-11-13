import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-5">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-5">

                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">ইকরা অনলাইন মাদ্রাসা</h2>
                    <p className="text-gray-300 mb-4">
                        একটি সহযোগী প্রতিষ্ঠান। আমাদের লক্ষ্য শিক্ষার্থীদের জন্য সহজ ও কার্যকর শিক্ষা সরবরাহ করা।
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">দ্রুত লিঙ্ক</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-yellow-400">হোম</Link>
                        </li>
                        <li>
                            <Link to="/books" className="hover:text-yellow-400">কিতাব সমূহ</Link>
                        </li>
                        <li>
                            <Link to="/publishers" className="hover:text-yellow-400">প্রকাশকের বৃত্তান্ত</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400">যোগাযোগ</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">যোগাযোগ</h2>
                    <p className="text-gray-300">ইমেইল: <a href="mailto:muftiabdulkarimdhaka@gmail.com" className="hover:text-yellow-400">muftiabdulkarimdhaka@gmail.com</a></p>
                    <p className="text-gray-300">ফোন: <a href="tel:+8801841622025" className="hover:text-yellow-400">+880 1841-622025</a></p>
                </div>

            </div>

            <div className="text-center text-gray-500 mt-8 text-sm">
                &copy; {new Date().getFullYear()} ইকরা অনলাইন মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
            </div>
        </footer>
    );
}

export default Footer;
