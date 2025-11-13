import Aboutonlinemardasa from "./AboutPage/Aboutonlinemardasa";
import AboutPage from "./AboutPage/AboutPage";
import AboutUs from "./AboutPage/Aboutus";
import Ourservices from "./AboutPage/ourservices";
import HiroSecTion from "./compountent/HiroSecTion";
import CourseTimeline from "./CourseSecTion/CourseSecTion";

function Home() {
    return (
        <>
            <HiroSecTion />
            <AboutPage />
            <AboutUs />
            <Ourservices />
            <Aboutonlinemardasa />
            <CourseTimeline />
        </>
    );
}

export default Home;