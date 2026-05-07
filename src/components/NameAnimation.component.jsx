import { useEffect, useRef, useState } from "react";
import { useTheme } from '../context/ThemeContext';

const letters = ["W", "I", "R", "A", "N", "A", "T", "A"];

const NameAnimation = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const { colors } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex justify-center items-center w-full pt-4 sm:pt-8 pb-0 overflow-hidden transition-colors duration-500"
            style={{
                backgroundColor: colors.bg.secondary
            }}
        >
            {letters.map((letter, i) => (
                <span
                    key={i}
                    className="inline-block transition-all z-14 duration-700 ease-out"
                    style={{
                        color: colors.bg.secondary,
                        transform: visible ? "translateY(0)" : "translateY(40vh)",
                        transitionDelay: `${i * 120}ms`,
                        fontFamily: "'Outfit', system-ui, sans-serif",
                        fontWeight: '800',
                        fontSize: 'clamp(1rem, 19vw, 17rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: '1'
                    }}
                >
                    {letter}
                </span>
            ))}


            <div
                className="absolute inset-0 z-[15] pointer-events-none"
                style={{
                    background: `linear-gradient(to top, ${colors.bg.secondary} 0%, ${colors.bg.primary}CC 30%, ${colors.bg.secondary}66 70%, transparent 90%)`,
                    backdropFilter: 'blur(25px)',
                    WebkitBackdropFilter: 'blur(25px)',
                    maskImage: 'linear-gradient(to top, black 10%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 10%, black 40%, transparent 100%)',
                }}
            />

            <div
                className="absolute inset-0 z-[12] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        110deg,
                        ${colors.accent.primary} 0vw,
                        ${colors.accent.primary} 1.5vw,
                        transparent 1.5vw,
                        transparent 3vw
                    )`
                }}
            />
        </section>
    );
};

export default NameAnimation;