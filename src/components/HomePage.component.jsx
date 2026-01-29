import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const { colors } = useTheme();

  useEffect(() => {
    setVh(window.innerHeight);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => setVh(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- BLOCK POSITIONS ---
  const block1 = Math.max(vh - scrollY, 0);
  const block2 = Math.max(vh * 1.2 - scrollY, 0);
  const block3 = Math.max(vh * 1.4 - scrollY, 0);

  // --- HERO SCROLL TRIGGER ---
  const heroTrigger = vh * 1.5;
  const heroTranslate = scrollY > heroTrigger ? -(scrollY - heroTrigger) : 0;

  // --- COLLECTIVE BLOCK SCROLL ---
  const allBlocksVisible = vh * 1.5;
  const collectiveTranslate = scrollY > allBlocksVisible ? -(scrollY - allBlocksVisible) : 0;

  // --- TOTAL BLOCK OFFSET ---
  const block1Offset = scrollY < allBlocksVisible ? block1 : block1 + collectiveTranslate;
  const block2Offset = scrollY < allBlocksVisible ? block2 : block2 + collectiveTranslate;
  const block3Offset = scrollY < allBlocksVisible ? block3 : block3 + collectiveTranslate;

  // Project data
  const projects = [
    {
      id: 1,
      title: "Brand Identity Animation",
      category: "Motion Graphics",
      tools: "After Effects • Cinema 4D • Premiere Pro",
      description: "Full brand animation package including logo reveals, social media templates, and promotional videos"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Frontend Development",
      tools: "React • TypeScript • Tailwind CSS",
      description: "Responsive e-commerce platform with smooth animations and optimized performance"
    },
    {
      id: 3,
      title: "Music Video VFX",
      category: "Motion Graphics",
      tools: "After Effects • Blender • DaVinci Resolve",
      description: "Visual effects and compositing for indie music video with surreal atmosphere"
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      category: "Frontend Development",
      tools: "React • Three.js • Framer Motion",
      description: "Interactive 3D portfolio dashboard with WebGL animations and smooth transitions"
    }
  ];

  return (
      <div>
        <div className="relative min-h-[250vh] overflow-hidden">
          {/* CLEAN BACKGROUND */}
          <div
              className="fixed inset-0 z-0 transition-colors duration-500"
              style={{ backgroundColor: colors.bg.primary }}
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="subtle-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.text.primary} strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#subtle-grid)" />
              </svg>
            </div>
          </div>

          {/* HERO SECTION */}
          <div
              className="fixed top-1/2 left-1/2 text-center z-10 will-change-transform px-4"
              style={{ transform: `translate(-50%, -50%) translateY(${heroTranslate}px)` }}
          >
            <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 transition-colors duration-500"
                style={{ color: colors.text.primary }}
            >
              WIRANATA
            </h1>
            <p
                className="mt-6 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto transition-colors duration-500"
                style={{ color: colors.text.secondary }}
            >
              Motion Graphics Artist & Frontend Developer
            </p>
            <p
                className="mt-3 text-sm sm:text-base md:text-lg max-w-xl mx-auto transition-colors duration-500"
                style={{ color: colors.text.tertiary }}
            >
              Crafting visual stories and interactive experiences that move people
            </p>

            {/* Scroll indicator */}
            <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <span
                className="text-xs sm:text-sm transition-colors duration-500"
                style={{ color: colors.accent.primary }}
            >
              Scroll to explore
            </span>
              <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke={colors.accent.primary}
                  viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* SLIDING SKILL CARDS */}
          <div className="fixed left-0 bottom-20 md:bottom-40 w-full flex justify-center gap-3 md:gap-6 z-20 will-change-transform px-4">
            {/* Motion Graphics Card */}
            <div
                className="w-[28vw] md:w-[22vw] lg:w-[22vw] h-[45vh] md:h-[65vh] will-change-transform rounded-xl overflow-hidden"
                style={{
                  transform: `translateY(${block1Offset}px)`,
                  backgroundColor: colors.bg.secondary,
                  borderWidth: '1px',
                  borderColor: colors.border.light,
                  boxShadow: `0 20px 60px -15px ${colors.bg.primary}40`
                }}
            >
              <div className="h-full flex flex-col p-5 md:p-7">
                {/* Icon with subtle accent */}
                <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 flex items-center justify-center"
                    style={{
                      backgroundColor: `${colors.accent.primary}15`,
                      borderWidth: '1px',
                      borderColor: `${colors.accent.primary}30`
                    }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke={colors.accent.primary} viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                    className="text-sm md:text-xl lg:text-2xl font-bold mb-4 md:mb-6"
                    style={{ color: colors.text.primary }}
                >
                  Motion Graphics
                </h3>

                {/* Skills List */}
                <div className="flex-1 space-y-2 md:space-y-3">
                  {['After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'Illustrator', 'Photoshop'].map((skill, i) => (
                      <div
                          key={i}
                          className={`text-xs md:text-sm lg:text-base flex items-center gap-2 ${i >= 4 ? 'hidden md:flex' : 'flex'}`}
                          style={{ color: colors.text.secondary }}
                      >
                        <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: colors.accent.primary }}
                        />
                        {skill}
                      </div>
                  ))}
                </div>

                {/* Accent line at bottom */}
                <div
                    className="h-0.5 w-full mt-4"
                    style={{ backgroundColor: `${colors.accent.primary}20` }}
                />
              </div>
            </div>

            {/* Frontend Development Card */}
            <div
                className="w-[28vw] md:w-[22vw] lg:w-[22vw] h-[45vh] md:h-[65vh] will-change-transform rounded-xl overflow-hidden"
                style={{
                  transform: `translateY(${block2Offset}px)`,
                  backgroundColor: colors.bg.secondary,
                  borderWidth: '1px',
                  borderColor: colors.border.light,
                  boxShadow: `0 20px 60px -15px ${colors.bg.primary}40`
                }}
            >
              <div className="h-full flex flex-col p-5 md:p-7">
                <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 flex items-center justify-center transition-colors duration-500"
                    style={{
                      backgroundColor: `${colors.accent.primary}15`,
                      borderWidth: '1px',
                      borderColor: `${colors.accent.primary}30`
                    }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke={colors.accent.primary} viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <h3
                    className="text-sm md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 transition-colors duration-500"
                    style={{ color: colors.text.primary }}
                >
                  Frontend Dev
                </h3>

                <div className="flex-1 space-y-2 md:space-y-3">
                  {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'].map((skill, i) => (
                      <div
                          key={i}
                          className={`text-xs md:text-sm lg:text-base flex items-center gap-2 transition-colors duration-500 ${i >= 4 ? 'hidden md:flex' : 'flex'}`}
                          style={{ color: colors.text.secondary }}
                      >
                        <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: colors.accent.primary }}
                        />
                        {skill}
                      </div>
                  ))}
                </div>

                <div
                    className="h-0.5 w-full mt-4 transition-colors duration-500"
                    style={{ backgroundColor: `${colors.accent.primary}20` }}
                />
              </div>
            </div>

            {/* Tools & Backend Card */}
            <div
                className="w-[28vw] md:w-[22vw] lg:w-[22vw] h-[45vh] md:h-[65vh] will-change-transform rounded-xl overflow-hidden "
                style={{
                  transform: `translateY(${block3Offset}px)`,
                  backgroundColor: colors.bg.secondary,
                  borderWidth: '1px',
                  borderColor: colors.border.light,
                  boxShadow: `0 20px 60px -15px ${colors.bg.primary}40`
                }}
            >
              <div className="h-full flex flex-col p-5 md:p-7">
                <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 flex items-center justify-center transition-colors duration-500"
                    style={{
                      backgroundColor: `${colors.accent.primary}15`,
                      borderWidth: '1px',
                      borderColor: `${colors.accent.primary}30`
                    }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke={colors.accent.primary} viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>

                <h3
                    className="text-sm md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 transition-colors duration-500"
                    style={{ color: colors.text.primary }}
                >
                  Tools & Backend
                </h3>

                <div className="flex-1 space-y-2 md:space-y-3">
                  {['Node.js', 'MongoDB', 'Git/GitHub', 'Figma', 'C# / C++', 'REST APIs'].map((skill, i) => (
                      <div
                          key={i}
                          className={`text-xs md:text-sm lg:text-base flex items-center gap-2 transition-colors duration-500 ${i >= 4 ? 'hidden md:flex' : 'flex'}`}
                          style={{ color: colors.text.secondary }}
                      >
                        <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: colors.accent.primary }}
                        />
                        {skill}
                      </div>
                  ))}
                </div>

                <div
                    className="h-0.5 w-full mt-4 transition-colors duration-500"
                    style={{ backgroundColor: `${colors.accent.primary}20` }}
                />
              </div>
            </div>
          </div>
        </div>



        {/* PORTFOLIO SECTION */}
        <div
            className="w-screen min-h-screen py-20 px-4 sm:px-8 relative z-30 transition-colors duration-500"
            style={{ backgroundColor: colors.bg.primary }}
        >
          <div className="max-w-7xl mx-auto">
            <h2
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-center transition-colors duration-500"
                style={{ color: colors.text.primary }}
            >
              Selected Work
            </h2>
            <p
                className="text-center text-base sm:text-lg md:text-xl mb-16 max-w-2xl mx-auto transition-colors duration-500"
                style={{ color: colors.text.secondary }}
            >
              A showcase of recent projects blending creative vision with technical execution
            </p>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
              {projects.map((project) => (
                  <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-xl aspect-video hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: colors.bg.secondary,
                        borderWidth: '1px',
                        borderColor: colors.border.light
                      }}
                  >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                          background: `linear-gradient(to top, ${colors.bg.primary}ee, ${colors.bg.primary}66, transparent)`
                        }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span
                      className="text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors duration-500"
                      style={{ color: colors.accent.primary }}
                  >
                    {project.category}
                  </span>
                      <h3
                          className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 transition-colors duration-500"
                          style={{ color: colors.text.primary }}
                      >
                        {project.title}
                      </h3>
                      <p
                          className="text-xs sm:text-sm mt-2 mb-3 transition-colors duration-500"
                          style={{ color: colors.text.secondary }}
                      >
                        {project.tools}
                      </p>
                      <p
                          className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: colors.text.tertiary }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Placeholder for actual media */}
                    <div
                        className="w-full h-full flex items-center justify-center transition-colors duration-500"
                        style={{ color: colors.text.tertiary }}
                    >
                      <div className="text-center">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs sm:text-sm">Project Preview</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mb-16">
              <button
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105"
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    borderColor: colors.accent.primary,
                    color: colors.accent.primary
                  }}
              >
                View Full Portfolio
              </button>
            </div>

            {/* CTA Section */}
            <div
                className="mt-20 text-center rounded-2xl p-8 sm:p-12 transition-colors duration-500"
                style={{
                  backgroundColor: colors.bg.secondary,
                  borderWidth: '1px',
                  borderColor: colors.border.light
                }}
            >
              <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500"
                  style={{ color: colors.text.primary }}
              >
                Let's Create Something Amazing
              </h3>
              <p
                  className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-colors duration-500"
                  style={{ color: colors.text.secondary }}
              >
                Whether it's a stunning animation or a seamless web experience, I'm ready to bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition-all duration-200 text-base sm:text-lg hover:scale-105"
                    style={{
                      backgroundColor: colors.accent.primary,
                      color: colors.bg.primary
                    }}
                >
                  Get in Touch
                </a>
                <a
                    href="/about"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition-all duration-200 text-base sm:text-lg hover:scale-105"
                    style={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderColor: colors.accent.primary,
                      color: colors.accent.primary
                    }}
                >
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;