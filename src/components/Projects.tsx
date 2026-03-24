import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "RP LIDAR Human Detection",
            description: "Created a real-time human leg detection system to improve warehouse safety and productivity. Attained 86% accuracy in real-time detection using Machine Learning and ROS2.",
            tags: ["ROS2", "Machine Learning", "SVM", "Random Forest", "Python"],
            image: "https://placehold.co/600x400/0a0a0a/06b6d4?text=RP+LIDAR+Project" // Placeholder, would ideally use a real image if provided
        },
        {
            title: "Customer Churn Prediction",
            description: "Led a customer churn prediction project in the banking sector to identify at-risk customers. Achieved 87% accuracy with Extreme Gradient Boosting algorithm.",
            tags: ["XGBoost", "Data Analysis", "EDA", "Python", "Pandas"],
            image: "https://placehold.co/600x400/0a0a0a/8b5cf6?text=Churn+Prediction"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                        Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative bg-white dark:bg-dark-lighter rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                {/* Image Overlay */}
                                <div className="h-48 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {/* Fake Links for demo since none provided in resume */}
                                        <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary transition-colors" aria-label="GitHub Repository"><FaGithub size={20} /></a>
                                        <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary transition-colors" aria-label="Live Demo"><FaExternalLinkAlt size={20} /></a>
                                    </div>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
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
