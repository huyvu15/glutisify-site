import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import PageHero from '../components/PageHero'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Giới thiệu - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Tìm hiểu về Glutisify Vietnam - Công ty công nghệ với đội ngũ chuyên nghiệp và kinh nghiệm quốc tế từ Nhật Bản và Úc." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/about" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Về Chúng Tôi"
          subtitle="Khám phá câu chuyện và đội ngũ đằng sau Glutisify Vietnam"
          backgroundImage="url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          compact
        />
        <About />
        <Footer />
      </main>
    </>
  )
}
