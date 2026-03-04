import { motion } from 'framer-motion'
import { GraduationCap, Building2, Share2, Cpu, Award, TrendingUp } from 'lucide-react'

const Ecosystem = () => {
    const items = [
        {
            id: 'academy',
            icon: <GraduationCap className="w-12 h-12 text-gray-900" />,
            title: 'Academy',
            description: 'Tạo ra hệ thống bài giảng chất lượng, phù hợp với yêu cầu thị trường và doanh nghiệp',
            buttonText: 'Xem chi tiết',
            status: 'active'
        },
        {
            id: 'agency',
            icon: <Building2 className="w-12 h-12 text-gray-900" />,
            title: 'Agency',
            description: 'Nơi cung cấp và mang đến các giải pháp tối ưu nhất cho thị trường',
            buttonText: 'Coming Soon',
            status: 'pending'
        },
        {
            id: 'social',
            icon: <Share2 className="w-12 h-12 text-gray-900" />,
            title: 'Hệ thống social',
            description: 'Hệ thống kênh với hơn 10.000 thành viên hoạt động sôi nổi, dựa trên tinh thần học hỏi và phát triển',
            buttonText: 'Coming Soon',
            status: 'pending'
        },
        {
            id: 'tech',
            icon: <Cpu className="w-12 h-12 text-gray-900" />,
            title: 'Công nghệ',
            description: 'Tiên phong áp dụng giải pháp công nghệ AI vào quy trình doanh nghiệp',
            buttonText: 'Coming Soon',
            status: 'pending'
        },
        {
            id: 'branding',
            icon: <Award className="w-12 h-12 text-gray-900" />,
            title: 'Branding',
            description: 'Xây dựng và định vị thương hiệu mạnh mẽ trên môi trường số',
            buttonText: 'Coming Soon',
            status: 'pending'
        },
        {
            id: 'invest',
            icon: <TrendingUp className="w-12 h-12 text-gray-900" />,
            title: 'Invest',
            description: 'Đầu tư và phát triển các dự án tiềm năng trong lĩnh vực công nghệ',
            buttonText: 'Coming Soon',
            status: 'pending'
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 mb-4"
                    >
                        <h2 className="text-[32px] md:text-[36px] font-black leading-tight">
                            <span className="text-[#009245]">Glutisify</span> <br />
                            Sẽ phát triển thành hệ sinh thái với ...
                        </h2>
                        {/* <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                        </div> */}
                    </motion.div>
                </div>

                {/* Ecosystem Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-[28px] font-black text-gray-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-[320px]">
                                {item.description}
                            </p>

                            <button
                                className={`py-3 px-10 rounded-lg text-[14px] font-bold transition-all duration-300 border-2 ${item.status === 'active'
                                    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                                    : 'border-gray-900 text-gray-900 opacity-80 cursor-default'
                                    }`}
                            >
                                {item.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ecosystem
