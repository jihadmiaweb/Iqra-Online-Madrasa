import AboutPage from "./AboutPage/AboutPage";
import AboutUs from "./AboutPage/Aboutus";
import Ourservices from "./AboutPage/ourservices";
import HiroSecTion from "./compountent/HiroSecTion";

function Home() {
    return (
        <>
            <HiroSecTion />
            <AboutPage />
            <AboutUs />
            <Ourservices />
        </>
    );
}

export default Home;