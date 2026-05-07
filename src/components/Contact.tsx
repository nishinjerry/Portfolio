import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const contactItems = [
    {
        label: 'Email',
        value: 'nishinjerry@gmail.com',
        href: 'mailto:nishinjerry@gmail.com',
        icon: <FaEnvelope size={20} />,
        color: '#0284c7',
    },
    {
        label: 'LinkedIn',
        value: 'nishin-jerry-659584234',
        href: 'https://www.linkedin.com/in/nishin-jerry/',
        icon: <FaLinkedin size={20} />,
        color: '#0a66c2',
    },
    {
        label: 'GitHub',
        value: 'github.com/nishinjerry',
        href: 'https://github.com/nishinjerry',
        icon: <FaGithub size={20} />,
        color: '#6d28d9',
    },
    {
        label: 'Phone',
        value: '+91 9360161745',
        href: 'tel:+919360161745',
        icon: <FaPhone size={20} />,
        color: '#059669',
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Say hello</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Let's Connect
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                            I'm open to new opportunities in Software Development and ML Engineering.
                            Whether it's a project, a role, or just a chat — my inbox is always open.
                        </p>
                    </div>

                    {/* Contact cards */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {contactItems.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center gap-4 p-5 bg-white dark:bg-dark-lighter border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{item.label}</p>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                        {item.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="mailto:nishinjerry@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <FaEnvelope />
                            Send Me a Message
                        </a>

                        <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
                            <FaMapMarkerAlt />
                            <span>Nagercoil, Tamil Nadu, India</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
