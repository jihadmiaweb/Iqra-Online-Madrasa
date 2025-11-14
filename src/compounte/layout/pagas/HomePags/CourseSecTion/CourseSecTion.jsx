

// --- ডেটা স্ট্রাকচার (Data Structure) ---
const courses = [
    {
        id: 1,
        title: "ফরযে আইন",
        duration: "সময়কাল: ৩-৪ মাস",
        details: [
            "সহজ কুরআন শিক্ষা (তাজবীদসহ)।",
            "পূর্ণ কুরআনের নামের শুরুতে পড়া শেখা।",
            "এসো অর্থ বুঝে নামাজ পড়ি।",
            "আমলী সূরা ও মাসনুন দোআ মুখস্থ।",
            "ঈমান ও ইসলামী আকীদা।",
            "সিরাতে রাসূল ﷺ (আর-রাহিকুল মাখতূম)।",
            "প্রাথমিক আরবি ভাষা চর্চা।",
        ],
    },
    {
        id: 2,
        title: "কুরআন তরজমা / মাদানী নেসাব",
        duration: "সময়কাল: ১ম বর্ষ",
        details: [
            "এসো আরবি শিখি (১ম ও ২য় খণ্ড)।",
            "মুখতাসারুস সরফ (কুরআনিক গ্রামার)।",
            "জাদিদে সাহওয়াতুল মাসাদির (শব্দভাণ্ডার)।",
            "কুরআন তরজমা (দারসুল কুরআন ১ম পারা)।",
            "পবিত্র কুরআনের মখরাজ (আমপারা)।",
        ],
    },
    {
        id: 3,
        title: "তাফসির / ফিকহুল মুয়াস্সার",
        duration: "সময়কাল: ২য় বর্ষ",
        details: [
            "মুখতাসারুন্নাহু (কুরআনিক গ্রামার)।",
            "তামরীনুন নাহু (কুরআনিক গ্রামার)।",
            "এসো আরবী শিখি (৩য় খন্ড)।",
            "তামরীনুল কিতাবি (ব্যবহারিক আরবি অনুশীলন)।",
            "ইলমুস সরফ (কুরআনিক শব্দরূপ বিশ্লেষণ)।",
            "দারসুল কুরআন (২য়–৫ম পারা)।",
            "ফিকহুল মুয়াস্সার  (আরবি ভাষায় সহজ ফিকহ গ্রন্থ)।",
        ],
    },
    {
        id: 4,
        title: "জালালাইন",
        duration: "আলিম ১ম বর্ষ",
        details: [
            "হিদায়া ১ম ও ২য় খন্ড (নির্বাচিত অংশ)।",
            "নুরুল আনওয়ার কিতাবুল্লাহ।",
            "আকিদাতুত ত্বহাবী / শরহে আকাঈদ।",
            "তাফসিরে জালালাইন নির্বাচিত অংশ।",
            "দারসুল কুরআন ১৯তম পারা থেকে শেষ পর্যন্ত।",
        ],
    },
    {
        id: 5,
        title: "মেশকাত",
        duration: "আলিম ২য় বর্ষ",
        details: [
            "মেশকাতুল মাসাবীহ ১ম ও ২য় খন্ড নির্বাচিত অংশ।",
            "হিদায়া ৩য় ও ৪র্থ খন্ড (নির্বাচিত অংশ)।",
            "তাফসীরে বায়যাবী।",
            "দেওবন্ধ আন্দোলন।",
            "ফিরাকে বাতেলা।",
        ],
    },
    {
        id: 6,
        title: "দাওরায়ে হাদিস",
        duration: "১ম বর্ষ",
        details: [
            "সহীহ বুখারী ১ম খন্ড।",
            "সহীহ মুসলিম ২য় খন্ড।",
            "জামেউত তিরমিযী ২য় খন্ড।",
            "আবু দাউদ ১ম খন্ড।",
            "মুআত্তা মুহাম্মাদ।",
            "উলুমুল হাদিস।",
            "আমপারা মশক।",
        ],
    },
    {
        id: 7,
        title: "দাওরায়ে হাদিস",
        duration: "২য় বর্ষ",
        details: [
            "সহীহ বুখারী ২য় খন্ড।",
            "সহীহ মুসলিম ১ম খন্ড।",
            "জামেউত তিরমিযি ১ম খন্ড।",
            "আবু দাউদ ২য় খন্ড।",
            "সুনানে নাসায়ী শরীফ।",
            "শামায়েলে তিরমিযি।",
            "ত্বহাবী শরীফ।",
        ],
    },
];

