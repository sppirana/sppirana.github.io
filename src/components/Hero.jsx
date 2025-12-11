import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Piranavan Sivanesan
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium"
          >
            Software Engineer | Full-Stack Developer
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8"
          >
            📍 Colombo 6, Sri Lanka
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-10"
          >
            <motion.a
              href="https://github.com/sppirana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/piranavan-sivanesan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:sppirana007@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold shadow-lg hover:bg-primary-50 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600"
        >
          <HiArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
