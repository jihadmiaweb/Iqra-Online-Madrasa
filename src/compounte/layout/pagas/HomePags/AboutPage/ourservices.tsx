function Ourservices() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 px-4 md:px-8"
            style={{
                backgroundImage: "url('/Home-page-imgas/2.jpg')", // put your image in public/Home-page-imgas/
            }}
        >
            {/* Soft overlay for readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

            <div className="container fixed mx-auto text-center relative z-10">
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow">
                    আমাদের অনন্য বৈশিষ্ট্য
                </h1>

                <div className="flex justify-center mb-10">
                    <span className="w-154 h-1 bg-amber-500 rounded-full"></span>
                </div>

                {/* List Section */}
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-left">
                    <ul className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed list-disc list-inside">
                        <li>ক্লাস গুলো বিজ্ঞ উলামায়ে কেরামের পরামর্শে পরিচালিত হয়।</li>
                        <li>স্কুল, কলেজ, ভার্সিটির পড়া লেখার পাশাপাশি আমাদের কোর্সে অংশগ্রহনের অপূর্ব সুযোগ।</li>
                        <li>প্রতিদিনের ক্লাসের পড়া ক্লাসেই শিখিয়ে দেওয়া হয়।</li>
                    </ul>

                    <ul className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed list-disc list-inside">
                        <li>কৌশলে পড়ানো হয় তাই পড়ার চাপ খুব বেশি নেই।</li>
                        <li>প্রত্যেক শিক্ষার্থীকে নিজ নিজ মেধানুপাতে পড়ানো হয়।</li>
                        <li>কোর্স শেষে কওমি মাদ্রাসা শিক্ষা বোর্ড এ দাওরায়ে হাদিস পরীক্ষায় অংশগ্রহন।</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Ourservices;
