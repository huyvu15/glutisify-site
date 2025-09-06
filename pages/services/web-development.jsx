import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Code, Smartphone, Database, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export default function WebDevelopmentPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Responsive Design cho mọi thiết bị',
    'Tối ưu hóa SEO và Performance',
    'Bảo mật cao và bảo hành trọn đời',
    'Hỗ trợ 24/7 và cập nhật thường xuyên',
    'Tích hợp API và hệ thống bên thứ 3',
    'Giao diện thân thiện và dễ sử dụng'
  ]

  const technologies = [
    { name: 'React', description: 'Thư viện JavaScript hiện đại' },
    { name: 'Next.js', description: 'Framework React với SSR' },
    { name: 'Node.js', description: 'Backend JavaScript' },
    { name: 'MongoDB', description: 'Database NoSQL' },
    { name: 'AWS', description: 'Cloud hosting' },
    { name: 'TailwindCSS', description: 'CSS framework' }
  ]

  return (
    <>
      <Head>
        <title>Phát triển Web - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ phát triển website chuyên nghiệp với React, Next.js, Node.js. Responsive design, SEO optimization, bảo mật cao." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/web-development" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Simple Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
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
                <Globe size={16} className="mr-2" />
                Phát triển Web
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Phát triển Website{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Chuyên nghiệp
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi áp dụng công nghệ mới để phát triển Web trên nhiều nền tảng khác nhau, 
                nhằm mang lại trải nghiệm người dùng tốt nhất.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
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
                Tại sao chọn dịch vụ của chúng tôi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những website chất lượng cao với công nghệ tiên tiến nhất.
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

        {/* Technologies Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Công nghệ chúng tôi sử dụng
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những công nghệ hiện đại và phổ biến nhất hiện nay.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng bắt đầu dự án website của bạn?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và báo giá chi tiết.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
