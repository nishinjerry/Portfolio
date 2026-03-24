import React, { useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          className="bg-white dark:bg-dark min-h-screen text-gray-900 dark:text-white selection:bg-primary selection:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Suspense fallback={<div className="h-20 w-full flex items-center justify-center text-primary">...</div>}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </>
  );
}

export default App;