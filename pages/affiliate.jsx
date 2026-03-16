import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LegalLayout from '../components/LegalLayout'

export default function AffiliatePolicyPage() {
    const sections = [
        {
            title: "Chương trình đối tác Affiliate",
            content: [
                "Chương trình Affiliate của Glutisify Vietnam cho phép các cá nhân và tổ chức nhận hoa hồng bằng cách giới thiệu khách hàng sử dụng dịch vụ Solution Architect và phần mềm của chúng tôi.",
                "Chúng tôi tin tưởng vào sức mạnh của sự kết nối và mong muốn chia sẻ thành công cùng các đối tác."
            ]
        },
        {
            title: "Mức hoa hồng và thanh toán",
            content: [
                "Đối tác sẽ được hưởng mức hoa hồng hấp dẫn dựa trên giá trị hợp đồng được ký kết thành công:",
                "– Hoa hồng được tính trên giá trị thực thu của mỗi dự án.",
                "– Thanh toán hoa hồng định kỳ hàng tháng sau khi khách hàng đã hoàn tất nghĩa vụ thanh toán."
            ]
        },
        {
            title: "Quy tắc ứng xử",
            content: [
                "Để bảo vệ uy tín thương hiệu Glutisify, các đối tác Affiliate cần tuân thủ:",
                "– Không sử dụng các hình thức quảng cáo rác (spam).",
                "– Không cung cấp thông tin sai lệch về dịch vụ của Glutisify.",
                "– Tuân thủ các hướng dẫn về sử dụng logo và bộ nhận diện thương hiệu."
            ]
        },
        {
            title: "Chấm dứt quyền đối tác",
            content: [
                "Glutisify có quyền chấm dứt quyền đối tác nếu phát hiện các hành vi vi phạm nghiêm trọng quy tắc ứng xử hoặc gây hại đến uy tín của công ty."
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Chính sách Affiliate - Glutisify Vietnam</title>
                <meta name="description" content="Chương trình đối tác và chính sách hoa hồng Affiliate tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />
                <PageHero
                    title="Chính sách Affiliate"
                    subtitle="Hợp tác cùng phát triển và chia sẻ thành công"
                    backgroundImage="url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')"
                    compact
                />
                <LegalLayout
                    title="Chính sách Affiliate"
                    lastUpdated="16/03/2024"
                    sections={sections}
                />
                <Footer />
            </main>
        </>
    )
}
