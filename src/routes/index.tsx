import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../views/Login";
import Home from "../views/Home";
import ProtectedRoute from "../components/ProtectedRoute";

const ROUTER = createBrowserRouter([
        {
            path: "/",
            element: (
                <LoginPage/>
            ),
        },
        {
            path: "/home",
            element: <ProtectedRoute>
                <Home/>
            </ProtectedRoute>,
        },
    ]
);
export default ROUTER
