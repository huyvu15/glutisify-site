import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Award, Globe, CheckCircle, ArrowRight, Eye, Heart, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: Users,
      title: 'Chuyên Môn AI & Big Data',
      description: 'Đội ngũ 150+ chuyên gia được chứng nhận quốc tế tại Việt Nam',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Target,
      title: 'Chất Lượng Cao',
      description: 'Cam kết chất lượng cao nhất trong mọi dự án, đúng tiến độ và vượt trên mong đợi',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Award,
      title: 'Đúng Tiến Độ',
      description: 'Giao dự án đúng hạn với kế hoạch chi tiết và quản lý chuyên nghiệp',
      color: 'from-brand-teal to-brand-blue'
    },
    {
      icon: Globe,
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ hỗ trợ khách hàng toàn cầu 24/7 với kinh nghiệm sâu rộng',
      color: 'from-primary-600 to-accent-500'
    }
  ]

  const teamMembers = [
    {
      name: 'Nguyễn Văn A',
      position: 'CEO - Chief Executive Officer',
      description: 'Tốt nghiệp Đại học Tokyo, 10+ năm kinh nghiệm tại các công ty công nghệ hàng đầu Nhật Bản',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '10+ năm'
    },
    {
      name: 'Trần Thị B',
      position: 'CTO - Chief Technology Officer',
      description: 'Thạc sĩ Công nghệ thông tin tại Úc, chuyên gia về AI và Machine Learning',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '8+ năm'
    },
    {
      name: 'Lê Văn C',
      position: 'CCO - Chief Commercial Officer',
      description: 'Cử nhân Kinh tế tại Melbourne, chuyên gia về phát triển thị trường và quan hệ khách hàng',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '7+ năm'
    }
  ]

  const visionMission = [
    {
      icon: Eye,
      title: 'Tầm Nhìn',
      description: 'Trở thành đối tác outsourcing AI & Big Data hàng đầu từ Việt Nam, được tin tưởng bởi các doanh nghiệp toàn cầu trong hành trình chuyển đổi số.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Heart,
      title: 'Sứ Mệnh',
      description: 'Mang đến giải pháp công nghệ tiên tiến, chất lượng cao với chi phí hợp lý, giúp doanh nghiệp tăng tốc đổi mới và cạnh tranh trong thời đại số.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Lightbulb,
      title: 'Giá Trị Cốt Lõi',
      description: 'Chất lượng, sáng tạo, chuyên nghiệp và cam kết. Chúng tôi không ngừng nỗ lực mỗi ngày để đạt được mục tiêu và mang lại giá trị bền vững cho khách hàng.',
      color: 'from-brand-teal to-brand-blue'
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
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            
          </motion.div> */}
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Đối Tác Tin Cậy Từ Trái Tim Việt Nam
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Với hơn 8 năm kinh nghiệm trong lĩnh vực outsourcing công nghệ, Glutisify đã giúp 300+ doanh nghiệp trên toàn cầu đạt được mục tiêu chuyển đổi số.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="heading-md text-gray-900 mb-6">
              Tầm nhìn, Sứ mệnh & Giá trị cốt lõi
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="heading-md text-gray-900 mb-6">
              Đội ngũ lãnh đạo
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-slate-100"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {member.experience}
                  </div>
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-md text-gray-900 mb-8">
              Câu chuyện của chúng tôi
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Với hơn 8 năm kinh nghiệm trong lĩnh vực outsourcing công nghệ, Glutisify đã giúp 300+ doanh nghiệp 
                trên toàn cầu đạt được mục tiêu chuyển đổi số thông qua các giải pháp AI & Big Data tiên tiến.
              </p>
              <p>
                Đội ngũ 150+ chuyên gia được chứng nhận quốc tế của chúng tôi tại Việt Nam cam kết mang đến những 
                dự án chất lượng cao, đúng tiến độ và vượt trên mong đợi của khách hàng toàn cầu.
              </p>
              <p>
                Chúng tôi tin rằng với sự kết hợp giữa kinh nghiệm quốc tế và hiểu biết sâu sắc về thị trường 
                trong nước, chúng tôi có thể tạo ra những giá trị bền vững cho khách hàng.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Thành tựu nổi bật</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 btn-primary flex items-center gap-2"
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
