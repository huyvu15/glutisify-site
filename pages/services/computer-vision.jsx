import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Camera, Image, CheckCircle, ArrowRight, Zap, Target, Scan, Monitor } from 'lucide-react'

export default function ComputerVisionPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    'Nhận dạng và phân loại hình ảnh',
    'Xử lý video real-time',
    'OCR và nhận dạng văn bản',
    'Phân tích cảm xúc và hành vi',
    'Tích hợp camera và sensor',
    'API và SDK tùy chỉnh'
  ]

  const technologies = [
    { name: 'OpenCV', description: 'Thư viện Computer Vision' },
    { name: 'TensorFlow', description: 'Framework AI của Google' },
    { name: 'PyTorch', description: 'Framework deep learning' },
    { name: 'YOLO', description: 'Object detection' },
    { name: 'Tesseract', description: 'OCR engine' },
    { name: 'MediaPipe', description: 'Media processing' }
  ]

  const applications = [
    {
      icon: Eye,
      title: 'Nhận dạng Hình ảnh',
      description: 'Phân tích và nhận dạng đối tượng trong hình ảnh'
    },
    {
      icon: Camera,
      title: 'Xử lý Video',
      description: 'Phân tích video real-time và tracking đối tượng'
    },
    {
      icon: Scan,
      title: 'OCR & Nhận dạng Văn bản',
      description: 'Trích xuất văn bản từ hình ảnh và tài liệu'
    },
    {
      icon: Monitor,
      title: 'Giám sát Thông minh',
      description: 'Hệ thống giám sát và phân tích hành vi'
    }
  ]

  return (
    <>
      <Head>
        <title>Computer Vision - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Dịch vụ Computer Vision chuyên nghiệp. Nhận dạng hình ảnh, xử lý video, OCR, phân tích cảm xúc với OpenCV, TensorFlow." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services/computer-vision" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 to-red-800">
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
                <Eye size={16} className="mr-2" />
                Computer Vision
              </motion.div>
              
              <h1 className="heading-xl mb-6">
                Thị giác{' '}
                <span className="text-gradient bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Máy tính
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Chúng tôi phát triển các giải pháp Computer Vision tiên tiến để nhận dạng, 
                phân tích và xử lý hình ảnh, video một cách thông minh.
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
                Tại sao chọn Computer Vision của chúng tôi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những giải pháp Computer Vision chính xác và hiệu quả.
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
                Ứng dụng Computer Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Các lĩnh vực ứng dụng Computer Vision trong thực tế.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
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
                Công nghệ Computer Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sử dụng những công nghệ Computer Vision tiên tiến nhất.
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
        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Sẵn sàng áp dụng Computer Vision?
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
                Liên hệ với chúng tôi để được tư vấn về giải pháp Computer Vision phù hợp với nhu cầu kinh doanh.
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
