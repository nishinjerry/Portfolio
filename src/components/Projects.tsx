import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaUserCircle, FaRobot, FaChartBar } from 'react-icons/fa';

/* ── Visual banners ─────────────────────────────────────── */

const QuestlightVisual = () => (
    <svg viewBox="0 0 440 190" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="q-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0c4a6e" />
                <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
        </defs>
        <rect width="440" height="190" fill="url(#q-bg)" />
        {/* Soft glow */}
        <circle cx="220" cy="95" r="130" fill="#38bdf8" fillOpacity="0.07" />
        <circle cx="220" cy="95" r="80" fill="#38bdf8" fillOpacity="0.06" />

        {/* Pipeline: 3 stages */}
        {/* Node 1 - Doc */}
        <rect x="55" y="72" width="72" height="46" rx="10" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="91" y="91" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontFamily="monospace" fontWeight="bold">RESUME</text>
        <text x="91" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">PARSER</text>

        {/* Arrow */}
        <line x1="127" y1="95" x2="163" y2="95" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4,3" />
        <polygon points="163,91 171,95 163,99" fill="#38bdf8" fillOpacity="0.6" />

        {/* Node 2 - AI Brain (center, bigger) */}
        <rect x="174" y="60" width="92" height="70" rx="12" fill="#075985" stroke="#7dd3fc" strokeWidth="2" strokeOpacity="0.8" />
        <circle cx="220" cy="86" r="16" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Brain lines */}
        <path d="M212 82 Q216 78 220 82 Q224 78 228 82" fill="none" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M213 88 Q217 92 220 88 Q223 92 227 88" fill="none" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="220" y="118" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="monospace" fontWeight="bold">AI ENGINE</text>

        {/* Arrow */}
        <line x1="266" y1="95" x2="302" y2="95" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4,3" />
        <polygon points="302,91 310,95 302,99" fill="#38bdf8" fillOpacity="0.6" />

        {/* Node 3 - Match */}
        <rect x="313" y="72" width="72" height="46" rx="10" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="349" y="91" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontFamily="monospace" fontWeight="bold">QUESTION</text>
        <text x="349" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">GEN</text>

        {/* Bottom label */}
        <text x="220" y="170" textAnchor="middle" fill="#7dd3fc" fillOpacity="0.5" fontSize="10" fontFamily="monospace" letterSpacing="2">NLP  ·  MICROSERVICES  ·  REST APIs</text>
    </svg>
);

const FaceAuthVisual = () => (
    <svg viewBox="0 0 440 190" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="f-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2e1065" />
                <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
        </defs>
        <rect width="440" height="190" fill="url(#f-bg)" />
        <circle cx="220" cy="90" r="140" fill="#7c3aed" fillOpacity="0.08" />

        {/* Scan rings */}
        <circle cx="220" cy="85" r="70" fill="none" stroke="#a78bfa" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="220" cy="85" r="50" fill="none" stroke="#a78bfa" strokeOpacity="0.2" strokeWidth="1" />

        {/* Face outline */}
        <ellipse cx="220" cy="80" rx="38" ry="44" fill="#3b0764" fillOpacity="0.8" stroke="#c4b5fd" strokeWidth="1.5" strokeOpacity="0.7"/>

        {/* Eyes */}
        <ellipse cx="207" cy="70" rx="7" ry="6" fill="none" stroke="#ddd6fe" strokeWidth="1.5"/>
        <circle cx="207" cy="70" r="3" fill="#a78bfa"/>
        <ellipse cx="233" cy="70" rx="7" ry="6" fill="none" stroke="#ddd6fe" strokeWidth="1.5"/>
        <circle cx="233" cy="70" r="3" fill="#a78bfa"/>

        {/* Nose */}
        <path d="M218 78 L215 88 L225 88" fill="none" stroke="#c4b5fd" strokeWidth="1" strokeOpacity="0.6" strokeLinejoin="round"/>

        {/* Mouth */}
        <path d="M210 96 Q220 103 230 96" fill="none" stroke="#ddd6fe" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Corner scan brackets */}
        <path d="M145 28 L145 16 L157 16" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9"/>
        <path d="M295 28 L295 16 L283 16" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9"/>
        <path d="M145 147 L145 159 L157 159" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9"/>
        <path d="M295 147 L295 159 L283 159" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9"/>

        {/* Scan line */}
        <line x1="145" y1="90" x2="295" y2="90" stroke="#a78bfa" strokeOpacity="0.4" strokeWidth="1.5" />
        <rect x="145" y="88" width="150" height="4" fill="#7c3aed" fillOpacity="0.3" />

        {/* Landmark dots */}
        {[[196,62],[220,58],[244,62],[210,80],[220,80],[230,80],[220,92]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="2" fill="#e9d5ff" fillOpacity="0.7"/>
        ))}

        {/* Status badge */}
        <rect x="16" y="16" width="90" height="24" rx="12" fill="#4c1d95" fillOpacity="0.9"/>
        <circle cx="32" cy="28" r="5" fill="#34d399"/>
        <text x="44" y="32" fill="#e9d5ff" fontSize="9" fontFamily="monospace">VERIFIED</text>

        <text x="220" y="175" textAnchor="middle" fill="#c4b5fd" fillOpacity="0.45" fontSize="10" fontFamily="monospace" letterSpacing="2">PYTHON  ·  OPENCV  ·  REACT  ·  EXPO</text>
    </svg>
);

