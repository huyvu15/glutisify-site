import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, Server, Shield, CheckCircle, ArrowRight, Zap, Database, Globe, Lock } from 'lucide-react'

export default function CloudAIPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Triển khai AI trên đám mây',
    'Scalability tự động theo nhu cầu',
    'Bảo mật dữ liệu cao cấp',
    'Chi phí tối ưu và linh hoạt',
    'Backup và disaster recovery',
    'Monitoring và analytics 24/7'
  ]

  const technologies = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Google Cloud', description: 'Google Cloud Platform' },
    { name: 'Azure', description: 'Microsoft Azure' },
    { name: 'Docker', description: 'Containerization' },
    { name: 'Kubernetes', description: 'Container orchestration' },
    { name: 'Terraform', description: 'Infrastructure as Code' }
  ]

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Di chuyển hệ thống AI lên đám mây một cách an toàn'
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Thiết lập hạ tầng đám mây cho AI và ML'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Bảo mật và tuân thủ các tiêu chuẩn quốc tế'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Quản lý và xử lý dữ liệu trên đám mây'
    }
  ]

  return (
    <>
      <Head>
        <title>Cloud AI Infrastructure - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ Cloud AI Infrastructure chuyên nghiệp. Triển khai AI trên AWS, Google Cloud, Azure. Scalability, bảo mật, chi phí tối ưu." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/cloud-ai" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-600 to-blue-800">
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
                <Cloud size={16} className="mr-2" />
                Cloud AI Infrastructure
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Hạ tầng{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                  Cloud AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi cung cấp giải pháp hạ tầng đám mây toàn diện để triển khai và vận hành 
                các ứng dụng AI với hiệu suất cao và chi phí tối ưu.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-sky-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
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
                Tại sao chọn Cloud AI Infrastructure?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hạ tầng đám mây mang lại hiệu suất cao và chi phí tối ưu cho các ứng dụng AI.
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
                Dịch vụ Cloud AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Các dịch vụ hạ tầng đám mây chuyên nghiệp cho AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Nền tảng Cloud
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những nền tảng đám mây hàng đầu thế giới.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sky-600 to-blue-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng triển khai AI trên đám mây?
              </h2>
              <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về giải pháp Cloud AI phù hợp với doanh nghiệp.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-sky-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
