import { motion } from 'framer-motion';

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="border-b-4 border-primary pb-2">{title}</span>
                </h2>
                {children}
            </motion.div>
        </div>
    </section>
);

export const About = () => (
    <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg text-center">
            <p>
                I am an aspiring Data Scientist with strong skills in data analysis, machine learning, and statistical modeling.
                Proficient in Python, R, SQL, and data visualization tools. Eager to develop my abilities and contribute to
                organizational success through real-world projects. Committed to continuous learning and professional growth.
            </p>
        </div>
    </Section>
);

export const Skills = () => (
    <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder for Skill Cards */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-primary mb-4">Programming</h3>
                <ul className="space-y-2 text-gray-400">
                    <li>Python</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    </Section>
);

export const Experience = () => (
    <Section id="experience" title="Experience">
        <div className="space-y-8">
            {/* Placeholder for Timeline */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                <p className="text-primary mb-2">Thedush Robotics Private Limited</p>
                <p className="text-sm text-gray-400 mb-4">Jan 2024 - Mar 2024</p>
                <p className="text-gray-300">Training mainly focus on how data science skills apply in the robotics field. Study the fundamentals of ROS2 and sensor technology.</p>
            </div>
        </div>
    </Section>
);

export const Projects = () => (
    <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for Project Cards */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">RP LIDAR Human Detection</h3>
                <p className="text-gray-400 mb-4">Real-time human leg detection system for warehouse safety.</p>
            </div>
        </div>
    </Section>
);

export const Education = () => (
    <Section id="education" title="Education">
        <div className="space-y-8">
            {/* Placeholder for Education Cards */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-white">Master of Science in Data Science</h3>
                    <p className="text-primary">St. Joseph’s College, Tiruchirappalli</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-400">2022 - 2024</p>
                    <p className="text-gray-400">CGPA: 7.70</p>
                </div>
            </div>
        </div>
    </Section>
);

export const Contact = () => (
    <Section id="contact" title="Get In Touch">
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:nishinjerry@gmail.com" className="bg-primary text-dark font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
                Say Hello
            </a>
        </div>
    </Section>
);

export const Footer = () => (
    <footer className="bg-dark-lighter py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nishin Jerry X I. All rights reserved.</p>
    </footer>
);
