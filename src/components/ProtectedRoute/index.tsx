import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

const ProtectedRoute: React.FC = ({children}) => {
    const {isAuthenticated} = useAuth();
    console.log('isAu', isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;