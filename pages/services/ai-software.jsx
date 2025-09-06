import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cpu, Bot, CheckCircle, ArrowRight, Zap, Target, Users, Settings } from 'lucide-react'

export default function AISoftwarePage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Phát triển phần mềm AI tùy chỉnh',
    'Tích hợp AI vào hệ thống hiện có',
    'Chatbot và trợ lý ảo thông minh',
    'Xử lý ngôn ngữ tự nhiên (NLP)',
    'Computer Vision và nhận dạng hình ảnh',
    'Tự động hóa quy trình với AI'
  ]

  const technologies = [
    { name: 'OpenAI GPT', description: 'Mô hình ngôn ngữ AI' },
    { name: 'TensorFlow', description: 'Framework AI của Google' },
    { name: 'PyTorch', description: 'Framework deep learning' },
    { name: 'OpenCV', description: 'Computer Vision' },
    { name: 'NLTK', description: 'Xử lý ngôn ngữ tự nhiên' },
    { name: 'Rasa', description: 'Chatbot framework' }
  ]

  const applications = [
    {
      icon: Bot,
      title: 'Chatbot & Trợ lý ảo',
      description: 'Phát triển chatbot thông minh và trợ lý ảo cho khách hàng'
    },
    {
      icon: Brain,
      title: 'AI Tùy chỉnh',
      description: 'Xây dựng giải pháp AI phù hợp với nhu cầu kinh doanh cụ thể'
    },
    {
      icon: Target,
      title: 'Tự động hóa',
      description: 'Tự động hóa quy trình kinh doanh với công nghệ AI'
    },
    {
      icon: Users,
      title: 'Hỗ trợ Khách hàng',
      description: 'Hệ thống AI hỗ trợ khách hàng 24/7'
    }
  ]

  return (
    <>
      <Head>
        <title>AI Software Development - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ phát triển phần mềm AI chuyên nghiệp. Chatbot, trợ lý ảo, NLP, Computer Vision, tự động hóa quy trình." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/ai-software" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-emerald-800">
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
                AI Software Development
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Phát triển{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Phần mềm AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi phát triển các ứng dụng AI thông minh và chatbot để tự động hóa 
                quy trình kinh doanh và nâng cao trải nghiệm khách hàng.
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
                Tại sao chọn dịch vụ AI Software của chúng tôi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những giải pháp AI hiện đại và hiệu quả.
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
                Ứng dụng AI Software
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Các loại ứng dụng AI chúng tôi phát triển.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
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
                Công nghệ AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những công nghệ AI tiên tiến nhất hiện nay.
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
        <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng tích hợp AI vào doanh nghiệp?
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về giải pháp AI phù hợp với nhu cầu kinh doanh.
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
