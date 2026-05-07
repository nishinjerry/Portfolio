import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'ML Accuracy', value: '87%' },
    { label: 'API Performance', value: '+30%' },
    { label: 'Projects Delivered', value: '4+' },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Get to know me</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            About Me
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left — bio */}
                        <div className="space-y-6">
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                I'm a <strong className="text-gray-900 dark:text-white">Software Developer</strong> with 1+ year of hands-on experience in backend development and AI-driven applications. Currently working at{' '}
                                <span className="text-primary font-medium">Skillmine Technology</span> as a Junior Software Developer, building and enhancing enterprise-grade backend systems.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                My background spans <span className="text-secondary font-medium">Python, SQL, and Machine Learning</span> — from building REST APIs and microservices to training models that achieve up to 87% accuracy on real-world datasets.
                                I hold an M.Sc. in Data Science and love solving problems at the intersection of software engineering and intelligence.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                Beyond code, I was <strong className="text-gray-900 dark:text-white">Vice President of the YRCS Club</strong> and <strong className="text-gray-900 dark:text-white">Student Secretary</strong> of the Data Science department — I care about community and leadership as much as I do about clean code.
                            </p>

                            {/* Quick facts */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {[
                                    { icon: <FaMapMarkerAlt />, text: 'Nagercoil, Tamil Nadu' },
                                    { icon: <FaBriefcase />, text: 'Junior Software Developer' },
                                    { icon: <FaGraduationCap />, text: 'M.Sc. Data Science' },
                                    { icon: <FaCode />, text: 'Python · SQL · Nest.js' },
                                ].map((fact, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-primary">{fact.icon}</span>
                                        {fact.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right — stats + focus */}
                        <div className="space-y-6">
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white dark:bg-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm"
                                    >
                                        <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Focus areas */}
                            <div className="bg-white dark:bg-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">What I Focus On</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Building scalable REST APIs and Microservices with Nest.js & Python',
                                        'Optimizing SQL queries and improving database performance',
                                        'Developing ML models for real-world business problems',
                                        'End-to-end debugging, testing, and deployment in Agile teams',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                            <span className="text-primary mt-1 flex-shrink-0">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
