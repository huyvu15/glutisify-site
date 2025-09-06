import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Code, CheckCircle, ArrowRight, Zap } from 'lucide-react'

export default function MobileAppPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Ứng dụng native cho iOS và Android',
    'Cross-platform với React Native',
    'Tối ưu hóa hiệu suất và trải nghiệm',
    'Tích hợp thanh toán và API',
    'App Store Optimization (ASO)',
    'Bảo trì và cập nhật thường xuyên'
  ]

  const platforms = [
    { name: 'iOS', description: 'Ứng dụng cho iPhone và iPad' },
    { name: 'Android', description: 'Ứng dụng cho thiết bị Android' },
    { name: 'React Native', description: 'Cross-platform development' },
    { name: 'Flutter', description: 'Google UI framework' },
    { name: 'Swift', description: 'Native iOS development' },
    { name: 'Kotlin', description: 'Native Android development' }
  ]

  return (
    <>
      <Head>
        <title>Ứng dụng Di động - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ phát triển ứng dụng di động chuyên nghiệp cho iOS và Android. React Native, Flutter, native development." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/mobile-app" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-green-800">
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          <div className="relative z-10 container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
              >
                <Smartphone size={16} className="mr-2" />
                Ứng dụng Di động
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Phát triển Ứng dụng{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Di động
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Paraline có kinh nghiệm rộng rãi trong việc phát triển ứng dụng công khai trên store 
                và ứng dụng doanh nghiệp.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                Tư vấn miễn phí
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Dịch vụ phát triển ứng dụng di động
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi chuyên phát triển ứng dụng di động chất lượng cao cho mọi nhu cầu.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Nền tảng chúng tôi hỗ trợ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Phát triển ứng dụng cho tất cả các nền tảng di động phổ biến.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-green-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Bắt đầu dự án ứng dụng di động của bạn
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về việc phát triển ứng dụng di động phù hợp.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Liên hệ ngay
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
