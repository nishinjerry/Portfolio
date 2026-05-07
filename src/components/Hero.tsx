import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-mono mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Available for opportunities
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <p className="text-secondary font-mono text-base mb-3 tracking-widest uppercase">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight leading-tight">
                        Nishin Jerry X I
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                        <span className="text-primary font-semibold">Software Developer</span>
                        <span className="mx-3 text-gray-400">·</span>
                        <span className="text-secondary font-semibold">ML Engineer</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
                        1+ year building scalable backend systems and AI-driven applications.
                        Strong in <span className="text-primary font-medium">Python, SQL</span> &amp; <span className="text-secondary font-medium">Machine Learning</span> — delivering up to 87% model accuracy and 30% faster APIs.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 font-semibold hover:-translate-y-0.5"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center gap-5"
                    >
                        {[
                            { href: 'https://github.com/nishinjerry', icon: <FaGithub size={20} />, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/nishin-jerry/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
                            { href: 'mailto:nishinjerry@gmail.com', icon: <FaEnvelope size={20} />, label: 'Email' },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-5 h-9 border-2 border-current rounded-full flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
