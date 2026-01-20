import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Home, BookOpen, User, FolderOpen, Link2 } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/articles', label: '文章', icon: BookOpen },
  { path: '/about', label: '关于', icon: User },
  { path: '/projects', label: '作品', icon: FolderOpen },
  { path: '/links', label: '友链', icon: Link2 },
];

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <span className="text-xl font-bold gradient-text">Tech Blog</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-link flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-900"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <span className="font-bold gradient-text">Tech Blog</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Tech Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
