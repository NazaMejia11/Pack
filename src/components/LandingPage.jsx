import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const scrollToBrief = () => {
    document.getElementById('brief').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        Welcome to <span className="text-blue-600">PACKAI</span> – Intelligence powering your packaging.
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToBrief}
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
      >
        Start
      </motion.button>
    </section>
  );
}
