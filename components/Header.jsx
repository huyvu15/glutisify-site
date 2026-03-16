import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

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
      href: '#',
      label: 'Hệ sinh thái',
      hasDropdown: true,
      dropdownItems: [
        { href: '/services/machine-learning', label: 'Machine Learning Development' },
        { href: '/services/big-data', label: 'Big Data Analytics' },
        { href: '/services/ai-software', label: 'AI Software Development' }
      ]
    },
    {
      href: '/pricing',
      label: 'Báo giá',
      hasDropdown: true,
      dropdownItems: [
        { href: '/pricing/web', label: 'Thiết kế Web' },
        { href: '/pricing/mobile', label: 'Ứng dụng di động' }
      ]
    },
    {
      href: '/customers',
      label: 'Khách hàng',
      hasDropdown: true,
      dropdownItems: [
        { href: '/projects', label: 'Dự án tiêu biểu' },
        { href: '/testimonials', label: 'Ý kiến khách hàng' }
      ]
    },
    {
      href: '/news',
      label: 'Chia sẻ',
      hasDropdown: true,
      dropdownItems: [
        { href: '/news', label: 'Blog công nghệ' },
        { href: '/news', label: 'Kiến thức AI' },
        { href: '/training', label: 'Đào tạo' }
      ]
    },
    {
      href: '/about',
      label: 'Về Glutisify',
      hasDropdown: true,
      dropdownItems: [
        { href: '/about', label: 'Chúng tôi là ai' },
        { href: '/contact', label: 'Liên hệ' }
      ]
    },
  ]

  const handleNavigation = (href) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href !== '#') {
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo matching Mega Digital style */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <span className="text-xl font-black text-gray-900 leading-none">
                GLUTI
              </span>
              <span className="text-xl font-black text-[#009245] leading-none">
                SIFY
              </span>
              <span className="text-[8px] font-bold text-gray-500 mt-0.5 tracking-[0.2em] uppercase">
                Solution Architect
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !item.hasDropdown && handleNavigation(item.href)}
                    className="flex items-center gap-1 text-[15px] font-bold text-gray-800 hover:text-primary-600 transition-colors py-8"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[calc(100%-1rem)] left-0 w-56 bg-white shadow-xl border border-gray-100 py-3 z-50 rounded-lg"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.label}
                              onClick={() => handleNavigation(dropdownItem.href)}
                              className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-800 hover:text-primary-600 transition-colors">
                <Search size={20} />
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/contact')}
                className="border-2 border-gray-900 text-gray-900 font-bold py-2.5 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase tracking-wide"
              >
                Liên hệ tư vấn
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="text-gray-800">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-800"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[80px] bg-white z-[100] lg:hidden overflow-y-auto border-t border-gray-100 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : handleNavigation(item.href)}
                    className="w-full flex items-center justify-between text-lg font-bold text-gray-900 py-3"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={20} className={activeDropdown === item.label ? 'rotate-180' : ''} />}
                  </button>

                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="bg-gray-50 rounded-lg mt-2 mb-4 p-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleNavigation(dropdownItem.href)}
                          className="w-full text-left px-4 py-3 text-gray-700 border-b border-gray-200 last:border-0"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => handleNavigation('/contact')}
                className="w-full mt-6 bg-gray-900 text-white font-bold py-4 rounded-xl uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Liên hệ tư vấn
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )

}

export default Header
