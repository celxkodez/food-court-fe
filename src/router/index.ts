import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import {useContext} from "react";
import {Auth} from "../contexts/Auth";

let router: any;

router = createBrowserRouter([
    {
        path: "/",
        element: Layout(Login)
    },
    {
        path: "/profile",
        element: Layout(Profile)
    },
]);

export default router;