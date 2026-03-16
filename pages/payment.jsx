import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LegalLayout from '../components/LegalLayout'

export default function PaymentPolicyPage() {
    const sections = [
        {
            title: "Phương thức thanh toán",
            content: [
                "Glutisify Vietnam hỗ trợ nhiều phương thức thanh toán linh hoạt để mang lại sự tiện lợi nhất cho khách hàng:",
                "– Chuyển khoản ngân hàng trực tiếp.",
                "– Thanh toán qua các cổng điện tử (VNPay, Momo).",
                "– Thanh toán bằng thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard)."
            ]
        },
        {
            title: "Quy trình thanh toán",
            content: [
                "Sau khi thống nhất về giải pháp và ký kết hợp đồng, khách hàng sẽ thực hiện thanh toán theo các giai đoạn được quy định trong hợp đồng dịch vụ:",
                "1. Tạm ứng (thường là 50% giá trị hợp đồng).",
                "2. Thanh toán theo tiến độ (nếu có).",
                "3. Quyết toán sau khi nghiệm thu và bàn giao dự án."
            ]
        },
        {
            title: "Chính sách hoàn tiền",
            content: [
                "Chúng tôi cam kết chất lượng dịch vụ tốt nhất. Tuy nhiên, trong trường hợp dịch vụ không đáp ứng được các yêu cầu kỹ thuật đã cam kết trong hợp đồng:",
                "– Khách hàng có quyền yêu cầu chỉnh sửa không giới hạn để đạt chuẩn.",
                "– Nếu vẫn không đạt yêu cầu, chúng tôi sẽ thực hiện hoàn trả chi phí theo các điều khoản bảo lãnh trong hợp đồng."
            ]
        },
        {
            title: "Tính bảo mật trong thanh toán",
            content: [
                "Mọi thông tin thanh toán của khách hàng đều được mã hóa và bảo mật tuyệt đối. Chúng tôi không lưu trữ thông tin thẻ tín dụng của khách hàng trên hệ thống của mình."
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Chính sách thanh toán - Glutisify Vietnam</title>
                <meta name="description" content="Thông tin về các phương thức và quy trình thanh toán tại Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />
                <PageHero
                    title="Chính sách thanh toán"
                    subtitle="Quy trình thanh toán minh bạch và bảo mật"
                    backgroundImage="url('https://images.unsplash.com/photo-1554224155-169743997534?q=80&w=2072&auto=format&fit=crop')"
                    compact
                />
                <LegalLayout
                    title="Chính sách thanh toán"
                    lastUpdated="16/03/2024"
                    sections={sections}
                />
                <Footer />
            </main>
        </>
    )
}
