import { useState, useEffect } from 'react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('motion');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { colors } = useTheme();

    const { repos, loading, error } = useGitHubRepos('wiratata');




    const motionProjects = [
        {
            id: 1,
            title: "Wiranata Showreel",
            category: "Motion Graphics",
            tools: "After Effects • Illustrator • Photoshop • Premiere Pro",
            video: null,
            thumbnail: "https://img.youtube.com/vi/yWsctG4H5Ss/maxresdefault.jpg",
            link: "https://youtu.be/yWsctG4H5Ss?si=78pbnGQcScFUj3Qe",
            embedUrl: "https://www.youtube.com/embed/yWsctG4H5Ss?autoplay=1"
        },
        {
            id: 2,
            title: "Daily Motion Graphics Challenges Compilation",
            category: "Motion Graphics Compilation",
            tools: "After Effects • Motion Design",
            video: null,
            thumbnail: "https://img.youtube.com/vi/INbnKnDRZFI/maxresdefault.jpg",
            link: "https://youtu.be/INbnKnDRZFI",
            embedUrl: "https://www.youtube.com/embed/INbnKnDRZFI?autoplay=1"
        },
        {
            id: 3,
            title: "Pln Identifikasi Bahaya Video",
            category: "Safety Explainer",
            tools: "After Effects • 2D Animation",
            video: null,
            thumbnail: "https://img.youtube.com/vi/RHLW57KnWrU/maxresdefault.jpg",
            link: "https://youtu.be/RHLW57KnWrU",
            embedUrl: "https://www.youtube.com/embed/RHLW57KnWrU?autoplay=1"
        },
        {
            id: 4,
            title: "Pln Pengendalian Resiko Video",
            category: "Safety Explainer",
            tools: "After Effects • Motion Graphics",
            video: null,
            thumbnail: "https://img.youtube.com/vi/-y_8YlLu1TM/maxresdefault.jpg",
            link: "https://youtu.be/-y_8YlLu1TM",
            embedUrl: "https://www.youtube.com/embed/-y_8YlLu1TM?autoplay=1"
        },
        {
            id: 5,
            title: "PLN Gamification ETD REC",
            category: "Gamification / Animation",
            tools: "After Effects • Illustrator",
            video: null,
            thumbnail: "https://img.youtube.com/vi/1tM4KM5Y93Q/maxresdefault.jpg",
            link: "https://youtu.be/1tM4KM5Y93Q",
            embedUrl: "https://www.youtube.com/embed/1tM4KM5Y93Q?autoplay=1"
        },
        {
            id: 6,
            title: "PLN THE NEW NORMAL",
            category: "Motion Graphics",
            tools: "After Effects • Corporate",
            video: null,
            thumbnail: "https://img.youtube.com/vi/IzCY_UNVUfA/maxresdefault.jpg",
            link: "https://youtu.be/IzCY_UNVUfA",
            embedUrl: "https://www.youtube.com/embed/IzCY_UNVUfA?autoplay=1"
        },
        {
            id: 7,
            title: "PLN SOLID",
            category: "Corporate Animation",
            tools: "After Effects • Branding",
            video: null,
            thumbnail: "https://img.youtube.com/vi/uw9DfWJ-0oA/maxresdefault.jpg",
            link: "https://youtu.be/uw9DfWJ-0oA",
            embedUrl: "https://www.youtube.com/embed/uw9DfWJ-0oA?autoplay=1"
        },
        {
            id: 8,
            title: "PLN Kompor Induksi",
            category: "Product Explainer",
            tools: "After Effects • 3D Elements",
            video: null,
            thumbnail: "https://img.youtube.com/vi/4jXd1qmrVN8/maxresdefault.jpg",
            link: "https://youtu.be/4jXd1qmrVN8",
            embedUrl: "https://www.youtube.com/embed/4jXd1qmrVN8?autoplay=1"
        },
        {
            id: 9,
            title: "PLN EAC COVID 19",
            category: "Public Service Announcement",
            tools: "After Effects • Motion Graphics",
            video: null,
            thumbnail: "https://img.youtube.com/vi/taBVY-iEHVs/maxresdefault.jpg",
            link: "https://youtu.be/taBVY-iEHVs",
            embedUrl: "https://www.youtube.com/embed/taBVY-iEHVs?autoplay=1"
        },
        {
            id: 10,
            title: "PLN Daring Induction",
            category: "Training / Induction",
            tools: "After Effects • Explainer",
            video: null,
            thumbnail: "https://img.youtube.com/vi/FmcnMk1m4Rc/maxresdefault.jpg",
            link: "https://youtu.be/FmcnMk1m4Rc",
            embedUrl: "https://www.youtube.com/embed/FmcnMk1m4Rc?autoplay=1"
        },
        {
            id: 11,
            title: "How to donate",
            category: "Tutorial Animation",
            tools: "After Effects • 2D Animation",
            video: null,
            thumbnail: "https://img.youtube.com/vi/Shjl8XF9doM/maxresdefault.jpg",
            link: "https://youtu.be/Shjl8XF9doM",
            embedUrl: "https://www.youtube.com/embed/Shjl8XF9doM?autoplay=1"
        },
        {
            id: 12,
            title: "EveryYay Jenius promo video",
            category: "Promo Video",
            tools: "After Effects • Premiere Pro",
            video: null,
            thumbnail: "https://img.youtube.com/vi/_l_pQ6q6s8k/maxresdefault.jpg",
            link: "https://youtu.be/_l_pQ6q6s8k",
            embedUrl: "https://www.youtube.com/embed/_l_pQ6q6s8k?autoplay=1"
        },
        {
            id: 13,
            title: "Elevenia Master File",
            category: "Commercial Animation",
            tools: "After Effects • E-commerce",
            video: null,
            thumbnail: "https://img.youtube.com/vi/rpw84PXkAcM/maxresdefault.jpg",
            link: "https://youtu.be/rpw84PXkAcM",
            embedUrl: "https://www.youtube.com/embed/rpw84PXkAcM?autoplay=1"
        },
        {
            id: 14,
            title: "Edu Summit Bumper",
            category: "Bumper / Animation",
            tools: "After Effects • Events",
            video: null,
            thumbnail: "https://img.youtube.com/vi/Xf_MDnIehjM/maxresdefault.jpg",
            link: "https://youtu.be/Xf_MDnIehjM",
            embedUrl: "https://www.youtube.com/embed/Xf_MDnIehjM?autoplay=1"
        },
        {
            id: 15,
            title: "Cap Gajah Video",
            category: "Product Showcase",
            tools: "After Effects • 3D",
            video: null,
            thumbnail: "https://img.youtube.com/vi/spV-A6zlUJc/maxresdefault.jpg",
            link: "https://youtu.be/spV-A6zlUJc",
            embedUrl: "https://www.youtube.com/embed/spV-A6zlUJc?autoplay=1"
        },
        {
            id: 16,
            title: "Telkomtelstra Sdwan",
            category: "Tech Explainer",
            tools: "After Effects • Network Graphics",
            video: null,
            thumbnail: "https://img.youtube.com/vi/9rP6SHX7oAc/maxresdefault.jpg",
            link: "https://youtu.be/9rP6SHX7oAc",
            embedUrl: "https://www.youtube.com/embed/9rP6SHX7oAc?autoplay=1"
        }
    ];

    return (
        <div
            className="min-h-screen w-full pt-[20vh] pb-20 px-4 sm:px-8 transition-colors duration-500"
            style={{ backgroundColor: colors.bg.primary }}
        >
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col items-center mb-16">
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center transition-colors duration-500"
                        style={{ color: colors.text.primary }}
                    >
                        Portfolio
                    </h1>


                    <div
                        className="relative p-1 rounded-full flex items-center cursor-pointer transition-colors duration-500"
                        style={{
                            backgroundColor: colors.bg.tertiary,
                            border: `1px solid ${colors.border.light}`
                        }}
                    >

                        <div
                            className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out shadow-sm"
                            style={{
                                left: activeTab === 'motion' ? '4px' : '50%',
                                width: 'calc(50% - 4px)',
                                backgroundColor: colors.bg.secondary
                            }}
                        />


                        <button
                            onClick={() => setActiveTab('motion')}
                            className="relative z-10 px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
                            style={{
                                color: activeTab === 'motion' ? colors.accent.primary : colors.text.secondary
                            }}
                        >
                            Motion Graphics
                        </button>


                        <button
                            onClick={() => setActiveTab('developer')}
                            className="relative z-10 px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
                            style={{
                                color: activeTab === 'developer' ? colors.accent.primary : colors.text.secondary
                            }}
                        >
                            Full Stack Dev
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in">


                    {activeTab === 'motion' && motionProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedVideo(project)}
                            className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.01] block cursor-pointer"
                            style={{
                                backgroundColor: colors.bg.secondary,
                                border: `1px solid ${colors.border.light}`,
                                boxShadow: `0 4px 20px -5px ${colors.bg.primary}40`
                            }}
                        >
                            <div className="aspect-video w-full relative bg-black/5">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        poster={project.thumbnail}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        muted
                                        loop
                                        playsInline
                                        onMouseOver={e => e.target.play().catch(() => {})}
                                        onMouseOut={e => {
                                            e.target.pause();
                                            e.target.currentTime = 0;
                                        }}
                                    />
                                ) : (
                                    <img 
                                        src={project.thumbnail} 
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                )}
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white shadow-xl">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0" />
                                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm opacity-80">{project.category} • {project.tools}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {activeTab === 'developer' && (
                        <>
                            {loading && (
                                <div className="col-span-1 md:col-span-2 flex justify-center items-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: colors.accent.primary }}></div>
                                </div>
                            )}

                            {error && (
                                <div className="col-span-1 md:col-span-2 text-center py-10" style={{ color: colors.text.secondary }}>
                                    <p>Failed to load projects. Please try again later.</p>
                                </div>
                            )}

                            {!loading && !error && repos.map((repo) => (
                                <div
                                    key={repo.id}
                                    className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.01] flex flex-col"
                                    style={{
                                        backgroundColor: colors.bg.secondary,
                                        border: `1px solid ${colors.border.light}`,
                                        boxShadow: `0 4px 20px -5px ${colors.bg.primary}40`
                                    }}
                                >

                                    <div className="w-full aspect-[2/1] overflow-hidden border-b" style={{ borderColor: colors.border.light }}>
                                        <img
                                            src={`https://opengraph.githubassets.com/1/wiratata/${repo.name}`}
                                            alt={repo.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3
                                                className="text-2xl font-bold transition-colors duration-500"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {repo.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-sm" style={{ color: colors.text.tertiary }}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {repo.stargazers_count}
                                            </div>
                                        </div>

                                        <p
                                            className="mb-6 flex-grow transition-colors duration-500 text-sm sm:text-base"
                                            style={{ color: colors.text.secondary }}
                                        >
                                            {repo.description || "No description available."}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">

                                            {repo.languages && repo.languages.map(lang => (
                                                <span
                                                    key={lang}
                                                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500"
                                                    style={{
                                                        backgroundColor: colors.bg.tertiary,
                                                        color: colors.text.tertiary
                                                    }}
                                                >
                                                    {lang}
                                                </span>
                                            ))}


                                            {repo.topics && repo.topics.slice(0, 3).map(topic => (
                                                <span
                                                    key={topic}
                                                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500"
                                                    style={{
                                                        backgroundColor: colors.bg.tertiary,
                                                        color: colors.text.tertiary
                                                    }}
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t" style={{ borderColor: colors.border.light }}>
                                            {repo.homepage && (
                                                <a
                                                    href={repo.homepage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-semibold hover:underline"
                                                    style={{ color: colors.accent.primary }}
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-semibold hover:underline"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            {/* Video Modal Overlay */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div 
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Player */}
                        {selectedVideo.video ? (
                            <video 
                                src={selectedVideo.video} 
                                className="w-full h-full object-contain"
                                controls 
                                autoPlay 
                            />
                        ) : selectedVideo.embedUrl ? (
                            <iframe 
                                src={selectedVideo.embedUrl} 
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
