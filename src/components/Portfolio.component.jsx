import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('motion'); // 'motion' or 'developer'
    const { colors } = useTheme();

    // Dummy Data - Motion Graphics
    const motionProjects = [
        {
            id: 1,
            title: "Neon City",
            category: "3D Animation",
            tools: "Cinema 4D • Octane",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Placeholder
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

    // Dummy Data - Developer
    const devProjects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-scale e-commerce solution with payment integration and admin dashboard.",
            stack: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#",
            repo: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Real-time collaboration tool for remote teams with drag-and-drop kanban boards.",
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            link: "#",
            repo: "#"
        },
        {
            id: 3,
            title: "Portfolio V1",
            description: "Previous iteration of my portfolio built with vanilla JS and WebGL.",
            stack: ["JavaScript", "WebGL", "GLSL"],
            link: "#",
            repo: "#"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Data visualization dashboard for global weather patterns using public APIs.",
            stack: ["React", "D3.js", "OpenWeatherMap"],
            link: "#",
            repo: "#"
        }
    ];

    const currentProjects = activeTab === 'motion' ? motionProjects : devProjects;

    return (
        <div 
            className="min-h-screen w-full pt-28 pb-20 px-4 sm:px-8 transition-colors duration-500"
            style={{ backgroundColor: colors.bg.primary }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center transition-colors duration-500"
                        style={{ color: colors.text.primary }}
                    >
                        Portfolio
                    </h1>

                    {/* Custom Toggle Switch */}
                    <div 
                        className="relative p-1 rounded-full flex items-center cursor-pointer transition-colors duration-500"
                        style={{ 
                            backgroundColor: colors.bg.tertiary,
                            border: `1px solid ${colors.border.light}`
                        }}
                    >
                        {/* Sliding Background */}
                        <div 
                            className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out shadow-sm"
                            style={{ 
                                left: activeTab === 'motion' ? '4px' : '50%',
                                width: 'calc(50% - 4px)',
                                backgroundColor: colors.bg.secondary
                            }}
                        />

                        {/* Motion Button */}
                        <button
                            onClick={() => setActiveTab('motion')}
                            className="relative z-10 px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
                            style={{ 
                                color: activeTab === 'motion' ? colors.accent.primary : colors.text.secondary 
                            }}
                        >
                            Motion Graphics
                        </button>

                        {/* Developer Button */}
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

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in">
                    {currentProjects.map((project) => (
                        <div 
                            key={project.id}
                            className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.01]"
                            style={{ 
                                backgroundColor: colors.bg.secondary,
                                border: `1px solid ${colors.border.light}`,
                                boxShadow: `0 4px 20px -5px ${colors.bg.primary}40`
                            }}
                        >
                            {/* Motion Content */}
                            {activeTab === 'motion' && (
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
                            )}

                            {/* Developer Content */}
                            {activeTab === 'developer' && (
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 
                                            className="text-2xl font-bold transition-colors duration-500"
                                            style={{ color: colors.text.primary }}
                                        >
                                            {project.title}
                                        </h3>
                                        <div 
                                            className="p-2 rounded-lg"
                                            style={{ backgroundColor: `${colors.accent.primary}15` }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke={colors.accent.primary} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <p 
                                        className="mb-6 flex-grow transition-colors duration-500"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map(tech => (
                                            <span 
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500"
                                                style={{ 
                                                    backgroundColor: colors.bg.tertiary,
                                                    color: colors.text.tertiary
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t" style={{ borderColor: colors.border.light }}>
                                        <a 
                                            href={project.link}
                                            className="text-sm font-semibold hover:underline"
                                            style={{ color: colors.accent.primary }}
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.repo}
                                            className="text-sm font-semibold hover:underline"
                                            style={{ color: colors.text.secondary }}
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
