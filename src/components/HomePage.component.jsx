import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const { colors } = useTheme();


  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const showreelSectionRef = useRef(null);


  const { repos, loading } = useGitHubRepos('wiratata');

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


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && iframeRef.current) {

          iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else if (iframeRef.current) {

          iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      },
      { threshold: 0.5 }
    );

    if (showreelSectionRef.current) {
      observer.observe(showreelSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (iframeRef.current) {
      if (isMuted) {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };


  const block1 = Math.max(vh - scrollY, 0);
  const block2 = Math.max(vh * 1.2 - scrollY, 0);
  const block3 = Math.max(vh * 1.4 - scrollY, 0);


  const heroTrigger = vh * 1.5;
  const heroTranslate = scrollY > heroTrigger ? -(scrollY - heroTrigger) : 0;


  const allBlocksVisible = vh * 1.5;
  const collectiveTranslate = scrollY > allBlocksVisible ? -(scrollY - allBlocksVisible) : 0;


  const block1Offset = scrollY < allBlocksVisible ? block1 : block1 + collectiveTranslate;
  const block2Offset = scrollY < allBlocksVisible ? block2 : block2 + collectiveTranslate;
  const block3Offset = scrollY < allBlocksVisible ? block3 : block3 + collectiveTranslate;


  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[250vh]">

        <div
          className="fixed inset-0 z-0 transition-colors duration-500"
          style={{ backgroundColor: colors.bg.primary }}
        >

          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="subtle-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.text.primary} strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#subtle-grid)" />
            </svg>
          </div>
        </div>


        <div
          className="fixed top-1/2 left-1/2 text-center z-10 will-change-transform px-4 w-full"
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


        <div
          className="fixed inset-0 z-10 pointer-events-none"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            maskImage: `linear-gradient(to right, black ${Math.min(Math.max((scrollY / vh) * 100, 0), 100)}%, transparent ${Math.min(Math.max((scrollY / vh) * 100, 0), 100) + 20}%)`,
            WebkitMaskImage: `linear-gradient(to right, black ${Math.min(Math.max((scrollY / vh) * 100, 0), 100)}%, transparent ${Math.min(Math.max((scrollY / vh) * 100, 0), 100) + 20}%)`,
          }}
        />


        <div className="fixed left-0 bottom-20 md:bottom-40 w-full flex justify-center gap-3 md:gap-6 z-20 will-change-transform px-4">

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


              <h3
                className="text-sm md:text-xl lg:text-2xl font-bold mb-4 md:mb-6"
                style={{ color: colors.text.primary }}
              >
                Motion Graphics
              </h3>


              <div className="flex-1 space-y-2 md:space-y-3">
                {['After Effects', 'Premiere Pro', 'Blender', 'Illustrator', 'Photoshop'].map((skill, i) => (
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


              <div
                className="h-0.5 w-full mt-4"
                style={{ backgroundColor: `${colors.accent.primary}20` }}
              />
            </div>
          </div>


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

      {/* --- SHOWREEL SECTION --- */}
      <div
        ref={showreelSectionRef}
        className="relative z-20 w-full aspect-video mt-[10vh] bg-black group"
        onMouseEnter={() => {
          if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            setIsMuted(false);
          }
        }}
        onMouseLeave={() => {
          if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
            setIsMuted(true);
          }
        }}
      >
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500"
          src={`https://www.youtube.com/embed/yWsctG4H5Ss?autoplay=1&mute=1&controls=0&loop=1&playlist=yWsctG4H5Ss&playsinline=1&rel=0&enablejsapi=1&iv_load_policy=3`}
          title="Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />


        <div
          className="absolute inset-0 cursor-pointer z-40"
          onClick={() => {

            if (iframeRef.current) {
              const isPaused = iframeRef.current.dataset.paused === 'true';
              if (isPaused) {
                iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                iframeRef.current.dataset.paused = 'false';
              } else {
                iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                iframeRef.current.dataset.paused = 'true';
              }
            }
          }}
        />


        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
          <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-widest uppercase mb-2">Motion Graphics</h2>
          <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-widest uppercase">Showreel</h2>
          <p className="text-white/80 text-lg sm:text-xl mt-4 font-light tracking-wide">2017 - 2024</p>
        </div>
      </div>


      <div className="relative z-20 w-full pt-32 pb-10 overflow-hidden" style={{ backgroundColor: colors.bg.primary }}>
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: colors.text.primary }}>Developer Journey</h2>
          <p className="max-w-xl mx-auto" style={{ color: colors.text.secondary }}>
            Exploring code through interactive experiments and full-stack applications.
          </p>
        </div>


        <div
          className="w-full relative flex overflow-hidden"
          style={{
            maskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`,
            WebkitMaskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
          }}
        >

          <div className="flex gap-6 animate-marquee hover:pause w-max px-6">

            {[...repos, ...repos, ...repos, ...repos].map((repo, idx) => (
              <a
                key={`${repo.id}-${idx}`}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[300px] sm:w-[400px] h-[250px] sm:h-[280px] rounded-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  backgroundColor: colors.bg.secondary,
                  border: `1px solid ${colors.border.light}`,
                  boxShadow: `0 10px 30px -10px ${colors.bg.primary}80`
                }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold truncate pr-4" style={{ color: colors.text.primary }}>{repo.name}</h3>
                    <div className="flex items-center gap-1 text-sm" style={{ color: colors.text.tertiary }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      {repo.stargazers_count}
                    </div>
                  </div>
                  <p className="text-sm line-clamp-3 mb-4" style={{ color: colors.text.secondary }}>
                    {repo.description || "No description available."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.languages && repo.languages.slice(0, 3).map(lang => (
                    <span key={lang} className="text-xs px-2 py-1 rounded-full border" style={{ borderColor: colors.border.medium, color: colors.text.tertiary }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </a>
            ))}
            {loading && repos.length === 0 && <div className="p-10">Loading repositories...</div>}
          </div>
        </div>

        <div className="text-center mt-12 mb-16">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: `1px solid ${colors.accent.primary}`,
              color: colors.accent.primary
            }}
          >
            View Full Portfolio
          </Link>
        </div>

        {/* CTA Banner perfectly constrained inside Developer Journey */}
        <div
          className="w-[90%] max-w-4xl mx-auto text-center rounded-2xl p-6 sm:p-12 transition-colors duration-500 shadow-xl"
          style={{
            backgroundColor: colors.bg.secondary,
            borderWidth: '1px',
            borderColor: colors.border.light
          }}
        >
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-500"
            style={{ color: colors.text.primary }}
          >
            Let's Create Something Together
          </h3>
          <p
            className="text-base sm:text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500"
            style={{ color: colors.text.secondary }}
          >
            Whether you need motion graphics that captivate or web experiences that convert, I bring both worlds together.
          </p>
          <a
            href="/portfolio-website/contact"
            className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shrink-0"
            style={{
              backgroundColor: colors.accent.primary,
              color: colors.bg.primary
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>


      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;