import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './layouts/MainLayout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <AnimatePresence mode='wait'>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
};

export default App;