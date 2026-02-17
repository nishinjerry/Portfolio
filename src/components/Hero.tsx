import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary font-mono text-lg mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Nishin Jerry Xi
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
                        Aspiring <span className="text-primary font-semibold">Data Scientist</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
                        Crafting intelligent solutions with Python, Machine Learning, and Data Analysis.
                        Passionate about turning data into actionable insights.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary/10 border border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-all duration-300 font-medium"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
