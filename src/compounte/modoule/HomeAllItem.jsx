import AboutMe from "../layout/pagas/HomePags/about-me/aboutme";
import Aboutonlinemardasa from "../layout/pagas/HomePags/AboutPage/Aboutonlinemardasa";
import AboutPage from "../layout/pagas/HomePags/AboutPage/AboutPage";
import AboutUs from "../layout/pagas/HomePags/AboutPage/Aboutus";
import Ourservices from "../layout/pagas/HomePags/AboutPage/ourservices";
import HiroSecTion from "../layout/pagas/HomePags/compountent/HiroSecTion";
import AllCourse from "../layout/pagas/HomePags/CourseSecTion/AllCourse";

import CourseTimeline from "../layout/pagas/HomePags/CourseSecTion/CourseSecTion";
import Recognition from "../layout/pagas/HomePags/Recognition/Recognition";

function Home() {
    return (
        <>
            <HiroSecTion />
            <AboutPage />
            <AboutUs />
            <Ourservices />
            <Aboutonlinemardasa />
            <CourseTimeline />
            <AllCourse />
            <AboutMe />
            <Recognition />
        </>
    );
}

export default Home;