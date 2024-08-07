import styles from './Login.module.scss'
import Input from "../Input/index";
import {useState} from "react";
import Button from "../Button";

const Login = ({value}) => {
    const [form, setForm] = useState({});

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
                <label>Forgot password?</label>
            </div>
            <Input type={'password'} placeholder={'Enter your password'}/>
        </div>
        <Button className={styles.button}>
            Login
        </Button>
        <p className={styles.notRegistered}>
            <span>Not registered yet?</span>
            <span>&nbsp;Register</span>
            <span>&nbsp;→</span>
        </p>
    </div>
}
export default Login
