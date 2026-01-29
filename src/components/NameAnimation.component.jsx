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
            className="flex justify-center items-center w-screen h-[30vh] text-9xl font-bold overflow-hidden"
            style={{ backgroundColor: colors.bg.secondary }} // ← Add this
        >
            {letters.map((letter, i) => (
                <span
                    key={i}
                    className="inline-block transition-transform duration-700 ease-out"
                    style={{
                        color: colors.accent.primary, // ← Add this
                        transform: visible ? "translateY(0)" : "translateY(40vh)",
                        transitionDelay: `${i * 120}ms`,
                    }}
                >
          {letter}
        </span>
            ))}
        </section>
    );
};

export default NameAnimation;
