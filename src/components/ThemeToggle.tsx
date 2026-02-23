import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none flex items-center justify-center overflow-hidden w-10 h-10"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;
