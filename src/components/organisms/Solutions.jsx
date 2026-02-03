import React from 'react';
import Section from './Section';
import Button from '../atoms/Button';
import styles from './Solutions.module.css';

const Solutions = () => {
    return (
        <Section
            id="solutions"
            title="Custom Software Solutions"
            subtitle="We turn your vision into high-performance web, mobile, and AI applications."
        >
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.icon}>📱</div>
                    <h3 className={styles.title}>Web & Mobile Platforms</h3>
                    <p className={styles.description}>
                        High-performance websites and native apps designed for scale and user engagement.
                        We focus on speed, reliability, and modern user experiences.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>🧠</div>
                    <h3 className={styles.title}>AI-Native Solutions</h3>
                    <p className={styles.description}>
                        Intelligent software that understands your company's data and automates complex tasks.
                        We turn AI capabilities into tangible business features.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>🔗</div>
                    <h3 className={styles.title}>AI Workflows</h3>
                    <p className={styles.description}>
                        Streamline your operations by connecting your existing tools with smart, automated workflows.
                        Eliminate manual work and increase efficiency.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>🛠</div>
                    <h3 className={styles.title}>Custom Engineering</h3>
                    <p className={styles.description}>
                        Bespoke software designed specifically to meet your unique operational needs.
                        From internal tools to complex enterprise systems.
                    </p>
                </div>
            </div>
            <div className={styles.ctaContainer}>
                <Button href="#contact" variant="primary">Discuss Your Project</Button>
            </div>
        </Section>
    );
};

export default Solutions;
