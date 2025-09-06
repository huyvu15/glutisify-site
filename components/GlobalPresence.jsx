import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Users, Building, Globe } from 'lucide-react'

const GlobalPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    {
      number: '88',
      label: 'Branches & Representative Offices',
      color: 'text-blue-500',
      icon: Building,
      position: 'top-left'
    },
    {
      number: '1.100+',
      label: 'Global Clients',
      color: 'text-green-500',
      icon: Users,
      position: 'bottom-left'
    },
    {
      number: '33.000+',
      label: 'Employees',
      color: 'text-blue-700',
      icon: Users,
      position: 'top-right'
    },
    {
      number: '30',
      label: 'Countries & Territories',
      color: 'text-orange-500',
      icon: Globe,
      position: 'bottom-right'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 leading-tight"
          >
            Being There{' '}
            <span className="text-green-500">Wherever</span>,{' '}
            <span className="text-orange-500">Whenever</span>{' '}
            You Need Us
          </motion.h2>

          {/* Global Map Section */}
          <div className="relative max-w-4xl mx-auto mb-16">
            {/* Central Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-80 h-80 mx-auto mb-8"
            >
              {/* Globe Background */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-full border-4 border-blue-200 flex items-center justify-center relative overflow-hidden">
                {/* Dotted Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 320 320">
                    {/* Horizontal lines */}
                    <line x1="0" y1="80" x2="320" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="0" y1="160" x2="320" y2="160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="0" y1="240" x2="320" y2="240" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                    
                    {/* Vertical lines */}
                    <line x1="80" y1="0" x2="80" y2="320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="160" y1="0" x2="160" y2="320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="240" y1="0" x2="240" y2="320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                  </svg>
                </div>

                {/* Location Pins */}
                <div className="absolute top-16 left-20 w-3 h-3 bg-blue-700 rounded-full"></div>
                <div className="absolute top-24 right-16 w-3 h-3 bg-blue-700 rounded-full"></div>
                <div className="absolute bottom-20 left-24 w-3 h-3 bg-blue-700 rounded-full"></div>
                <div className="absolute bottom-16 right-20 w-3 h-3 bg-blue-700 rounded-full"></div>
                <div className="absolute top-32 left-1/2 w-3 h-3 bg-blue-700 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-700 rounded-full"></div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path d="M 80 64 Q 160 100 240 96" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 96 240 Q 160 200 224 240" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 80 64 Q 160 160 96 240" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </div>
            </motion.div>

            {/* Stats around the globe */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`absolute ${
                  stat.position === 'top-left' ? 'top-0 left-0' :
                  stat.position === 'bottom-left' ? 'bottom-0 left-0' :
                  stat.position === 'top-right' ? 'top-0 right-0' :
                  'bottom-0 right-0'
                } text-center max-w-48`}
              >
                <div className="flex flex-col items-center">
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-2`} />
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-700 font-medium text-center leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors duration-200"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explore Our Global Delivery Model
              <span className="ml-2">&gt;</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalPresence
