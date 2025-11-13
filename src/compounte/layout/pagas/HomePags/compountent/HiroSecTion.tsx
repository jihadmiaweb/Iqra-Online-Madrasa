import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaBookReader } from "react-icons/fa";

function HiroSecTion() {
    const slides = [
        {
            image: "/Biner-img/1.jpg",
            title: "ইকরা অনলাইন মাদ্রাসা",
            subtitle:
                "জেনারেল শিক্ষিত ভাই-বোনদের জন্য আরবি ভাষা ও দ্বীনিয়াত শিক্ষার একটি গবেষণালব্ধ সৃজনশীল প্রতিষ্ঠান।",
            link: "৭ বছরে আলেম",
            buttonText: "কোর্সগুলো দেখুন",
        },
        {
            image: "/Biner-img/2.jpg",
            title: "ইকরা অনলাইন মাদ্রাসা",
            subtitle:
                "জেনারেল শিক্ষিত ভাই-বোনদের জন্য আরবি ভাষা ও দ্বীনিয়াত শিক্ষার একটি গবেষণালব্ধ সৃজনশীল প্রতিষ্ঠান।",
            link: "৭ বছরে আলেম",
            buttonText: "কোর্সগুলো দেখুন",
        },
        {
            image: "/Biner-img/3.jpg",
            title: "ইকরা অনলাইন মাদ্রাসা",
            subtitle:
                "জেনারেল শিক্ষিত ভাই-বোনদের জন্য আরবি ভাষা ও দ্বীনিয়াত শিক্ষার একটি গবেষণালব্ধ সৃজনশীল প্রতিষ্ঠান।",
            link: "৭ বছরে আলেম",
            buttonText: "কোর্সগুলো দেখুন",
        },
        {
            image: "/Biner-img/4.jpg",
            title: "ইকরা অনলাইন মাদ্রাসা",
            subtitle:
                "জেনারেল শিক্ষিত ভাই-বোনদের জন্য আরবি ভাষা ও দ্বীনিয়াত শিক্ষার একটি গবেষণালব্ধ সৃজনশীল প্রতিষ্ঠান।",
            link: "৭ বছরে আলেম",
            buttonText: "কোর্সগুলো দেখুন",
        },
    ];

    const [current, setCurrent] = useState(0);

    // Next and Previous Slide
    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    // Auto Slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, []);

    // CTA Click
    const handleCTAClick = () => {
        alert(`Redirecting to enrollment page for: ${slides[current].title}`);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 relative h-screen group overflow-hidden"
                    >
                        {/* Slide Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 filter brightness-90"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>

                        {/* Text & Button */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-10 text-white">
                            <h1 className="text-2xl text-amber-400 sm:text-3xl md:text-3xl font-extrabold mb-4 max-w-4xl tracking-tight leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl max-w-4xl mb-4 font-light">
                                {slide.subtitle}
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl pb-4 font-extrabold  max-w-4xl tracking-tight leading-tight">{slide.link}</h1>
                            <button
                                onClick={handleCTAClick}
                                className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                            >
                                <FaBookReader className="text-xl" />
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 sm:p-4 bg-black/40 hover:bg-black/70 text-white rounded-full z-20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous Slide"
            >
                <FaChevronLeft className="text-lg sm:text-xl" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 sm:p-4 bg-black/40 hover:bg-black/70 text-white rounded-full z-20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next Slide"
            >
                <FaChevronRight className="text-lg sm:text-xl" />
            </button>

            {/* Dots Pagination */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${index === current
                            ? "bg-green-500 scale-125 ring-2 ring-white"
                            : "bg-white/70 hover:bg-white ring-1 ring-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default HiroSecTion;
