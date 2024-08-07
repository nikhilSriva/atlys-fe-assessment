import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {storage} from "../services/storage";

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const dummyToken = '12313f13id189dsua89d'
export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setIsAuthenticated(storage.checkAuthentication());
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        storage.set.authToken(dummyToken)

    }
    const logout = () => {
        setIsAuthenticated(false);
        storage.destroy.all();
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
