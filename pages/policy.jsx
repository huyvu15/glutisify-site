import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LegalLayout from '../components/LegalLayout'

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "Thu thập thông tin",
            content: [
                "Chúng tôi thu thập thông tin khi bạn đăng ký trên trang web của chúng tôi, đăng nhập vào tài khoản, thực hiện mua hàng, tham gia cuộc thi và/hoặc khi bạn đăng xuất.",
                "Thông tin được thu thập bao gồm tên, địa chỉ email, số điện thoại và thông tin thẻ tín dụng của bạn."
            ]
        },
        {
            title: "Sử dụng thông tin",
            content: [
                "Bất kỳ thông tin nào chúng tôi thu thập từ bạn có thể được sử dụng để:",
                "– Cá nhân hóa trải nghiệm của bạn và đáp ứng nhu cầu cá nhân của bạn.",
                "– Cung cấp nội dung quảng cáo tùy chỉnh.",
                "– Cải thiện trang web của chúng tôi.",
                "– Cải thiện dịch vụ khách hàng và nhu cầu hỗ trợ của bạn.",
                "– Liên lạc với bạn qua email.",
                "– Quản lý một cuộc thi, khuyến mãi hoặc khảo sát."
            ]
        },
        {
            title: "Bảo mật thương mại điện tử",
            content: [
                "Chúng tôi là chủ sở hữu duy nhất của thông tin được thu thập trên trang web này. Thông tin cá nhân của bạn sẽ không được bán, trao đổi, chuyển nhượng hoặc cung cấp cho bất kỳ công ty nào khác vì bất kỳ lý do gì mà không có sự đồng ý của bạn, ngoại trừ khi cần thiết để đáp ứng yêu cầu và/hoặc giao dịch, ví dụ như để vận chuyển một đơn hàng."
            ]
        },
        {
            title: "Tiết lộ cho bên thứ ba",
            content: [
                "Chúng tôi không bán, trao đổi, hoặc chuyển giao cho các bên bên ngoài các thông tin cá nhân của bạn. Điều này không bao gồm các bên thứ ba đáng tin cậy hỗ trợ chúng tôi trong việc vận hành trang web hoặc thực hiện công việc kinh doanh của chúng tôi, miễn là các bên này đồng ý giữ bí mật thông tin này."
            ]
        },
        {
            title: "Bảo vệ thông tin",
            content: [
                "Chúng tôi triển khai một loạt các biện pháp bảo mật để duy trì sự an toàn cho thông tin cá nhân của bạn. Chúng tôi sử dụng mã hóa hiện đại để bảo vệ thông tin nhạy cảm được truyền trực tuyến. Chúng tôi cũng bảo vệ thông tin của bạn ngoại tuyến."
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Chính sách bảo mật - Glutisify Vietnam</title>
                <meta name="description" content="Chính sách bảo mật thông tin khách hàng tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />
                <PageHero
                    title="Chính sách bảo mật"
                    subtitle="Cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng"
                    backgroundImage="url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')"
                    compact
                />
                <LegalLayout
                    title="Chính sách bảo mật"
                    lastUpdated="16/03/2024"
                    sections={sections}
                />
                <Footer />
            </main>
        </>
    )
}
