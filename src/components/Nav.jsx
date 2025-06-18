import { motion } from 'framer-motion';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-20 bg-transparent backdrop-blur-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/logodst.png" alt="Dr Saeed Logo" className="h-25  rounded-sm w-auto" />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-white hover:text-red-300 font-medium">Services</a>
          <a href="#about" className="text-white hover:text-red-300 font-medium">About</a>
          <a href="#contact" className="text-white hover:text-red-300 font-medium">Contact</a>
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+923005615535"
            className="hidden md:inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call
          </a>
          <button className="md:hidden p-2 bg-white/20 rounded-md">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
