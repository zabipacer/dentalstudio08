import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
 {
    question: 'How much do dental implants cost in Abbottabad at Dental Studio?',
    answer: (
      <>
        At Dental Studio (Abbottabad), implant pricing depends on implant type and complexity. Costs range from PKR 20,000 to PKR 50,000 per implant. Visit our <a href="/dental-implants-abbottabad" className="text-orange-400 underline">Abbottabad Implants</a> page for details.
      </>
    ),
  },
  {
    question: 'Do you offer flexible payment plans for Abbottabad patients?',
    answer: (
      <>
        Yes! We provide tailored financing options for implants, braces, and cosmetic treatments to make quality dental care accessible across Abbottabad.
      </>
    ),
  },
  {
    question: 'How often should I visit Dental Studio in Abbottabad?',
    answer: (
      <>
        We recommend biannual checkups (every 6 months) for preventive cleaning and early issue detection, keeping your teeth healthy and bright.
      </>
    ),
  },
  {
    question: 'Are professional teeth whitening treatments safe at Dental Studio?',
    answer: (
      <>
        Absolutely—our in-office whitening uses medical-grade agents under expert supervision, delivering safe results in 45–60 minutes.
      </>
    ),
  },
  {
    question: 'What options does Dental Studio offer for missing teeth?',
    answer: (
      <>
        We provide implants, bridges, and dentures. Our specialists will recommend the best solution tailored to your oral health and lifestyle in Abbottabad.
      </>
    ),
  },
  {
    question: 'Does Dental Studio handle dental emergencies in Abbottabad?',
    answer: (
      <>
        Yes, we offer 24/7 emergency care for severe toothaches, broken crowns, and trauma. Call us immediately for prompt assistance.
      </>
    ),
  },
  {
    question: 'What is the braces and aligners fitting process?',
    answer: (
      <>
        After a detailed exam and 3D scan, we design a custom braces or aligner plan. Follow-ups every 4–6 weeks ensure steady progress.
      </>
    ),
  },
  {
    question: 'Is root canal therapy painful at Dental Studio?',
    answer: (
      <>
        Modern root canals here use local anesthesia and rotary instruments, making treatment virtually painless for most patients.
      </>
    ),
  },
  {
    question: 'Do you offer pediatric dental care in Abbottabad?',
    answer: (
      <>
        Yes—our clinic provides gentle pediatric dentistry, including sealants and habit counseling, ensuring a positive first dental experience.
      </>
    ),
  },
  {
    question: 'How do you ensure infection control at Dental Studio?',
    answer: (
      <>
        We follow strict sterilization protocols—autoclaves, disposable tools, and medical-grade disinfectants guarantee 100% patient safety.
      </>
    ),
  },
  // ... other FAQs remain unchanged
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="bg-gray-800 py-20 px-6 text-white"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="faq-title"
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Abbottabad Dental Studio FAQs
        </motion.h2>

        <div className="space-y-5">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-700 rounded-2xl overflow-hidden border border-gray-600"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-yellow-400 bg-gray-900 hover:bg-gray-800 transition-colors"
                onClick={() => toggle(idx)}
                itemProp="name"
              >
                {faq.question}
                <span className="text-2xl text-white">{openIndex === idx ? '−' : '+'}</span>
              </button>

              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-6 bg-gray-800"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-200">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
