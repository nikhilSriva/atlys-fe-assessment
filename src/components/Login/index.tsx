import styles from './Login.module.scss'
import Input from "../Input/index";
import React, {ChangeEvent, useState} from "react";
import Button from "../Button";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {executeFunctionWithTransition} from "../../utils/helpers";

interface Props {
    onSwitch: (type: string) => void;
    onLogin: (e: ChangeEvent) => void;
}

const Login: React.FC<Props> = ({onSwitch, onLogin}) => {
    const [form, setForm] = useState({});
    const {login} = useAuth();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        login();
        if (onLogin) {
            onLogin(e)
        } else
            executeFunctionWithTransition(() => {
                navigate('/home');
            })
    }

    return <div className={styles.loginContainer}>
        <div className={styles.header}>
            <h3>Welcome back</h3>
            <h2>Log into your account</h2>
        </div>
        <div className={styles.element}>
            <label>Email or Username</label>
            <Input placeholder={'Enter your email or username'}/>
        </div>
        <div className={styles.element}>
            <div className={styles.row}>
                <label>Password</label>
                <label
                    onClick={(e) => {
                        e.stopPropagation();
                        onSwitch('forgot-password')
                    }}>
                    Forgot password?
                </label>
            </div>
            <Input type={'password'} placeholder={'Enter your password'}/>
        </div>
        <Button onClick={loginHandler} className={styles.button}>
            Login
        </Button>
        <p onClick={(e) => {
            e.stopPropagation();
            onSwitch('register')
        }} className={styles.notRegistered}>
            <span>Not registered yet?</span>
            <span>&nbsp;Register</span>
            <span>&nbsp;→</span>
        </p>
    </div>
}
export default Login
