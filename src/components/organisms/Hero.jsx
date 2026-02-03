import React from 'react';
import Button from '../atoms/Button';
import HeroBackground from '../atoms/HeroBackground';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <HeroBackground />
            <div className={styles.content}>
                <div className={styles.badge}>Premier Technology Partner</div>
                <h1 className={styles.title}>
                    We Build Intelligent Software <br />
                    <span className={styles.highlight}>For Your Business.</span>
                </h1>
                <p className={styles.subheadline}>
                    Yaare is a full-service development agency. We design and engineer custom web, mobile, and AI solutions that drive real business growth.
                </p>
                <div className={styles.actions}>
                    <Button href="#contact" variant="primary">Discuss Your Project</Button>
                    <Button href="#solutions" variant="secondary">View Services</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
