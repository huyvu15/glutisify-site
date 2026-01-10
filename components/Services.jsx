import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      title: 'Phát triển Web',
      description: 'Chúng tôi áp dụng công nghệ mới để phát triển Web trên nhiều nền tảng khác nhau, nhằm mang lại trải nghiệm người dùng tốt nhất.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility']
    },
    {
      title: 'Phát triển Ứng dụng Di động',
      description: 'Paraline có kinh nghiệm rộng rãi trong việc phát triển ứng dụng công khai trên store và ứng dụng doanh nghiệp.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization']
    },
    {
      title: 'Tích hợp Hệ thống',
      description: 'Chúng tôi cung cấp giải pháp và dịch vụ từ các công ty như HP, IBM, Cisco, Microsoft, Oracle và Symantec.',
      features: ['System Integration', 'Data Migration', 'API Development', 'Cloud Integration']
    },
    {
      title: 'Dịch vụ Lao động',
      description: 'Khách hàng có thể xây dựng một đội ngũ riêng biệt theo yêu cầu của khách hàng tại công ty chúng tôi.',
      features: ['Dedicated Teams', 'Staff Augmentation', 'Project Management', 'Technical Consulting']
    },
    {
      title: 'Phát triển Phần mềm',
      description: 'Chúng tôi chuyên phát triển các giải pháp phần mềm tùy chỉnh phù hợp với nhu cầu cụ thể của doanh nghiệp.',
      features: ['Custom Software', 'Legacy Modernization', 'Microservices', 'DevOps Implementation']
    },
    {
      title: 'Giải pháp Đám mây',
      description: 'Cung cấp các dịch vụ đám mây toàn diện để tối ưu hóa hiệu suất và giảm chi phí vận hành.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring & Analytics', 'Security & Compliance']
    },
    {
      title: 'Bảo mật & An ninh mạng',
      description: 'Bảo vệ hệ thống và dữ liệu của bạn với các giải pháp bảo mật tiên tiến và chuyên nghiệp.',
      features: ['Security Audit', 'Penetration Testing', 'Data Encryption', 'Compliance Management']
    },
    {
      title: 'Tư vấn Công nghệ',
      description: 'Tư vấn chiến lược công nghệ và chuyển đổi số để tối ưu hóa quy trình kinh doanh.',
      features: ['Digital Transformation', 'Technology Strategy', 'Process Optimization', 'ROI Analysis']
    },
    {
      title: 'Bảo trì & Hỗ trợ',
      description: 'Dịch vụ bảo trì và hỗ trợ 24/7 để đảm bảo hệ thống hoạt động ổn định và liên tục.',
      features: ['24/7 Support', 'System Maintenance', 'Performance Monitoring', 'Emergency Response']
    }
  ]

  const benefits = [
    {
      title: 'Tiết kiệm thời gian',
      description: 'Quy trình làm việc tối ưu giúp giảm 50% thời gian phát triển dự án',
      stat: '50%'
    },
    {
      title: 'Tăng hiệu suất',
      description: 'Cải thiện hiệu suất hệ thống lên đến 300% với công nghệ tiên tiến',
      stat: '300%'
    },
    {
      title: 'Chất lượng cao',
      description: 'Đảm bảo chất lượng sản phẩm với quy trình kiểm thử nghiêm ngặt',
      stat: '100%'
    },
    {
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
    <section id="services" ref={ref} className="bg-gray-50">
      <div className="container-custom section-padding">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-gray-500 flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Quy trình làm việc
            </h3>
            <p className="text-gray-600 text-sm">
              Quy trình chuyên nghiệp để đảm bảo chất lượng và tiến độ dự án
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Tại sao chọn chúng tôi
            </h3>
            <p className="text-gray-600 text-sm">
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho khách hàng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                  {benefit.stat}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Câu hỏi thường gặp
            </h3>
            <p className="text-gray-600 text-sm">
              Những câu hỏi phổ biến về dịch vụ của chúng tôi
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-primary-600 rounded-xl p-10 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Cần tư vấn về dự án của bạn?
          </h3>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm ra giải pháp phù hợp nhất
            cho nhu cầu kinh doanh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2.5 px-7 rounded-lg transition-colors text-sm"
            >
              Liên hệ tư vấn
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-2.5 px-7 rounded-lg transition-all text-sm"
            >
              Xem portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
