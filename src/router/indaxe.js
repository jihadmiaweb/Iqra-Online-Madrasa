import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../compounte/modoule/HomeAllItem";
import AuthForm from "../compounte/modoule/auth/my-account";






export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "/AuthForm", Component: AuthForm },


        ],
    },
]);
