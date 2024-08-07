import styles from './ForgotPassword.module.scss'
import Input from "../Input/index";
import React from "react";
import Button from "../Button";

interface Props {
    onSwitch: (type: string) => void;
}

const ForgotPassword: React.FC<Props> = ({onSwitch}) => {
    const loginHandler = () => {
        onSwitch('login')
    }

    return <div className={styles.loginContainer}>
        <div className={styles.header}>
            <h2>Forgot Password</h2>
        </div>
        <div className={styles.element}>
            <label>Email or Username</label>
            <Input placeholder={'Enter your email or username'}/>
        </div>
        <Button onClick={loginHandler} className={styles.button}>
            Continue
        </Button>
    </div>
}
export default ForgotPassword
