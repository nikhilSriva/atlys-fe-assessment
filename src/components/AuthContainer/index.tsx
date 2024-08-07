import React, {useState} from 'react';
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";
import {executeFunctionWithTransition} from "../../utils/helpers";

interface AuthContainerProps {
    onLogin: () => void;
}

const AuthContainer: React.FC<AuthContainerProps> = ({onLogin}) => {
    const [view, setView] = useState<'login' | 'register' | 'forgot-password'>('login');

    const handleSwitch = (type: 'login' | 'register' | 'forgot-password') => {
        executeFunctionWithTransition(() => {
            setView(type);
        })
    };

    return (
        <div>
            {view === 'login' && <Login onLogin={onLogin} onSwitch={handleSwitch}/>}
            {view === 'register' && <Register onSwitch={handleSwitch}/>}
            {view === 'forgot-password' && <ForgotPassword onSwitch={handleSwitch}/>}
        </div>
    );
};

export default AuthContainer;
