
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NavText = ({ to, text }) => {
    const location = useLocation();
    const { colors } = useTheme();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className="relative text-base sm:text-lg font-medium transition-all duration-300 group"
            style={{
                color: isActive ? colors.accent.primary : colors.text.secondary
            }}
        >
            {text}
            <span
                className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                style={{
                    backgroundColor: colors.accent.primary,
                    width: isActive ? '100%' : '0%'
                }}
            ></span>
            <style>{`
        .group:hover span {
          width: 100%;
        }
      `}</style>
        </Link>
    );
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme, colors } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex fixed z-50 transition-all duration-500 ${scrolled
                ? "w-[90%] sm:w-[70%] md:w-[50%] top-5 rounded-full h-[8vh] shadow-lg"
                : "w-[95%] sm:w-[100vw] top-0 rounded-lg h-[12vh] sm:h-[15vh]"
                }`}
            style={{
                backgroundColor: scrolled
                    ? `${colors.bg.secondary}dd`
                    : `${colors.bg.secondary}cc`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderColor: colors.border.light
            }}
        >
            <div className="w-[50%] flex items-center pl-4 sm:pl-6">
                <Link
                    to="/"
                    className="font-bold text-lg sm:text-xl transition-colors hover:opacity-80"
                    style={{ color: colors.accent.primary }}
                >
                    W
                </Link>
            </div>

            <div className="flex m-auto w-[50%] justify-end gap-3 sm:gap-5 mr-4 sm:mr-5 items-center">
                <NavText to="/" text="Home" />
                <NavText to="/portfolio" text="Portfolio" />
                <NavText to="/about" text="About" />
                <NavText to="/contact" text="Contact" />


                <button
                    onClick={toggleTheme}
                    className="ml-2 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                        backgroundColor: colors.bg.tertiary,
                        color: colors.text.primary
                    }}
                    aria-label="Toggle theme"
                >
                    {isDark ? (

                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (

                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;