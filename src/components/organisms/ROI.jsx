import React from 'react';
import Section from './Section';
import styles from './ROI.module.css';

const ROI = () => {
    return (
        <Section
            id="roi"
            title="Why Choose Custom AI?"
            subtitle="The numbers speak for themselves. Efficiency is the new competitive advantage."
        >
            <div className={styles.grid}>
                <div className={styles.stat}>
                    <div className={styles.number}>10x</div>
                    <h3 className={styles.label}>Faster Launch</h3>
                    <p className={styles.description}>Go from idea to deployed product in weeks, not months or years.</p>
                </div>
                <div className={styles.stat}>
                    <div className={styles.number}>60%</div>
                    <h3 className={styles.label}>Cost Reduction</h3>
                    <p className={styles.description}>Save on development costs compared to traditional agencies.</p>
                </div>
                <div className={styles.stat}>
                    <div className={styles.number}>100%</div>
                    <h3 className={styles.label}>IP Ownership</h3>
                    <p className={styles.description}>You own the code. No platform lock-in. No licensing fees.</p>
                </div>
            </div>
        </Section>
    );
};

export default ROI;
