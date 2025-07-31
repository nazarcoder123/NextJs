"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const socialHover = {
  rest: { scale: 1 },
  hover: { scale: 1.1 }
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <motion.div variants={fadeInUp}>
            <div className="relative w-[394px] h-[91px] mb-6">
              <Image
                src="/images/logo2.png"
                alt="Travel Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-6">Quick Link</h3>
            <nav className="flex flex-col space-y-4">
              {['Home', 'About Us', 'Tours', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors w-fit after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {[
                { Icon: HiLocationMarker, text: '732 Despard St, Atlanta' },
                { Icon: HiPhone, text: '+97 888 8888' },
                { Icon: HiMail, text: 'info@traveller.com' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.Icon className="text-xl mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Subscribe */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                  whileHover="hover"
                  initial="rest"
                  variants={socialHover}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="text-xl transition-transform" />
                </motion.a>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter
            </p>
            <motion.div 
              className="flex gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Type your email here"
                className="flex-1 bg-gray-800 rounded-full px-6 py-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all hover:bg-gray-700/50"
              />
              <motion.button 
                className="bg-white text-black rounded-full px-8 py-3 font-semibold hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-400">
            Copyright © All rights reserved (Website Developed & Managed by creativechroma)
          </p>
        </div>
      </div>
    </footer>
  );
}
