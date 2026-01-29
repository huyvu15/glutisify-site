import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Calendar, Tag, Star, Users, Award } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  const projects = [
    {
      id: 1,
      title: 'Phần mềm ký toán MIA',
      description: 'Giải pháp toàn diện cho việc quản lý nhân sự, tài chính và dự án của doanh nghiệp vừa và nhỏ.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Web Application',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      date: '2024 ',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 15
    },
    {
      id: 2,
      title: 'Ứng dụng Di động E-commerce',
      description: 'Ứng dụng mua sắm trực tuyến với tính năng thanh toán đa dạng và trải nghiệm người dùng tối ưu.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      date: '2025',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 8
    },
    {
      id: 3,
      title: 'Hệ thống IoT Giám sát',
      description: 'Giải pháp giám sát thông minh sử dụng công nghệ IoT để theo dõi và quản lý thiết bị từ xa.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      category: 'IoT Solution',
      technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React'],
      date: '2022',
      status: '`Completed`',
      link: '#',
      github: '#',
      rating: 4,
      clients: 3
    },
    {
      id: 4,
      title: 'Nền tảng Học tập Trực tuyến',
      description: 'Hệ thống học tập trực tuyến với video streaming, bài tập tương tác và theo dõi tiến độ học tập.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'E-Learning',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
      date: '2023',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 12
    },
    {
      id: 5,
      title: 'Dating-Where tìm nơi hẹn hò',
      description: 'Ứng dụng tìm kiếm địa điểm hẹn hò lý tưởng dựa trên sở thích và vị trí của người dùng.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'AI Solution',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      date: '2025',
      status: 'Completed',
      link: 'https://dating-where.glutisify.click',
      github: '#',
      rating: 5,
      clients: 6
    },
    {
      id: 6,
      title: 'Ứng dụng Tài chính Cá nhân',
      description: 'Ứng dụng quản lý tài chính cá nhân với tính năng phân tích chi tiêu và lập kế hoạch ngân sách.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Fintech',
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Chart.js'],
      date: '2024',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 4,
      clients: 20
    },
    {
      id: 7,
      title: 'Hệ thống Tìm kiếm Nhân tài AI',
      description: 'Hệ thống HR Tech tích hợp Chatbot AI giúp sàng lọc CV từ nhiều nguồn và tương tác trực tiếp để tìm ứng viên phù hợp nhất.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'AI Solution',
      technologies: ['Python', 'NLP', 'React', 'MongoDB'],
      date: '2025',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 10
    },
    {
      id: 8,
      title: 'Market Insights MAS',
      description: 'Hệ thống đa tác vụ thu thập, xử lý và phân tích dữ liệu thị trường từ các sàn TMĐT (Shopee, TikTok) để đưa ra insight sản phẩm.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Data Analytics',
      technologies: ['Python', 'LangChain', 'Selenium', 'PostgreSQL'],
      date: '2026',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 5
    },
    {
      id: 9,
      title: 'Hệ thống Chia sẻ Dữ liệu Bảo mật',
      description: 'Giải pháp lưu trữ đám mây an toàn, cho phép phân quyền chi tiết và chia sẻ file mã hóa giữa các phòng ban.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Cloud Storage',
      technologies: ['AWS S3', 'Node.js', 'React', 'AES-256'],
      date: '2023',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 4,
      clients: 12
    },
    {
      id: 10,
      title: 'Hệ thống Quản lý Hiệu thuốc',
      description: 'Thiết kế cơ sở dữ liệu và phần mềm quản lý kho, đơn thuốc, và lịch sử bệnh nhân tối ưu cho chuỗi nhà thuốc.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      category: 'Healthcare',
      technologies: ['SQL Server', '.NET Core', 'Angular', 'Redis'],
      date: '2023',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 25
    },
    {
      id: 11,
      title: 'Shopee Analytics Dashboard',
      description: 'Công cụ theo dõi và phân tích chi tiết hành vi mua sắm, xu hướng giá cả và hiệu quả gian hàng trên Shopee.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'E-commerce Analytics',
      technologies: ['Python', 'Django', 'React', 'D3.js'],
      date: '2024',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 4,
      clients: 8
    },
    {
      id: 12,
      title: 'Memory Lane - Lưu trữ Kỉ niệm',
      description: 'Nền tảng mạng xã hội riêng tư giúp lưu trữ hình ảnh, video kỉ niệm và tích hợp tính năng nhắc nhở sự kiện quan trọng.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      category: 'Social',
      technologies: ['React Native', 'Firebase', 'Node.js', 'GCP'],
      date: '2024',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 5,
      clients: 100
    },
    {
      id: 13,
      title: 'Hệ thống Email Automation Blog',
      description: 'Giải pháp tự động hóa Marketing, tự động gửi email thông báo newsletter chuyên nghiệp mỗi khi có bài blog mới.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      category: 'Automation',
      technologies: ['Node.js', 'SendGrid', 'RabbitMQ', 'Next.js'],
      date: '2024',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 4,
      clients: 40
    },
    {
      id: 14,
      title: 'News Aggregator Thông minh',
      description: 'Ứng dụng đọc tin tức tổng hợp ngẫu nhiên nhưng được cá nhân hóa theo sở thích người đọc sử dụng thuật toán AI.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'News Aggregator',
      technologies: ['Flutter', 'Python', 'FastAPI', 'Elasticsearch'],
      date: '2024',
      status: 'Completed',
      link: '#',
      github: '#',
      rating: 4,
      clients: 15
    }
  ]

  const categories = ['All', 'Web Application', 'Mobile App', 'IoT Solution', 'E-Learning', 'AI Solution', 'Fintech', 'Data Analytics', 'Healthcare', 'Automation', 'Cloud Storage', 'E-commerce Analytics', 'Social', 'News Aggregator']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const displayedProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div ref={ref} className="container-custom">
        {/* Header */}
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Portfolio{' '}
            <span className="text-gradient">ấn tượng</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá những dự án tiêu biểu mà chúng tôi đã thực hiện, 
            thể hiện khả năng và kinh nghiệm trong nhiều lĩnh vực khác nhau.
          </p>
        </motion.div> */}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeFilter === category
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-slate-200'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden card-hover border border-slate-100">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star size={12} className="text-yellow-500 mr-1" />
                    <span className="text-xs font-medium text-gray-700">{project.rating}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3 text-xs font-medium text-gray-700 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3 text-xs font-medium text-gray-700 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <Github size={12} />
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-primary-600">
                      <Tag size={14} className="mr-1" />
                      {project.category}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {project.clients} khách hàng
                    </div>
                    <div className="flex items-center">
                      <Star size={14} className="mr-1 text-yellow-500" />
                      {project.rating}/5
                    </div>
                  </div>

                  {/* View Project Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                  >
                    <Eye size={16} className="mr-2" />
                    Xem chi tiết
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        {visibleCount < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="btn-primary text-lg px-8 py-4"
            >
              Xem thêm dự án
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
