import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lightbulb, Target, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-[#009245]" />,
      title: 'Khách hàng trọng tâm',
      description: 'Mọi giải pháp đều được thiết kế dựa trên nhu cầu thực tế và mục tiêu tăng trưởng của đối tác.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Chất lượng quốc tế',
      description: 'Cam kết tiêu chuẩn chất lượng khắt khe từ kinh nghiệm làm việc tại các thị trường Nhật Bản, Úc.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Đổi mới sáng tạo',
      description: 'Tiên phong ứng dụng công nghệ AI và Big Data vào quy trình vận hành doanh nghiệp.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Đồng hành bền vững',
      description: 'Xây dựng mối quan hệ đối tác tin cậy, cùng phát triển và tạo ra giá trị thực cho xã hội.'
    }
  ]

  const leaders = [
    {
      name: 'Huy Vũ',
      role: 'CEO - Founder',
      desc: 'Chuyên gia Giải pháp tại BK Cloud. 5+ năm kinh nghiệm kiến trúc hệ thống quy mô lớn.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy'
    },
    {
      name: 'Giàu Lê',
      role: 'CTO',
      desc: 'Chuyên gia Công nghệ. Dày dặn kinh nghiệm triển khai dự án cho đối tác Nhật Bản & Global.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giau'
    },
    {
      name: 'Văn Tuấn',
      role: 'CCO',
      desc: 'Quản lý vận hành. Chuyên gia tư vấn chiến lược và phát triển kinh doanh công nghệ.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Glutisify <span className="text-[#009245]">Solution Architect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Chúng tôi kiến tạo các giải pháp công nghệ hiện đại, giúp doanh nghiệp tối ưu hóa vận hành và bứt phá doanh thu trong kỷ nguyên số. Với đội ngũ chuyên gia dày dặn kinh nghiệm quốc tế, Glutisify cam kết mang lại giá trị thực chất và bền vững.
          </motion.p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-[#009245]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Leaders Section */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Đội ngũ sáng lập</h3>
            <p className="text-gray-500">Tâm huyết và năng lực dẫn dắt sự thành công của khách hàng.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-gray-100 group-hover:border-[#009245] transition-all duration-300 transform group-hover:rotate-3 shadow-lg">
                    <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                    Expert
                  </div>
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-1">{leader.name}</h4>
                <div className="text-[#009245] font-bold text-sm mb-4 uppercase tracking-wider">{leader.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed italic">"{leader.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Summary */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid md:grid-cols-2 gap-8 relative z-10"
          >
            {/* Vision Card */}
            <div className="relative group bg-gradient-to-br from-white to-[#009245]/5 p-10 md:p-14 rounded-[2.5rem] border border-[#009245]/10 shadow-sm hover:shadow-xl hover:border-[#009245]/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#009245]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-[#009245] font-black uppercase tracking-[0.2em] text-xs mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-[#009245] mr-3"></span>
                Tầm nhìn
              </h3>
              <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Trở thành <span className="text-[#009245]">Solution Architect</span> hàng đầu, dẫn dắt xu hướng ứng dụng AI & Data toàn diện cho doanh nghiệp Việt.
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative group bg-gradient-to-br from-white to-blue-50/50 p-10 md:p-14 rounded-[2.5rem] border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
                Sứ mệnh
              </h3>
              <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Số hóa và tối ưu <span className="text-blue-600">quy trình kinh doanh</span>, nâng tầm năng lực cạnh tranh cho mọi đối tác bằng công nghệ.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
