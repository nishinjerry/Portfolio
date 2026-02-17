import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-dark-lighter to-dark p-8 md:p-16 rounded-2xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                        I'm currently open to new opportunities in Data Science and Machine Learning.
                        Feel free to reach out if you have any questions or just want to connect!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <a href="mailto:nishinjerry@gmail.com" className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                                <FaEnvelope size={24} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">nishinjerry@gmail.com</span>
                        </a>

                        <a href="https://www.linkedin.com/in/nishin-jerry-659584234" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                                <FaLinkedin size={24} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn Profile</span>
                        </a>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                                <FaPhone size={24} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">9360161745</span>
                        </div>
                    </div>

                    <a
                        href="mailto:nishinjerry@gmail.com"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Say Hello
                    </a>

                    <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <FaMapMarkerAlt />
                        <span>Kanyakumari, Tamilnadu</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
