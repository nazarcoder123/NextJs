"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Katana', src: '/images/katana-logo.png' },
  { name: 'Travava', src: '/images/travava-logo.png' },
  { name: 'Bigui', src: '/images/bigui-logo.png' },
  { name: 'Booking.com', src: '/images/booking-logo.png' },
  { name: 'Jakmaen', src: '/images/jakmaen-logo.png' },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-semibold mb-4">Our tour partner</h2>
          <p className="text-gray-600">
            There are many variation of passage of lorem ipsum available but the majority have suffered alteration
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
