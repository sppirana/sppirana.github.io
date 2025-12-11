import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaCalendarCheck, FaBullhorn, FaHandshake } from 'react-icons/fa'

const Leadership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const responsibilities = [
    {
      icon: FaCalendarCheck,
      title: 'Event Coordination',
      description: 'Organized and coordinated student activities, meetings, and events'
    },
    {
      icon: FaHandshake,
      title: 'Team Collaboration',
      description: 'Enhanced teamwork and communication skills through collaborative leadership'
    },
    {
      icon: FaBullhorn,
      title: 'Student Representation',
      description: 'Represented over 40 students, advocating for their needs and concerns'
    },
    {
      icon: FaUsers,
      title: 'Community Building',
      description: 'Fostered a strong sense of community among university students'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="leadership" className="py-20 bg-white">
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
              Leadership <span className="text-gradient">&amp; Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My leadership journey and community contributions
            </p>
          </motion.div>

          {/* Main Leadership Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="inline-block w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <FaUsers className="text-white text-4xl" />
                </motion.div>
                
                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-2">
                  Secretary
                </h3>
                <p className="text-xl text-primary-600 font-semibold mb-2">
                  UKelanganmadam Maha Viddyalayam University Students' Union
                </p>
                <p className="text-gray-600">
                  Leading and coordinating activities for 40+ university students
                </p>
              </div>

              {/* Key Achievements Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-all"
                  >
                    <item.icon className="text-primary-600 text-3xl mb-3" />
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Gained */}
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
              <h4 className="text-2xl font-bold font-heading text-gray-900 mb-6 text-center">
                Skills Developed Through Leadership
              </h4>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['Communication', 'Team Management', 'Event Planning', 'Problem Solving', 'Public Speaking', 'Decision Making', 'Conflict Resolution', 'Time Management'].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg px-4 py-3 text-center shadow-sm border border-gray-100"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
