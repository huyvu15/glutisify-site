import { motion } from 'framer-motion'
import { ChevronDown, Play, ArrowRight, Star, Users, Award, Globe } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    window.location.href = '/about'
  }

  const stats = [
    { icon: Users, number: '300+', label: 'Doanh nghiệp toàn cầu' },
    { icon: Award, number: '8+', label: 'Năm kinh nghiệm' },
    { icon: Globe, number: '150+', label: 'Chuyên gia AI' },
    { icon: Star, number: '24/7', label: 'Hỗ trợ khách hàng' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-transparent to-accent-500/30" />
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-accent-500/40 to-primary-500/40 rounded-full blur-2xl"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className={`absolute w-4 h-4 rounded-full ${
              i % 3 === 0 ? 'bg-primary-500' :
              i % 3 === 1 ? 'bg-accent-500' :
              'bg-white'
            } shadow-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
         

           {/* Main Heading */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
           >
             <motion.span 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="block mb-6 text-white/90"
             >
               Dẫn Đầu
             </motion.span>
             <motion.span 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               className="block text-gradient bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent"
             >
               Công Nghệ AI
             </motion.span>
             <motion.span 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.2 }}
               className="block mt-6 text-white/90"
             >
               Từ Việt Nam
             </motion.span>
           </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Giải pháp AI & Big Data tiên tiến từ Việt Nam
          </motion.p>

           {/* Modern CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
           >
             <motion.button
               whileHover={{ 
                 scale: 1.05, 
                 boxShadow: '0 25px 50px rgba(34, 197, 94, 0.4)',
                 y: -2
               }}
               whileTap={{ scale: 0.95 }}
               onClick={() => window.location.href = '/services'}
               className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
             >
               <span className="relative z-10">Khám Phá Dịch Vụ</span>
               <motion.div
                 whileHover={{ x: 5 }}
                 transition={{ duration: 0.2 }}
               >
                 <ArrowRight size={20} />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </motion.button>
             
             <motion.button
               whileHover={{ 
                 scale: 1.05,
                 y: -2,
                 boxShadow: '0 25px 50px rgba(255, 255, 255, 0.2)'
               }}
               whileTap={{ scale: 0.95 }}
               className="group relative overflow-hidden bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
             >
               <motion.div
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.2 }}
               >
                 <Play size={20} />
               </motion.div>
               <span>Liên Hệ Ngay</span>
             </motion.button>
           </motion.div>

           {/* Modern Stats */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.8 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
           >
             {stats.map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                 whileHover={{ 
                   scale: 1.05, 
                   y: -5,
                   boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                 }}
                 className="text-center group"
               >
                 <motion.div
                   whileHover={{ 
                     rotate: 360,
                     scale: 1.1
                   }}
                   transition={{ duration: 0.6 }}
                   className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300 shadow-lg border border-white/20"
                 >
                   <stat.icon className="w-8 h-8 text-white" />
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 2.2 + index * 0.1 }}
                   className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2"
                 >
                   {stat.number}
                 </motion.div>
                 <div className="text-xs md:text-sm text-white/80 font-medium">
                   {stat.label}
                 </div>
               </motion.div>
             ))}
           </motion.div>
        </motion.div>
      </div>

       {/* Modern Scroll Indicator */}
       <motion.button
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 2.4 }}
         onClick={scrollToNext}
         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-400 transition-colors duration-200 z-30"
       >
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="flex flex-col items-center group"
         >
           <span className="text-xs mb-2 font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
             Cuộn xuống
           </span>
           <motion.div
             whileHover={{ scale: 1.2 }}
             className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300"
           >
             <ChevronDown size={16} />
           </motion.div>
         </motion.div>
       </motion.button>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  )
}

export default Hero
