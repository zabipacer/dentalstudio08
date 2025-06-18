import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Habbibullah Yousafi',
    role: 'Dental Surgeon',
    text: "Today, I brought my wife to Dr. Taher, a dentist. As a foreigner from a neighboring country, I was truly pleased and impressed to see such a skilled and professional doctor. Dr. Taher is not only highly knowledgeable in his field, but his kind and respectful attitude toward patients brings great comfort and happiness. His excellent manners and deep understanding create a very positive experience.The clinic is also very clean and well-organized, and the staff are friendly, helpful, and professional. I am also thankful for the discount they kindly provided us — it was very much appreciated.It is truly encouraging to see such capable and dedicated doctors in this region. I wish Dr. Taher continued success in his work.",
    image: '/hab.png',
  },
  {
    name: 'Nida Saeed',
    role: 'Clinic Manager',
    text: "Today I went to Dental studio for scaling and polishing. The service was so good and prompt, really impressive. Best part is my son got to watch his favourite videos while the procedure took place in this way he didnt feel much pain.I am so glad to see such talented dentist in abbottabad. Also the doc is very cooperative and he listens to you politely. Hope to visit him again for a good cause 😀",
    image: '/T1.jpg',
  },
  {
    name: 'Usama Sami',
    role: 'Orthodontist',
    text: "Hello Everyone! I recently had my teeth treated for the first time, and I was pleasantly surprised by how smooth the process was. Dr. Tahir explained everything clearly and ensured I was comfortable throughout the procedure. I highly recommend him as an exceptional dental professional!",
    image: '/usama.png',
  },
  {
    name:"khizar Malik",
    text:"I have found Dr Tahir  highly professional, humble and down to earth person.With advance and highly sposhticated technology Dental studio is best platform for dental treatment. Dental studio is highly hygienic clinic with very cooperative staff at reception .",
    image:"/khizar.png"
  },
  {name:"Tayyab Bashir",
    text:"I recently visited Dental Studio in Abbottabad and was impressed by Dr. Tahir's professionalism and expertise. The clinic is modern, clean, and welcoming. Dr. Tahir explained my treatment options clearly and ensured I was comfortable throughout.I highly recommend Dental Studio and Dr. Tahir for top-notch dental care in Abbottabad!",
    image:"/tayyab.png"
  },
  {name:"M Shahaid",
    text:"Dr. Tahir is an exceptional dental professional. I, Shahid, had several issues with my teeth, but his humble and professional approach made the entire experience smooth and stress-free. He patiently guided me through every step of the process. My fillings were in poor condition, but Dr. Tahir expertly fixed them and provided clear aftercare instructions. Thanks to his expertise, I am now completely satisfied with the treatment. Highly recommended!",
    image:"/shahid1.png"
  }

];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10">
          What Our Clients Say
        </h2>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black bg-opacity-40 rounded-2xl shadow-2xl p-8 text-white border-4 border-gradient-to-br from-orange-400 to-yellow-500"
        >
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-yellow-400"
          />
          <p className="text-lg italic mb-4">"{testimonials[current].text}"</p>
          <h4 className="text-xl font-semibold text-orange-300">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gray-400">{testimonials[current].role}</p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          <button
            onClick={prevSlide}
            className="bg-black bg-opacity-50 p-3 rounded-full text-orange-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 p-3 rounded-full text-orange-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-gradient-to-r from-orange-400 to-yellow-600' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
