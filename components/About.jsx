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
      name: 'Huy Vũ',
      position: 'CEO - Chief Executive Officer',
      description: 'Tốt nghiệp Đại học Bách Khoa Hà Nội, 5+ năm kinh nghiệm tại các công ty công nghệ hàng đầu Việt Nam',
      avatar: '/images/team/vu-van-huy.jpg',
      experience: '5+ năm'
    },
    {
      name: 'Giàu Lê',
      position: 'CTO - Chief Technology Officer',
      description: 'Tốt nghiệp Đại học Cần Thơ  , dày dặn kinh nghiệm outsource cho các đối tác lớn như Nhật Bản, Việt Nam',
      avatar: '/images/team/le-thanh-dat.jpg',
      experience: '3+ năm'
    },
    {
      name: 'Văn Tuấn',
      position: 'CCO - Chief Commercial Officer',
      description: 'Tốt nghiệp Đại học Bách Khoa Hà Nội, kinh nghiệm phát triển kinh doanh và quản lý dự án công nghệ',
      avatar: '/images/team/nguyen-phuc-linh.jpg',
      experience: '2+ năm'
    }
  ]

  const developmentHistory = [
    {
      year: '2010',
      title: 'Thành lập công ty',
      description: 'Thành lập Công ty phát triển phần mềm cho các đối tác Mỹ, Australia, Singapore…',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2014',
      title: 'Ra mắt sản phẩm',
      description: 'Ra mắt sản phẩm phần mềm quản lý bán hàng KiotViet',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2016',
      title: 'Mốc 10.000 khách hàng',
      description: 'Đạt 10.000 khách hàng. Nhận 2 triệu USD đầu tư từ quỹ đầu tư Seedcom và CVM017',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2019',
      title: 'Mốc 50.000 khách hàng',
      description: 'Đạt 50.000 khách hàng. Nhận được khoản đầu tư 6 triệu USD từ Jungle Ventures và Traveloka',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2021',
      title: 'Mốc 150.000 khách hàng',
      description: 'Cán mốc 150.000 khách hàng sử dụng. Nhận được khoản đầu tư 45 triệu USD từ quỹ đầu tư quốc tế KKR',
      color: 'from-indigo-500 to-violet-500'
    }
  ]

  const missionStatement = {
    title: 'Sứ mệnh',
    subtitle: 'Vì một Việt Nam thịnh vượng',
    description: 'Là tập đoàn công nghệ hàng đầu Việt Nam, Glutisify sở hữu hệ sinh thái mở rộng khác biệt, đáp ứng đầy đủ nhu cầu của hơn 300 doanh nghiệp với sứ mệnh "Vì một Việt Nam thịnh vượng".',
    color: 'from-blue-600 to-indigo-600'
  }

  const visionStatement = {
    title: 'Tầm nhìn',
    subtitle: 'Trở thành tập đoàn công nghệ hàng đầu',
    description: 'Trở thành tập đoàn công nghệ hàng đầu Việt Nam và khu vực Đông Nam Á, dẫn đầu trong việc cung cấp giải pháp AI & Big Data cho các doanh nghiệp toàn cầu.',
    color: 'from-purple-600 to-pink-600'
  }

  const coreValues = [
    {
      icon: Users,
      title: 'Khách hàng là trung tâm',
      description: 'Đặt nhu cầu và kỳ vọng của khách hàng là kim chỉ nam cho mọi hành động. Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Chất lượng vượt trội',
      description: 'Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất, đáp ứng và vượt trên mong đợi của khách hàng.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Đổi mới sáng tạo',
      description: 'Không ngừng nghiên cứu, phát triển và ứng dụng những công nghệ tiên tiến nhất để mang lại giá trị tối ưu cho khách hàng.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CheckCircle,
      title: 'Tính chính trực',
      description: 'Trân trọng lời nói của mình. Lời nói đi đôi với hành động cụ thể, xây dựng niềm tin bền vững với khách hàng và đối tác.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Phát triển bền vững',
      description: 'Xây dựng môi trường làm việc công bằng, hiệu quả và tạo cơ hội phát triển cho tất cả các thành viên trong tổ chức.',
      color: 'from-indigo-500 to-violet-500'
    }
  ]

  const awards = [
    {
      title: 'Sao Khuê 2015,2016,2017',
      subtitle: 'Ngành phần mềm và dịch vụ CNTT Việt Nam',
      icon: Star
    },
    {
      title: 'Top 50 Doanh nghiệp CNTT hàng đầu Việt Nam 2018',
      subtitle: 'Công nghệ thông tin',
      icon: Award
    },
    {
      title: 'TOP 10 Sản phẩm – Dịch vụ Tin Dùng Việt Nam 2023',
      subtitle: 'Dịch vụ công nghệ',
      icon: Crown
    },
    {
      title: 'Hiệp hội các nhà bán lẻ Việt Nam khuyên dùng',
      subtitle: 'Giải pháp bán lẻ',
      icon: CheckCircle
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

        {/* Features Grid
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
        </div> */}

        {/* Development History Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Lịch sử phát triển
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hành trình phát triển và những cột mốc quan trọng của Glutisify
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full hidden lg:block" />
            
            <div className="space-y-8">
              {developmentHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4`}
                        >
                          <span className="text-white font-bold text-lg">{item.year}</span>
                        </motion.div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg`}
                    />
                  </div>
                  
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${missionStatement.color} opacity-5`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-24 h-24 bg-gradient-to-r ${missionStatement.color} rounded-3xl flex items-center justify-center mx-auto mb-8`}
                >
                  <Compass className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {missionStatement.title}
                </h3>
                
                <h4 className="text-2xl font-semibold text-primary-600 mb-6">
                  "{missionStatement.subtitle}"
                </h4>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {missionStatement.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${visionStatement.color} opacity-5`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-24 h-24 bg-gradient-to-r ${visionStatement.color} rounded-3xl flex items-center justify-center mx-auto mb-8`}
                >
                  <Globe className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {visionStatement.title}
                </h3>
                
                <h4 className="text-2xl font-semibold text-accent-600 mb-6">
                  {visionStatement.subtitle}
                </h4>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {visionStatement.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Giá trị cốt lõi
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {coreValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden w-full max-w-sm"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-all duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
