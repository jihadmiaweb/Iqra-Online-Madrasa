function Recognition() {
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* ---- Text Section ---- */}
                <div className="space-y-4">
                    <h1 className="md:text-4xl text-2xl font-bold text-cyan-800 leading-snug">
                        ঐতিহ্যবাহী হাটহাজারী কওমী বোর্ড কর্তৃক স্বীকৃতি প্রাপ্তি প্রসংগে
                    </h1>

                    <p className="text-gray-700 leading-relaxed">
                        আলহামদুলিল্লাহ্‌, সকল প্রশংসা মহান রব্বুল আলামীন এর দরবারে।
                        চলতি বছরেও টানা দ্বিতীয় বারের মত ইকরা অনলাইন মাদ্রাসাকে
                        আনুষ্ঠানিক ভাবে স্বীকৃতি প্রদান করেছেনঃ নূরানী তা’লীমুল কুরআন
                        বোর্ড চট্টগ্রাম বাংলাদেশ এর সম্মানিত চেয়ারম্যান এবং মহাসচিব মহোদয়।
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        এছাড়াও বাংলাদেশ কওমী মাদরাসা শিক্ষা বোর্ড এর অন্তঃভূক্ত হওয়াতে,
                        আমাদের শিক্ষার্থী ভাই ও বোনেরা – বেফাকের অধীনে “শরহে বেকায়া,
                        মেশকাত ও দাওরায়ে হাদিস” এর বোর্ড পরীক্ষায় অংশগ্রহণ করতে পারবেন।
                        এই বিষয়ে আমাদের মাদরাসা পরিচালনা পরিষদ আপনাদের সর্বোচ্চ
                        সহযোগিতা করবেন ইনশাআল্লাহ্‌।
                    </p>
                </div>

                {/* ---- Image Section ---- */}
                <div className="w-full">
                    <img
                        src="/Home-page-imgas/reg_certificate_121709978_page-0001-1536x1087.jpg.webp"
                        alt="Certificate"
                        className="rounded-xl shadow-lg border border-gray-200 w-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}

export default Recognition;
