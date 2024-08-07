import React, {ChangeEvent, useState} from 'react';
import styles from './Input.module.scss'
import EyeIcon from '../../assets/svg/eye.svg'

interface InputProps {
    value: string;
    className?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({value, type = 'text', placeholder, onChange, className = ''}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prevState => !prevState)
    }
    return <div className={`${styles.inputContainer} ${className}`}>
        <input placeholder={placeholder} value={value} onChange={onChange}
               type={type === 'password' ? showPassword ? 'text' : 'password' : type}/>
        {type === 'password' &&
            <img onClick={togglePassword} alt={'show-password'} src={EyeIcon}
                 className={`${styles.eyeIcon} ${showPassword ? styles.show : ''}`}/>}
    </div>
}
export default Input
