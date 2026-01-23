import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Database, BarChart2, Server, Layers, Activity, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BigDataPage() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const features = [
        'Xử lý dữ liệu lớn thời gian thực',
        'Kho dữ liệu (Data Warehousing) hiện đại',
        'Trực quan hóa dữ liệu tương tác',
        'Tích hợp dữ liệu đa nguồn',
        'Bảo mật và quản trị dữ liệu',
        'Phân tích dự báo xu hướng'
    ]

    const technologies = [
        { name: 'Apache Spark', description: 'Xử lý dữ liệu lớn tốc độ cao' },
        { name: 'Hadoop', description: 'Lưu trữ và xử lý phân tán' },
        { name: 'Kafka', description: 'Nền tảng streaming dữ liệu' },
        { name: 'Snowflake', description: 'Data Cloud hiện đại' },
        { name: 'Tableau', description: 'Công cụ trực quan hóa dữ liệu' },
        { name: 'Elasticsearch', description: 'Công cụ tìm kiếm và phân tích' }
    ]

    return (
        <>
            <Head>
                <title>Big Data Analytics - Glutisify Vietnam</title>
                <meta
                    name="description"
                    content="Dịch vụ Big Data Analytics chuyên nghiệp. Xử lý, phân tích và trực quan hóa dữ liệu lớn để đưa ra quyết định kinh doanh chính xác."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://glutisify.com.vn/services/big-data" />
            </Head>

            <main className="min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="relative z-10 container-custom text-center text-white pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Big Data <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    Analytics
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                Khai thác sức mạnh của dữ liệu lớn để hiểu rõ khách hàng, tối ưu hóa vận hành và thúc đẩy tăng trưởng.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-200 flex items-center gap-2 mx-auto"
                                >
                                    Tư vấn giải pháp
                                    <ArrowRight size={20} />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Giải pháp Big Data toàn diện
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Từ thu thập đến phân tích, chúng tôi cung cấp trọn bộ giải pháp dữ liệu cho doanh nghiệp.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    </div>
                                    <p className="text-gray-700 font-medium pt-1">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Công nghệ xử lý dữ liệu
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Hệ thống công nghệ hiện đại đảm bảo khả năng mở rộng và xử lý dữ liệu tốc độ cao.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                        <Server size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="container-custom text-center text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Biến dữ liệu thành tài sản quý giá
                            </h2>
                            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
                                Đừng để dữ liệu của bạn bị lãng phí. Hãy bắt đầu hành trình chuyển đổi số ngay hôm nay.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200"
                                >
                                    Liên hệ ngay
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
