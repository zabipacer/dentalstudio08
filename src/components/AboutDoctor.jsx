import React from 'react';
import { motion } from 'framer-motion';

export default function AboutDoctor() {
  return (
    <section
      id="about-doctor"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 lg:py-32"
      aria-labelledby="about-doctor-title"
    >
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
        {/* Text Column */}
        <motion.div
          className="lg:flex-1 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="about-doctor-title"
            className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"
          >
            Meet Dr. Tahir Awan
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Endodontist, BDS (Khyber Medical University), FCPS-II (IIDH, Islamabad)</strong>
          </p>
          <p className="text-gray-300 mb-4">
            With over <strong>6 years of experience</strong>, Dr. Awan specializes in advanced root canal treatments, preserving dental health with precision and care. PMDC verified and renowned as one of Abbottabad’s best endodontists, he brings cutting-edge techniques to ensure pain-free, long-lasting results.
          </p>
          <p className="text-gray-300 mb-6">
            <strong>Conditions Treated:</strong> Root Canal Infections, Dental Pulp Infections, Tooth Abscesses, Dental Trauma, Failed Root Canal Treatments.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+923082220346"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-400 font-semibold rounded-full shadow-md hover:bg-orange-400 hover:text-black transition-all duration-300"
            >
              Call Dr. Awan: +92 308 2220346
            </a>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="lg:flex-1 mt-10 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="drawan.png"
            alt="Dr. Tahir Awan"
            className="w-auto object-cover rounded-2xl shadow-2xl border-4 border-gradient-to-br from-orange-400 to-yellow-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
