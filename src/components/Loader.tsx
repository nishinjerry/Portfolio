import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPython, FaReact, FaDatabase, FaCode, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPandas, SiScikitlearn } from 'react-icons/si';

const pythonCode = [
    "import numpy as np",
    "import pandas as pd",
    "import tensorflow as tf",
    "from sklearn.neural_network import MLPClassifier",
    "data = load_dataset('portfolio_data.csv')",
    "preprocessing...",
    "model = Sequential([...])",
    "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')",
    "Training neural network...",
    "Epoch 1/50... loss: 0.412... acc: 0.85",
    "Epoch 2/50... loss: 0.201... acc: 0.92",
    "Optimizing hyperparameters...",
    "Deploying Web Interface...",
    "System Online"
];

const techIcons = [
    { Icon: FaPython, color: "text-yellow-400", delay: 0 },
    { Icon: SiTensorflow, color: "text-orange-500", delay: 0.2 },
    { Icon: FaReact, color: "text-cyan-400", delay: 0.4 },
    { Icon: FaDatabase, color: "text-green-400", delay: 0.6 },
    { Icon: SiPytorch, color: "text-red-500", delay: 0.8 },
    { Icon: FaCode, color: "text-blue-400", delay: 1.0 },
    { Icon: SiPandas, color: "text-purple-400", delay: 1.2 },
    { Icon: SiScikitlearn, color: "text-orange-300", delay: 1.4 },
];

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [currentLine, setCurrentLine] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // 4 seconds duration

        if (currentLine >= pythonCode.length) return;

        const currentString = pythonCode[currentLine];
        if (charIndex < currentString.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentString[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 10); // Fast typing
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLine((prev) => prev + 1);
                setCharIndex(0);
                setText((prev) => prev + '\n');
            }, 100); // Short pause between lines
            return () => clearTimeout(timeout);
        }

        return () => clearTimeout(timer);
    }, [currentLine, charIndex, onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-cyan-400 font-mono overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-16 relative z-10 px-4">

                {/* Central AI Core Visualization */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

                    {/* Rotating Rings */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className={`absolute inset-${i * 4} border-[1px] border-cyan-500/30 rounded-full border-dashed`}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                        />
                    ))}

                    {/* Core Brain/Chip */}
                    <motion.div
                        className="relative z-20 bg-gray-900 p-6 rounded-2xl border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                        animate={{
                            boxShadow: ["0 0 20px rgba(6,182,212,0.3)", "0 0 50px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.3)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FaBrain className="text-6xl text-cyan-400" />
                    </motion.div>

                    {/* Floating Tech Icons */}
                    {techIcons.map((tech, index) => {
                        const angle = (index / techIcons.length) * 360;
                        const radius = 140; // Distance from center

                        return (
                            <motion.div
                                key={index}
                                className={`absolute text-2xl ${tech.color} bg-gray-900/80 p-2 rounded-full border border-gray-700 backdrop-blur-sm`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: [0, Math.cos((angle * Math.PI) / 180) * radius],
                                    y: [0, Math.sin((angle * Math.PI) / 180) * radius],
                                }}
                                transition={{
                                    duration: 1,
                                    delay: tech.delay,
                                    type: "spring"
                                }}
                                style={{
                                    transformOrigin: "center center",
                                }}
                            >
                                <tech.Icon />
                            </motion.div>
                        );
                    })}

                    {/* Orbiting Particles */}
                    <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full blur-[2px] shadow-[0_0_10px_#a855f7]"></div>
                        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_10px_#3b82f6]"></div>
                    </motion.div>

                </div>

                {/* Terminal / Status Log */}
                <motion.div
                    className="w-full max-w-xl h-64 bg-black/90 rounded-lg border border-gray-800 p-4 shadow-2xl relative overflow-hidden font-mono text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-500 text-xs">PORTFOLIO_INIT_V2.0</div>
                    </div>

                    <div className="text-gray-300 h-full overflow-hidden relative">
                        <span className="text-green-500">user@portfolio:~$</span> ./init_sequence.sh
                        <br />
                        {text}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-cyan-500 ml-1 align-middle"
                        />
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-4 w-full animate-scan"></div>
                    </div>
                </motion.div>

            </div>

            {/* Progress Bar with Data Stats */}
            <div className="absolute bottom-12 w-full max-w-md px-4">
                <div className="flex justify-between text-xs text-cyan-400 mb-1 font-mono uppercase">
                    <span>Loading Modules...</span>
                    <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        Processing Data
                    </motion.span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 box-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Loader;
