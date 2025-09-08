import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Link from 'next/link'
import { useState } from 'react'

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Danh sách các danh mục
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'ai', name: 'Công nghệ AI' },
    { id: 'bigdata', name: 'Big Data' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'event', name: 'Sự kiện' },
    { id: 'award', name: 'Giải thưởng' },
    { id: 'service', name: 'Dịch vụ mới' },
    { id: 'iot', name: 'IoT' },
  ];
  // Dữ liệu tin tức
  const newsItems = [
    {
      id: 2,
      title: "Dự án phân tích dữ liệu lớn cho tập đoàn bán lẻ hàng đầu Việt Nam",
      excerpt: "Glutisify vừa hoàn thành dự án xây dựng hệ thống phân tích dữ liệu lớn giúp tối ưu chuỗi cung ứng cho một trong những tập đoàn bán lẻ lớn nhất Việt Nam, giúp giảm 40% thời gian xử lý đơn hàng.",
      date: "28/08/2025",
      category: "Big Data",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
      author: "Vũ Văn Huy",
      readTime: "7 phút",
      slug: "retail-big-data-project"
    },
    {
      id: 3,
      title: "Glutisify mở rộng dịch vụ cloud computing với đối tác quốc tế",
      excerpt: "Chúng tôi vừa ký kết hợp tác chiến lược với các nhà cung cấp cloud hàng đầu để mở rộng dịch vụ và giảm chi phí cho khách hàng. Dịch vụ mới đáp ứng nhu cầu xử lý dữ liệu khổng lồ từ IoT và AI.",
      date: "15/08/2025",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      author: "Lê Thanh Đạt",
      readTime: "6 phút",
      slug: "cloud-partnership-expansion"
    },
    {
      id: 4,
      title: "Workshop: Xây dựng hệ thống Machine Learning trong doanh nghiệp vừa và nhỏ",
      excerpt: "Glutisify tổ chức workshop miễn phí hướng dẫn các doanh nghiệp vừa và nhỏ áp dụng Machine Learning vào quy trình kinh doanh. Sự kiện đã thu hút hơn 200 doanh nghiệp tham gia và nhận được phản hồi tích cực.",
      date: "10/08/2025",
      category: "Sự kiện",
      image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1783&auto=format&fit=crop",
      author: "Nguyễn Phúc Linh",
      readTime: "4 phút",
      slug: "ml-workshop-smes"
    },
    {
      id: 6,
      title: "Ra mắt dịch vụ tư vấn chuyển đổi số toàn diện cho doanh nghiệp",
      excerpt: "Dịch vụ mới của Glutisify cung cấp giải pháp chuyển đổi số từ A-Z cho doanh nghiệp với chi phí tối ưu và hiệu quả cao. Giải pháp này đã giúp nhiều doanh nghiệp tăng hiệu suất làm việc lên 50%.",
      date: "25/07/2025",
      category: "Dịch vụ mới",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop",
      author: "Lê Thanh Đạt",
      readTime: "5 phút",
      slug: "digital-transformation-service"
    },
    {
      id: 8,
      title: "Báo cáo xu hướng công nghệ 2025: AI, Blockchain và Quantum Computing dẫn đầu",
      excerpt: "Glutisify vừa công bố báo cáo về xu hướng công nghệ 2025, trong đó nhấn mạnh vai trò của AI, Blockchain và Quantum Computing trong việc định hình tương lai công nghệ toàn cầu.",
      date: "10/07/2025",
      category: "Báo cáo",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1740&auto=format&fit=crop",
      author: "Vũ Văn Huy",
      readTime: "10 phút",
      slug: "tech-trends-2025"
    },
    {
      id: 9,
      title: "Glutisify mở văn phòng mới tại Singapore, mở rộng thị trường Đông Nam Á",
      excerpt: "Để đáp ứng nhu cầu ngày càng tăng từ khách hàng khu vực, Glutisify chính thức khai trương văn phòng mới tại Singapore, đánh dấu bước tiến quan trọng trong chiến lược mở rộng thị trường.",
      date: "01/07/2025",
      category: "Mở rộng",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1935&auto=format&fit=crop",
      author: "Lê Thanh Đạt",
      readTime: "4 phút",
      slug: "singapore-expansion"
    }
  ];

  return (
    <>
      <Head>
        <title>Tin tức công nghệ - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Cập nhật tin tức mới nhất về AI, Big Data, Cloud Computing và các dự án công nghệ của Glutisify Vietnam." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/news" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Tin Tức & Cập Nhật"
          subtitle="Theo dõi những tin tức mới nhất về công nghệ và hoạt động của chúng tôi"
          backgroundImage="url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        />
        
        {/* News Content */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Tin Tức <span className="text-blue-600">Mới Nhất</span>
              </h2>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((category) => (
                  <button 
                    key={category.id}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      activeCategory === category.name 
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems
                  .filter(item => activeCategory === 'Tất cả' || item.category === activeCategory)
                  .map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-3 rounded-full text-xs font-semibold shadow-md">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.date}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link href={`/news/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.author}</span>
                        <Link href={`/news/${item.slug}`} className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center group">
                          Đọc tiếp
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-16 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm">
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                    3
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  )
}