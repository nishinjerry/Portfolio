import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-6">
                            <p>
                                I am an aspiring <strong className="text-gray-900 dark:text-white">Data Scientist</strong> with strong skills in data analysis, machine learning, and statistical modeling.
                                Proficient in <span className="text-primary">Python, R, SQL</span>, and data visualization tools.
                            </p>
                            <p>
                                My journey began with a curiosity for how data can drive decisions. I'm eager to develop my abilities and
                                contribute to organizational success through real-world projects. I am committed to continuous learning
                                and maintaining a growth mindset in the ever-evolving field of AI.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">Professional Focus</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700 dark:text-gray-300">Developing scalable Machine Learning models and Data Science solutions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700 dark:text-gray-300">Extracting meaningful patterns from complex datasets to drive decisions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-700 dark:text-gray-300">Building intelligent systems with Python, ROS2, and modern web frameworks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
