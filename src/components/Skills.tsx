import { motion } from 'framer-motion';
import {
    FaPython, FaDatabase, FaChartBar, FaCode, FaNodeJs, FaGitAlt, FaGithub, FaBrain,
} from 'react-icons/fa';
import {
    SiScikitlearn, SiNumpy, SiPandas, SiMysql, SiMongodb, SiNestjs,
    SiPlotly, SiStreamlit, SiJupyter, SiPostman, SiJavascript,
} from 'react-icons/si';

const categories = [
    {
        title: 'Programming',
        accent: '#0284c7',
        skills: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
        ],
    },
    {
        title: 'Backend Development',
        accent: '#6d28d9',
        skills: [
            { name: 'Nest.js', icon: <SiNestjs /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'REST APIs', icon: <FaCode /> },
            { name: 'Microservices', icon: <FaCode /> },
        ],
    },
    {
        title: 'Machine Learning',
        accent: '#059669',
        skills: [
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'NLP', icon: <FaBrain /> },
            { name: 'Feature Eng.', icon: <FaChartBar /> },
        ],
    },
    {
        title: 'Data Visualization',
        accent: '#db2777',
        skills: [
            { name: 'Power BI', icon: <FaChartBar /> },
            { name: 'Plotly', icon: <SiPlotly /> },
            { name: 'Matplotlib', icon: <FaChartBar /> },
            { name: 'Seaborn', icon: <FaChartBar /> },
            { name: 'Streamlit', icon: <SiStreamlit /> },
        ],
    },
    {
        title: 'Databases',
        accent: '#d97706',
        skills: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    {
        title: 'Tools',
        accent: '#64748b',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Jupyter', icon: <SiJupyter /> },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My toolkit</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Skills & Expertise
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="bg-white dark:bg-dark-lighter border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <div
                                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: cat.accent }}
                                    />
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
                                </div>

                                {/* Skills chips */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 + idx * 0.04 }}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default"
                                            style={{
                                                backgroundColor: `${cat.accent}12`,
                                                borderColor: `${cat.accent}30`,
                                                color: cat.accent,
                                            }}
                                        >
                                            <span className="text-base leading-none">{skill.icon}</span>
                                            {skill.name}
                                        </motion.span>
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
