import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Eye, Calendar, Tag, Share2, Heart } from 'lucide-react';
import articlesData from '../data/articles.json';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articlesData.articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <span className="text-6xl mb-4 block">😕</span>
        <h2 className="text-2xl font-bold mb-4">文章未找到</h2>
        <Link to="/articles" className="btn-primary inline-flex items-center space-x-2">
          <ArrowLeft className="w-5 h-5" />
          <span>返回文章列表</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          to="/articles"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>返回文章列表</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Cover Image */}
        <div className="h-64 md:h-96 bg-gradient-to-br from-primary-400 via-blue-500 to-purple-600 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
          <span className="text-8xl relative z-10">📚</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Meta Info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>{article.views} 阅读</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author[0]}
              </span>
              <span>{article.author}</span>
            </span>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="whitespace-pre-line text-gray-800 dark:text-gray-200 leading-loose space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 gradient-text">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-4">
            <button className="btn-outline inline-flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>点赞</span>
            </button>
            <button className="btn-outline inline-flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>分享</span>
            </button>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}
