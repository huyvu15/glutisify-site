import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TestimonialsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            text: "Marketing for leading investors in Vietnam has never been an easy task. One of the prerequisites is to have a skilled team, understanding in detail the operation of each advertising platform. That's why AVAT trusts in entrusting the training of Digital Marketing personnel to Glutisify.",
            name: "Nguyen Huu Cuong",
            position: "CEO & Founder Avat Media",
            avatar: "https://i.pravatar.cc/150?u=cuong"
        },
        {
            text: "The team at Glutisify consists of practical warriors, with a systematic business approach, applying support tools to Marketing and Sales very effectively. The knowledge from Glutisify is well-crafted and truly valuable for those who want to embark on the path of Digital Marketing and Sales.",
            name: "Le Hong Quan",
            position: "Founder Smax.box",
            avatar: "https://i.pravatar.cc/150?u=quan"
        },
        {
            text: "I have been working with them since August and they have definitely helped my business a lot. I have managed to scale a few stores with good numbers and I always get help from the support team. I really appreciate their help. I look forward to working with them for a long time to come.",
            name: "John Doe",
            position: "CEO",
            avatar: "https://i.pravatar.cc/150?u=john"
        }
    ];

    return (
        <>
            <Head>
                <title>Ý kiến khách hàng - Glutisify Vietnam</title>
                <meta name="description" content="Hơn 2,000 khách hàng đã đồng hành và thành công cùng Glutisify Vietnam." />
            </Head>

            <main className="min-h-screen bg-white">
                <Header />

                <section className="pt-40 pb-24 px-4 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <span className="text-[14px] font-black text-[#009245] uppercase tracking-[0.2em]">
                                Customer Feedback
                            </span>
                            <div className="w-20 h-1.5 bg-[#009245] mx-auto mt-4 mb-8"></div>

                            <h1 className="text-3xl md:text-[48px] font-black text-[#009245] leading-tight mb-8">
                                +2,000 customers have accompanied Glutisify
                            </h1>

                            <p className="max-w-3xl mx-auto text-gray-900 font-bold text-[18px] leading-relaxed">
                                Glutisify is born to help you avoid the pitfalls we have experienced,<br className="hidden md:block" />
                                shorten the time to build your brand, and boost sales.
                            </p>
                        </motion.div>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {testimonials.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="border-2 border-[#009245] rounded-[30px] p-10 text-left flex flex-col h-full hover:shadow-2xl hover:shadow-green-100 transition-all duration-300"
                                >
                                    <p className="text-[#333] text-[16px] leading-[1.6] mb-10 flex-grow pt-2">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center space-x-5">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                                            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 text-[18px] leading-none mb-2">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-500 text-[14px] font-bold">
                                                {item.position}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-3">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-gray-800 scale-125' : 'bg-gray-200'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default TestimonialsPage
