import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">05.</span> Education
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Education Column */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                                <FaGraduationCap className="text-primary" /> Academic History
                            </h3>

                            <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
                                <div className="relative">
                                    <div className="absolute -left-[39px] top-0 bg-dark p-2 rounded-full border border-primary text-primary">
                                        <FaGraduationCap size={16} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Master of Science in Data Science</h4>
                                    <p className="text-primary text-sm mb-2">St. Joseph’s College, Tiruchirappalli</p>
                                    <p className="text-gray-400 text-sm mb-1">July 2022 - Apr 2024</p>
                                    <p className="text-gray-300 font-mono">CGPA: 7.70</p>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-[39px] top-0 bg-dark p-2 rounded-full border border-white/20 text-gray-400">
                                        <FaGraduationCap size={16} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Bachelor of Computer Application</h4>
                                    <p className="text-primary text-sm mb-2">Loyola college Chennai</p>
                                    <p className="text-gray-400 text-sm mb-1">July 2019 - Apr 2022</p>
                                    <p className="text-gray-300 font-mono">CGPA: 7.75</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Column */}
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                                <FaAward className="text-secondary" /> Certifications & Awards
                            </h3>

                            <div className="grid gap-4">
                                {[
                                    "PYTHON - Master Programming And Development, Udemy",
                                    "MySQL Essential Training, LinkedIn learning",
                                    "Digital 101 Journey, Provided By NASSCOM",
                                    "Google Data Analytics, Provided By DEED",
                                    "Data Analytics and Visualization Job Simulation, Forage Accenture",
                                    "YRCS club vice president at Loyola College, Chennai",
                                    "Student Secretary of Data Science Dept, St. Joseph’s College"
                                ].map((cert, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="p-4 bg-dark border border-white/5 rounded-lg flex items-center gap-3 hover:border-secondary/30 transition-colors"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        <span className="text-gray-300 text-sm">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
