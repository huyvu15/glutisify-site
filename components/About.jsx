import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cpu, 
  Gem, 
  Rocket, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Crown,
  Star,
  Award,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: Cpu,
      title: 'Chuyên Môn AI & Big Data',
      description: 'Đội ngũ 150+ chuyên gia được chứng nhận quốc tế tại Việt Nam',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Gem,
      title: 'Chất Lượng Cao',
      description: 'Cam kết chất lượng cao nhất trong mọi dự án, đúng tiến độ và vượt trên mong đợi',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Đúng Tiến Độ',
      description: 'Giao dự án đúng hạn với kế hoạch chi tiết và quản lý chuyên nghiệp',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ hỗ trợ khách hàng toàn cầu 24/7 với kinh nghiệm sâu rộng',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const teamMembers = [
    {
      name: 'Vũ Văn Huy',
      position: 'CEO - Chief Executive Officer',
      description: 'Tốt nghiệp Đại học Bách Khoa Hà Nội, 5+ năm kinh nghiệm tại các công ty công nghệ hàng đầu Việt Nam',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '5+ năm'
    },
    {
      name: 'Lê Thành Đạt',
      position: 'CTO - Chief Technology Officer',
      description: 'Thạc sĩ Công nghệ thông tin tại Úc, chuyên gia về AI và Machine Learning',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '3+ năm'
    },
    {
      name: 'Nguyễn Phúc Lịnh',
      position: 'CCO - Chief Commercial Officer',
      description: 'Cử nhân Kinh tế tại Melbourne, chuyên gia về phát triển thị trường và quan hệ khách hàng',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '2+ năm'
    }
  ]

  const visionMission = [
    {
      icon: Compass,
      title: 'Tầm Nhìn',
      description: 'Trở thành đối tác outsourcing AI & Big Data hàng đầu từ Việt Nam, được tin tưởng bởi các doanh nghiệp toàn cầu trong hành trình chuyển đổi số.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Sparkles,
      title: 'Sứ Mệnh',
      description: 'Mang đến giải pháp công nghệ tiên tiến, chất lượng cao với chi phí hợp lý, giúp doanh nghiệp tăng tốc đổi mới và cạnh tranh trong thời đại số.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Crown,
      title: 'Giá Trị Cốt Lõi',
      description: 'Chất lượng, sáng tạo, chuyên nghiệp và cam kết. Chúng tôi không ngừng nỗ lực mỗi ngày để đạt được mục tiêu và mang lại giá trị bền vững cho khách hàng.',
      color: 'from-amber-500 to-yellow-500'
    }
  ]

  const achievements = [
    '300+ doanh nghiệp toàn cầu',
    '8+ năm kinh nghiệm',
    '150+ chuyên gia AI',
    '24/7 hỗ trợ khách hàng',
    'Chất lượng quốc tế',
    'Đúng tiến độ giao hàng'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Về <span className="text-gradient">Glutisify</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Đối tác tin cậy trong lĩnh vực công nghệ với hơn 8 năm kinh nghiệm, giúp 300+ doanh nghiệp toàn cầu chuyển đổi số thành công.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Tầm nhìn, Sứ mệnh & Giá trị cốt lõi
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Định hướng và giá trị mà chúng tôi theo đuổi trong mọi hoạt động
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Đội ngũ lãnh đạo
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những con người tài năng đứng sau sự thành công của Glutisify
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-slate-100 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6 z-10"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white"
                    />
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  
                  {/* Experience badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -bottom-1 -right-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                  >
                    {member.experience}
                  </motion.div>
                </motion.div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 font-semibold mb-4 text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Social links placeholder */}
                  <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200 cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200 cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-md text-gray-900 mb-6">
              Câu chuyện của chúng tôi
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Với hơn 8 năm kinh nghiệm trong lĩnh vực outsourcing công nghệ, Glutisify đã giúp 300+ doanh nghiệp 
                trên toàn cầu đạt được mục tiêu chuyển đổi số thông qua các giải pháp AI & Big Data tiên tiến.
              </p>
              <p>
                Đội ngũ 150+ chuyên gia được chứng nhận quốc tế của chúng tôi tại Việt Nam cam kết mang đến những 
                dự án chất lượng cao, đúng tiến độ và vượt trên mong đợi của khách hàng toàn cầu.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Thành tựu nổi bật</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 btn-primary flex items-center gap-2"
            >
              Khám phá dịch vụ
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team working together"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-6 border border-slate-100"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-large p-6 border border-slate-100"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-500 mb-1">100%</div>
                <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-large p-6 border border-slate-100"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-1">50+</div>
                <div className="text-sm text-gray-600">Dự án thành công</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
