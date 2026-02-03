import React from 'react';
import Section from './Section';
import Button from '../atoms/Button';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <Section id="contact" className={styles.contactSection}>
            <div className={styles.card}>
                <h2 className={styles.heading}>Got a Project in Mind?</h2>
                <p className={styles.subtext}>
                    Let's discuss how Yaare can help you build your next big idea.
                </p>
                <Button href="mailto:yaare.team@gmail.com" variant="primary">
                    Get a Quote
                </Button>
            </div>
        </Section>
    );
};

export default Contact;
