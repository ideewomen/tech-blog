import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import aboutData from '../data/about.json';

export default function About() {
  const { about } = aboutData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center text-6xl shadow-2xl"
        >
          👨‍💻
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{about.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{about.title}</p>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {about.bio}
        </p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4 mt-8"
        >
          {about.github && (
            <a href={about.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {about.twitter && (
            <a href={about.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
              <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {about.linkedin && (
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {about.email && (
            <a href={`mailto:${about.email}`} className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">技能专长</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">工作经历</h2>
        <div className="space-y-6">
          {about.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg card-hover relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-purple-600" />
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">我的数据</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{about.statistics.articles}</div>
              <div className="text-white/80">文章总数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{about.statistics.projects}</div>
              <div className="text-white/80">开源项目</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{about.statistics.readers}</div>
              <div className="text-white/80">月访问量</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function Calendar({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
