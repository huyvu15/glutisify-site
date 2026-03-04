import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Danh sách các danh mục cập nhật theo phong cách mới
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'quang-cao', name: 'Quảng cáo' },
    { id: 'e-commerce', name: 'E-Commerce' },
    { id: 'branding', name: 'Branding' },
    { id: 'cong-nghe', name: 'Công nghệ AI' },
  ];

  // Dữ liệu tin tức cập nhật theo phong cách Mega Digital
  const newsItems = [
    {
      id: 1,
      title: "Hiểu bản chất để chạy quảng cáo hiệu quả",
      excerpt: "Từ chia sẻ của các chuyên gia, hiểu bản chất để làm gì cũng dễ. Áp dụng vào chạy quảng cáo. Tất cả quảng cáo (Facebook, Google...)",
      category: "Quảng cáo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      slug: "hieu-ban-chat-quang-cao"
    },
    {
      id: 2,
      title: "Xu hướng TikTok 2024 các doanh nghiệp không thể bỏ qua!",
      excerpt: "Cùng với quá trình chuyển mình nhanh chóng của đời sống xã hội, TikTok đã trở thành một trong những nền tảng mạng xã hội bùng nổ nhất.",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      slug: "xu-huong-tiktok-2024"
    },
    {
      id: 3,
      title: "Tối ưu chiến lược kinh doanh bằng 10 mô hình hành vi khách hàng",
      excerpt: "Để có thể giữ chân khách hàng, tạo dựng mối quan hệ lâu dài và nâng cao doanh thu, việc đưa ra các sản phẩm phù hợp là vô cùng quan trọng.",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1432888497205-40f29248a315?q=80&w=2070&auto=format&fit=crop",
      slug: "toi-uu-chien-luoc-kinh-doanh"
    },
    {
      id: 4,
      title: "Sức mạnh của Storytelling trong xây dựng thương hiệu",
      excerpt: "Kể chuyện không chỉ dành cho trẻ em. Trong kinh doanh, storytelling là công cụ mạnh mẽ để kết nối cảm xúc với khách hàng.",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2070&auto=format&fit=crop",
      slug: "suc-manh-storytelling"
    },
    {
      id: 5,
      title: "Google Ads vs Facebook Ads: Đâu là lựa chọn cho SME?",
      excerpt: "So sánh chi tiết hai nền tảng quảng cáo lớn nhất hiện nay để giúp doanh nghiệp nhỏ tối ưu hóa ngân sách marketing.",
      category: "Quảng cáo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      slug: "google-vs-facebook-ads"
    },
    {
      id: 6,
      title: "Tương lai của E-commerce: Kết hợp AI để cá nhân hóa trải nghiệm",
      excerpt: "Trí tuệ nhân tạo đang thay đổi cách chúng ta mua sắm trực tuyến. Khám phá các xu hướng cá nhân hóa mới nhất.",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
      slug: "tuong-lai-ecommerce-ai"
    }
  ];

  return (
    <>
      <Head>
        <title>Bài viết & Chia sẻ - Glutisify Vietnam</title>
        <meta
          name="description"
          content="Cập nhật tin tức, kiến thức về AI, Marketing và E-commerce từ Glutisify Vietnam."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />

        <div className="pt-24 pb-12">
          <PageHero
            title="Bài viết"
            subtitle="Chia sẻ kiến thức, xu hướng và kinh nghiệm thực chiến"
            backgroundImage="url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop')"
          />
        </div>

        {/* Blog Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-gray-100 pb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${activeCategory === category.name
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 border border-gray-200 hover:border-primary-400 hover:text-primary-600'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {newsItems
                .filter(item => activeCategory === 'Tất cả' || item.category === activeCategory)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <Link href={`/news/${item.slug}`} className="group relative block aspect-[16/16] mb-6 overflow-hidden bg-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Category Badge - Added rounding */}
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest z-10 rounded-lg">
                        {item.category}
                      </div>
                    </Link>

                    <div className="flex flex-col flex-grow">
                      <h3 className="text-[22px] font-black text-gray-900 leading-[1.2] mb-3 group-hover:text-primary-600 transition-colors">
                        <Link href={`/news/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text-gray-500 text-[15px] leading-relaxed mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto">
                        <Link href={`/news/${item.slug}`} className="inline-block text-[#009245] font-extrabold text-[13px] tracking-widest uppercase hover:opacity-80 transition-all border-b-2 border-transparent hover:border-[#009245]">
                          XEM BÀI VIẾT
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {newsItems.filter(item => activeCategory === 'Tất cả' || item.category === activeCategory).length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Chưa có bài viết nào trong danh mục này.</p>
              </div>
            )}

            {/* Pagination Button */}
            <div className="mt-20 flex justify-center">
              <button className="border-2 border-gray-900 text-gray-900 font-black py-4 px-12 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest shadow-lg">
                Xem thêm bài viết
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}