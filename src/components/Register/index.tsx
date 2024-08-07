import styles from './Register.module.scss'
import Input from "../Input/index";
import React, {useState} from "react";
import Button from "../Button";
import {useAuth} from "../../context/AuthContext";
import {executeFunctionWithTransition} from "../../utils/helpers";

interface Props {
    onSwitch: (type: string) => void;
}

const Register: React.FC<Props> = ({onSwitch}) => {
    const [form, setForm] = useState({});
    const {login} = useAuth();

    const loginHandler = (e) => {
        e.stopPropagation();
        executeFunctionWithTransition(() => {
            onSwitch('login')
        })
    }

    return <div className={styles.loginContainer}>
        <div className={styles.header}>
            <h3>Sign UP</h3>
            <h2>Create an account to continue</h2>
        </div>
        <div className={styles.element}>
            <label>Email</label>
            <Input placeholder={'Enter your email'}/>
        </div>
        <div className={styles.element}>
            <label>Username</label>
            <Input placeholder={'Choose a preferred username'}/>
        </div>
        <div className={styles.element}>
            <div className={styles.row}>
                <label>Password</label>
            </div>
            <Input type={'password'} placeholder={'Choose a strong password'}/>
        </div>
        <Button onClick={loginHandler} className={styles.button}>
            Continue
        </Button>
        <p
            onClick={(e) => {
                e.stopPropagation();
                onSwitch('login')
            }}
            className={styles.notRegistered}>
            <span>Already have an account?</span>
            <span>&nbsp;Login</span>
            <span>&nbsp;→</span>
        </p>
    </div>
}
export default Register
