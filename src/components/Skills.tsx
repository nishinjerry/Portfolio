import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar, FaRobot, FaWindows, FaCode, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiRos, SiMysql, SiNestjs } from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            icon: <FaCode className="text-3xl text-primary" />,
            skills: [
                { name: "Python", icon: <FaPython />, level: 90 },
                { name: "React", icon: <FaReact />, level: 85 },
                { name: "Node.js", icon: <FaNodeJs />, level: 80 },
                { name: "NestJS", icon: <SiNestjs />, level: 75 },
                { name: "SQL", icon: <SiMysql />, level: 85 },
            ],
            color: "bg-blue-500"
        },
        {
            title: "Machine Learning",
            icon: <FaRobot className="text-3xl text-primary" />,
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow />, level: 75 },
                { name: "Scikit-learn", icon: <SiScikitlearn />, level: 85 },
                { name: "NumPy", icon: <SiNumpy />, level: 90 },
                { name: "Pandas", icon: <SiPandas />, level: 90 },
                { name: "OpenCV", icon: <SiOpencv />, level: 70 },
            ],
            color: "bg-purple-500"
        },
        {
            title: "Data Visualization",
            icon: <FaChartBar className="text-3xl text-primary" />,
            skills: [
                { name: "Power BI", icon: <FaChartBar />, level: 80 },
                { name: "Matplotlib", icon: <FaChartBar />, level: 85 },
            ],
            color: "bg-emerald-500"
        },
        {
            title: "Tools & Others",
            icon: <FaWindows className="text-3xl text-primary" />,
            skills: [
                { name: "ROS2 (rclpy)", icon: <SiRos />, level: 65 },
                { name: "MS Office", icon: <FaWindows />, level: 95 },
                { name: "Database Mgmt", icon: <FaDatabase />, level: 80 },
            ],
            color: "bg-pink-500"
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                        Skills & Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col items-center mb-8">
                                    <div className="p-4 bg-primary/10 rounded-2xl mb-4 text-primary">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                                                    <span className="text-lg text-gray-700 dark:text-gray-300">{skill.icon}</span>
                                                    <span className="text-sm font-medium">{skill.name}</span>
                                                </div>
                                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                    className={`h-full ${category.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
