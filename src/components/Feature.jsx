import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaClinicMedical,
  FaTooth,
  FaShieldAlt,
  FaSmile,
  FaRegLaughBeam,
  FaTeeth,
  FaTeethOpen,
  FaXRay,
  FaUserMd,
  FaChild,
  FaHeadSideVirus,
  FaFirstAid,
  FaProcedures,
  FaBriefcaseMedical,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// Updated services for Abbottabad with images
const services = [
  {
    title: 'Preventive Dental Checkup in Abbottabad',
    description: 'Comprehensive oral health examinations and preventive care to maintain your beautiful smile in the scenic city of Abbottabad.',
    icon: <FaClinicMedical className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop&crop=center',
    link: '/preventive-dental-checkup-abbottabad',
  },
  {
    title: 'Professional Scaling & Polishing',
    description: 'Advanced plaque removal and teeth polishing services using state-of-the-art equipment for optimal oral hygiene.',
    icon: <FaTooth className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop&crop=center',
    link: '/scaling-polishing-abbottabad',
  },
  {
    title: 'Fluoride Treatment',
    description: 'Professional fluoride applications to strengthen tooth enamel and prevent cavities for patients across Abbottabad.',
    icon: <FaShieldAlt className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center',
    link: '/fluoride-treatment-abbottabad',
  },
  {
    title: 'Advanced Teeth Whitening',
    description: 'Transform your smile with professional teeth whitening treatments that deliver remarkable results in just one session.',
    icon: <FaSmile className="text-4xl text-orange-400" aria-hidden="true" />,
    image: '/assets/images/tw.png',
    link: '/teeth-whitening-abbottabad',
  },
  {
    title: 'Custom Smile Makeovers',
    description: 'Complete smile transformations combining multiple cosmetic procedures to achieve your dream smile.',
    icon: <FaRegLaughBeam className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop&crop=center',
    link: '/smile-makeover-abbottabad',
  },
  {
    title: 'Premium Veneers ',
    description: 'High-quality porcelain and composite veneers crafted to perfection for a flawless, natural-looking smile.',
    icon: <FaSmile className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop&crop=center',
    link: '/veneers-abbottabad',
  },
  {
    title: 'Tooth-Colored Fillings',
    description: 'Aesthetic composite fillings that restore function while maintaining the natural appearance of your teeth.',
    icon: <FaTooth className="text-4xl text-orange-400" aria-hidden="true" />,
    image: '/assets/images/dc.png',
    link: '/dental-fillings-abbottabad',
  },
  {
    title: 'Crowns & Bridges Restoration',
    description: 'Durable, natural-looking crowns and bridges to restore damaged teeth and replace missing ones.',
    icon: <FaRegLaughBeam className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop&crop=center',
    link: '/crowns-bridges-abbottabad',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions with titanium implants for long-lasting, natural-feeling results.',
    icon: <FaTeeth className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center',
    link: '/dental-implants-abbottabad',
  },
  {
    title: 'Orthodontic Braces & Aligners',
    description: 'Modern orthodontic solutions including clear aligners and traditional braces for perfectly aligned teeth.',
    icon: <FaTeethOpen className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop&crop=center',
    link: '/braces-aligners-abbottabad',
  },
  {
    title: 'Pain-Free Root Canal Treatment ',
    description: 'Gentle, modern root canal therapy using advanced techniques to save infected teeth without discomfort.',
    icon: <FaXRay className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1559829482-c137d28f0a83?w=400&h=250&fit=crop&crop=center',
    link: '/root-canal-abbottabad',
  },
  {
    title: 'Wisdom Tooth Extraction ',
    description: 'Safe, comfortable wisdom tooth removal procedures performed by experienced oral surgeons.',
    icon: <FaUserMd className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop&crop=center',
    link: '/wisdom-tooth-extraction-abbottabad',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children with a gentle, friendly approach to create positive dental experiences.',
    icon: <FaChild className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=250&fit=crop&crop=center',
    link: '/pediatric-dentistry-abbottabad',
  },
  {
    title: 'Gum Disease & Periodontal Care',
    description: 'Comprehensive periodontal treatment using minimally invasive techniques to restore gum health.',
    icon: <FaHeadSideVirus className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=250&fit=crop&crop=center',
    link: '/gum-disease-treatment-abbottabad',
  },
  {
    title: 'Emergency Dental Services in Abbottabad',
    description: '24/7 emergency dental care for urgent situations including severe pain, trauma, and dental emergencies.',
    icon: <FaFirstAid className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center',
    link: '/emergency-dentist-abbottabad',
  },
  {
    title: 'Maxillofacial Surgery ',
    description: 'Expert surgical procedures for complex dental and facial conditions performed by qualified specialists.',
    icon: <FaProcedures className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop&crop=center',
    link: '/maxillofacial-surgery-abbottabad',
  },
  {
    title: 'TMJ & Jaw Pain Therapy',
    description: 'Specialized treatment for temporomandibular joint disorders and chronic jaw pain relief.',
    icon: <FaBriefcaseMedical className="text-4xl text-orange-400" aria-hidden="true" />,
    image: 'https://images.unsplash.com/photo-1559829482-c137d28f0a83?w=400&h=250&fit=crop&crop=center',
    link: '/tmj-treatment-abbottabad',
  },
];

const FeaturedServices = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 4);

  const handleShowAllServices = () => {
    // In a real application, this would navigate to a dedicated services page
    // For now, we'll just toggle the display
    setShowAll(!showAll);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16" id="services" aria-labelledby="featured-services-title">
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO Optimized Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="featured-services-title"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Premier Dental Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
              Abbottabad
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience world-class dental care in the heart of Abbottabad. Our comprehensive range of dental services combines advanced technology with personalized care to ensure your optimal oral health and beautiful smile.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {displayedServices.map(({ title, description, icon, image, link }, idx) => (
            <motion.article
              key={title}
              className="group relative bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-orange-400 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 + idx * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              aria-labelledby={`service-${idx}-title`}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} - Professional dental care in Abbottabad`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3">
                  {icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <motion.h3
                  id={`service-${idx}-title`}
                  className="text-xl font-bold text-white group-hover:text-orange-400 mb-3 transition-colors duration-300"
                >
                  <a href={link} className="block focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black rounded">
                    {title}
                  </a>
                </motion.h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {description}
                </p>
                
                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <a
                    href={link}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 group/link"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-full transform translate-x-10 -translate-y-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full transform -translate-x-8 translate-y-8" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show All Services Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={handleShowAllServices}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            {showAll ? (
              <>
                Show Less Services
                <FaChevronUp className="ml-2 text-lg" />
              </>
            ) : (
              <>
                View All {services.length} Dental Services
                <FaChevronDown className="ml-2 text-lg" />
              </>
            )}
          </button>
          
          {!showAll && (
            <p className="mt-4 text-gray-400 text-sm">
              Discover our complete range of dental treatments and specialized services in Abbottabad
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;