// --- Timeline Item Sub-Component ---
const TimelineItem = ({ course, index }) => {
    // index জোড় (even: 0, 2, 4...) হলে কন্টেন্ট বাম দিকে; বিজোড় (odd: 1, 3, 5...) হলে ডান দিকে
    const isOdd = index % 2 !== 0;

    // অল্টারনেটিং স্টাইল সেট করা
    const itemClasses = isOdd
        ? "flex flex-col md:flex-row-reverse items-center mb-24" // বিজোড় হলে ডান দিকে (reverse)
        : "flex flex-col md:flex-row items-center mb-24"; // জোড় হলে বাম দিকে (normal)

    // কন্টেন্ট বক্সের টেইলউইন্ড ক্লাস
    const contentClasses = "bg-cyan-800 text-white p-6 rounded-xl shadow-xl relative w-full transition duration-500 hover:shadow-2xl hover:scale-[1.01]";

    // তীরের অবস্থান 
    const arrowClasses = isOdd
        ? "absolute -left-3 top-8 w-4 h-4 bg-cyan-800 rotate-45 hidden md:block" // ডান কন্টেন্ট, বাম তীর 
        : "absolute -right-3 top-8 w-4 h-4 bg-cyan-800 rotate-45 hidden md:block"; // বাম কন্টেন্ট, ডান তীর

    return (
        <div className={itemClasses}>
            {/* 1. Content Block (W-1/2 on Desktop) - এটি সর্বদা বামেই থাকবে, reverse লজিক অন্যটিকে সরাবে */}
            <div className={`md:w-1/2 ${isOdd ? 'md:pr-10' : 'md:pl-10'} w-full`}>
                <div className={contentClasses}>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                        {course.details.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <div className={arrowClasses}></div>
                </div>
            </div>

            {/* 2. Title Block (W-1/2 on Desktop) - এটি সর্বদা ডানে থাকবে */}
            <div className={`md:w-1/2 w-full ${isOdd ? 'md:text-left md:pl-10' : 'md:text-right md:pr-10'} mt-6 md:mt-0`}>
                <h2 className="text-3xl font-extrabold text-cyan-800 mb-2">
                    {course.title}
                </h2>
                <p className="text-gray-500 text-base font-medium mb-4">{course.duration}</p>
            </div>

            {/* 3. Number Circle (Center) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-cyan-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg z-10 transition duration-300 hover:scale-110">
                {course.id}
            </div>
        </div>
    );
};

// --- Main Component: Course Timeline ---
function CourseTimeline() {
    return (
        <section className="bg-gradient-to-b from-cyan-50 via-white to-cyan-50 py-20 px-4">
            <div className="container mx-auto relative">

                {/* Heading Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase text-cyan-600 mb-2 tracking-wider">
                        স্তরভিত্তিক পাঠ্যক্রম
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-800 mb-3">
                        আমাদের অনলাইন মাদ্রাসার **কোর্স স্ট্রাকচার**
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base">
                        দ্বীনি জ্ঞান সহজভাবে সকলের মাঝে পৌঁছে দেওয়ার জন্য আমাদের অনলাইন
                        মাদ্রাসায় রয়েছে স্তরভিত্তিক পাঠ্যক্রম। নিচে প্রতিটি ধাপের বিস্তারিত
                        দেওয়া হলো।
                    </p>
                </div>

                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-2xl bg-cyan-100 h-520 z-0 shadow-lg"></div>

                {/* Timeline Items */}
                <div className="space-y-24">
                    {courses.map((course, index) => (
                        <TimelineItem key={course.id} course={course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CourseTimeline;