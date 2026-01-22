import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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
      description: 'Tốt nghiệp Đại học Cần Thơ, dày dặn kinh nghiệm outsource cho các đối tác lớn như Nhật Bản, Việt Nam',
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
      year: '2025',
      month: 'Tháng 6',
      title: 'Thành lập công ty',
      description: 'Thành lập Công ty phát triển phần mềm cho các đối tác tại Việt Nam với tầm nhìn trở thành tập đoàn công nghệ hàng đầu.',
    },
    {
      year: '2025',
      month: 'Tháng 9',
      title: 'Ra mắt sản phẩm đầu tiên',
      description: 'Ra mắt sản phẩm Dating-Where, tìm kiếm địa điểm hẹn hò lý tưởng cho người dùng Việt Nam, đánh dấu bước đầu thành công.',
    },
    {
      year: '2025',
      month: 'Tháng 10',
      title: 'Mốc 10.000 khách hàng',
      description: 'Đạt 10.000 khách hàng. Nhận doanh thu lớn từ IAA, IAP, khẳng định vị thế trong thị trường công nghệ.',
    },
  ]

  const coreValues = [
    {
      title: 'Khách hàng là trung tâm',
      description: 'Đặt nhu cầu và kỳ vọng của khách hàng là kim chỉ nam cho mọi hành động. Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Chất lượng vượt trội',
      description: 'Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất, đáp ứng và vượt trên mong đợi của khách hàng.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Đổi mới sáng tạo',
      description: 'Không ngừng nghiên cứu, phát triển và ứng dụng những công nghệ tiên tiến nhất để mang lại giá trị tối ưu cho khách hàng.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Tính chính trực',
      description: 'Trân trọng lời nói của mình. Lời nói đi đôi với hành động cụ thể, xây dựng niềm tin bền vững với khách hàng và đối tác.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Phát triển bền vững',
      description: 'Xây dựng môi trường làm việc công bằng, hiệu quả và tạo cơ hội phát triển cho tất cả các thành viên trong tổ chức.',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const achievements = [
    { number: '300+', label: 'Doanh nghiệp toàn cầu' },
    { number: '8+', label: 'Năm kinh nghiệm' },
    { number: '150+', label: 'Chuyên gia AI' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' },
  ]

  return (
    <section id="about" ref={ref} className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-50/20 to-transparent rounded-full" />
      </div>

      <div className="relative container-custom section-padding">
        {/* Hero Section - Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Với hơn{' '}
              <span className="relative inline-block">
                <span className="text-gradient">5 năm</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary-200/50 -z-10"
                />
              </span>{' '}
              kinh nghiệm
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              <p>
                Glutisify đã giúp <strong className="text-gray-900">300+ doanh nghiệp</strong> trên toàn cầu đạt được mục tiêu chuyển đổi số thông qua các giải pháp AI & Big Data tiên tiến.
              </p>
              <p>
                Đội ngũ <strong className="text-gray-900">150+ chuyên gia</strong> được chứng nhận quốc tế của chúng tôi tại Việt Nam cam kết mang đến những dự án chất lượng cao, đúng tiến độ và vượt trên mong đợi của khách hàng toàn cầu.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative p-10 md:p-12 bg-gradient-to-br from-primary-50 to-white rounded-3xl border border-primary-100 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
                Sứ mệnh
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Vì một Việt Nam<br />thịnh vượng
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Là tập đoàn công nghệ hàng đầu Việt Nam, Glutisify sở hữu hệ sinh thái mở rộng khác biệt, đáp ứng đầy đủ nhu cầu của hơn 300 doanh nghiệp với sứ mệnh "Vì một Việt Nam thịnh vượng".
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative p-10 md:p-12 bg-gradient-to-br from-accent-50 to-white rounded-3xl border border-accent-100 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-200/20 rounded-full translate-y-16 -translate-x-16" />
            <div className="relative z-10">
              <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4">
                Tầm nhìn
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Trở thành tập đoàn<br />công nghệ hàng đầu
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trở thành tập đoàn công nghệ hàng đầu Việt Nam và khu vực Đông Nam Á, dẫn đầu trong việc cung cấp giải pháp AI & Big Data cho các doanh nghiệp toàn cầu.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Development History - Vertical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
              Hành trình phát triển
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Những cột mốc quan trọng
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chặng đường xây dựng và khẳng định vị thế của Glutisify
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative px-4">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block rounded-full" />

            {/* Mobile Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 md:hidden rounded-full" />

            <div className="space-y-12 md:space-y-24">
              {developmentHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full z-10 -translate-x-1/2 shadow-lg shadow-primary-500/30 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>

                  {/* Content Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 relative group">
                      {/* Decorative corner */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:left-0' : 'left-0'} w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent rounded-tl-3xl rounded-br-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity`} />

                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-bold border border-primary-100">
                            {item.month}
                          </span>
                          <span className="text-2xl font-bold text-gray-300">
                            {item.year}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values - Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Giá trị cốt lõi
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Những giá trị định hướng
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kim chỉ nam cho mọi hoạt động và quyết định của chúng tôi, định hình văn hóa và cách chúng tôi phục vụ khách hàng.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />

                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section - Modern Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Đội ngũ lãnh đạo
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Những con người tài năng
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tâm huyết đứng sau sự thành công của Glutisify
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.1 + index * 0.15 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6 inline-block">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary-200 transition-colors duration-300">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-primary-600 font-semibold mb-4">
                    {member.position}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section - Text Only */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 md:p-16 border border-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center">
              Điểm mạnh của chúng tôi
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Chuyên Môn AI & Big Data</h4>
                <p className="text-gray-600 leading-relaxed">
                  Đội ngũ 150+ chuyên gia được chứng nhận quốc tế tại Việt Nam với kinh nghiệm sâu rộng trong các dự án công nghệ hàng đầu.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Chất Lượng Cao</h4>
                <p className="text-gray-600 leading-relaxed">
                  Cam kết chất lượng cao nhất trong mọi dự án, đúng tiến độ và vượt trên mong đợi của khách hàng toàn cầu.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Đúng Tiến Độ</h4>
                <p className="text-gray-600 leading-relaxed">
                  Giao dự án đúng hạn với kế hoạch chi tiết và quản lý chuyên nghiệp, đảm bảo hiệu quả tối đa.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Hỗ Trợ 24/7</h4>
                <p className="text-gray-600 leading-relaxed">
                  Đội ngũ hỗ trợ khách hàng toàn cầu 24/7 với kinh nghiệm sâu rộng, luôn sẵn sàng giải đáp mọi thắc mắc.
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default About
