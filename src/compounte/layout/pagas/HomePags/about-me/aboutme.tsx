

function AboutMe() {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Heading */}
            <h1 className="text-center font-bold md:text-4xl sm:text-3xl text-2xl text-cyan-800 mb-8">
                আমাদের সম্পর্কে কিছু কথা
            </h1>

            {/* Grid YouTube Videos */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">

                {/* Video 1 */}
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/GpBMm8QsvTs?si=bfE4K42D1kpaUb-9"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video 2 */}
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/UuUzZ1-mXCw?si=ml9vli6KV_yUY97a"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video 3 */}
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/CL0cqG7wkNw?si=oRQN2wPdekR62BL-"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video 4 */}
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/lkeEQ5TGbZ4?si=5PFrR2oir2mRTj3r"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Button */}
            <div className="text-center mt-8">
                <a
                    className="inline-block bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-900 transition"
                    href="https://www.youtube.com/@IqraOnlineMadrasa-2023"
                    target="_blank"
                >
                    আরও জানুন
                </a>
            </div>
        </div>
    );
}

export default AboutMe;
