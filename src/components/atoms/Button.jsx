import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, href, variant = 'primary', type = 'button' }) => {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
