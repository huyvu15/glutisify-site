import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Glutisify Vietnam - Cung cấp sản phẩm chất lượng quốc tế</title>
        <meta 
          name="description" 
          content="Glutisify Vietnam - Cung cấp các sản phẩm và dịch vụ chất lượng quốc tế tại Việt Nam. Phát triển web, ứng dụng di động, tích hợp hệ thống và dịch vụ lao động chuyên nghiệp. Được thành lập bởi những thành viên đã học tập và làm việc tại Nhật Bản và Úc." 
        />
        <meta 
          name="keywords" 
          content="Glutisify, Vietnam, công nghệ, phát triển web, ứng dụng di động, tích hợp hệ thống, dịch vụ lao động, chất lượng quốc tế, Nhật Bản, Úc, React, Node.js, MongoDB, AWS, React Native, Firebase" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Glutisify Vietnam" />
        <meta name="language" content="vi" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glutisify.com.vn/" />
        <meta property="og:title" content="Glutisify Vietnam - Cung cấp sản phẩm chất lượng quốc tế" />
        <meta property="og:description" content="Cung cấp các sản phẩm và dịch vụ chất lượng quốc tế tại Việt Nam. Phát triển web, ứng dụng di động, tích hợp hệ thống và dịch vụ lao động chuyên nghiệp." />
        <meta property="og:image" content="https://glutisify.com.vn/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Glutisify Vietnam" />
        <meta property="og:locale" content="vi_VN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://glutisify.com.vn/" />
        <meta property="twitter:title" content="Glutisify Vietnam - Cung cấp sản phẩm chất lượng quốc tế" />
        <meta property="twitter:description" content="Cung cấp các sản phẩm và dịch vụ chất lượng quốc tế tại Việt Nam. Phát triển web, ứng dụng di động, tích hợp hệ thống và dịch vụ lao động chuyên nghiệp." />
        <meta property="twitter:image" content="https://glutisify.com.vn/og-image.jpg" />
        <meta property="twitter:creator" content="@glutisifyvn" />
        <meta property="twitter:site" content="@glutisifyvn" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://glutisify.com.vn/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Glutisify Vietnam",
              "url": "https://glutisify.com.vn",
              "logo": "https://glutisify.com.vn/logo.png",
              "description": "Cung cấp các sản phẩm và dịch vụ chất lượng quốc tế tại Việt Nam",
              "foundingDate": "2018",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Đường ABC",
                "addressLocality": "Quận 1",
                "addressRegion": "TP.HCM",
                "addressCountry": "VN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-123-456-789",
                "contactType": "customer service",
                "email": "info@glutisify.com.vn",
                "availableLanguage": ["Vietnamese", "English", "Japanese"]
              },
              "sameAs": [
                "https://facebook.com/glutisifyvietnam",
                "https://twitter.com/glutisifyvn",
                "https://linkedin.com/company/glutisify-vietnam",
                "https://instagram.com/glutisifyvn"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Phát triển Web",
                  "description": "Phát triển website và ứng dụng web với công nghệ hiện đại"
                },
                {
                  "@type": "Service", 
                  "name": "Phát triển Ứng dụng Di động",
                  "description": "Phát triển ứng dụng di động cho iOS và Android"
                },
                {
                  "@type": "Service",
                  "name": "Tích hợp Hệ thống",
                  "description": "Tích hợp và tối ưu hóa hệ thống công nghệ thông tin"
                },
                {
                  "@type": "Service",
                  "name": "Dịch vụ Lao động",
                  "description": "Cung cấp đội ngũ chuyên gia công nghệ"
                }
              ],
              "employee": {
                "@type": "Person",
                "name": "Đội ngũ Glutisify",
                "jobTitle": "Chuyên gia Công nghệ",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Glutisify Vietnam"
                }
              }
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </main>
    </>
  )
}
