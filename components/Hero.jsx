import { motion } from 'framer-motion'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    window.location.href = '/about'
  }


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
             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
           >
             <motion.span 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="block text-gradient bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent"
             >
               Glutisify Vietnam
             </motion.span>
           </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Cung cấp giải pháp thông minh cho doanh nghiệp
          </motion.p>

           {/* Modern CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.2 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
                 y: -3,
                 boxShadow: '0 20px 40px rgba(255, 255, 255, 0.15)',
                 borderColor: 'rgba(255, 255, 255, 0.5)'
               }}
               whileTap={{ scale: 0.95, y: 0 }}
               onClick={() => window.location.href = '/contact'}
               className="group relative overflow-hidden bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-2xl hover:from-white/20 hover:via-white/30 hover:to-white/20 transition-all duration-300 flex items-center gap-3 shadow-xl"
             >
               {/* Animated background shimmer */}
               <motion.div
                 animate={{
                   x: ['-100%', '100%'],
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity,
                   ease: "linear"
                 }}
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
               />
               
               {/* Icon with enhanced animation */}
               <motion.div
                 whileHover={{ 
                   scale: 1.15,
                   rotate: [0, -5, 5, 0]
                 }}
                 transition={{ duration: 0.3 }}
                 className="relative z-10"
               >
                 <Play size={18} className="drop-shadow-sm" />
               </motion.div>
               
               {/* Text with subtle animation */}
               <motion.span
                 whileHover={{ x: 2 }}
                 transition={{ duration: 0.2 }}
                 className="relative z-10 font-medium tracking-wide"
               >
                 Liên Hệ Ngay
               </motion.span>
               
               {/* Ripple effect */}
               <motion.div
                 initial={{ scale: 0, opacity: 0 }}
                 whileTap={{ 
                   scale: 1.5, 
                   opacity: [0, 0.2, 0],
                   transition: { duration: 0.4 }
                 }}
                 className="absolute inset-0 bg-white/20 rounded-2xl"
               />
             </motion.button>
           </motion.div>

        </motion.div>
      </div>

       {/* Modern Scroll Indicator */}
       <motion.button
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.6 }}
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
