import React from 'react';
import { motion } from 'framer-motion';

export default function NewPatientsBanner() {
  return (
    <section
      id="new-patients-banner"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 lg:py-24"
      aria-labelledby="new-patients-title"
    >
      <div className="max-w-5xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        <motion.div
          className="lg:flex-1 text-white mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="new-patients-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"
          >
            New Patients Are Always Welcome
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            Start your path to optimal dental health
          </p>
          <p className="text-gray-300 max-w-prose mb-8">
            Upgrade your dental care with personalized attention and expertise. Schedule a consultation with <strong>Dr. Tahir Awan</strong>, your trusted general dentist.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Online
          </a>
        </motion.div>

        <motion.div
          className="lg:flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/T1.jpg"
            alt="Smiling new patient"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl border-4 border-gradient-to-br from-orange-400 to-yellow-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
