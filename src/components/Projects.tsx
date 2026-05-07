import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Questlight',
        subtitle: 'AI Hiring Automation Platform',
        description:
            'Enterprise-grade AI platform for automated hiring workflows. Resolved critical backend bugs across Nest.js and Python microservices, enhanced NLP pipelines for resume parsing and AI question generation, improving data extraction accuracy and reducing processing latency.',
        tags: ['Nest.js', 'Node.js', 'Python', 'NLP', 'REST APIs', 'MongoDB', 'Microservices'],
        accent: '#0284c7',
        category: 'Backend · AI/NLP',
    },
    {
        title: 'Face Auth',
        subtitle: 'Facial Recognition Attendance System',
        description:
            'Real-time facial recognition attendance system integrated with HR platforms for automated tracking. Built cross-platform support — React web app and Expo mobile app — with a Python backend handling recognition logic via REST APIs.',
        tags: ['Python', 'Face Recognition', 'React', 'Expo', 'Backend APIs'],
        accent: '#6d28d9',
        category: 'Full-stack · AI/CV',
    },
    {
        title: 'RP LIDAR Human Detection',
        subtitle: 'Real-Time Leg Detection for Mobile Robots',
        description:
            'Designed a real-time human lower limb detection system to improve warehouse safety and productivity. Achieved 86% accuracy using Machine Learning algorithms processing live sensor data from RP LIDAR via ROS2.',
        tags: ['ROS2', 'Python', 'Random Forest', 'SVM', 'Sensor Data', 'Machine Learning'],
        accent: '#059669',
        category: 'Robotics · ML',
    },
    {
        title: 'Customer Churn Prediction',
        subtitle: 'Banking Sector Analytics',
        description:
            'Led a churn prediction project identifying high-risk banking customers. Achieved 87% accuracy with XGBoost, benchmarked against SVM, Random Forest, Decision Tree, and Logistic Regression with thorough EDA and feature engineering on 10K+ record datasets.',
        tags: ['XGBoost', 'Python', 'Pandas', 'Scikit-learn', 'EDA', 'Data Analysis'],
        accent: '#db2777',
        category: 'Data Science · ML',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I've built</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Capstone Projects
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white dark:bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Accent bar */}
                                <div
                                    className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
                                    style={{ backgroundColor: project.accent }}
                                />

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Category badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className="text-xs font-mono px-2.5 py-1 rounded-full"
                                            style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
                                        >
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href="#"
                                                aria-label="GitHub Repository"
                                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
                                            >
                                                <FaGithub size={14} />
                                            </a>
                                            <a
                                                href="#"
                                                aria-label="View Project"
                                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors"
                                            >
                                                <FaExternalLinkAlt size={12} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-medium mb-3" style={{ color: project.accent }}>
                                        {project.subtitle}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
