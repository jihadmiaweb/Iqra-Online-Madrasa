import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../compounte/modoule/HomeAllItem";






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
