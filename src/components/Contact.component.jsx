import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { colors } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xgodnnyk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    projectType: 'general'
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "wiranata.glitch@gmail.com",
            link: "mailto:wiranata.glitch@gmail.com"
        },

        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Location",
            value: "Calgary, AB",
            link: null
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            label: "Portfolio",
            value: "wiratata.github.io",
            link: "https://wiratata.github.io"
        }
    ];

    const projectTypes = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'motion', label: 'Motion Graphics Project' },
        { value: 'web', label: 'Web Development Project' },
        { value: 'both', label: 'Motion + Web (Hybrid)' },
        { value: 'collab', label: 'Collaboration Opportunity' }
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
                        Let's <span style={{ color: colors.accent.primary }}>Connect</span>
                    </h1>
                    <p
                        className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500"
                        style={{ color: colors.text.secondary }}
                    >
                        Have a project in mind? Let's discuss how we can bring your vision to life
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div
                        className="rounded-2xl p-8 transition-colors duration-500"
                        style={{
                            backgroundColor: colors.bg.secondary,
                            borderWidth: '1px',
                            borderColor: colors.border.light
                        }}
                    >
                        <h2
                            className="text-3xl font-bold mb-6 transition-colors duration-500"
                            style={{ color: colors.accent.primary }}
                        >
                            Send a Message
                        </h2>

                        {submitStatus === 'success' && (
                            <div
                                className="mb-6 p-4 rounded-lg transition-colors duration-500"
                                style={{
                                    backgroundColor: `${colors.accent.primary}20`,
                                    borderWidth: '1px',
                                    borderColor: `${colors.accent.primary}50`,
                                    color: colors.accent.primary
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div
                                className="mb-6 p-4 rounded-lg transition-colors duration-500"
                                style={{
                                    backgroundColor: `rgba(239, 68, 68, 0.1)`,
                                    borderWidth: '1px',
                                    borderColor: `rgba(239, 68, 68, 0.3)`,
                                    color: '#ef4444'
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Failed to send message. Please ensure all fields are filled out.</span>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">

                            <div>
                                <label
                                    className="block font-semibold mb-2 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    What brings you here?
                                </label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light,
                                        color: colors.text.primary
                                    }}
                                >
                                    {projectTypes.map(type => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            <div>
                                <label
                                    className="block font-semibold mb-2 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light,
                                        color: colors.text.primary
                                    }}
                                    placeholder="John Doe"
                                />
                            </div>


                            <div>
                                <label
                                    className="block font-semibold mb-2 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light,
                                        color: colors.text.primary
                                    }}
                                    placeholder="john@example.com"
                                />
                            </div>


                            <div>
                                <label
                                    className="block font-semibold mb-2 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light,
                                        color: colors.text.primary
                                    }}
                                    placeholder="Project Inquiry"
                                />
                            </div>


                            <div>
                                <label
                                    className="block font-semibold mb-2 transition-colors duration-500"
                                    style={{ color: colors.text.secondary }}
                                >
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg resize-none focus:outline-none transition-colors duration-500"
                                    style={{
                                        backgroundColor: colors.bg.tertiary,
                                        borderWidth: '1px',
                                        borderColor: colors.border.light,
                                        color: colors.text.primary
                                    }}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>


                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    backgroundColor: isSubmitting ? colors.border.medium : colors.accent.primary,
                                    color: colors.bg.primary,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending...
                  </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </div>


                    <div className="space-y-8">

                        <div
                            className="rounded-2xl p-8 transition-colors duration-500"
                            style={{
                                backgroundColor: colors.bg.secondary,
                                borderWidth: '1px',
                                borderColor: colors.border.light
                            }}
                        >
                            <h2
                                className="text-3xl font-bold mb-6 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                Get in Touch
                            </h2>
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-colors duration-500"
                                        style={{
                                            backgroundColor: colors.bg.tertiary,
                                            borderWidth: '1px',
                                            borderColor: colors.border.light
                                        }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-500"
                                                style={{ backgroundColor: colors.accent.primary }}
                                            >
                                                <div style={{ color: colors.bg.primary }}>{method.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div
                                                    className="text-sm mb-1 transition-colors duration-500"
                                                    style={{ color: colors.text.tertiary }}
                                                >
                                                    {method.label}
                                                </div>
                                                {method.link ? (
                                                    <a
                                                        href={method.link}
                                                        target={method.label === 'Portfolio' ? '_blank' : undefined}
                                                        rel={method.label === 'Portfolio' ? 'noopener noreferrer' : undefined}
                                                        className="font-semibold break-all hover:opacity-80 transition-opacity duration-300"
                                                        style={{ color: colors.text.primary }}
                                                    >
                                                        {method.value}
                                                    </a>
                                                ) : (
                                                    <div
                                                        className="font-semibold"
                                                        style={{ color: colors.text.primary }}
                                                    >
                                                        {method.value}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div
                            className="rounded-2xl p-8 transition-colors duration-500"
                            style={{
                                backgroundColor: colors.bg.secondary,
                                borderWidth: '1px',
                                borderColor: colors.border.light
                            }}
                        >
                            <h3
                                className="text-2xl font-bold mb-4 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                Availability
                            </h3>
                            <div
                                className="space-y-4 transition-colors duration-500"
                                style={{ color: colors.text.secondary }}
                            >
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke={colors.accent.primary}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold" style={{ color: colors.text.primary }}>Currently Available</div>
                                        <div className="text-sm">Open to freelance and full-time opportunities</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke={colors.accent.primary}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold" style={{ color: colors.text.primary }}>Response Time</div>
                                        <div className="text-sm">Usually within 24 hours</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke={colors.accent.primary}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold" style={{ color: colors.text.primary }}>Time Zone</div>
                                        <div className="text-sm">Mountain Time (MT) - Calgary, AB</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="rounded-2xl p-8 transition-colors duration-500"
                            style={{
                                backgroundColor: colors.bg.secondary,
                                borderWidth: '1px',
                                borderColor: colors.border.light
                            }}
                        >
                            <h3
                                className="text-2xl font-bold mb-4 transition-colors duration-500"
                                style={{ color: colors.accent.primary }}
                            >
                                What to Expect
                            </h3>
                            <ul
                                className="space-y-3 transition-colors duration-500"
                                style={{ color: colors.text.secondary }}
                            >
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0" style={{ color: colors.accent.primary }}>→</span>
                                    <span>Quick initial response to understand your needs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0" style={{ color: colors.accent.primary }}>→</span>
                                    <span>Honest assessment of project fit and timeline</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0" style={{ color: colors.accent.primary }}>→</span>
                                    <span>Clear communication throughout the process</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0" style={{ color: colors.accent.primary }}>→</span>
                                    <span>Quality work that meets your goals</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;