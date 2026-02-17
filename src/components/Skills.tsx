import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar, FaRobot, FaWindows, FaCode } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiRos, SiMysql } from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            icon: <FaCode className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
            skills: [
                { name: "Python", icon: <FaPython />, level: 90 },
                { name: "SQL", icon: <SiMysql />, level: 85 },
            ],
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "Machine Learning",
            icon: <FaRobot className="text-4xl text-violet-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />,
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow />, level: 75 },
                { name: "Scikit-learn", icon: <SiScikitlearn />, level: 85 },
                { name: "NumPy", icon: <SiNumpy />, level: 90 },
                { name: "Pandas", icon: <SiPandas />, level: 90 },
                { name: "OpenCV", icon: <SiOpencv />, level: 70 },
            ],
            color: "from-violet-500 to-purple-600"
        },
        {
            title: "Data Visualization",
            icon: <FaChartBar className="text-4xl text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />,
            skills: [
                { name: "Power BI", icon: <FaChartBar />, level: 80 },
                { name: "Matplotlib", icon: <FaChartBar />, level: 85 },
            ],
            color: "from-emerald-500 to-green-600"
        },
        {
            title: "Tools & Others",
            icon: <FaWindows className="text-4xl text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />,
            skills: [
                { name: "ROS2 (rclpy)", icon: <SiRos />, level: 65 },
                { name: "MS Office", icon: <FaWindows />, level: 95 },
                { name: "Database Mgmt", icon: <FaDatabase />, level: 80 },
            ],
            color: "from-pink-500 to-rose-600"
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/30 rounded-full animate-spin-slow dashed-border"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 border border-violet-500/30 rounded-full animate-reverse-spin dashed-border"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-20 text-center font-mono tracking-tighter">
                        <span className="inline-block border-b-4 border-cyan-500 pb-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">02.</span>
                            <span className="text-white ml-4">Tech/Stack</span>
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, rotateX: -90 }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 20,
                                    delay: index * 0.1
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    zIndex: 10,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Holographic Card Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`} />

                                <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 overflow-hidden transform-style-3d">
                                    {/* Tech Circuit Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:10px_10px]"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center mb-6">
                                            <motion.div
                                                className="p-4 bg-white/5 rounded-2xl mb-4 ring-1 ring-white/10 group-hover:ring-white/30"
                                                animate={{
                                                    y: [0, -10, 0],
                                                    filter: ["drop-shadow(0 0 0px rgba(0,0,0,0))", "drop-shadow(0 0 15px rgba(255,255,255,0.2))", "drop-shadow(0 0 0px rgba(0,0,0,0))"]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: index * 1
                                                }}
                                            >
                                                {category.icon}
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {category.skills.map((skill, idx) => (
                                                <div key={idx} className="group/skill">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="flex items-center gap-2 text-gray-400 group-hover/skill:text-cyan-300 transition-colors">
                                                            <span className="text-lg">{skill.icon}</span>
                                                            <span className="font-mono text-sm font-medium tracking-wide">{skill.name}</span>
                                                        </div>
                                                        <span className="text-xs font-bold text-gray-600 group-hover/skill:text-white transition-colors">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden p-[1px] border border-white/5">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                                                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                                                        >
                                                            {/* Shimmer Effect */}
                                                            <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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

export default Skills;
