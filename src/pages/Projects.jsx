import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [filter, setFilter] = useState('全部');
  const { projects } = projectsData;

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  const filterOptions = ['全部', ...allTechnologies];

  const filteredProjects = filter === '全部'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">个人作品</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          我参与和主导的开源项目展示
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center flex-wrap gap-2">
          <Filter className="w-5 h-5 text-gray-500 mr-2" />
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === option
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg card-hover ${
              project.featured ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center relative">
              <span className="text-6xl relative z-10">🚀</span>
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>精选</span>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {project.status}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>在线演示</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>源代码</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <span className="text-6xl mb-4 block">🔍</span>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            没有找到相关项目
          </p>
        </motion.div>
      )}
    </div>
  );
}
