


function AboutPage() {
    return (
        <div>
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div
                        className="bg-cover bg-center shadow-lg border-gray-700 border-2 rounded-lg p-6 text-center text-white"
                        style={{ backgroundImage: "url('/Biner-img/1.jpg')" }}
                    >
                        <h4 className="text-xl font-semibold mb-2 bg-black/50 p-2 rounded">৭ বছরের আলেম কোর্স</h4>
                    </div>
                    <div
                        className="bg-cover bg-center shadow-lg border-gray-700 border-2 rounded-lg p-6 text-center text-white"
                        style={{ backgroundImage: "url('/Biner-img/2.jpg')" }}
                    >
                        <h4 className="text-xl font-semibold mb-2 bg-black/50 p-2 rounded">এরাবিক গ্রামার কোর্স</h4>
                    </div>
                    <div
                        className="bg-cover bg-center shadow-lg border-gray-700 border-2 rounded-lg p-6 text-center text-white"
                        style={{ backgroundImage: "url('/Biner-img/3.jpg')" }}
                    >
                        <h4 className="text-xl font-semibold mb-2 bg-black/50 p-2 rounded">ফরজে আইন</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;
