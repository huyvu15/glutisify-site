import { motion } from 'framer-motion'
import { Check, HelpCircle } from 'lucide-react'

const PricingSection = ({ title, description, tiers }) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{title}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${tier.featured
                                    ? 'bg-gray-900 text-white shadow-2xl scale-105 z-10'
                                    : 'bg-white text-gray-900 border border-gray-100 hover:shadow-xl'
                                }`}
                        >
                            {tier.featured && (
                                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                                    <span className="bg-[#009245] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        Phổ biến nhất
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${tier.featured ? 'text-[#009245]' : 'text-gray-500'}`}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">{tier.price}</span>
                                    {tier.price !== 'Liên hệ' && <span className={tier.featured ? 'text-gray-400' : 'text-gray-500'}>/ dự án</span>}
                                </div>
                                <p className={`mt-4 text-sm ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${tier.featured ? 'bg-[#009245]' : 'bg-[#009245]/10'}`}>
                                            <Check size={14} className={tier.featured ? 'text-white' : 'text-[#009245]'} />
                                        </div>
                                        <span className="text-[15px]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/contact"
                                className={`w-full py-4 rounded-xl font-black text-center text-sm uppercase tracking-widest transition-all ${tier.featured
                                        ? 'bg-[#009245] text-white hover:bg-[#007b3a] shadow-lg hover:shadow-xl'
                                        : 'bg-gray-900 text-white hover:bg-black shadow-md'
                                    }`}
                            >
                                Bắt đầu ngay
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                        <HelpCircle size={18} /> Bạn cần một giải pháp tùy chỉnh? <a href="/contact" className="text-[#009245] font-bold hover:underline">Liên hệ để nhận báo giá chi tiết</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
