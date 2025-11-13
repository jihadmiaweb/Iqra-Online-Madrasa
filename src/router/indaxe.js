import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Hider from "../compounte/layout/Hider";
import Home from "../compounte/layout/pagas/HomePags/HomeAllItem";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            // { path: "about", Component: About },

        ],
    },
]);
