import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
    const [activeTab, setActiveTab] = useState('story');
    const { colors } = useTheme();

    const experience = [
        {
            title: "Motion Graphics Designer",
            company: "Sphoe Studio",
            period: "October 2017 – 2024",
            location: "Jakarta, ID",
            type: "motion",
            highlights: [
                "Founded and managed a boutique motion design studio",
                "Led creative team and mentored junior designers",
                "Delivered 100+ projects for international clients",
                "Specialized in branding animations and explainer videos"
            ]
        },
        {
            title: "Freelance Motion Graphics & VFX Designer",
            company: "Self-Employed",
            period: "2013 – Present",
            location: "Remote / Calgary, AB",
            type: "motion",
            highlights: [
                "Animated 2D motion graphics for branding and social media",
                "Managed client relationships and project timelines independently",
                "Explained technical workflows to non-technical clients",
                "Maintained 95%+ client satisfaction rate"
            ]
        },
        {
            title: "Software Development Student",
            company: "Bow Valley College",
            period: "January 2025 – Present",
            location: "Calgary, AB",
            type: "dev",
            highlights: [
                "Full-stack web development (MERN stack)",
                "Object-oriented programming in C# and C++",
                "Database design and REST API development",
                "Deployed production applications on Render.com"
            ]
        },
        {
            title: "Video Editor",
            company: "OLIVER Agency",
            period: "May 2017 – September 2017",
            location: "Jakarta, ID",
            type: "motion",
            highlights: [
                "Edited promotional videos for major brands",
                "Collaborated with creative directors and account teams",
                "Maintained brand consistency across video deliverables"
            ]
        }
    ];

    const education = [
        {
            degree: "Diploma in Software Development",
            school: "Bow Valley College",
            location: "Calgary, AB",
            period: "2025 – Present",
            status: "Currently Enrolled"
        },
        {
            degree: "Bachelor of Arts in Design and Visual Communications",
            school: "Tarumanagara University",
            location: "Jakarta, ID",
            period: "2010 – 2015",
            status: "Graduated"
        }
    ];

    const projects = [
        {
            name: "Shared Workspace Web App",
            year: "2025",
            tech: ["Node.js", "MongoDB", "Express", "REST API", "Render"],
            description: "Full-stack coworking space platform with property management, search/filter functionality, and MongoDB integration. Deployed on Render.com.",
            link: "https://github.com/Wiratata",
            type: "dev"
        },
        {
            name: "Connect Four Game",
            year: "2025",
            tech: ["C#", "OOP", "Console App"],
            description: "Classic Connect Four game built with C#, implementing object-oriented principles, win detection logic, and player validation.",
            link: "https://github.com/Wiratata",
            type: "dev"
        },
        {
            name: "Personal Portfolio Website",
            year: "2025",
            tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
            description: "Responsive portfolio site showcasing dual expertise in motion graphics and frontend development with smooth animations.",
            link: "https://wiratata.github.io",
            type: "dev"
        }
    ];

    return (
        <div
            className="w-screen min-h-screen pt-[20vh] pb-20 px-4 sm:px-8 transition-colors duration-500"
            style={{ backgroundColor: colors.bg.primary }}
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1
                        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 transition-colors duration-500"
                        style={{ color: colors.text.primary }}
                    >
                        About <span style={{ color: colors.accent.primary }}>Wiranata</span>
                    </h1>
                    <p
                        className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500"
                        style={{ color: colors.text.secondary }}
                    >
                        Where <span className="font-semibold" style={{ color: colors.accent.primary }}>10+ years of motion design</span> meets <span className="font-semibold" style={{ color: colors.accent.secondary }}>full-stack development</span>
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['story', 'experience', 'projects', 'education'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize"
                            style={{
                                backgroundColor: activeTab === tab ? colors.accent.primary : colors.bg.tertiary,
                                color: activeTab === tab ? colors.bg.primary : colors.text.secondary,
                                borderWidth: '1px',
                                borderColor: activeTab === tab ? colors.accent.primary : colors.border.light
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Sections */}
                <div
                    className="rounded-2xl p-8 sm:p-12 transition-colors duration-500"
                    style={{
                        backgroundColor: colors.bg.secondary,
                        borderWidth: '1px',
                        borderColor: colors.border.light
                    }}
                >
                    {/* My Story Tab */}
                    {activeTab === 'story' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div>
                                <h2
                                    className="text-3xl font-bold mb-4 transition-colors duration-500"
                                    style={{ color: colors.accent.primary }}
                                >
                                    The Journey
                                </h2>
                                <div
                                    className="space-y-4 text-lg leading-relaxed transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    <p>
                                        I've spent over a decade bringing ideas to life through motion—crafting animations that tell stories,
                                        build brands, and captivate audiences. From founding <span className="font-semibold" style={{ color: colors.accent.primary }}>Sphoe Studio</span> to
                                        working with clients around the world, I've learned that great design isn't just about making things look good—it's
                                        about making them <span className="font-semibold" style={{ color: colors.accent.secondary }}>feel right</span>.
                                    </p>
                                    <p>
                                        But as I created more complex interactive animations, I realized I wanted to go deeper. I didn't just want to
                                        design the experience—I wanted to <span className="font-semibold" style={{ color: colors.accent.primary }}>build it</span>. So I made a bold move:
                                        I relocated to Calgary and enrolled at <span className="font-semibold" style={{ color: colors.accent.secondary }}>Bow Valley College</span> to
                                        study Software Development.
                                    </p>
                                    <p>
                                        Now I'm not choosing between design and development—I'm combining them. I bring a designer's eye for
                                        aesthetics with a developer's understanding of performance, scalability, and user experience. Whether it's
                                        crafting silky-smooth animations in After Effects or building responsive web applications with React and Node.js,
                                        I approach every project with the same goal: <span className="font-semibold" style={{ color: colors.accent.primary }}>create something that works beautifully</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div
                                    className="p-6 rounded-xl transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="text-4xl font-bold mb-2 transition-colors duration-500" style={{ color: colors.accent.primary }}>10+</div>
                                    <div className="transition-colors duration-500" style={{ color: colors.text.secondary }}>Years in Motion Graphics</div>
                                </div>
                                <div
                                    className="p-6 rounded-xl transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="text-4xl font-bold mb-2 transition-colors duration-500" style={{ color: colors.accent.primary }}>100+</div>
                                    <div className="transition-colors duration-500" style={{ color: colors.text.secondary }}>Projects Delivered</div>
                                </div>
                                <div
                                    className="p-6 rounded-xl transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="text-4xl font-bold mb-2 transition-colors duration-500" style={{ color: colors.accent.primary }}>2</div>
                                    <div className="transition-colors duration-500" style={{ color: colors.text.secondary }}>Continents, Same Passion</div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3
                                    className="text-2xl font-bold mb-4 transition-colors duration-500"
                                    style={{ color: colors.accent.primary }}
                                >
                                    What I Believe
                                </h3>
                                <ul
                                    className="space-y-3 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1" style={{ color: colors.accent.primary }}>→</span>
                                        <span>Great user experiences happen when design and development work in harmony</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1" style={{ color: colors.accent.primary }}>→</span>
                                        <span>Every animation should serve a purpose—not just look pretty</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1" style={{ color: colors.accent.primary }}>→</span>
                                        <span>Learning never stops; the best projects teach you something new</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1" style={{ color: colors.accent.primary }}>→</span>
                                        <span>Clear communication turns good ideas into great outcomes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Experience Tab */}
                    {activeTab === 'experience' && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2
                                className="text-3xl font-bold mb-6 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                Professional Experience
                            </h2>
                            {experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold transition-colors duration-500" style={{ color: colors.text.primary }}>{job.title}</h3>
                                            <p className="font-semibold transition-colors duration-500" style={{ color: colors.accent.primary }}>{job.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm transition-colors duration-500" style={{ color: colors.text.secondary }}>{job.period}</p>
                                            <p className="text-sm transition-colors duration-500" style={{ color: colors.text.tertiary }}>{job.location}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {job.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 transition-colors duration-500" style={{ color: colors.text.secondary }}>
                                                <span className="mt-1" style={{ color: colors.accent.primary }}>•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects Tab */}
                    {activeTab === 'projects' && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2
                                className="text-3xl font-bold mb-6 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                Featured Development Projects
                            </h2>
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl hover:scale-[1.01] transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 transition-colors duration-500" style={{ color: colors.text.primary }}>{project.name}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 rounded-full text-sm transition-colors duration-500"
                                                        style={{
                                                            backgroundColor: `${colors.accent.primary}20`,
                                                            color: colors.text.primary,
                                                            borderWidth: '1px',
                                                            borderColor: `${colors.accent.primary}40`
                                                        }}
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-sm transition-colors duration-500" style={{ color: colors.text.tertiary }}>{project.year}</span>
                                    </div>
                                    <p className="mb-4 transition-colors duration-500" style={{ color: colors.text.secondary }}>{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:opacity-80"
                                        style={{ color: colors.accent.primary }}
                                    >
                                        <span>View Project</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education Tab */}
                    {activeTab === 'education' && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2
                                className="text-3xl font-bold mb-6 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                Education
                            </h2>
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light
                                    }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold transition-colors duration-500" style={{ color: colors.text.primary }}>{edu.degree}</h3>
                                            <p className="transition-colors duration-500" style={{ color: colors.text.secondary }}>{edu.school}</p>
                                            <p className="text-sm transition-colors duration-500" style={{ color: colors.text.tertiary }}>{edu.location}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm transition-colors duration-500" style={{ color: colors.text.secondary }}>{edu.period}</p>
                                            <span
                                                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 transition-colors duration-500"
                                                style={{
                                                    backgroundColor: edu.status === 'Currently Enrolled' ? `${colors.accent.primary}30` : `${colors.accent.secondary}30`,
                                                    color: colors.accent.primary,
                                                    borderWidth: '1px',
                                                    borderColor: `${colors.accent.primary}50`
                                                }}
                                            >
                        {edu.status}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div
                    className="mt-12 text-center rounded-2xl p-8 sm:p-12 transition-colors duration-500"
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
                        className="text-lg mb-6 max-w-2xl mx-auto transition-colors duration-500"
                        style={{ color: colors.text.secondary }}
                    >
                        Whether you need motion graphics that captivate or web experiences that convert, I bring both worlds together.
                    </p>
                    <a
                        href="/portfolio-website/contact"
                        className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
};

export default About;