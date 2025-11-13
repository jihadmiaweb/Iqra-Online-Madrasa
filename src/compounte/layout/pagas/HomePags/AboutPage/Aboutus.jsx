import { Laptop, Home, Award, GraduationCap, ArrowRight, Target } from "lucide-react";

function AboutUs() {
    // Defining features data for cleaner rendering
    const features = [
        {
            icon: Laptop,
            text: "লাইভ ক্লাসের পাশাপাশি থাকবে রেকর্ডিং"
        },
        {
            icon: Home,
            text: "নিয়মিত হোমওয়ার্ক এসেসমেন্ট"
        },
        {
            icon: Award,
            text: "কোর্স শেষে গ্রহন যোগ্য সার্টিফিকেট"
        },
        {
            icon: GraduationCap,
            text: "প্রতি ক্লাসে সর্বচ্চ ২৫ জনের বেশি নয়"
        },
        {
            icon: ArrowRight, // Using a simple arrow icon for "Other benefits" placeholder
            text: "অন্যান্য সুবিধা"
        },
    ];

    return (
        // Enhanced background gradient and padding for desktop and mobile
        <section id="about-us" className="bg-gradient-to-b from-cyan-50 via-white to-cyan-100 py-16 sm:py-24 font-sans">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-12">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-cyan-600/10 rounded-xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition duration-500 hidden md:block"></div>
                    <img
                        src="/Home-page-imgas/1.jpg"
                        alt="আমাদের লক্ষ্য ও উদ্দেশ্য"
                        className="w-full rounded-xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white relative z-10"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/Home-page-imgas/placeholder.jpg"; // fallback image
                        }}
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 text-gray-800">
                    <p className="text-xs font-medium uppercase text-green-600 mb-1 tracking-wider">
                        আমাদের লক্ষ্য
                    </p>

                    <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-800 flex items-start gap-2">
                        <Target className="text-cyan-600 w-6 h-6 flex-shrink-0 mt-1" />
                        আমাদের লক্ষ্য ও উদ্দেশ্য
                    </h1>


                    <p className="mb-8 leading-relaxed text-lg text-gray-700 border-l-4 border-cyan-500 pl-4 py-1">
                        বিশ্বব্যাপী কুরআনের আলো ছড়িয়ে দেওয়া। বিশেষ করে জেনারেল শিক্ষায় শিক্ষিত
                        কর্মব্যস্ত ভাই-বোনদের সহীহ আকীদাহ ও কুরআন হাদিসের মর্মার্থ বুঝানোর
                        মাধ্যমে আখিরাতমুখী জীবন পরিচালনা করার যোগ্যতা অর্জন করিয়ে দেয়াই আমাদের
                        মূল লক্ষ্য।
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                                {/* Dynamic Icon Rendering */}
                                <feature.icon className="text-cyan-600 w-5 h-5 flex-shrink-0 mt-1" />
                                <span className="text-gray-700 text-base">{feature.text}</span>
                            </div>
                        ))}
                    </div>


                    {/* Button */}
                    <button className="px-8 py-4 bg-cyan-600 text-white font-bold text-lg rounded-full shadow-xl shadow-cyan-600/50 hover:bg-cyan-700 hover:shadow-cyan-700/70 hover:scale-[1.02] transition transform duration-300 flex items-center gap-3 active:scale-95">
                        আমাদের সম্পর্কে
                        <ArrowRight className="w-5 h-5 ml-1" /> {/* FaArrowRight replaced with ArrowRight */}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;