import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa';

const degrees = [
    {
        degree: 'Master of Science in Data Science',
        institution: "St. Joseph's College, Tiruchirapalli",
        university: 'Bharathidasan University',
        period: 'July 2022 – April 2024',
        active: true,
    },
    {
        degree: 'Bachelor of Computer Application',
        institution: 'Loyola College, Chennai',
        university: 'University of Madras',
        period: 'July 2019 – April 2022',
        active: false,
    },
];

const certifications = [
    { title: 'MySQL Essential Training', issuer: 'LinkedIn Learning' },
    { title: 'Digital 101 Journey', issuer: 'NASSCOM' },
    { title: 'Google Data Analytics Certification', issuer: 'DEED' },
    { title: 'Data Analytics & Visualization Job Simulation', issuer: 'Forage (Accenture)' },
];

const leadership = [
    { title: 'Vice President, YRCS Club', org: 'Loyola College, Chennai' },
    { title: 'Student Secretary, Dept. of Data Science', org: "St. Joseph's College, Trichy" },
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Background</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Education & Achievements
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Left — Degrees */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                <FaGraduationCap className="text-primary" />
                                Academic History
                            </h3>

                            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-8">
                                {degrees.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="relative"
                                    >
                                        <div
                                            className={`absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-dark-lighter ${edu.active ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`}
                                        />
                                        <div className="bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm">
                                            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                                            <p className="text-primary text-sm font-medium">{edu.institution}</p>
                                            <p className="text-gray-500 dark:text-gray-500 text-xs mb-2">{edu.university}</p>
                                            <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono rounded-full">
                                                {edu.period}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Languages */}
                            <div className="mt-8 bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Languages</h4>
                                <div className="flex gap-2">
                                    {['English', 'Tamil'].map((lang) => (
                                        <span key={lang} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — Certs & Leadership */}
                        <div className="space-y-8">
                            {/* Certifications */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                    <FaAward className="text-secondary" />
                                    Certifications
                                </h3>
                                <div className="space-y-3">
                                    {certifications.map((cert, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-start gap-3 p-4 bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <FaAward className="text-secondary text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{cert.title}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{cert.issuer}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Leadership */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                                    <FaTrophy className="text-accent" />
                                    Leadership
                                </h3>
                                <div className="space-y-3">
                                    {leadership.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-3 p-4 bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <FaTrophy className="text-accent text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{item.org}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
