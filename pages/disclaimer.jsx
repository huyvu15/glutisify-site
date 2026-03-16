import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LegalLayout from '../components/LegalLayout'

export default function DisclaimerPage() {
    const sections = [
        {
            title: "Thông tin chung",
            content: [
                "Các thông tin được cung cấp trên trang web Glutisify Vietnam chỉ mang tính chất thông tin chung. Mặc dù chúng tôi cố gắng cập nhật thông tin chính xác và kịp thời, chúng tôi không đưa ra đại diện hay bảo đảm nào về tính đầy đủ hoặc độ tin cậy của thông tin."
            ]
        },
        {
            title: "Trách nhiệm chuyên môn",
            content: [
                "Các giải pháp AI và phần mềm được tư vấn bởi Glutisify có hiệu quả phụ thuộc vào dữ liệu đầu vào và môi trường vận hành thực tế của doanh nghiệp. Chúng tôi không chịu trách nhiệm cho các quyết định kinh doanh dựa hoàn toàn trên thông tin tổng quát mà không qua tư vấn chuyên sâu."
            ]
        },
        {
            title: "Liên kết bên ngoài",
            content: [
                "Trang web này có thể chứa các liên kết đến các trang web khác không do Glutisify Vietnam kiểm soát. Chúng tôi không chịu trách nhiệm về nội dung hoặc chính sách của các trang web bên thứ ba đó."
            ]
        },
        {
            title: "Sử dụng Cookie",
            content: [
                "Trang web sử dụng cookie để cải thiện trải nghiệm người dùng. Bằng việc sử dụng trang web, bạn đồng ý với việc sử dụng cookie của chúng tôi theo Chính sách bảo mật."
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Tuyên bố từ chối trách nhiệm - Glutisify Vietnam</title>
                <meta name="description" content="Tuyên bố từ chối trách nhiệm về nội dung và dịch vụ tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />
                <PageHero
                    title="Tuyên bố từ chối trách nhiệm"
                    subtitle="Các giới hạn về trách nhiệm và sử dụng thông tin"
                    backgroundImage="url('https://images.unsplash.com/photo-1454165833267-02750892f239?q=80&w=2070&auto=format&fit=crop')"
                    compact
                />
                <LegalLayout
                    title="Tuyên bố từ chối trách nhiệm"
                    lastUpdated="16/03/2024"
                    sections={sections}
                />
                <Footer />
            </main>
        </>
    )
}