const LidarVisual = () => (
    <svg viewBox="0 0 440 190" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="l-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#022c22" />
                <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <radialGradient id="l-sweep" cx="50%" cy="53%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <rect width="440" height="190" fill="url(#l-bg)" />

        {/* Radar rings */}
        <circle cx="220" cy="100" r="110" fill="none" stroke="#34d399" strokeOpacity="0.12" strokeWidth="1"/>
        <circle cx="220" cy="100" r="80" fill="none" stroke="#34d399" strokeOpacity="0.16" strokeWidth="1"/>
        <circle cx="220" cy="100" r="50" fill="none" stroke="#34d399" strokeOpacity="0.22" strokeWidth="1"/>
        <circle cx="220" cy="100" r="22" fill="none" stroke="#34d399" strokeOpacity="0.35" strokeWidth="1.5"/>

        {/* Cross hairs */}
        <line x1="110" y1="100" x2="330" y2="100" stroke="#34d399" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="5,5"/>
        <line x1="220" y1="0" x2="220" y2="190" stroke="#34d399" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="5,5"/>

        {/* Sweep wedge */}
        <path d="M220 100 L220 -10 A115 115 0 0 1 310 45 Z" fill="url(#l-sweep)"/>
        {/* Sweep line */}
        <line x1="220" y1="100" x2="310" y2="45" stroke="#34d399" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>

        {/* Center */}
        <circle cx="220" cy="100" r="6" fill="#34d399"/>
        <circle cx="220" cy="100" r="3" fill="#ecfdf5"/>

        {/* Detection blips */}
        {[[155,42],[178,28],[205,22],[265,35],[290,60],[305,82]].map(([x,y],i)=>(
            <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#86efac" fillOpacity="0.9"/>
                <circle cx={x} cy={y} r="10" fill="none" stroke="#86efac" strokeOpacity="0.3" strokeWidth="1"/>
            </g>
        ))}

        {/* Accuracy badge */}
        <rect x="16" y="14" width="88" height="38" rx="8" fill="#064e3b" fillOpacity="0.95" stroke="#34d399" strokeWidth="1" strokeOpacity="0.4"/>
        <text x="60" y="29" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">ACCURACY</text>
        <text x="60" y="46" textAnchor="middle" fill="#34d399" fontSize="18" fontWeight="bold" fontFamily="monospace">86%</text>

        <text x="220" y="175" textAnchor="middle" fill="#6ee7b7" fillOpacity="0.45" fontSize="10" fontFamily="monospace" letterSpacing="2">ROS2  ·  ML  ·  SVM  ·  PYTHON</text>
    </svg>
);

const ChurnVisual = () => (
    <svg viewBox="0 0 440 190" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="c-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4c0519" />
                <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
            <linearGradient id="c-bar-default" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fda4af"/>
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="c-bar-best" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fce7f3"/>
                <stop offset="100%" stopColor="#fbcfe8"/>
            </linearGradient>
        </defs>
        <rect width="440" height="190" fill="url(#c-bg)" />
        <circle cx="380" cy="30" r="100" fill="#fb7185" fillOpacity="0.06"/>

        {/* Grid lines */}
        {[45, 75, 105, 135].map(y => (
            <line key={y} x1="60" y1={y} x2="390" y2={y} stroke="#fda4af" strokeOpacity="0.1" strokeWidth="1"/>
        ))}

        {/* Bars */}
        {[
            {x:100, h:72,  label:'LR',  pct:'79%'},
            {x:160, h:58,  label:'DT',  pct:'82%'},
            {x:220, h:65,  label:'RF',  pct:'81%'},
            {x:280, h:60,  label:'SVM', pct:'83%'},
            {x:345, h:102, label:'XGB', pct:'87%', best:true},
        ].map(({x, h, label, pct, best}) => (
            <g key={label}>
                <rect x={x-22} y={145-h} width="44" height={h} rx="6"
                    fill={best ? 'url(#c-bar-best)' : 'url(#c-bar-default)'}
                    fillOpacity={best ? 1 : 0.6}
                />
                {best && (
                    <>
                        <rect x={x-22} y={145-h} width="44" height="5" rx="3" fill="#f9a8d4"/>
                        <rect x={x-22} y={145-h-38} width="60" height="28" rx="6" fill="#881337" fillOpacity="0.95" stroke="#fda4af" strokeWidth="1" strokeOpacity="0.5" transform={`translate(-8,0)`}/>
                        <text x={x} y={145-h-24} textAnchor="middle" fill="#fda4af" fontSize="7.5" fontFamily="monospace">BEST MODEL</text>
                        <text x={x} y={145-h-12} textAnchor="middle" fill="#fce7f3" fontSize="14" fontWeight="bold" fontFamily="monospace">87%</text>
                    </>
                )}
                <text x={x} y="158" textAnchor="middle" fill="#fda4af" fillOpacity="0.8" fontSize="9" fontFamily="monospace">{label}</text>
                <text x={x} y={135-h} textAnchor="middle" fill="#fce7f3" fillOpacity={best?1:0.5} fontSize="8" fontFamily="monospace">{pct}</text>
            </g>
        ))}

        {/* Trend line */}
        <polyline points="100,108 160,122 220,115 280,120 345,78"
            fill="none" stroke="#fda4af" strokeWidth="1.5" strokeDasharray="5,3" strokeOpacity="0.4"/>

        <text x="220" y="175" textAnchor="middle" fill="#fda4af" fillOpacity="0.45" fontSize="10" fontFamily="monospace" letterSpacing="2">XGBOOST  ·  PANDAS  ·  SCIKIT-LEARN</text>
    </svg>
);

const visuals = [QuestlightVisual, FaceAuthVisual, LidarVisual, ChurnVisual];

const projects = [
    {
        title: 'Questlight',
        subtitle: 'AI Hiring Automation Platform',
        description: 'Enterprise-grade AI platform for automated hiring workflows. Enhanced NLP pipelines for resume parsing and AI question generation, improving data extraction accuracy and reducing latency across Nest.js and Python microservices.',
        tags: ['Nest.js', 'Python', 'NLP', 'MongoDB', 'Microservices'],
        accent: '#0284c7',
        category: 'Backend · AI/NLP',
        icon: <FaBrain />,
    },
    {
        title: 'Face Auth',
        subtitle: 'Facial Recognition Attendance System',
        description: 'Real-time facial recognition system integrated with HR platforms for automated attendance tracking. Built cross-platform — React web app + Expo mobile — with a Python backend and REST APIs.',
        tags: ['Python', 'Face Recognition', 'React', 'Expo'],
        accent: '#6d28d9',
        category: 'Full-stack · AI/CV',
        icon: <FaUserCircle />,
    },
    {
        title: 'RP LIDAR Human Detection',
        subtitle: 'Real-Time Leg Detection for Mobile Robots',
        description: 'Real-time human lower limb detection system for warehouse safety. Achieved 86% accuracy processing live RP LIDAR sensor data using ML algorithms via ROS2.',
        tags: ['ROS2', 'Python', 'Random Forest', 'SVM'],
        accent: '#059669',
        category: 'Robotics · ML',
        icon: <FaRobot />,
    },
    {
        title: 'Customer Churn Prediction',
        subtitle: 'Banking Sector Analytics',
        description: 'Churn prediction model identifying high-risk banking customers. Achieved 87% accuracy with XGBoost — benchmarked against SVM, Random Forest, Decision Tree, and Logistic Regression on 10K+ records.',
        tags: ['XGBoost', 'Python', 'Pandas', 'Scikit-learn'],
        accent: '#db2777',
        category: 'Data Science · ML',
        icon: <FaChartBar />,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-lighter relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I've built</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Capstone Projects
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        {projects.map((project, index) => {
                            const Visual = visuals[index];
                            return (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white dark:bg-dark rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                                >
                                    {/* Visual */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Visual />
                                        {/* Hover overlay with actions */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            style={{ background: `linear-gradient(135deg, ${project.accent}dd, ${project.accent}99)` }}>
                                            <a href="#" aria-label="GitHub"
                                                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 border border-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 hover:scale-110">
                                                <FaGithub size={17} />
                                            </a>
                                            <a href="#" aria-label="View Project"
                                                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 border border-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 hover:scale-110">
                                                <FaExternalLinkAlt size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full"
                                                style={{ background: `${project.accent}15`, color: project.accent }}>
                                                {project.category}
                                            </span>
                                            <span className="text-lg" style={{ color: project.accent }}>{project.icon}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-semibold mb-3" style={{ color: project.accent }}>
                                            {project.subtitle}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx}
                                                    className="text-xs px-3 py-1 rounded-full font-mono"
                                                    style={{ background: `${project.accent}12`, color: project.accent }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
