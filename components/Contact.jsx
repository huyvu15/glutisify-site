import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  User,
  Building
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      details: ['585 Vũ Tông Phan, Thanh Xuân', 'Hà Nội, Việt Nam'],
      color: 'text-[#009245]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      details: ['+84 827590543', '+84 827390544'],
      color: 'text-[#009245]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@glutisify.vn', 'support@glutisify.vn'],
      color: 'text-[#009245]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      details: ['Thứ 2 - Thứ 6: 8:00 - 18:00', 'Thứ 7: 8:00 - 12:00'],
      color: 'text-[#009245]',
      bgColor: 'bg-green-50'
    }
  ]

  const services = [
    'Phát triển Web',
    'Ứng dụng Di động',
    'Tích hợp Hệ thống',
    'Dịch vụ Lao động',
    'Tư vấn Công nghệ',
    'Khác'
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!resp.ok) {
        throw new Error('Gửi thất bại, vui lòng thử lại.')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
      }, 3000)
    } catch (err) {
      setSubmitError(String(err.message || err))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#009245] mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hãy liên hệ với chúng tôi để được tư vấn miễn phí và tìm ra giải pháp phù hợp nhất cho nhu cầu kinh doanh của bạn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Thông tin liên hệ</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Map */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-soft border border-slate-200 relative group">
              <div className="relative w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8976694565785!2d105.7994!3d21.0001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjQiTiAxMDXCsDQ3JzU3LjgiRQ!5e0!3m2!1svi!2svn!4v1640995200000!5m2!1svi!2svn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Glutisify Vietnam Location"
                />

                {/* Map Overlay with Company Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-[280px]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#009245] to-[#00b355] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-[16px] mb-1">Glutisify Vietnam</h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                        585 Vũ Tông Phan, Thanh Xuân<br />
                        Hà Nội, Việt Nam
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#009245] text-white text-[13px] font-bold px-5 py-2 rounded-lg hover:bg-[#007a3a] transition-all"
                        onClick={() => window.open('https://maps.google.com/?q=585+Vũ+Tông+Phan,+Thanh+Xuân,+Hà+Nội', '_blank')}
                      >
                        Chỉ đường
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 border-2 border-[#009245]/10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-[#009245] mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Cảm ơn bạn!</h4>
                  <p className="text-gray-600">Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                      {submitError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all"
                        placeholder="Nhập email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Công ty</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all"
                        placeholder="Tên công ty"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Dịch vụ quan tâm</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Chọn dịch vụ</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tin nhắn *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#009245] rounded-xl focus:outline-none transition-all resize-none"
                      placeholder="Mô tả yêu cầu của bạn..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, backgroundColor: '#e59400' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#fba919] text-white font-black py-4 px-12 rounded-full transition-all text-lg uppercase tracking-widest shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'ĐANG GỬI...' : 'GỬI TIN NHẮN'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
