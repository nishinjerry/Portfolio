import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
    {
        company: 'Skillmine Technology',
        location: 'Sivakasi, Tamil Nadu',
        role: 'Junior Software Developer',
        type: 'Full-time · On-site',
        period: 'Jul 2025 – Present',
        color: 'bg-primary',
        highlights: [
            'Developed and enhanced backend features for enterprise applications, improving API performance by ~25% and reducing runtime errors by ~20%.',
            'Implemented backend business logic and optimized SQL queries, reducing database response time by ~30%.',
            'Supporting debugging, testing, and deployment activities throughout the SDLC process.',
        ],
    },
    {
        company: 'Skillmine Technology',
        location: 'Sivakasi, Tamil Nadu',
        role: 'Software Developer Trainee',
        type: 'Trainee',
        period: 'Jan 2025 – Jul 2025',
        color: 'bg-secondary',
        highlights: [
            'Completed intensive training in software development practices, database management, and application architecture.',
            'Assisted in real-time project development and learned industry-level coding standards.',
            'Gained hands-on experience in Agile methodology and version control systems.',
        ],
    },
    {
        company: 'Cool Dreamers',
        location: 'Remote',
        role: 'Machine Learning Intern',
        type: 'Internship',
        period: 'Aug 2024 – Jan 2025',
        color: 'bg-accent',
        highlights: [
            'Built and evaluated ML models on real-world datasets (10K+ records), improving model accuracy by ~15%.',
            'Performed data preprocessing, feature engineering, and model evaluation.',
            'Applied ML techniques to solve real-world business problems.',
        ],
    },
    {
        company: 'Thedush Robotics',
        location: 'Coimbatore, Tamil Nadu',
        role: 'Project Intern',
        type: 'Internship',
        period: 'Jan 2024 – Mar 2024',
        color: 'bg-pink-500',
        highlights: [
            'Worked extensively with Robot Operating System (ROS).',
            'Assisted in robotics-based data processing and automation tasks.',
            'Integrated sensor data for real-time robotic applications.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My journey</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Experience
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

                        <div className="space-y-10">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex gap-6 sm:pl-16"
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute left-2.5 top-5 w-5 h-5 rounded-full ${exp.color} border-4 border-white dark:border-dark z-10 hidden sm:block flex-shrink-0`} />

                                    <div className="flex-1 bg-white dark:bg-dark-lighter border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FaBriefcase className="text-primary text-sm" />
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                                </div>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                                <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">{exp.location} · {exp.type}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono rounded-full flex-shrink-0">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Bullets */}
                                        <ul className="space-y-2">
                                            {exp.highlights.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
