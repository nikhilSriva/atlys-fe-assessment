import styles from './ForgotPassword.module.scss'
import Input from "../Input/index";
import {useState} from "react";
import Button from "../Button";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {executeFunctionWithTransition} from "../../utils/helpers";

const ForgotPassword = () => {
    const [form, setForm] = useState({});
    const {login} = useAuth();
    const navigate = useNavigate();

    const loginHandler = () => {
        login();
        executeFunctionWithTransition(() => {
            navigate('/home');
        })
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
