import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      href: '/', 
      label: 'Trang chủ',
      hasDropdown: false
    },
    { 
      href: '/about', 
      label: 'Về chúng tôi',
      hasDropdown: false
    },
    { 
      href: '/services', 
      label: 'Dịch vụ',
      hasDropdown: true,
      dropdownItems: [
        { href: '/services/machine-learning', label: 'Machine Learning Development' },
        { href: '/services/big-data', label: 'Big Data Analytics' },
        { href: '/services/ai-software', label: 'AI Software Development' },
        { href: '/services/cloud-ai', label: 'Cloud AI Infrastructure' },
        { href: '/services/computer-vision', label: 'Computer Vision' }
      ]
    },
    { 
      href: '/projects', 
      label: 'Dự án',
      hasDropdown: false
    },
    { 
      href: '/news', 
      label: 'Tin tức',
      hasDropdown: false
    },
    { 
      href: '/contact', 
      label: 'Liên hệ',
      hasDropdown: false
    },
  ]

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // Handle anchor links for same page
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Handle page navigation
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
           {/* Logo theo option1 */}
           <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="flex items-center"
           >
             <span className="text-2xl font-bold text-gray-900">
               Gluti
             </span>
             <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
               sify
             </span>
           </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative group">
                 <motion.button
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.href ? null : item.href) : handleNavigation(item.href)}
                   className={`relative font-medium transition-all duration-300 hover:text-primary-400 text-gray-900 py-2 group`}
                 >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.href ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </span>
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-large border border-gray-100 py-2 z-50"
                      >
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <motion.button
                            key={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: dropdownIndex * 0.05 }}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

           {/* Simple CTA Button */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5 }}
             className="hidden lg:block"
           >
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => handleNavigation('/contact')}
               className="btn-primary shadow-lg hover:shadow-xl"
             >
               Liên hệ ngay
             </motion.button>
           </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl mt-2 shadow-large border border-gray-100 overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.href ? null : item.href) : handleNavigation(item.href)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="flex items-center gap-1">
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-200 ${
                              activeDropdown === item.href ? 'rotate-180' : ''
                            }`} 
                          />
                        )}
                      </span>
                    </motion.button>

                    {/* Mobile Dropdown */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50"
                          >
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <motion.button
                                key={dropdownItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                                onClick={() => handleNavigation(dropdownItem.href)}
                                className="w-full text-left px-8 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => handleNavigation('/contact')}
                    className="btn-primary w-full"
                  >
                    Liên hệ ngay
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
