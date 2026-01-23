import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, Server, Shield, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CloudAIPage() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const features = [
        'Triển khai mô hình AI trên Cloud (MLOps)',
        'Hạ tầng tính toán hiệu năng cao (HPC)',
        'Lưu trữ và quản lý dữ liệu đám mây an toàn',
        'Tối ưu hóa chi phí vận hành Cloud',
        'Tích hợp Hybrid Cloud và Multi-Cloud',
        'Giám sát và bảo trì hệ thống AI 24/7'
    ]

    const technologies = [
        { name: 'AWS SageMaker', description: 'Nền tảng ML toàn diện trên AWS' },
        { name: 'Google Vertex AI', description: 'Phát triển và triển khai ML trên GCP' },
        { name: 'Azure Machine Learning', description: 'Dịch vụ ML cấp doanh nghiệp' },
        { name: 'Docker & Kubernetes', description: 'Containerization và Orchestration' },
        { name: 'Terraform', description: 'Infrastructure as Code' },
        { name: 'Databricks', description: 'Nền tảng Lakehouse thống nhất' }
    ]

    return (
        <>
            <Head>
                <title>Cloud AI Infrastructure - Glutisify Vietnam</title>
                <meta
                    name="description"
                    content="Dịch vụ hạ tầng Cloud AI chuyên nghiệp. Triển khai MLOps, tối ưu hóa chi phí và đảm bảo hiệu năng cao cho các ứng dụng AI."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://glutisify.com.vn/services/cloud-ai" />
            </Head>

            <main className="min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="relative z-10 container-custom text-center text-white pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Cloud AI <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                                    Infrastructure
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                Xây dựng nền tảng vững chắc cho các ứng dụng AI của bạn. Tận dụng sức mạnh vô hạn của điện toán đám mây để mở rộng quy mô.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-sky-900 hover:bg-sky-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-sky-500/30 transition-all duration-200 flex items-center gap-2 mx-auto"
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
                                Hạ tầng AI mạnh mẽ & Linh hoạt
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Chúng tôi thiết kế và vận hành hạ tầng Cloud tối ưu cho các tác vụ AI/ML nặng.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-sky-100 p-2 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0" />
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
                                Đối tác Cloud hàng đầu
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Chúng tôi hợp tác với các nhà cung cấp Cloud lớn nhất thế giới để mang lại giải pháp tốt nhất.
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
                                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-600">
                                        <Cloud size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-sky-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="container-custom text-center text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Mở rộng quy mô không giới hạn
                            </h2>
                            <p className="text-xl text-sky-200 max-w-2xl mx-auto mb-10">
                                Đưa doanh nghiệp của bạn lên mây với hạ tầng AI chuẩn quốc tế.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-sky-900 hover:bg-sky-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200"
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
