import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Database, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp, PieChart, Activity } from 'lucide-react'

export default function BigDataPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Xử lý dữ liệu lớn với tốc độ cao',
    'Phân tích dữ liệu real-time',
    'Báo cáo và dashboard trực quan',
    'Tích hợp nhiều nguồn dữ liệu',
    'Bảo mật và backup dữ liệu',
    'Hỗ trợ 24/7 và bảo trì'
  ]

  const technologies = [
    { name: 'Apache Spark', description: 'Xử lý dữ liệu phân tán' },
    { name: 'Hadoop', description: 'Hệ sinh thái Big Data' },
    { name: 'Kafka', description: 'Streaming dữ liệu real-time' },
    { name: 'Elasticsearch', description: 'Tìm kiếm và phân tích' },
    { name: 'MongoDB', description: 'Database NoSQL' },
    { name: 'Tableau', description: 'Visualization dữ liệu' }
  ]

  const solutions = [
    {
      icon: BarChart3,
      title: 'Phân tích Dữ liệu',
      description: 'Khám phá insights từ dữ liệu lớn và phức tạp'
    },
    {
      icon: TrendingUp,
      title: 'Báo cáo Kinh doanh',
      description: 'Dashboard và báo cáo trực quan cho quản lý'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Trực quan hóa dữ liệu với biểu đồ và đồ thị'
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Phân tích dữ liệu theo thời gian thực'
    }
  ]

  return (
    <>
      <Head>
        <title>Big Data Analytics - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ Big Data Analytics chuyên nghiệp với Apache Spark, Hadoop. Xử lý dữ liệu lớn, phân tích real-time, báo cáo trực quan." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/big-data" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-800">
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
                <Database size={16} className="mr-2" />
                Big Data Analytics
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Phân tích{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Big Data
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi cung cấp giải pháp Big Data Analytics toàn diện để xử lý, phân tích 
                và trực quan hóa dữ liệu lớn cho doanh nghiệp.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
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
                Tại sao chọn dịch vụ Big Data của chúng tôi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những giải pháp Big Data hiệu quả và đáng tin cậy.
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

        {/* Solutions Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Giải pháp Big Data
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Các dịch vụ Big Data Analytics chuyên nghiệp.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
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
                Công nghệ Big Data
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những công nghệ Big Data hàng đầu thế giới.
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
        <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng khai thác sức mạnh của Big Data?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về giải pháp Big Data phù hợp với doanh nghiệp.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
