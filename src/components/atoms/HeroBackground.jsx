import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration
        const particleCount = 100; // Increased count
        const connectionDistance = 140;
        const moveSpeed = 0.4;

        class Particle {
            constructor(reset = false) {
                if (reset) {
                    // Spawn in center area
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 200; // Start clusters near center
                    this.x = canvas.width / 2 + Math.cos(angle) * radius;
                    this.y = canvas.height / 2 + Math.sin(angle) * radius;
                } else {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }

                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                this.size = Math.random() * 2 + 1.5; // Slightly larger
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Instead of bouncing, wrap around or reset to center to keep density
                const distFromCenter = Math.sqrt(
                    Math.pow(this.x - canvas.width / 2, 2) +
                    Math.pow(this.y - canvas.height / 2, 2)
                );

                // If too far, gently nudge back or reset
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    // Reset to center
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 100;
                    this.x = canvas.width / 2 + Math.cos(angle) * radius;
                    this.y = canvas.height / 2 + Math.sin(angle) * radius;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(99, 102, 241, 0.6)'; // Brighter
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                // Initialize scattered but denser in middle
                particles.push(new Particle(false));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / connectionDistance})`; // Fade out
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.4, // Subtle overlay
                pointerEvents: 'none'
            }}
        />
    );
};

export default HeroBackground;
