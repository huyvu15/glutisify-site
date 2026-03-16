import { motion } from 'framer-motion'

const LegalLayout = ({ title, lastUpdated, sections }) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{title}</h2>
                        {lastUpdated && (
                            <p className="text-gray-500 text-sm italic">Cập nhật lần cuối: {lastUpdated}</p>
                        )}
                    </div>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-[#009245] mb-4 flex items-center">
                                    <span className="w-8 h-1 bg-[#009245] mr-4 rounded-full" />
                                    {section.title}
                                </h3>
                                <div className="text-gray-600 leading-relaxed space-y-4 text-base md:text-lg pl-12">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))}
                                    {section.list && (
                                        <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
                                            {section.list.map((item, iIndex) => (
                                                <li key={iIndex} className="text-gray-700">{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                        <p className="text-gray-600 mb-4">Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-[#009245] text-white font-black py-3 px-10 rounded-xl hover:bg-[#007b3a] transition-all shadow-lg hover:shadow-xl"
                        >
                            Liên hệ ngay
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default LegalLayout
