import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Tin tức - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Cập nhật tin tức mới nhất về công nghệ, dự án và hoạt động của Glutisify Vietnam." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/news" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Tin Tức & Cập Nhật"
          subtitle="Theo dõi những tin tức mới nhất về công nghệ và hoạt động của chúng tôi"
          backgroundImage="url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        />
        
        {/* News Content Placeholder */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="heading-lg text-gray-900 mb-6">
                Tin tức đang được cập nhật
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chúng tôi đang chuẩn bị nội dung tin tức hấp dẫn. Hãy quay lại sau để xem những cập nhật mới nhất!
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  )
}
