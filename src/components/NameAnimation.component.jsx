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
                    observer.disconnect(); // run once
                }
            },
            {
                threshold: 0.4, // trigger when ~40% visible
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex justify-center items-center w-screen h-[30vh] overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: colors.bg.secondary }}
        >
            {letters.map((letter, i) => (
                <span
                    key={i}
                    className="inline-block transition-all duration-700 ease-out"
                    style={{
                        color: colors.accent.primary,
                        transform: visible ? "translateY(0)" : "translateY(40vh)",
                        transitionDelay: `${i * 120}ms`,
                        fontFamily: "'Outfit', system-ui, sans-serif",
                        fontWeight: '800',
                        fontSize: 'clamp(3rem, 70vw, 15rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: '1'
                    }}
                >
                    {letter}
                </span>
            ))}
        </section>
    );
};

export default NameAnimation;