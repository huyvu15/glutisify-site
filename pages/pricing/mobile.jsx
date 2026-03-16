import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import PricingSection from '../../components/PricingSection'

export default function MobilePricingPage() {
    const tiers = [
        {
            name: "MVP",
            price: "45Tr+",
            description: "Nhanh chóng đưa sản phẩm của bạn ra thị trường để kiểm chứng.",
            features: [
                "Phát triển Cross-platform (iOS & Android)",
                "Tính năng cốt lõi (Core features)",
                "Thiết kế UI/UX theo template chuẩn",
                "Đưa app lên Store (App Store & Play Store)",
                "Bảo trì hệ thống 6 tháng"
            ],
            featured: false
        },
        {
            name: "Advanced",
            price: "85Tr+",
            description: "Ứng dụng chuyên nghiệp với các tính năng tương tác cao và quản lý phức tạp.",
            features: [
                "Thiết kế UI/UX độc quyền & Animation",
                "Tích hợp Push Notification thông minh",
                "Hệ thống phân tích hành vi người dùng",
                "Tăng cường bảo mật sinh trắc học",
                "Tích hợp API bên thứ ba (Map, Payment...)",
                "Hỗ trợ cập nhật phiên bản mới"
            ],
            featured: true
        },
        {
            name: "AI Integrated",
            price: "Liên hệ",
            description: "Ứng dụng đột phá tích hợp trí tuệ nhân tạo và xử lý dữ liệu lớn.",
            features: [
                "Tích hợp Computer Vision / NLP",
                "Hệ thống Recommendation Engine",
                "Xử lý dữ liệu thời gian thực (Real-time)",
                "Kiến trúc Cloud-native mở rộng linh hoạt",
                "Tư vấn lộ trình phát triển AI dài hạn",
                "Bàn giao toàn bộ mã nguồn & Tài liệu"
            ],
            featured: false
        }
    ]

    return (
        <>
            <Head>
                <title>Báo giá Ứng dụng Di động - Glutisify Vietnam</title>
                <meta name="description" content="Dịch vụ phát triển ứng dụng di động chuyên nghiệp, tích hợp trí tuệ nhân tạo và kiến trúc hiện đại." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />

                <PageHero
                    title="Báo Giá Ứng Dụng Di Động"
                    subtitle="Kiến tạo những ứng dụng di động mạnh mẽ, mượt mà và thông minh"
                    backgroundImage="url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop')"
                    compact
                />

                <PricingSection
                    title="Bảng giá dịch vụ app"
                    description="Lựa chọn gói phát triển ứng dụng phù hợp để bắt đầu hành trình chuyển đổi số trên thiết bị di động."
                    tiers={tiers}
                />

                <Footer />
            </main>
        </>
    )
}
