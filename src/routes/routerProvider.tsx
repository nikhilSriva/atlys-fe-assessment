// src/routes/Router.tsx
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {AuthProvider} from "../context/AuthContext";
import routes from "./index";

const RouterProviderContainer: React.FC = () => {
    return (
        <AuthProvider>
            <RouterProvider router={routes}/>
        </AuthProvider>
    );
};

export default RouterProviderContainer;
