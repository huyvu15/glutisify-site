import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function JobsPage() {
    const jobs = [
        {
            id: 1,
            title: "Senior AI Engineer",
            type: "Full-time",
            location: "Hà Nội / Remote",
            salary: "Thỏa thuận",
            description: "Chịu trách nhiệm thiết kế và triển khai các mô hình Machine Learning tiên tiến cho các giải pháp Solution Architecture."
        },
        {
            id: 2,
            title: "Fullstack Developer (Next.js & Node.js)",
            type: "Full-time",
            location: "Hà Nội",
            salary: "25 - 45 triệu",
            description: "Phát triển giao diện người dùng hiện đại và hệ thống backend mạnh mẽ tích hợp các tính năng AI thông minh."
        },
        {
            id: 3,
            title: "Solution Architect",
            type: "Full-time",
            location: "Hà Nội / TP.HCM",
            salary: "Cạnh tranh",
            description: "Tư vấn và thiết kế kiến trúc phần mềm tổng thể cho các doanh nghiệp chuyển đổi số."
        },
        {
            id: 4,
            title: "AI Product Manager",
            type: "Full-time",
            location: "Hà Nội",
            salary: "Thỏa thuận",
            description: "Định hướng phát triển sản phẩm AI, cầu nối giữa khách hàng và đội ngũ kỹ thuật."
        }
    ]

    return (
        <>
            <Head>
                <title>Tuyển dụng - Glutisify Vietnam</title>
                <meta name="description" content="Gia nhập đội ngũ Glutisify Vietnam - Nơi hội tụ các chuyên gia AI và Solution Architects hàng đầu." />
            </Head>

            <main className="min-h-screen bg-gray-50">
                <Header />

                <PageHero
                    title="Gia Nhập Đội Ngũ"
                    subtitle="Cùng Glutisify kiến tạo những giải pháp công nghệ thay đổi tương lai"
                    backgroundImage="url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop')"
                />

                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Vị trí đang tuyển dụng</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Chúng tôi luôn tìm kiếm những tài năng có niềm đam mê mãnh liệt với công nghệ và khát khao tạo ra giá trị thực.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#009245] transition-colors">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase size={16} className="text-[#009245]" />
                                                    {job.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={16} className="text-[#009245]" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={16} className="text-[#009245]" />
                                                    {job.salary}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {job.description}
                                    </p>

                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-[#009245] font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                                    >
                                        Ứng tuyển ngay <ArrowRight size={18} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-24 p-12 bg-[#009245] rounded-3xl text-white text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black mb-6">Chưa thấy vị trí phù hợp?</h3>
                                <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                                    Đừng ngần ngại gửi CV của bạn cho chúng tôi. Glutisify luôn cởi mở để đón nhận những tài năng xuất chúng trong lĩnh vực Solution Architect và AI.
                                </p>
                                <a
                                    href="mailto:jobs@glutisify.com.vn"
                                    className="inline-block bg-white text-[#009245] font-black py-4 px-12 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Gửi CV tại jobs@glutisify.com.vn
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
