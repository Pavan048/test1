import React from 'react';
import styles from './Section.module.css';

const Section = ({ id, title, subtitle, children, className }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            <div className={styles.container}>
                {title && <h2 className={styles.heading}>{title}</h2>}
                {subtitle && <p className={styles.subheading}>{subtitle}</p>}
                {children}
            </div>
        </section>
    );
};

export default Section;
