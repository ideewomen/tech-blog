import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { useState } from 'react';
import linksData from '../data/links.json';

export default function Links() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const { links, categories } = linksData;

  const filteredLinks = selectedCategory === '全部'
    ? links
    : links.filter(link => {
        const categoryMap = {
          '全部': true,
          '个人博客': ['Dan Abramov', '阮一峰', 'Kent C. Dodds', 'Sarah Drasner'],
          '官方团队': ['尤雨溪', 'Addy Osmani'],
          '技术社区': ['CSS Tricks'],
          '设计资源': ['Smashing Magazine']
        };
        return categoryMap[selectedCategory]?.includes(link.name) || false;
      });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-block mb-4">
          <Globe className="w-16 h-16 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">友情链接</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          这里是一些我常访问的优秀技术博客和资源网站
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg h-full card-hover relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-purple-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-purple-500/5 group-hover:to-primary-500/5 transition-all duration-300" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg"
                  >
                    👤
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                      {link.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 truncate">
                      {link.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {link.description}
                </p>

                {/* URL */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="truncate">{link.url.replace('https://', '')}</span>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {filteredLinks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <span className="text-6xl mb-4 block">🔍</span>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            该分类下暂无链接
          </p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">想要交换友链？</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            如果你有优秀的技术博客或资源网站，欢迎与我交换友链！
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            联系我
          </a>
        </div>
      </motion.div>
    </div>
  );
}
