function Aboutonlinemardasa() {
    return (
        <section className="bg-gradient-to-b from-cyan-50 via-white to-cyan-50 py-16 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* বাম দিক - লেখা */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-4">
                        মাদ্রাসা কেন অনলাইনে?
                    </h1>

                    <p className="text-cyan-700 text-base md:text-lg leading-relaxed">
                        ফিতনার এই যুগে দ্বীনের হিফাযতের জন্য এবং দুনিয়ার সকল কাজ আল্লাহর সন্তুষ্টি মোতাবেক
                        হওয়ার জন্য দ্বীনী শিক্ষার বিকল্প নেই। জেনারেল শিক্ষিত ভাই-বোনদের জন্য সময় যেন আর
                        প্রতিবন্ধকতা সৃষ্টি করতে না পারে তার জন্যই অনলাইনে আমাদের এই আয়োজন।
                    </p>
                </div>

                {/* ডান দিক - ভিডিও */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/zIrI0aC7bBY?si=LfnvgIJaG5IP2jMC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutonlinemardasa;
