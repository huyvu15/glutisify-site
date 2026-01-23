import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Camera, Scan, Image, Video, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ComputerVisionPage() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const features = [
        'Nhận diện khuôn mặt và định danh điện tử (eKYC)',
        'Phát hiện và phân loại đối tượng trong ảnh/video',
        'Kiểm soát chất lượng sản phẩm tự động (QA/QC)',
        'Phân tích hành vi từ camera giám sát',
        'Trích xuất thông tin từ văn bản (OCR)',
        'Thực tế tăng cường (AR) cho thương mại điện tử'
    ]

    const technologies = [
        { name: 'OpenCV', description: 'Thư viện thị giác máy tính phổ biến nhất' },
        { name: 'YOLO (You Only Look Once)', description: 'Phát hiện đối tượng thời gian thực' },
        { name: 'Tesseract OCR', description: 'Công cụ nhận dạng ký tự quang học' },
        { name: 'MediaPipe', description: 'Giải pháp ML đa nền tảng của Google' },
        { name: 'PyTorch Vision', description: 'Thư viện thị giác máy tính cho PyTorch' },
        { name: 'TensorRT', description: 'Tối ưu hóa suy luận Deep Learning' }
    ]

    return (
        <>
            <Head>
                <title>Computer Vision - Glutisify Vietnam</title>
                <meta
                    name="description"
                    content="Dịch vụ Computer Vision chuyên nghiệp. Nhận diện khuôn mặt, phát hiện đối tượng, OCR và phân tích video thông minh."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://glutisify.com.vn/services/computer-vision" />
            </Head>

            <main className="min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535378437327-b7149b379c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="relative z-10 container-custom text-center text-white pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Computer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                                    Vision
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                                Giúp máy tính "nhìn" và hiểu thế giới thực. Ứng dụng công nghệ xử lý hình ảnh tiên tiến để tự động hóa và nâng cao hiệu quả.
                            </p>

                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-rose-900 hover:bg-rose-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-rose-500/30 transition-all duration-200 flex items-center gap-2 mx-auto"
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
                                Ứng dụng Thị giác máy tính
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Từ an ninh giám sát đến kiểm soát chất lượng, Computer Vision đang thay đổi cách chúng ta làm việc.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-rose-100 p-2 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
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
                                Công nghệ xử lý hình ảnh
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Sử dụng các thuật toán Deep Learning tiên tiến nhất để đạt độ chính xác vượt trội.
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
                                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6 text-rose-600">
                                        <Camera size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-rose-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
                    <div className="container-custom text-center text-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Nhìn xa hơn với Computer Vision
                            </h2>
                            <p className="text-xl text-rose-200 max-w-2xl mx-auto mb-10">
                                Tự động hóa các tác vụ thị giác và nâng cao năng suất với giải pháp của chúng tôi.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-rose-900 hover:bg-rose-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200"
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
