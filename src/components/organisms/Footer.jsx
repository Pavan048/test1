import React from 'react';
import Logo from '../atoms/Logo';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Logo />
                    <p className={styles.tagline}>
                        The high-velocity software engine for ambitious founders and enterprise leaders.
                    </p>
                    <p className={styles.copyright}>© {new Date().getFullYear()} Yaare Inc.</p>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.heading}>Platform</h4>
                    <a href="#solutions" className={styles.link}>Solutions</a>
                    <a href="#tech-stack" className={styles.link}>Tech Stack</a>
                    <a href="#engine" className={styles.link}>How it Works</a>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.heading}>Company</h4>
                    <a href="#" className={styles.link}>About</a>
                    <a href="#" className={styles.link}>Careers</a>
                    <a href="mailto:hello@yaare.com" className={styles.link}>Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
