import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Eye, Search, Tag } from 'lucide-react';
import articlesData from '../data/articles.json';

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const { articles, categories } = articlesData;

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">文章列表</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          探索技术世界，分享编程知识
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          />
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-wrap gap-2 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/articles/${article.id}`}>
              <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg h-full card-hover">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl relative z-10">📚</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700">
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

      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <span className="text-6xl mb-4 block">🔍</span>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            没有找到相关文章
          </p>
        </motion.div>
      )}
    </div>
  );
}
