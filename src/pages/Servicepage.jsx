import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Star, 
  CheckCircle, 
  Info, 
  Zap,
  Heart,
  Shield,
  Award,
  TrendingUp,
  Sparkles,
  Eye
} from 'lucide-react';
import { services } from './services';
import { useParams } from 'react-router-dom';



export default function ServicePage() {
 const { slug } = useParams();
   const service = services.find(s => s.slug === slug);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const parseContentToSections = (htmlContent) => {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent.trim();
    
    const sections = [];
    let currentSection = { type: 'content', elements: [] };

    // Process each child node
    Array.from(tempDiv.children).forEach((element) => {
      if (element.tagName === 'SECTION') {
        // Process section children
        Array.from(element.children).forEach((child) => {
          if (child.tagName === 'H2') {
            if (currentSection.elements.length > 0) {
              sections.push(currentSection);
            }
            sections.push({
              type: 'heading',
              level: 'H2',
              text: child.textContent,
              id: child.textContent.toLowerCase().replace(/\s+/g, '-')
            });
            currentSection = { type: 'content', elements: [] };
          } else if (child.tagName === 'H3') {
            if (currentSection.elements.length > 0) {
              sections.push(currentSection);
            }
            sections.push({
              type: 'heading',
              level: 'H3',
              text: child.textContent,
              id: child.textContent.toLowerCase().replace(/\s+/g, '-')
            });
            currentSection = { type: 'content', elements: [] };
          } else if (child.tagName === 'P') {
            const text = child.textContent;
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
            sections.push({ type: 'paragraph', sentences, fullText: text });
          } else if (child.tagName === 'UL') {
            const listItems = Array.from(child.children).map(li => {
              // Handle nested HTML like <strong> tags
              return li.innerHTML;
            });
            sections.push({ type: 'list', items: listItems, listType: 'UL' });
          } else if (child.tagName === 'OL') {
            const listItems = Array.from(child.children).map(li => {
              return li.innerHTML;
            });
            sections.push({ type: 'list', items: listItems, listType: 'OL' });
          }
        });
      }
    });

    if (currentSection.elements.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  if (!service) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6"
          />
          <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
          <p className="text-gray-300">Service Not Found</p>
        </div>
      </motion.div>
    );
  }

  const sections = parseContentToSections(service.content);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-orange-500/10 to-transparent"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-orange-600/10 to-transparent"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.article 
        className="relative max-w-4xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
          style={{ opacity, scale }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-medium">Premium Service</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            {service.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#f97316",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {service.description}
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative mb-16 group"
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setActiveSection('image')}
          onHoverEnd={() => setActiveSection(null)}
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl"
            animate={{
              opacity: activeSection === 'image' ? 0.8 : 0.3,
              scale: activeSection === 'image' ? 1.05 : 1
            }}
          />
          <motion.img
            src={service.image}
            alt={service.title}
            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end justify-center pb-8"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              <Eye className="w-4 h-4 text-orange-400" />
              <span className="text-white text-sm">Explore Service</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          ref={contentRef}
          className="space-y-12"
          variants={containerVariants}
        >
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={itemVariants}
              className="group"
              onHoverStart={() => setActiveSection(sectionIndex)}
              onHoverEnd={() => setActiveSection(null)}
            >
              {section.type === 'heading' && (
                <motion.div
                  className="relative"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: activeSection === sectionIndex ? '100%' : '60%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h2 
                    className={`font-bold text-white mb-6 ${
                      section.level === 'H2' ? 'text-3xl' : 'text-2xl'
                    }`}
                    whileHover={{ color: '#f97316' }}
                  >
                    {section.text.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        whileHover={{ 
                          scale: 1.2,
                          color: '#f97316',
                          transition: { duration: 0.1 }
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.h2>
                </motion.div>
              )}

              {section.type === 'paragraph' && (
                <motion.div
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(249, 115, 22, 0.1)",
                    borderColor: "rgba(249, 115, 22, 0.3)"
                  }}
                >
                  <motion.p className="text-gray-300 text-lg leading-relaxed">
                    {section.sentences.map((sentence, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ color: '#f97316' }}
                      >
                        {sentence.trim()}
                        {index < section.sentences.length - 1 && '. '}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              )}

              {section.type === 'list' && (
                <motion.div
                  className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
                  whileHover={{ 
                    boxShadow: "0 0 40px rgba(249, 115, 22, 0.2)",
                    borderColor: "rgba(249, 115, 22, 0.4)"
                  }}
                >
                  <motion.ul className="space-y-4">
                    {section.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-1"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <motion.div 
                          className="text-gray-300 text-lg flex-1"
                          whileHover={{ color: '#f97316' }}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            { icon: Star, label: "Satisfaction Rate", value: "99%", color: "from-yellow-400 to-orange-500" },
            { icon: Clock, label: "Average Duration", value: "2.5hrs", color: "from-blue-400 to-purple-500" },
            { icon: Award, label: "Success Rate", value: "95%", color: "from-green-400 to-teal-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)",
                borderColor: "rgba(249, 115, 22, 0.4)"
              }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/30"
            whileHover={{ 
              boxShadow: "0 0 50px rgba(249, 115, 22, 0.3)",
              borderColor: "rgba(249, 115, 22, 0.5)"
            }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Book your consultation today and take the first step towards better health and wellbeing.
            </motion.p>
           <a href="https://wa.me/923005615535" target="_blank" rel="noopener noreferrer">
  <motion.button
    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)"
    }}
    whileTap={{ scale: 0.95 }}
  >
    Schedule Consultation
  </motion.button>
</a>

          </motion.div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <motion.button
            className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-6 h-6 text-white group-hover:animate-pulse" />
          </motion.button>
        </motion.div>

        {/* Particle Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
}