import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Skillmine Technology",
            location: "Sivakasi",
            role: "Junior Software Developer",
            period: "Jul 2024 - Present",
            description: [
                "Currently working as a full-time Junior Software Developer.",
                "Contributing to the development and maintenance of software applications.",
                "Collaborating with the team to deliver high-quality code and solutions."
            ]
        },
        {
            company: "Thedush Robotics Private Limited",
            location: "Coimbatore",
            role: "Data Science Intern",
            period: "Jan 2024 - Mar 2024",
            description: [
                "Training mainly focused on how data science skills apply in the robotics field.",
                "Studied the fundamentals of ROS2 and sensor technology.",
                "Explored different sensors for robotic applications."
            ]
        },
        {
            company: "Airobosoft Products and Services LLP",
            location: "Bangalore",
            role: "Data Science Intern",
            period: "May 2023 - Jun 2023",
            description: [
                "Internship mainly focused on Machine Learning and Artificial Intelligence.",
                "Completed various ML projects involving data analysis and data visualization.",
                "Acquired practical experience in applying ML techniques to real-world challenges."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">03.</span> Experience
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Timeline Line */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="hidden md:block w-5/12"></div>

                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-0 z-10"></div>

                                    <div className="md:w-5/12 bg-dark p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3 font-mono">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-gray-400 mb-4">{exp.company} <span className="text-sm opacity-60">• {exp.location}</span></h4>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                                    <span className="text-primary mt-1">▹</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
