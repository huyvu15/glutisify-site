import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#009245] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" ref={ref}>

          {/* Logo & Basic Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none">GLUTI</span>
                <span className="text-2xl font-black text-white leading-none">SIFY</span>
                <span className="text-[10px] font-bold text-white/80 mt-1 tracking-[0.2em] uppercase">Solution Architect</span>
              </div>
            </div>

            <ul className="space-y-4 text-[16px]">
              <li><Link href="/" className="hover:underline transition-all">Trang chủ</Link></li>
              <li><Link href="/about" className="hover:underline transition-all">Giới thiệu</Link></li>
              <li><Link href="/contact" className="hover:underline transition-all">Liên hệ hợp tác</Link></li>
              <li><Link href="/jobs" className="hover:underline transition-all">Tuyển dụng</Link></li>
            </ul>
          </motion.div>

          {/* Legal Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[18px] font-black mb-8 uppercase tracking-wide">Chính sách và điều khoản</h4>
            <ul className="space-y-4 text-[16px]">
              <li><Link href="/policy" className="hover:underline transition-all">Chính sách bảo mật</Link></li>
              <li><Link href="/payment" className="hover:underline transition-all">Chính sách thanh toán</Link></li>
              <li><Link href="/affiliate" className="hover:underline transition-all">Chính sách Affiliate</Link></li>
              <li><Link href="/terms" className="hover:underline transition-all">Điều khoản dịch vụ</Link></li>
              <li><Link href="/disclaimer" className="hover:underline transition-all">Tuyên bố từ chối trách nhiệm</Link></li>
            </ul>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[18px] font-black mb-8 uppercase tracking-wide">Đối tác</h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-bold text-xl italic">IMex</span>
              </div>
              <div className="flex items-center space-x-2 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-bold text-xl italic">AWS</span>
              </div>
              <div className="flex items-center space-x-2 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-bold text-xl italic text-blue-200">Adine</span>
              </div>
              <div className="flex items-center space-x-2 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-bold text-xl italic text-orange-200">Glutisify</span>
              </div>
              <div className="flex items-center space-x-2 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-bold text-xl italic text-red-200">BKTin</span>
              </div>
            </div>
          </motion.div>

          {/* Social & Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[18px] font-black mb-6 uppercase tracking-wide">Mạng xã hội</h4>
            <div className="flex space-x-4 mb-10">
              <a href="https://www.facebook.com/TechNimbus/" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Facebook size={20} fill="white" className="text-white" />
              </a>
              <a href="https://www.instagram.com/pudaide/" className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="https://www.youtube.com/@GluTis15" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all">
                <div className="bg-[#FF0000] p-1.5 rounded-lg flex items-center justify-center">
                  <Youtube size={20} fill="white" className="text-white" />
                </div>
              </a>
              <a href="https://www.tiktok.com/@glutis_15" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.02 1.11-.23 2.22-.65 3.25-.79 1.84-2.45 3.32-4.41 3.82-1.31.33-2.73.31-4.04-.06-3.14-.94-5.18-4.32-4.45-7.51.3-1.39 1.15-2.67 2.37-3.41 1.25-.78 2.81-1.09 4.26-.88.01 1.34.01 2.68.01 4.02-1.08-.22-2.32-.01-3.11.79-.58.6-.84 1.5-.66 2.31.2 1.09 1.31 1.83 2.38 1.63 1.1-.2 1.75-1.28 1.63-2.31-.01-4.57.01-9.14-.02-13.71z" />
                </svg>
              </a>
            </div>

            <h4 className="text-[18px] font-black mb-4 uppercase tracking-wide">Địa chỉ</h4>
            <p className="text-[15px] leading-relaxed text-white/90">
              585 Vũ Tông Phan, Thanh Xuân, Hà Nội
            </p>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2026 Glutisify. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Việt Nam</span>
            <span>English</span>
          </div>
        </div>
      </div>

      {/* Simple Scroll to Top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 w-12 h-12 bg-white text-[#009245] rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-white/90 transition-all border border-gray-100"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer