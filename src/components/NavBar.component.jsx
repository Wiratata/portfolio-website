
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NavText = ({ to, text, onClick, isMobile }) => {
    const location = useLocation();
    const { colors } = useTheme();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`relative transition-all duration-300 group px-4 py-2 ${
                isMobile 
                ? "text-5xl sm:text-6xl font-black tracking-tighter" 
                : "text-base font-medium"
            }`}
            style={{
                color: isActive ? colors.accent.primary : colors.text.secondary,
                fontWeight: isActive ? (isMobile ? '900' : '700') : (isMobile ? '800' : '500'),
                fontFamily: isMobile ? "'Outfit', sans-serif" : "inherit"
            }}
        >
            {text}
        </Link>
    );
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme, colors } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when location changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Body scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`fixed z-[60] transition-all duration-500 flex items-center justify-between px-8 sm:px-12 left-1/2 -translate-x-1/2 ${scrolled
                    ? "top-4 w-[98%] sm:w-[95%] rounded-full h-16 shadow-lg border"
                    : "top-0 w-full rounded-none h-20 sm:h-24 border-b"
                    }`}
                style={{
                    backgroundColor: scrolled
                        ? `${colors.bg.secondary}ee`
                        : `${colors.bg.secondary}cc`,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderColor: colors.border.light
                }}
            >
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="transition-transform hover:scale-110 flex items-center"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}Cartoon Character.png`}
                            alt="Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4">
                    <NavText to="/" text="Home" />
                    <NavText to="/portfolio" text="Portfolio" />
                    <NavText to="/about" text="About" />
                    <NavText to="/contact" text="Contact" />

                    <div className="w-[1px] h-6 bg-gray-600/30 mx-2" />

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full transition-all duration-300 hover:bg-gray-500/10"
                        style={{ color: colors.text.primary }}
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

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full"
                        style={{ color: colors.text.primary }}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 z-[70]"
                        style={{ color: colors.text.primary }}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full Screen */}
            <div
                className={`fixed inset-0 z-[55] transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className={`absolute inset-0 w-full h-screen flex flex-col items-center justify-center gap-10 transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                    style={{ backgroundColor: colors.bg.secondary }}
                >
                    <div className="flex flex-col items-center gap-10">
                        <NavText to="/" text="HOME" onClick={() => setIsMenuOpen(false)} isMobile />
                        <NavText to="/portfolio" text="PORTFOLIO" onClick={() => setIsMenuOpen(false)} isMobile />
                        <NavText to="/about" text="ABOUT" onClick={() => setIsMenuOpen(false)} isMobile />
                        <NavText to="/contact" text="CONTACT" onClick={() => setIsMenuOpen(false)} isMobile />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;