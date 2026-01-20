import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Eye, Tag } from 'lucide-react';
import articlesData from '../data/articles.json';
import aboutData from '../data/about.json';

export default function Home() {
  const featuredArticles = articlesData.articles.slice(0, 3);
  const about = aboutData.about;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6 inline-block"
        >
          <span className="text-6xl">👨‍💻</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          欢迎来到我的技术博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {about.bio}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/articles" className="btn-primary inline-flex items-center space-x-2">
            <span>开始阅读</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: '文章', value: about.statistics.articles, icon: '📝' },
            { label: '项目', value: about.statistics.projects, icon: '🚀' },
            { label: '读者', value: about.statistics.readers, icon: '👥' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Articles */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold gradient-text">精选文章</h2>
          <Link to="/articles" className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center space-x-1">
            <span>查看更多</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/articles/${article.id}`}>
                <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg h-full card-hover">
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
                    <span className="text-6xl">📚</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
