import React from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Logo />
                <div className={styles.menu}>
                    <a href="#solutions" className={styles.link}>Solutions</a>
                    <a href="#tech-stack" className={styles.link}>Tech Stack</a>
                    <a href="#engine" className={styles.link}>How it Works</a>
                    <div className={styles.navButton}>
                        <Button href="#contact" variant="secondary">Book Demo</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
