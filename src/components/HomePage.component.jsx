import { useState, useEffect } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);

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
  const heroTrigger = vh * 1.5; // Hero starts moving after this scroll
  const heroTranslate = scrollY > heroTrigger ? -(scrollY - heroTrigger) : 0;

  // --- COLLECTIVE BLOCK SCROLL ---
  const allBlocksVisible = vh * 1.5;
  const collectiveTranslate = scrollY > allBlocksVisible ? -(scrollY - allBlocksVisible) : 0;

  // --- TOTAL BLOCK OFFSET ---
  const block1Offset = scrollY < allBlocksVisible ? block1 : block1 + collectiveTranslate;
  const block2Offset = scrollY < allBlocksVisible ? block2 : block2 + collectiveTranslate;
  const block3Offset = scrollY < allBlocksVisible ? block3 : block3 + collectiveTranslate;

  return (
    <div className="relative min-h-[300vh] bg-gray-50">
      {/* HERO SECTION */}
      <div
        className="fixed top-1/2 left-1/2 text-center z-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(-50%, -50%) translateY(${heroTranslate}px)` }}
      >
        <h1 className="text-9xl font-bold">WIRANATA</h1>
        <p className="mt-4 text-xl">Frontend developer with Motion graphics design experience</p>
      </div>

      {/* SLIDING BLOCKS */}
      <div className="fixed left-0 bottom-40 w-full flex justify-center gap-5 z-10 will-change-transform">
        <div
          className="w-[20vw] h-[60vh] bg-amber-200 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${block1Offset}px)` }}
        ></div>
        <div
          className="w-[20vw] h-[60vh] bg-amber-400 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${block2Offset}px)` }}
        ></div>
        <div
          className="w-[20vw] h-[60vh] bg-amber-600 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${block3Offset}px)` }}>
        </div>
      </div>
    </div>
  );
};

export default Home;
