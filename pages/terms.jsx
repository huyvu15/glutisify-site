import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LegalLayout from '../components/LegalLayout'

export default function TermsOfServicePage() {
    const sections = [
        {
            title: "Chấp thuận điều khoản",
            content: [
                "Bằng việc truy cập và sử dụng trang web này, bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi."
            ]
        },
        {
            title: "Quyền sở hữu trí tuệ",
            content: [
                "Tất cả nội dung trên trang web này, bao gồm nhưng không giới hạn ở văn bản, đồ họa, logo, hình ảnh và phần mềm, là tài sản của Glutisify Vietnam và được bảo vệ bởi luật sở hữu trí tuệ quốc tế.",
                "Việc sử dụng bất kỳ nội dung nào mà không có sự cho phép bằng văn bản của chúng tôi là vi phạm pháp luật."
            ]
        },
        {
            title: "Giới hạn trách nhiệm",
            content: [
                "Glutisify Vietnam sẽ không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ của chúng tôi.",
                "Chúng tôi nỗ lực tối đa để đảm bảo sự ổn định của dịch vụ nhưng không cam kết dịch vụ sẽ không bao giờ bị gián đoạn."
            ]
        },
        {
            title: "Thay đổi điều khoản",
            content: [
                "Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản dịch vụ này bất cứ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang web."
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Điều khoản dịch vụ - Glutisify Vietnam</title>
                <meta name="description" content="Các điều khoản và điều kiện sử dụng dịch vụ tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />
                <PageHero
                    title="Điều khoản dịch vụ"
                    subtitle="Quy định chung về sử dụng dịch vụ và quyền lợi khách hàng"
                    backgroundImage="url('https://images.unsplash.com/photo-1450101499163-c8046c82736b?q=80&w=2070&auto=format&fit=crop')"
                    compact
                />
                <LegalLayout
                    title="Điều khoản dịch vụ"
                    lastUpdated="16/03/2024"
                    sections={sections}
                />
                <Footer />
            </main>
        </>
    )
}
