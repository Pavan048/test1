import React from 'react';
import Section from './Section';
import styles from './TechStack.module.css';

const TechStack = () => {
    const technologies = [
        "Next.js", "React", "Node.js", "Python",
        "OpenAI GPT-4", "Anthropic Claude", "LangChain",
        "Supabase", "PostgreSQL", "Vercel", "AWS", "Stripe"
    ];

    return (
        <Section
            id="tech-stack"
            title="The Engine"
            subtitle="Built on the modern stack for maximum performance and scalability."
        >
            <div className={styles.pills}>
                {technologies.map(tech => (
                    <div key={tech} className={styles.pill}>{tech}</div>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
