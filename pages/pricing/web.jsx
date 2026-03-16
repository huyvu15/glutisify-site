import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import PricingSection from '../../components/PricingSection'

export default function WebPricingPage() {
    const tiers = [
        {
            name: "Startup",
            price: "15Tr+",
            description: "Phù hợp cho các doanh nghiệp mới bắt đầu xây dựng hiện diện trực tuyến.",
            features: [
                "Giao diện chuẩn SEO, Mobile",
                "Tích hợp CMS dễ quản lý",
                "Chứng chỉ bảo mật SSL miễn phí",
                "Kết nối MXH & Google Maps",
                "Bảo hành kỹ thuật 12 tháng"
            ],
            featured: false
        },
        {
            name: "Professional",
            price: "35Tr+",
            description: "Dành cho doanh nghiệp muốn tối ưu chuyển đổi và trải nghiệm người dùng.",
            features: [
                "Thiết kế UI/UX độc quyền",
                "Tích hợp AI Chatbot cơ bản",
                "Tăng tốc độ tải trang (PageSpeed 90+)",
                "Hệ thống thanh toán trực tuyến",
                "Quản lý đơn hàng & Khách hàng",
                "Hỗ trợ kỹ thuật 24/7"
            ],
            featured: true
        },
        {
            name: "Enterprise",
            price: "Liên hệ",
            description: "Hệ thống quy mô lớn, tích hợp sâu kiến trúc Solution Architect.",
            features: [
                "Kiến trúc Microservices cao cấp",
                "Tích hợp hệ thống ERP/CRM",
                "Hệ thống đề xuất AI cá nhân hóa",
                "Bảo mật đa tầng & Backup tự động",
                "Tư vấn giải pháp Solution Architect",
                "Đào tạo vận hành chuyên sâu"
            ],
            featured: false
        }
    ]

    return (
        <>
            <Head>
                <title>Báo giá Thiết kế Web - Glutisify Vietnam</title>
                <meta name="description" content="Khám phá các gói dịch vụ thiết kế website chuyên nghiệp tích hợp AI tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />

                <PageHero
                    title="Báo Giá Thiết Kế Web"
                    subtitle="Giải pháp website hiện đại, tối ưu SEO và tích hợp trí tuệ nhân tạo"
                    backgroundImage="url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')"
                    compact
                />

                <PricingSection
                    title="Bảng giá dịch vụ"
                    description="Chúng tôi cung cấp các gói dịch vụ linh hoạt, phù hợp với mọi quy mô và nhu cầu tăng trưởng của doanh nghiệp."
                    tiers={tiers}
                />

                <Footer />
            </main>
        </>
    )
}
