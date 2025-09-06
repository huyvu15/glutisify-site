import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import PageHero from '../components/PageHero'
import GlobalPresence from '../components/GlobalPresence'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Liên hệ - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Liên hệ với Glutisify Vietnam để được tư vấn miễn phí về các dịch vụ công nghệ. Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/contact" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Liên Hệ Với Chúng Tôi"
          subtitle="Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ để được tư vấn miễn phí"
          backgroundImage="url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
        />
        <GlobalPresence />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
