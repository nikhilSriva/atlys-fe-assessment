import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../views/Login";
import Home from "../views/Home";

const ROUTER = createBrowserRouter([
        {
            path: "/",
            element: (
                <LoginPage/>
            ),
        },
        {
            path: "/home",
            element: <Home/>,
        },
    ]
);
export default ROUTER
