import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

/* ─── data ─────────────────────────────────────────────── */
const experience = [
    {
        role: 'Junior Software Developer',
        company: 'Skillmine Technology',
        period: 'Jul 2025 – Present',
        type: 'Full-time · On-site · Sivakasi',
        points: [
            'Developed and enhanced backend features, improving API performance by ~25% and reducing runtime errors by ~20%.',
            'Implemented business logic and optimized SQL queries, reducing database response time by ~30%.',
            'Supported debugging, testing, and deployment activities in the SDLC process.',
        ],
    },
    {
        role: 'Software Developer Trainee',
        company: 'Skillmine Technology',
        period: 'Jan 2025 – Jul 2025',
        type: 'Trainee · Sivakasi',
        points: [
            'Completed intensive training in software development practices, database management, and application architecture.',
            'Assisted in real-time project development and learned industry-level coding standards.',
            'Gained hands-on experience in Agile methodology and version control systems.',
        ],
    },
    {
        role: 'Machine Learning Intern',
        company: 'Cool Dreamers',
        period: 'Aug 2024 – Jan 2025',
        type: 'Internship · Remote',
        points: [
            'Built and evaluated ML models on real-world datasets (10K+ records), improving accuracy by ~15%.',
            'Performed data preprocessing, feature engineering, and model evaluation.',
        ],
    },
    {
        role: 'Project Intern',
        company: 'Thedush Robotics',
        period: 'Jan 2024 – Mar 2024',
        type: 'Internship · Coimbatore',
        points: [
            'Worked extensively with Robot Operating System (ROS).',
            'Integrated sensor data for real-time robotic applications.',
        ],
    },
];

const projects = [
    { name: 'Questlight – AI Hiring Platform', stack: 'Nest.js · Python · NLP · MongoDB · REST APIs' },
    { name: 'Face Auth – Attendance System', stack: 'Python · Face Recognition · React · Expo' },
    { name: 'RP LIDAR Human Detection', stack: 'ROS2 · Machine Learning · Random Forest · SVM' },
    { name: 'Customer Churn Prediction', stack: 'XGBoost · Python · Pandas · EDA · Scikit-learn' },
];

const skills = [
    { cat: 'Programming', items: 'Python · SQL · JavaScript' },
    { cat: 'Backend', items: 'Nest.js · Node.js · REST APIs · Microservices' },
    { cat: 'Machine Learning', items: 'Scikit-learn · Pandas · NumPy · NLP · XGBoost' },
    { cat: 'Data Visualization', items: 'Power BI · Plotly · Matplotlib · Seaborn · Streamlit' },
    { cat: 'Databases', items: 'MySQL · MongoDB' },
    { cat: 'Tools', items: 'Git · GitHub · Postman · Jupyter Notebook' },
];

const certifications = [
    'MySQL Essential Training — LinkedIn Learning',
    'Digital 101 Journey — NASSCOM',
    'Google Data Analytics Certification — DEED',
    'Data Analytics & Visualization Job Simulation — Forage (Accenture)',
];

/* ─── small sub-components ─────────────────────────────── */
const SectionHead = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{title}</h3>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
    </div>
);

