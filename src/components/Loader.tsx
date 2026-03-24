import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500); // 1.5 seconds duration

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-dark text-gray-900 dark:text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
            >
                <div className="relative flex items-center justify-center">
                    <motion.div
                        className="w-16 h-16 rounded-full border-4 border-gray-100 dark:border-gray-800"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-16 h-16 rounded-full border-4 border-primary border-t-transparent border-r-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="absolute text-xl font-bold font-mono">NJ</span>
                </div>
                
                <div className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase flex gap-1">
                    {'LOADING'.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Loader;
