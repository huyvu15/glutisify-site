import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import PageHero from '../components/PageHero'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Dự án - Glutisify Vietnam</title>
        <meta 
          name="description" 
          content="Xem portfolio dự án của Glutisify Vietnam - Các dự án công nghệ tiêu biểu trong lĩnh vực Web, Mobile, IoT, AI và Fintech." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/projects" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero 
          title="Dự Án Của Chúng Tôi"
          subtitle="Khám phá những dự án tiêu biểu thể hiện khả năng và kinh nghiệm"
          backgroundImage="url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
