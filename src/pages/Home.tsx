import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold gradient-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Creative Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300"
          >
            Building beautiful and interactive web experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 hover:transform hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-primary/20">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-out hover:transform hover:scale-105 shadow-lg hover:shadow-primary/20">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 