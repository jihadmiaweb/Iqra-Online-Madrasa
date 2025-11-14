import React from "react";

// কোর্স ডেটা (আপনার দেওয়া তথ্য 그대로)
const courses = [
    {
        id: 1,

        batch: "৭ বছরের আলেম কোর্স",
        startDate: "জেনারেল শিক্ষিত ভাই-বোনদের জন্য ৭বছরের আলেম কোর্স যা মাদানি নেসাব ১ম বর্ষ / কুরআন তরজমা ১ম বর্ষ নামেও বহুল পরিচিত এই কোর্সের ১০ম ব্যাচের যাত্রা শুরু হতে যাচ্ছে ২৩শে আগস্ট ২০২৫ থেকে ইনশাআল্লাহ্‌। ইতিমধ্যে এই কোর্স যথেষ্ঠ সাড়া ফেলেছে।",
        img: "/Home-page-imgas/Alem-Course.png.jpg",
    },
    {
        id: 2,

        batch: "এরাবিক গ্রামার কোর্স",
        startDate: "অর্থ না বুঝে শুধু তিলাওয়াতের মধ্যেই সীমাবদ্ধ থাকা কুরআন অবতীর্ণ হুওয়ার উদ্দেশ্যের বিপরীত। একটা সহজ সত্যকে আমরা অনুধাবনে অক্ষম যে, যখনই আমরা কোন বই পড়ি, সে পাঠের উদ্দেশ্য হয় বইটির মূল বক্তব্যকে অনুধাবন করা। ইনশাআল্লাহ্‌ এই কোর্সের মাধ্যমে কুরআন তর্জমা করার দক্ষতা অর্জন করতে পারবেন। এই কোর্সের ১০ম ব্যাচের যাত্রা শুরু হতে যাচ্ছে ২৩শে আগস্ট ২০২৫ থেকে ইনশাআল্লাহ্‌।",
        img: "/Home-page-imgas/Arabic-course.png.jpg",
    },
    {
        id: 3,

        batch: "ফরজে আইন",
        startDate: "শুদ্ধ ভাবে কুরআন পড়তে পারা নিঃসন্দেহে আমাদের সকলের জন্য জরুরী। এ কোর্সের আসল উদ্দেশ্য হচ্ছে সহজ ভাবে পবিত্র কুরআনের বিশুদ্ধ তেলাওয়াত শেখার পাশাপাশি, অর্থ বুঝে সালাত আদায়ের দক্ষতা অর্জন করা এবং আরবী ভাষার বেসিক জ্ঞান অর্জন করা। এই কোর্সের ১০ম ব্যাচের যাত্রা শুরু হতে যাচ্ছে ২৩শে আগস্ট ২০২৫ থেকে ইনশাআল্লাহ্‌।",
        img: "/Home-page-imgas/farz-e-ain.png.jpg",
    },
];

// Reusable CourseCard Component
const CourseCard = ({ batch, startDate, img }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105 relative">
        {/* Image Section */}
        <div
            className="h-44 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute top-3 left-3  text-white px-4 py-1 rounded-full text-sm font-bold shadow">

            </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{batch}</h3>
            <p className="text-sm text-gray-600 mb-3">{startDate}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                বিস্তারিত দেখুন
            </button>
        </div>
    </div>
);

// Main AllCourse Component
const AllCourse = () => (
    <div
        className="relative py-20 px-4"
        style={{
            backgroundImage: "url('/images/bg_courses.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {/* Dark Overlay */}
        <div className="absolute inset-0  opacity-30"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center text-cyan-800 mb-12">
                আমাদের কোর্স সমূহ
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        batch={course.batch}
                        startDate={course.startDate}
                        img={course.img}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default AllCourse;
