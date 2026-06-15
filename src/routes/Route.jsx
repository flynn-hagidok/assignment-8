import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import Root from "../pages/Root/Root";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import ErrorPages from "../pages/ErrorPages/ErrorPages";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("/imageData.json"),
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch("/imageData.json"),
                Component: Apps
            },
            {
                path: "/installation",
                loader: () => fetch("/imageData.json"),
                Component: Installation
            },
            {
                path: "/apps-details/:id",
                loader: () => fetch("/imageData.json"),
                Component: AppsDetails
            }
        ]
    }
])