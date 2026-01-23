import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cpu, BarChart, GitBranch, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function MachineLearningPage() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const features = [
        'Xây dựng mô hình dự đoán chính xác',
        'Tự động hóa quy trình ra quyết định',
        'Phân tích hành vi khách hàng chuyên sâu',
        'Tối ưu hóa chuỗi cung ứng thông minh',
        'Phát hiện gian lận và rủi ro tài chính',
        'Cá nhân hóa trải nghiệm người dùng'
    ]

    const technologies = [
        { name: 'TensorFlow', description: 'Nền tảng ML mã nguồn mở hàng đầu' },
        { name: 'PyTorch', description: 'Framework linh hoạt cho nghiên cứu và sản xuất' },
        { name: 'Scikit-learn', description: 'Thư viện ML mạnh mẽ cho Python' },
        { name: 'Keras', description: 'API mạng nơ-ron cấp cao' },
        { name: 'XGBoost', description: 'Thuật toán boosting hiệu quả cao' },
        { name: 'MLflow', description: 'Quản lý vòng đời Machine Learning' }
    ]

    return (
        <>
            <Head>
                <title>Machine Learning Development - Glutisify Vietnam</title>
                <meta
                    name="description"
                    content="Dịch vụ phát triển Machine Learning chuyên nghiệp. Xây dựng mô hình dự đoán, tự động hóa quy trình và tối ưu hóa kinh doanh với AI."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://glutisify.com.vn/services/machine-learning" />
            </Head>

            <main className="min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="relative z-10 container-custom text-center text-white pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Machine Learning <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    Development
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                Biến dữ liệu thành lợi thế cạnh tranh với các giải pháp Machine Learning tiên tiến.
                                Chúng tôi giúp doanh nghiệp dự đoán xu hướng và tự động hóa quy trình phức tạp.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-200 flex items-center gap-2 mx-auto"
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
                                Giải pháp Machine Learning toàn diện
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Chúng tôi cung cấp các giải pháp ML tùy chỉnh để giải quyết các thách thức cụ thể của doanh nghiệp bạn.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-indigo-100 p-2 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
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
                                Công nghệ hàng đầu
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Chúng tôi sử dụng các framework và công cụ ML mạnh mẽ nhất để đảm bảo hiệu suất và độ chính xác.
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
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                        <Cpu size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-indigo-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="container-custom text-center text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Sẵn sàng tối ưu hóa doanh nghiệp với AI?
                            </h2>
                            <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
                                Hãy để các chuyên gia Machine Learning của chúng tôi giúp bạn khai phá tiềm năng dữ liệu.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200"
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
