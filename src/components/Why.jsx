import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth } from 'react-icons/fa';

const benefits = [
  {
    title: 'State-of-the-Art, Pain-Free Dentistry',
    description:
      'Anxiety-free treatments using laser-assisted, minimally invasive techniques for ultimate comfort.',
    icon: <FaTooth className="w-8 h-8 text-white" />,
  },
  {
    title: 'Immediate Same-Day Appointments',
    description:
      'Urgent dental care available for Abbottabad residents without the wait.',
    icon: <FaTooth className="w-8 h-8 text-white" />,
  },
  {
    title: 'Premium, Globally Certified Materials',
    description:
      'Only FDA- and CE-approved implants, crowns, and restorations for lasting results.',
    icon: <FaTooth className="w-8 h-8 text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-choose-us"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
      aria-labelledby="why-choose-us-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Animated Tooth Icons */}
      <motion.div
        className="absolute left-6 top-1/3"
        animate={{ x: [-20, 20, -20], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaTooth className="w-12 h-12 text-orange-400 opacity-70" />
      </motion.div>

      <motion.div
        className="absolute right-6 bottom-1/3"
        animate={{ x: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaTooth className="w-12 h-12 text-yellow-500 opacity-70" />
      </motion.div>

      <motion.h2
        id="why-choose-us-title"
        className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.8 }}
      >
        Why Abbottabad Chooses Dental Studio
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {benefits.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-start hover:bg-opacity-60 hover:-translate-y-2 transition-all duration-500"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 flex-1">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://wa.me/923005615535"
          className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Book Your Consultation
        </a>
      </motion.div>
    </motion.section>
  );
}