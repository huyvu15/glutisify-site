import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, CheckCircle, ArrowRight, Zap } from 'lucide-react'

export default function LaborServicePage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Đội ngũ chuyên gia giàu kinh nghiệm',
    'Làm việc tại văn phòng của chúng tôi',
    'Quản lý dự án chuyên nghiệp',
    'Báo cáo tiến độ thường xuyên',
    'Hỗ trợ kỹ thuật 24/7',
    'Bảo mật thông tin tuyệt đối'
  ]

  const services = [
    { name: 'Dedicated Teams', description: 'Đội ngũ chuyên dụng cho dự án' },
    { name: 'Staff Augmentation', description: 'Bổ sung nhân lực cho team hiện tại' },
    { name: 'Project Management', description: 'Quản lý dự án chuyên nghiệp' },
    { name: 'Technical Consulting', description: 'Tư vấn kỹ thuật chuyên sâu' },
    { name: 'Code Review', description: 'Đánh giá và cải thiện code' },
    { name: 'Training', description: 'Đào tạo nhân viên công nghệ' }
  ]

  return (
    <>
      <Head>
        <title>Dịch vụ Lao động - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ lao động công nghệ chuyên nghiệp. Đội ngũ chuyên gia, dedicated teams, staff augmentation, project management." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/labor-service" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800">
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
                <Users size={16} className="mr-2" />
                Dịch vụ Lao động
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Dịch vụ{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Lao động
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Khách hàng có thể xây dựng một đội ngũ riêng biệt theo yêu cầu của khách hàng 
                tại công ty chúng tôi.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
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
                Dịch vụ lao động công nghệ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cung cấp đội ngũ chuyên gia công nghệ chất lượng cao cho các dự án của bạn.
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

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Các loại hình dịch vụ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cung cấp nhiều loại hình dịch vụ lao động linh hoạt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-orange-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Cần đội ngũ chuyên gia công nghệ?
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về dịch vụ lao động phù hợp với dự án.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
