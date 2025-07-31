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

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-20 pb-8 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Logo and About */}
          <motion.div variants={fadeInUp}>
            <div className="relative w-[180px] h-[50px] mb-6">
              <Image
                src="/images/logo2.png"
                alt="Rebel Rover Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center">
                <HiLocationMarker className="text-xl mr-3" />
                <span>732 Despard St, Atlanta</span>
              </div>
              <div className="flex items-center">
                <HiPhone className="text-xl mr-3" />
                <span>+97 888 8888</span>
              </div>
              <div className="flex items-center">
                <HiMail className="text-xl mr-3" />
                <span>info@traveller.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <nav className="flex flex-col space-y-4 text-gray-600">
              {['Home', 'About Us', 'Tours', 'Contact'].map((item) => (
                <Link key={item} href="#" className="hover:text-black transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4 text-gray-600">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="bg-black text-white py-4 text-center">
          <p className="text-sm">
            Copyright © All rights reserved (Website Developed & Managed by CREATIVECHROMA)
          </p>
        </div>
      </div>
    </footer>
  );
}
