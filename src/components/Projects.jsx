import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { 
  SiLaravel, SiNextdotjs, SiPython, SiTailwindcss, 
  SiIntellijidea 
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      name: 'Farm Sync',
      date: 'Jan. 2025',
      type: 'Group Project',
      description: 'Smart farming decision support system for Sri Lankan farmers',
      features: [
        'Real-time data and Machine Learning integration',
        'Next.js + Tailwind CSS frontend',
        'Labourer Dashboard for workforce management',
        'Data Dashboard with analytics',
        'ML model for vegetable price prediction'
      ],
      technologies: [
        { name: 'Laravel', icon: SiLaravel, color: 'text-red-600' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
        { name: 'Python', icon: SiPython, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
      github: '#',
      external: null
    },
    {
      id: 2,
      name: 'VIA-Story Web App',
      date: 'Jul. 2024',
      type: 'Individual Project',
      description: 'Modern photography website with clean, responsive design',
      features: [
        'UI/UX focused smooth browsing experience',
        'Built with Next.js and Tailwind CSS',
        'Responsive image galleries',
        'Modern animations and transitions',
        'Optimized performance'
      ],
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
      github: '#',
      external: null
    },
    {
      id: 3,
      name: 'Plane Seat Management System',
      date: 'Oct. 2024',
      type: 'Individual Project',
      description: 'Java console application for managing airplane seat bookings',
      features: [
        'Seat booking and cancellation functionality',
        'Intelligent seat finder algorithm',
        'Interactive seat map visualization',
        'Comprehensive error handling',
        'OOP concepts for structure and scalability'
      ],
      technologies: [
        { name: 'Java', icon: FaJava, color: 'text-orange-600' },
        { name: 'IntelliJ', icon: SiIntellijidea, color: 'text-purple-600' },
      ],
      github: '#',
      external: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development and software engineering
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="glass-effect rounded-xl overflow-hidden group"
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">{project.date} • {project.type}</p>
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <FaGithub size={24} />
                        </motion.a>
                      )}
                      {project.external && (
                        <motion.a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 font-medium">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                      >
                        <tech.icon className={`${tech.color} text-lg`} />
                        <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gradient Border Effect on Hover */}
                <div className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
