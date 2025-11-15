import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    // Get the current year dynamically for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-10 pb-5">
            {/* The main container uses a responsive grid layout */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 lg:px-0">

                {/* About Section */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">ইকরা অনলাইন মাদ্রাসা</h2>
                    <p className="text-gray-300 mb-4 text-sm"> {/* Reduced text size for better fit */}
                        একটি সহযোগী প্রতিষ্ঠান। আমাদের লক্ষ্য শিক্ষার্থীদের জন্য **সহজ ও কার্যকর শিক্ষা** সরবরাহ করা।
                    </p>
                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-4 text-xl"> {/* Increased icon size for better tap target */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition duration-300"
                            aria-label="Facebook Link" // Added for accessibility
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300"
                            aria-label="Twitter Link"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition duration-300"
                            aria-label="Instagram Link"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-600 transition duration-300"
                            aria-label="Youtube Link"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">দ্রুত লিঙ্ক</h2>
                    <ul className="space-y-3 text-lg"> {/* Slightly increased line spacing and font size */}
                        <li>
                            <Link to="/" className="hover:text-yellow-400 transition duration-300 block">হোম</Link>
                        </li>
                        <li>
                            <Link to="/books" className="hover:text-yellow-400 transition duration-300 block">কিতাব সমূহ</Link>
                        </li>
                        <li>
                            <Link to="/publishers" className="hover:text-yellow-400 transition duration-300 block">প্রকাশকের বৃত্তান্ত</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400 transition duration-300 block">যোগাযোগ</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">যোগাযোগ</h2>
                    <ul className="space-y-3 text-lg">
                        <li> {/* Grouped contact info in a list for better structure */}
                            <p className="text-gray-300">ইমেইল:</p>
                            <a href="mailto:muftiabdulkarimdhaka@gmail.com" className="hover:text-yellow-400 transition duration-300 break-all"> {/* Added break-all for long email address */}
                                muftiabdulkarimdhaka@gmail.com
                            </a>
                        </li>
                        <li>
                            <p className="text-gray-300">ফোন:</p>
                            <a href="tel:+8801841622025" className="hover:text-yellow-400 transition duration-300">
                                +880 1841-622025
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Divider Line before copyright */}
            <hr className="border-gray-700 my-8 mx-auto container px-5 lg:px-0" />

            {/* Copyright Section */}
            <div className="text-center text-gray-500 mt-4 text-sm px-5">
                &copy; {currentYear} **ইকরা অনলাইন মাদ্রাসা**। সর্বস্বত্ব সংরক্ষিত।
            </div>
        </footer>
    );
}

export default Footer;