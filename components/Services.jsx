import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Smartphone, 
  Database, 
  Users, 
  Code, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: Globe,
      title: 'Phát triển Web',
      description: 'Chúng tôi áp dụng công nghệ mới để phát triển Web trên nhiều nền tảng khác nhau, nhằm mang lại trải nghiệm người dùng tốt nhất.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Phát triển Ứng dụng Di động',
      description: 'Paraline có kinh nghiệm rộng rãi trong việc phát triển ứng dụng công khai trên store và ứng dụng doanh nghiệp.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Database,
      title: 'Tích hợp Hệ thống',
      description: 'Chúng tôi cung cấp giải pháp và dịch vụ từ các công ty như HP, IBM, Cisco, Microsoft, Oracle và Symantec.',
      features: ['System Integration', 'Data Migration', 'API Development', 'Cloud Integration'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Dịch vụ Lao động',
      description: 'Khách hàng có thể xây dựng một đội ngũ riêng biệt theo yêu cầu của khách hàng tại công ty chúng tôi.',
      features: ['Dedicated Teams', 'Staff Augmentation', 'Project Management', 'Technical Consulting'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Code,
      title: 'Phát triển Phần mềm',
      description: 'Chúng tôi chuyên phát triển các giải pháp phần mềm tùy chỉnh phù hợp với nhu cầu cụ thể của doanh nghiệp.',
      features: ['Custom Software', 'Legacy Modernization', 'Microservices', 'DevOps Implementation'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Cloud,
      title: 'Giải pháp Đám mây',
      description: 'Cung cấp các dịch vụ đám mây toàn diện để tối ưu hóa hiệu suất và giảm chi phí vận hành.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring & Analytics', 'Security & Compliance'],
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Tư vấn & Phân tích',
      description: 'Chúng tôi lắng nghe và phân tích nhu cầu của bạn để đưa ra giải pháp tối ưu nhất.'
    },
    {
      step: '02',
      title: 'Thiết kế & Lập kế hoạch',
      description: 'Tạo ra thiết kế chi tiết và lập kế hoạch phát triển phù hợp với yêu cầu.'
    },
    {
      step: '03',
      title: 'Phát triển & Triển khai',
      description: 'Thực hiện phát triển với chất lượng cao và triển khai một cách chuyên nghiệp.'
    },
    {
      step: '04',
      title: 'Hỗ trợ & Bảo trì',
      description: 'Cung cấp hỗ trợ liên tục và bảo trì để đảm bảo hệ thống hoạt động ổn định.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200"
          >
            <Zap size={16} className="mr-2" />
            Dịch vụ của chúng tôi
          </motion.div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Giải pháp công nghệ{' '}
            <span className="text-gradient">toàn diện</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ từ phát triển web, ứng dụng di động 
            đến tích hợp hệ thống và tư vấn chuyên môn.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`${service.bgColor} rounded-3xl p-8 h-full border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-large`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 mb-20 border border-slate-100"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Quy trình làm việc của chúng tôi
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tuân thủ quy trình làm việc chuyên nghiệp để đảm bảo chất lượng và tiến độ dự án.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-accent-200 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              <Star size={16} className="mr-2" />
              Tư vấn miễn phí
            </motion.div>
            
            <h3 className="heading-md mb-4">
              Cần tư vấn về dự án của bạn?
            </h3>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm ra giải pháp phù hợp nhất 
              cho nhu cầu kinh doanh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-lg"
              >
                Liên hệ tư vấn
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200"
              >
                Xem portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
