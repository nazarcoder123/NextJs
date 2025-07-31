"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const services = [
  {
    title: 'Best Service',
    description: 'our service is reliable and convenient, our service is quality.',
    icon: '/icons/best-service.png',
  },
  {
    title: 'Price Guarantee',
    description: 'our service is reliable and convenient, our service is quality.',
    icon: '/icons/price-guarantee.png',
  },
  {
    title: 'Handpicked Hotels',
    description: 'our service is reliable and convenient, our service is quality.',
    icon: '/icons/hotel.png',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-6xl font-bold mb-4">Why choose Us?</h2>
          <p className="text-lg text-gray-600">
            our services have been trusted by world travelers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-black rounded-lg w-24 h-24 flex items-center justify-center mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="flex items-center text-black font-semibold group">
                Learn more 
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
