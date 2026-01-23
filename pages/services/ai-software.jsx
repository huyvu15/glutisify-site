import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, MessageSquare, Code2, Cpu, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AISoftwarePage() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const features = [
        'Phát triển Chatbot & Virtual Assistant thông minh',
        'Xử lý ngôn ngữ tự nhiên (NLP) đa ngôn ngữ',
        'Hệ thống gợi ý (Recommendation Systems)',
        'Tự động hóa quy trình bằng robot (RPA)',
        'Tích hợp AI vào ứng dụng di động và web',
        'Giải pháp AI tùy chỉnh theo nhu cầu'
    ]

    const technologies = [
        { name: 'OpenAI API', description: 'Tích hợp GPT-4 và các mô hình LLM' },
        { name: 'LangChain', description: 'Framework phát triển ứng dụng LLM' },
        { name: 'Hugging Face', description: 'Kho tàng mô hình AI mã nguồn mở' },
        { name: 'Dialogflow', description: 'Nền tảng phát triển hội thoại AI' },
        { name: 'Rasa', description: 'Framework Chatbot mã nguồn mở' },
        { name: 'Python', description: 'Ngôn ngữ lập trình AI hàng đầu' }
    ]

    return (
        <>
            <Head>
                <title>AI Software Development - Glutisify Vietnam</title>
                <meta
                    name="description"
                    content="Dịch vụ phát triển phần mềm AI chuyên nghiệp. Chatbot thông minh, NLP, hệ thống gợi ý và các giải pháp AI tùy chỉnh."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://glutisify.com.vn/services/ai-software" />
            </Head>

            <main className="min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="relative z-10 container-custom text-center text-white pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                AI Software <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                    Development
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                Xây dựng thế hệ ứng dụng thông minh tiếp theo. Tích hợp trí tuệ nhân tạo để nâng cao trải nghiệm người dùng và tự động hóa nghiệp vụ.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-200 flex items-center gap-2 mx-auto"
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
                                Ứng dụng AI vào thực tế
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Chúng tôi biến các khái niệm AI phức tạp thành các sản phẩm phần mềm dễ sử dụng và hiệu quả.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-emerald-100 p-2 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
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
                                Stack công nghệ AI
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Sử dụng các công nghệ tiên tiến nhất để xây dựng các ứng dụng thông minh, linh hoạt và mạnh mẽ.
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
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                                        <Code2 size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-emerald-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="container-custom text-center text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Đưa trí tuệ nhân tạo vào sản phẩm của bạn
                            </h2>
                            <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-10">
                                Nâng tầm sản phẩm với các tính năng thông minh. Liên hệ để được tư vấn chi tiết.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200"
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
