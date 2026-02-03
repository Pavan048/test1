import React from 'react';
import Section from './Section';
import styles from './Engine.module.css';

const Engine = () => {
    return (
        <Section
            id="engine"
            title="How We Partner With You"
            subtitle="A transparent, agile workflow designed for delivery."
        >
            <div className={styles.steps}>
                <div className={styles.step}>
                    <h3 className={styles.title}>1. Discovery</h3>
                    <p className={styles.text}>
                        We start by understanding your business goals, users, and technical requirements.
                    </p>
                </div>
                <div className={styles.step}>
                    <h3 className={styles.title}>2. Architecture</h3>
                    <p className={styles.text}>
                        Our engineers design a scalable roadmap, selecting the right stack for long-term success.
                    </p>
                </div>
                <div className={styles.step}>
                    <h3 className={styles.title}>3. Execution</h3>
                    <p className={styles.text}>
                        We build rapidly using our AI-augmented workflow, providing regular updates and demos.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Engine;
