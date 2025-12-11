import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiIntellijidea, SiGithub, SiFigma, SiWordpress
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { DiDatabase } from 'react-icons/di'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', level: 85 },
        { name: 'Python', icon: SiPython, color: 'text-blue-600', level: 80 },
        { name: 'Java', icon: FaJava, color: 'text-orange-600', level: 85 },
        { name: 'PHP', icon: SiPhp, color: 'text-indigo-600', level: 75 },
        { name: 'HTML/CSS', icon: SiHtml5, color: 'text-orange-500', level: 90 },
        { name: 'SQL', icon: DiDatabase, color: 'text-blue-700', level: 80 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'text-cyan-500', level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', level: 80 },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', level: 75 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 90 },
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'VS Code', icon: VscCode, color: 'text-blue-600', level: 90 },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: 'text-purple-600', level: 85 },
        { name: 'GitHub', icon: SiGithub, color: 'text-gray-900', level: 85 },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-500', level: 75 },
        { name: 'WordPress', icon: SiWordpress, color: 'text-blue-600', level: 70 },
      ]
    }
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
    <section id="skills" className="py-20 bg-white">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="max-w-6xl mx-auto space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                  {category.title}
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect rounded-xl p-6 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <skill.icon className={`${skill.color} text-3xl group-hover:scale-110 transition-transform`} />
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                        </div>
                        <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-effect rounded-xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600">
                I'm always eager to learn new technologies and improve my skills. 
                Currently exploring advanced React patterns, cloud services, and DevOps practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
