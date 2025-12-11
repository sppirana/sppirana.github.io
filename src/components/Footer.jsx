import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/sppirana',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/piranavan-sivanesan',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:sppirana007@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold font-heading mb-2">
              Piranavan Sivanesan
            </h3>
            <p className="text-gray-400">Software Engineer | Full-Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-colors duration-200`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-700"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using React &amp; Tailwind CSS</span>
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Piranavan Sivanesan. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>•</span>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
