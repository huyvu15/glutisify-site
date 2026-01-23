import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import {
  Globe, Smartphone, Server, Users, Terminal, Cloud, Shield, Lightbulb, Wrench,
  Clock, Zap, Award, Headphones,
  MessageSquare, PenTool, Code2, LifeBuoy,
  CheckCircle2, ArrowRight, Play, HelpCircle
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Phát triển Web',
      description: 'Chúng tôi áp dụng công nghệ mới để phát triển Web trên nhiều nền tảng khác nhau, nhằm mang lại trải nghiệm người dùng tốt nhất.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Phát triển Ứng dụng Di động',
      description: 'Paraline có kinh nghiệm rộng rãi trong việc phát triển ứng dụng công khai trên store và ứng dụng doanh nghiệp.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Tích hợp Hệ thống',
      description: 'Chúng tôi cung cấp giải pháp và dịch vụ từ các công ty như HP, IBM, Cisco, Microsoft, Oracle và Symantec.',
      features: ['System Integration', 'Data Migration', 'API Development', 'Cloud Integration']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dịch vụ Lao động',
      description: 'Khách hàng có thể xây dựng một đội ngũ riêng biệt theo yêu cầu của khách hàng tại công ty chúng tôi.',
      features: ['Dedicated Teams', 'Staff Augmentation', 'Project Management', 'Technical Consulting']
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Phát triển Phần mềm',
      description: 'Chúng tôi chuyên phát triển các giải pháp phần mềm tùy chỉnh phù hợp với nhu cầu cụ thể của doanh nghiệp.',
      features: ['Custom Software', 'Legacy Modernization', 'Microservices', 'DevOps Implementation']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Giải pháp Đám mây',
      description: 'Cung cấp các dịch vụ đám mây toàn diện để tối ưu hóa hiệu suất và giảm chi phí vận hành.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring & Analytics', 'Security & Compliance']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bảo mật & An ninh mạng',
      description: 'Bảo vệ hệ thống và dữ liệu của bạn với các giải pháp bảo mật tiên tiến và chuyên nghiệp.',
      features: ['Security Audit', 'Penetration Testing', 'Data Encryption', 'Compliance Management']
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Tư vấn Công nghệ',
      description: 'Tư vấn chiến lược công nghệ và chuyển đổi số để tối ưu hóa quy trình kinh doanh.',
      features: ['Digital Transformation', 'Technology Strategy', 'Process Optimization', 'ROI Analysis']
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Bảo trì & Hỗ trợ',
      description: 'Dịch vụ bảo trì và hỗ trợ 24/7 để đảm bảo hệ thống hoạt động ổn định và liên tục.',
      features: ['24/7 Support', 'System Maintenance', 'Performance Monitoring', 'Emergency Response']
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Tiết kiệm thời gian',
      description: 'Quy trình làm việc tối ưu giúp giảm 50% thời gian phát triển dự án',
      stat: '50%'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tăng hiệu suất',
      description: 'Cải thiện hiệu suất hệ thống lên đến 300% với công nghệ tiên tiến',
      stat: '300%'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Chất lượng cao',
      description: 'Đảm bảo chất lượng sản phẩm với quy trình kiểm thử nghiêm ngặt',
      stat: '100%'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ hỗ trợ chuyên nghiệp sẵn sàng 24/7 cho mọi vấn đề',
      stat: '24/7'
    }
  ]

  const stats = [
    { number: '500+', label: 'Dự án hoàn thành' },
    { number: '98%', label: 'Khách hàng hài lòng' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' },
    { number: '5+', label: 'Năm kinh nghiệm' }
  ]

  const faqs = [
    {
      question: 'Thời gian phát triển một dự án web thường mất bao lâu?',
      answer: 'Thời gian phát triển phụ thuộc vào độ phức tạp của dự án. Thông thường, một website cơ bản mất 2-4 tuần, website phức tạp mất 2-3 tháng.'
    },
    {
      question: 'Bạn có cung cấp dịch vụ bảo trì sau khi hoàn thành dự án không?',
      answer: 'Có, chúng tôi cung cấp dịch vụ bảo trì và hỗ trợ 24/7 sau khi dự án hoàn thành với các gói dịch vụ linh hoạt.'
    },
    {
      question: 'Chi phí phát triển ứng dụng di động là bao nhiêu?',
      answer: 'Chi phí phụ thuộc vào tính năng và độ phức tạp. Chúng tôi cung cấp báo giá miễn phí sau khi tư vấn chi tiết về yêu cầu.'
    },
    {
      question: 'Bạn có hỗ trợ chuyển đổi dữ liệu từ hệ thống cũ không?',
      answer: 'Có, chúng tôi có kinh nghiệm trong việc di chuyển và chuyển đổi dữ liệu từ các hệ thống legacy sang công nghệ mới.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Tư vấn & Phân tích',
      description: 'Chúng tôi lắng nghe và phân tích nhu cầu của bạn để đưa ra giải pháp tối ưu nhất.'
    },
    {
      step: '02',
      icon: <PenTool className="w-6 h-6" />,
      title: 'Thiết kế & Lập kế hoạch',
      description: 'Tạo ra thiết kế chi tiết và lập kế hoạch phát triển phù hợp với yêu cầu.'
    },
    {
      step: '03',
      icon: <Code2 className="w-6 h-6" />,
      title: 'Phát triển & Triển khai',
      description: 'Thực hiện phát triển với chất lượng cao và triển khai một cách chuyên nghiệp.'
    },
    {
      step: '04',
      icon: <LifeBuoy className="w-6 h-6" />,
      title: 'Hỗ trợ & Bảo trì',
      description: 'Cung cấp hỗ trợ liên tục và bảo trì để đảm bảo hệ thống hoạt động ổn định.'
    }
  ]

  return (
    <section id="services" ref={ref} className="bg-gray-50 relative overflow-hidden py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 text-primary-600 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="space-y-3 pt-6 border-t border-gray-50">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Quy trình làm việc</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Đơn giản & Hiệu quả
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quy trình chuyên nghiệp để đảm bảo chất lượng và tiến độ dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100 -z-10" />

            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-24 h-24 bg-white border-4 border-primary-100 group-hover:border-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full -mr-2 -mt-2 shadow-md">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Tại sao chọn chúng tôi</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Giá trị mang lại
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 mb-4">
                  {benefit.stat}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Giải đáp những thắc mắc phổ biến của khách hàng
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng bắt đầu dự án của bạn?
            </h3>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-primary-100">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm ra giải pháp phù hợp nhất
              cho nhu cầu kinh doanh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Liên hệ tư vấn
                </motion.div>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
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
