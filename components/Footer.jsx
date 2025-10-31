import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Mobile accordions
  const [isAiOpen, setIsAiOpen] = useState(false)
  const [isIndustryOpen, setIsIndustryOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-500 via-slate-800 to-slate-900 text-white pt-8 pb-24 sm:py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold text-white">Gluti</span>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">sify</span>
            </div>
            
            <p className="text-gray-300 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Chuyển đổi doanh nghiệp thông qua các giải pháp outsourcing AI & Big Data thông minh từ Việt Nam.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* AI & Big Data Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              type="button"
              aria-expanded={isAiOpen}
              aria-controls="footer-ai-list"
              onClick={() => setIsAiOpen(!isAiOpen)}
              className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-primary-500 md:cursor-default md:mb-6"
            >
              <span>Dịch Vụ AI & Big Data</span>
              <svg className="w-4 h-4 md:hidden transition-transform duration-200" style={{ transform: isAiOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
            </button>
            <ul id="footer-ai-list" className={`text-sm sm:text-base space-y-2 sm:space-y-3 ${isAiOpen ? 'block' : 'hidden'} md:block`}>
              <li>
                <a href="/services/machine-learning" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Machine Learning Development</span>
                </a>
              </li>
              <li>
                <a href="/services/big-data" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Big Data Analytics</span>
                </a>
              </li>
              <li>
                <a href="/services/ai-software" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>AI Software Development</span>
                </a>
              </li>
              <li>
                <a href="/services/cloud-ai" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Cloud AI Infrastructure</span>
                </a>
              </li>
              <li>
                <a href="/services/computer-vision" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Computer Vision</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Industry Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type="button"
              aria-expanded={isIndustryOpen}
              aria-controls="footer-industry-list"
              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-primary-500 md:cursor-default md:mb-6"
            >
              <span>Giải Pháp Ngành</span>
              <svg className="w-4 h-4 md:hidden transition-transform duration-200" style={{ transform: isIndustryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
            </button>
            <ul id="footer-industry-list" className={`text-sm sm:text-base space-y-2 sm:space-y-3 ${isIndustryOpen ? 'block' : 'hidden'} md:block`}>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Healthcare & Medical AI</span>
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Fintech & Banking</span>
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>E-commerce & Retail</span>
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Manufacturing & IoT</span>
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <span>Education & Training</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              type="button"
              aria-expanded={isContactOpen}
              aria-controls="footer-contact-list"
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-primary-500 md:cursor-default md:mb-6"
            >
              <span>Liên Hệ</span>
              <svg className="w-4 h-4 md:hidden transition-transform duration-200" style={{ transform: isContactOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
            </button>
            <ul id="footer-contact-list" className={`text-sm sm:text-base space-y-2 sm:space-y-3 ${isContactOpen ? 'block' : 'hidden'} md:block`}>
              <li className="flex items-start text-gray-300">
                <svg className="w-4 h-4 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>585 Vũ Tông Phan, Thanh Xuân, Hà Nội</span>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+84 827590543</span>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>hello@glutisify.vn</span>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
                <span>www.glutisify.vn</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 pt-5 sm:pt-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-xs sm:text-sm"
          >
            © 2025 <span className="text-white font-semibold">Gluti</span><span className="text-primary-500 font-semibold">sify</span>. Made with ❤️ in Vietnam
          </motion.p>
        </div>
      </div>

      {/* Modern Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        whileHover={{ 
          scale: 1.15,
          y: -5,
          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
          rotate: [0, -5, 5, 0]
        }}
        whileTap={{ 
          scale: 0.95,
          y: 0
        }}
        onClick={scrollToTop}
        className="group fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 hover:from-primary-600 hover:via-primary-700 hover:to-accent-600 text-white rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 border-2 border-white/20 backdrop-blur-md"
        aria-label="Scroll to top"
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl blur-md -z-10"
        />
        
        {/* Icon with animation */}
        <motion.div
          whileHover={{ 
            y: -2,
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <ArrowUp size={20} className="drop-shadow-lg sm:w-[22px] sm:h-[22px]" />
        </motion.div>
        
        {/* Ripple effect on click */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ 
            scale: 1.5, 
            opacity: [0, 0.3, 0],
            transition: { duration: 0.4 }
          }}
          className="absolute inset-0 bg-white/30 rounded-2xl"
        />
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="hidden sm:block absolute right-full mr-3 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        >
          Lên đầu trang
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </motion.div>
      </motion.button>
    </footer>
  )
}

export default Footer