import { useState } from 'react';
import { Link } from 'react-router-dom';
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



    return (
        <div
            className="w-screen min-h-screen pt-[20vh] pb-20 px-4 sm:px-8 transition-colors duration-500"
            style={{ backgroundColor: colors.bg.primary }}
        >
            <div className="max-w-6xl mx-auto relative z-10">

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


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['story', 'experience', 'education'].map((tab) => (
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


                <div
                    className="rounded-2xl p-8 sm:p-12 transition-colors duration-500"
                    style={{
                        backgroundColor: colors.bg.secondary,
                        borderWidth: '1px',
                        borderColor: colors.border.light
                    }}
                >

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
                                        I’ve been working in motion graphics and video editing for more than 10 years. Most of my experience comes from creating animations, promotional videos, and branded content for different clients and industries. Over the years, I’ve worked with people from different parts of the world through freelance projects and also built my own small studio, <span className="font-semibold" style={{ color: colors.accent.primary }}>Sphoe Studio</span>.
                                    </p>
                                    <p>
                                        What I enjoy most about motion design is bringing ideas to life and finding ways to make visuals feel more engaging and meaningful. For me, good design is not just about making things look nice, but also about making people feel connected to the story.
                                    </p>
                                    <p>
                                        As I kept working on more digital and interactive projects, I became more interested in the technical side behind it. I didn’t just want to animate interfaces or experiences anymore, I wanted to understand how to build them too. That’s one of the reasons why I moved to Calgary and started studying <span className="font-semibold" style={{ color: colors.accent.secondary }}>Software Development at Bow Valley College</span>.
                                    </p>
                                    <p>
                                        Right now, I’m continuing to grow both as a motion designer and developer. I still love working in After Effects and editing videos, but I also enjoy building websites and learning technologies like React and Node.js. I like being able to understand both the creative and technical side of a project, and I’m always looking for ways to improve and learn something new.
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
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                        style={{
                            backgroundColor: colors.accent.primary,
                            color: colors.bg.primary
                        }}
                    >
                        Get in Touch
                    </Link>
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