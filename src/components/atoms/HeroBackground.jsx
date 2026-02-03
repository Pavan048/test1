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

        const getThemeColor = () => {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-accent-primary').trim() || '#6366F1';
        };

        const config = {
            particleCount: 100,
            connectionDistance: 140,
            moveSpeed: 0.4,
            color: getThemeColor()
        };

        class Particle {
            constructor(reset = false) {
                if (reset) {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 200;
                    this.x = canvas.width / 2 + Math.cos(angle) * radius;
                    this.y = canvas.height / 2 + Math.sin(angle) * radius;
                } else {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }

                this.vx = (Math.random() - 0.5) * config.moveSpeed;
                this.vy = (Math.random() - 0.5) * config.moveSpeed;
                this.size = Math.random() * 2 + 1.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 100;
                    this.x = canvas.width / 2 + Math.cos(angle) * radius;
                    this.y = canvas.height / 2 + Math.sin(angle) * radius;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = config.color + '99'; // 0.6 opacity approx
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle(false));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = config.color + Math.floor((1 - distance / config.connectionDistance) * 255).toString(16).padStart(2, '0');
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
