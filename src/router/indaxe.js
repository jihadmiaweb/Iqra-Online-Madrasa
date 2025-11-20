import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AuthForm from "../compounte/modoule/auth/my-account";
import Home from "../compounte/modoule/pagas/HomeAllItem";
import AboutpageAllItem from "../compounte/modoule/pagas/AoutPageAllItem";






export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "/AuthForm", Component: AuthForm },
            { path: "/AboutpageAllItem", Component: AboutpageAllItem },


        ],
    },
]);
