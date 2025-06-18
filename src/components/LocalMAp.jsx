import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Clock } from 'lucide-react';

export default function LocalSEOSection() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
      aria-labelledby="location-title"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Map Embed */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-br from-orange-400 to-yellow-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Dental Studio Abbottabad Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.2863801796016!2d73.23289917476203!3d34.190158610437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de310e71c6508b%3A0x508419e195013fb1!2sDental%20Studio.(Abbottabad)!5e0!3m2!1sen!2s!4v1750001843458!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </motion.div>

        {/* Clinic Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="location-title"
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"
          >
            Dental Studio (Abbottabad)
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mr-3" />
              <span>Jadoon Plaza Phase 2 Rd, Phase 2, Abbottabad</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-6 h-6 text-orange-400 flex-shrink-0 mr-3" />
              <a href="tel:+923005615535" className="underline">
                +92 300 5615535
              </a>
            </li>
            <li className="flex items-center">
              <Star className="w-6 h-6 text-orange-400 flex-shrink-0 mr-3" />
              <span>5.0 (58 Google Reviews)</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mr-3" />
              <span>Serving Abbottabad & nearby areas</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-6 h-6 text-orange-400 flex-shrink-0 mr-3" />
              <span>Monday to Saturday 3 PM to 9PM : </span>
              <br/>
              <span>  Friday 4 PM to 9PM</span>
           
            </li>
          </ul>

          <motion.div
            className="mt-6 inline-flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#booking"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Online
            </a>
            <a
              href="tel:+923005615535"
              className="px-6 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dental Studio. (Abbottabad)",
            url: "https://g.co/kgs/R1u9bnN",
            telephone: "+923005615535",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jadoon Plaza Phase 2 Rd, Phase 2",
              addressLocality: "Abbottabad",
              addressRegion: "Khyber Pakhtunkhwa",
              postalCode: "22010",
              addressCountry: "PK"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 34.1466,
              longitude: 73.2107
            },
            openingHoursSpecification: [{
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday"],
              opens: "15:00",
              closes: "19:00"
            }],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "58"
            },
            additionalType: "https://schema.org/EmergencyService"
          })
        }}
      />
    </section>
  );
}