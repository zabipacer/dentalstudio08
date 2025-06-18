import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
            Dental Studio (Abbottabad)
          </h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            Jadoon Plaza Phase 2 Rd, Phase 2, Abbottabad
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone className="text-orange-400" />
            <a href="tel:+923005615535" className="underline hover:text-white">
              +92 300 5615535
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-orange-400" />
            <a href="mailto:info@dentalstudio.com" className="underline hover:text-white">
              info@dentalstudio08.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            Quick Links
          </h4>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </nav>

        {/* Top Services */}
        <nav aria-label="Top Services">
          <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            Top Services
          </h4>
          <ul className="text-sm space-y-2">
            <li><a href="/dental-implants-abbottabad" className="hover:text-white">Dental Implants</a></li>
            <li><a href="/root-canal-abbottabad" className="hover:text-white">Root Canal</a></li>
            <li><a href="/teeth-whitening-abbottabad" className="hover:text-white">Teeth Whitening</a></li>
            <li><a href="/braces-aligners-abbottabad" className="hover:text-white">Braces & Aligners</a></li>
          </ul>
        </nav>

        {/* Social & CTA */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            Connect With Us
          </h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/dentalstudio08/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/dentalstudio08" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://wa.me/923005615535" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-xl hover:text-green-500 transition-colors" />
            </a>
          </div>
          <a
            href="https://wa.me/923005615535"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Appointment
          </a>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dental Studio (Abbottabad). All rights reserved.
      </div>
    </footer>
  );
}