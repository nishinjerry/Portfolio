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
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">01.</span> About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg space-y-6">
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

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-gray-900 dark:bg-dark p-8 rounded-lg border border-white/10">
                                <code className="text-sm text-green-400 block mb-2"># current_status</code>
                                <div className="text-gray-400 font-mono text-sm">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">aspirations</span> = [<br />
                                    &nbsp;&nbsp;<span className="text-orange-300">'Data Scientist'</span>,<br />
                                    &nbsp;&nbsp;<span className="text-orange-300">'ML Engineer'</span>,<br />
                                    &nbsp;&nbsp;<span className="text-orange-300">'AI Researcher'</span><br />
                                    ];<br /><br />

                                    <span className="text-purple-400">while</span>(<span className="text-blue-400">alive</span>) &#123;<br />
                                    &nbsp;&nbsp;<span className="text-yellow-300">learn</span>();<br />
                                    &nbsp;&nbsp;<span className="text-yellow-300">build</span>();<br />
                                    &nbsp;&nbsp;<span className="text-yellow-300">innovate</span>();<br />
                                    &#125;
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
