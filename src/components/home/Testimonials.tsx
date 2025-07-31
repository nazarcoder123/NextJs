"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sara Jay',
    role: 'Traveller',
    image: '/images/client1-unsplash-IF9TK5Uy-KI.png',
    comment: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.',
    rating: 5
  },
  {
    name: 'Cristian Daniel',
    role: 'Traveller',
    image: '/images/client2-unsplash-DItYlc26zVI.png',
    comment: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.',
    rating: 5
  },
  {
    name: 'Kausar Hasan',
    role: 'Traveller',
    image: '/images/client3-unsplash-KIPqvvTOC1s.png',
    comment: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gray-500 uppercase tracking-wider mb-4 block">TESTIMONIAL</span>
          <h2 className="text-5xl font-semibold mb-4">What our client say</h2>
          <p className="text-gray-600">
            Create a visual identity for your company and a overall brand
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
