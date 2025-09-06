import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cpu, Database, Zap, CheckCircle, ArrowRight, Target, TrendingUp } from 'lucide-react'

export default function MachineLearningPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Mô hình AI tùy chỉnh cho doanh nghiệp',
    'Xử lý dữ liệu lớn với hiệu suất cao',
    'Dự đoán và phân tích xu hướng',
    'Tự động hóa quy trình kinh doanh',
    'Tích hợp API và hệ thống hiện có',
    'Bảo mật dữ liệu và tuân thủ quy định'
  ]

  const technologies = [
    { name: 'TensorFlow', description: 'Framework ML của Google' },
    { name: 'PyTorch', description: 'Framework ML của Facebook' },
    { name: 'Scikit-learn', description: 'Thư viện ML Python' },
    { name: 'Pandas', description: 'Xử lý dữ liệu' },
    { name: 'NumPy', description: 'Tính toán số học' },
    { name: 'Keras', description: 'API deep learning' }
  ]

  const applications = [
    {
      icon: Target,
      title: 'Dự đoán Kinh doanh',
      description: 'Phân tích xu hướng và dự đoán doanh thu, nhu cầu khách hàng'
    },
    {
      icon: TrendingUp,
      title: 'Tối ưu Hóa',
      description: 'Tự động hóa quy trình và tối ưu hóa hiệu suất hoạt động'
    },
    {
      icon: Database,
      title: 'Phân tích Dữ liệu',
      description: 'Khám phá insights từ dữ liệu lớn và phức tạp'
    },
    {
      icon: Brain,
      title: 'Nhận dạng Mẫu',
      description: 'Nhận diện và phân loại các mẫu trong dữ liệu'
    }
  ]

  return (
    <>
      <Head>
        <title>Machine Learning Development - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ phát triển Machine Learning chuyên nghiệp với TensorFlow, PyTorch. AI tùy chỉnh, xử lý dữ liệu lớn, dự đoán xu hướng." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/machine-learning" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-800">
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
                <Brain size={16} className="mr-2" />
                Machine Learning
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Phát triển{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Machine Learning
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi phát triển các mô hình AI và Machine Learning tùy chỉnh để giải quyết 
                các bài toán kinh doanh phức tạp và tối ưu hóa quy trình.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
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
                Tại sao chọn dịch vụ Machine Learning của chúng tôi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những giải pháp AI chất lượng cao với công nghệ tiên tiến nhất.
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

        {/* Applications Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Ứng dụng Machine Learning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Các lĩnh vực ứng dụng Machine Learning trong kinh doanh.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
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
                Công nghệ Machine Learning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những framework và thư viện ML hiện đại nhất.
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
        <section className="section-padding bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng áp dụng Machine Learning cho doanh nghiệp?
              </h2>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về giải pháp AI phù hợp với nhu cầu kinh doanh.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
