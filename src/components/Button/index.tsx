// src/components/Button.tsx
import React from 'react';
import styles from './Button.module.scss'; //

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset'; // Default type is 'button'
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           children,
                                           className = '',
                                           type = 'button',
                                       }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${className}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