/* ─── main component ────────────────────────────────────── */
const Resume = () => {
    return (
        <section id="resume" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">One-stop overview</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My Resume
                    </h2>
                    <a
                        href="/resume.pdf"
                        download="Nishin_Jerry_Resume.pdf"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <FaDownload size={14} />
                        Download PDF
                    </a>
                </motion.div>

                {/* Resume card */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="bg-white dark:bg-dark-lighter border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl overflow-hidden"
                >
                    {/* ── Header strip ── */}
                    <div className="relative bg-gradient-to-br from-primary via-primary to-secondary px-8 py-10 overflow-hidden">
                        {/* decorative circles */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
                        <div className="absolute top-4 right-20 w-24 h-24 rounded-full bg-white/5" />

                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                            <div>
                                <p className="text-white/70 font-mono text-sm mb-1 tracking-widest uppercase">Resume</p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Nishin Jerry X I</h3>
                                <p className="text-white/85 text-lg font-light">Software Developer · ML Engineer</p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-white/80">
                                <a href="mailto:nishinjerry@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <FaEnvelope size={12} /> nishinjerry@gmail.com
                                </a>
                                <a href="tel:+919360161745" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <FaPhone size={12} /> +91 9360161745
                                </a>
                                <span className="flex items-center gap-2">
                                    <FaMapMarkerAlt size={12} /> Nagercoil, Tamil Nadu
                                </span>
                                <div className="flex items-center gap-3 pt-1">
                                    <a href="https://github.com/nishinjerry" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                                        <FaGithub size={13} /> GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/nishin-jerry/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                                        <FaLinkedin size={13} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 grid md:grid-cols-3 gap-10">
                        {/* ── Left column (2/3) ── */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Summary */}
                            <div>
                                <SectionHead title="Summary" />
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    Software Developer with 1+ year of experience in backend development and AI-driven applications.
                                    Strong expertise in Python, SQL, and Machine Learning, with hands-on experience building scalable
                                    microservices and REST APIs. Delivered ML solutions with up to 87% accuracy and improved backend
                                    performance by up to 30%.
                                </p>
                            </div>

                            {/* Experience */}
                            <div>
                                <SectionHead title="Experience" />
                                <div className="space-y-6">
                                    {experience.map((exp, i) => (
                                        <div key={i} className="relative pl-4 border-l-2 border-gray-100 dark:border-gray-800 hover:border-primary transition-colors duration-300">
                                            <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                                                <div>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white">{exp.role}</span>
                                                    <span className="text-primary text-sm font-medium"> · {exp.company}</span>
                                                </div>
                                                <span className="text-xs font-mono text-gray-500 dark:text-gray-500 flex-shrink-0">{exp.period}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">{exp.type}</p>
                                            <ul className="space-y-1">
                                                {exp.points.map((pt, j) => (
                                                    <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                                                        <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                                        {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Projects */}
                            <div>
                                <SectionHead title="Capstone Projects" />
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {projects.map((p, i) => (
                                        <div key={i} className="p-3 bg-gray-50 dark:bg-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/40 transition-colors group">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{p.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 font-mono leading-relaxed">{p.stack}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Right column (1/3) ── */}
                        <div className="space-y-8">
                            {/* Education */}
                            <div>
                                <SectionHead title="Education" />
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">M.Sc. Data Science</p>
                                        <p className="text-xs text-primary mt-0.5">St. Joseph's College, Trichy</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">Jul 2022 – Apr 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">B.C.A. Computer Application</p>
                                        <p className="text-xs text-primary mt-0.5">Loyola College, Chennai</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">Jul 2019 – Apr 2022</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <SectionHead title="Skills" />
                                <div className="space-y-3">
                                    {skills.map((s, i) => (
                                        <div key={i}>
                                            <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">{s.cat}</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.items}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div>
                                <SectionHead title="Certifications" />
                                <ul className="space-y-2">
                                    {certifications.map((c, i) => (
                                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                                            <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Leadership */}
                            <div>
                                <SectionHead title="Leadership" />
                                <ul className="space-y-2">
                                    {[
                                        'Vice President, YRCS Club — Loyola College',
                                        'Student Secretary, Dept. of Data Science — St. Joseph\'s College',
                                    ].map((item, i) => (
                                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                                            <span className="text-secondary mt-0.5 flex-shrink-0">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Languages */}
                            <div>
                                <SectionHead title="Languages" />
                                <div className="flex gap-2 flex-wrap">
                                    {['English', 'Tamil'].map((lang) => (
                                        <span key={lang} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{lang}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer strip */}
                    <div className="border-t border-gray-100 dark:border-gray-800 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50 dark:bg-dark">
                        <p className="text-xs text-gray-500 dark:text-gray-500">Last updated May 2025</p>
                        <a
                            href="/resume.pdf"
                            download="Nishin_Jerry_Resume.pdf"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                        >
                            <FaDownload size={11} />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                {/* View full screen link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-6"
                >
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary dark:text-gray-500 dark:hover:text-primary transition-colors"
                    >
                        <FaExternalLinkAlt size={12} />
                        Open PDF in new tab
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
