import { useState, useEffect } from 'react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('motion');
    const { colors } = useTheme();


    const { repos, loading, error } = useGitHubRepos('wiratata');




    const motionProjects = [
        {
            id: 1,
            title: "Neon City",
            category: "3D Animation",
            tools: "Cinema 4D • Octane",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            id: 2,
            title: "Abstract Flow",
            category: "Motion Design",
            tools: "After Effects",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
            id: 3,
            title: "Product Reveal",
            category: "Commercial",
            tools: "Blender • DaVinci",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
            id: 4,
            title: "Logo Animation",
            category: "Branding",
            tools: "After Effects",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        }
    ];

    return (
        <div
            className="min-h-screen w-full pt-28 pb-20 px-4 sm:px-8 transition-colors duration-500"
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
                            className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.01]"
                            style={{
                                backgroundColor: colors.bg.secondary,
                                border: `1px solid ${colors.border.light}`,
                                boxShadow: `0 4px 20px -5px ${colors.bg.primary}40`
                            }}
                        >
                            <div className="aspect-video w-full relative bg-black/5">
                                <video
                                    src={project.video}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    muted
                                    loop
                                    playsInline
                                    onMouseOver={e => e.target.play()}
                                    onMouseOut={e => {
                                        e.target.pause();
                                        e.target.currentTime = 0;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
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
        </div>
    );
};

export default Portfolio;
