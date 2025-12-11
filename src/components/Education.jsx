import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBook } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const courses = [
    'Algorithms Analysis',
    'Java Programming',
    'Database Management',
    'Python Programming',
    'Object Oriented Programming',
    'Server-Side Web Development',
    'Software Engineering Principles and Practice',
    'Software Development Group Project'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey in software engineering
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 md:mb-0 shadow-lg"
                >
                  <FaGraduationCap className="text-white text-4xl" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-2">
                    B.Eng (Hons) in Software Engineering
                  </h3>
                  <h4 className="text-xl text-primary-600 font-semibold mb-4">
                    Informatics Institute of Technology, Colombo
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaCalendarAlt className="text-primary-600" />
                      <span>September 2023 - September 2027</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaMapMarkerAlt className="text-primary-600" />
                      <span>Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div className="mt-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <FaBook className="text-primary-600 text-xl" />
                      <h5 className="text-xl font-bold text-gray-900">Relevant Course Modules</h5>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {courses.map((course, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-center text-gray-600">
                <span className="font-semibold text-gray-900">Academic Focus:</span> Building a strong foundation in software engineering principles, 
                algorithms, and modern development practices while working on real-world projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
