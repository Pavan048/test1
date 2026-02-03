import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.symbol} />
            YAARE
        </div>
    );
};

export default Logo;
