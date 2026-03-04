import { motion } from 'framer-motion'
import { Coins, Brain, Newspaper, CheckCircle2 } from 'lucide-react'

const Origin = () => {
    const cards = [
        {
            icon: <Coins className="w-12 h-12 text-[#b8860b]" />,
            text: 'Những lần mất tiền ngu tính ra vài tỷ đồng'
        },
        {
            icon: <Brain className="w-12 h-12 text-[#009245]" />,
            text: 'Những lần ngu đau đớn trong nhiều năm'
        },
        {
            icon: <Newspaper className="w-12 h-12 text-blue-600" />,
            text: 'Những cái nhục người trong cuộc giấu kín'
        }
    ]

    const achievements = [
        'Đội ngũ có thành viên thực hiện dự án ra mắt Vinfast tại Paris',
        'Đi từ kinh doanh online đến xây dựng doanh nghiệp định giá triệu đô',
        'Gần 5 năm kinh nghiệm về Branding'
    ]

    return (
        <section className="py-24 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] font-black text-[#004a22]"
                    >
                        Glutisify <span className="text-[#009245]">ra đời từ</span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex-shrink-0">
                                {card.icon}
                            </div>
                            <p className="text-gray-700 font-bold text-[16px] leading-snug">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Transition Text */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-[18px] italic"
                    >
                        Vượt qua giai đoạn khó khăn đó, Glutisify cũng đã có được những thành tựu đáng tự hào...
                    </motion.p>
                </div>

                {/* Achievements List */}
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col space-y-6">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center space-x-4"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#009245]" fill="#009245" fillOpacity="0.1" />
                                </div>
                                <p className="text-[#004a22] font-black text-[18px]">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Origin
