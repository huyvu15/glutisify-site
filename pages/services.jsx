import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import PageHero from '../components/PageHero'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Dịch vụ - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Khám phá các dịch vụ công nghệ của Glutisify Vietnam: Phát triển Web, Ứng dụng Di động, Tích hợp Hệ thống, Dịch vụ Lao động và Tư vấn Công nghệ." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/services" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Dịch Vụ Của Chúng Tôi"
          subtitle="Giải pháp công nghệ toàn diện cho mọi nhu cầu kinh doanh"
          backgroundImage="url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')"
        />
        <Services />
        <Footer />
      </main>
    </>
  )
}
