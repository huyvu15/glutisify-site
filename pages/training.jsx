import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function TrainingPage() {
  const topics = [
    {
      key: 'aws',
      title: 'AWS',
      description: 'Kiến trúc, thực hành triển khai, bảo mật và tối ưu chi phí trên AWS.',
      image:
        "url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop')",
    },
    {
      key: 'tailscale',
      title: 'Tailscale',
      description: 'Zero-trust networking, truy cập an toàn, triển khai Mesh VPN cho đội nhóm.',
      image:
        "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2069&auto=format&fit=crop')",
    },
    {
      key: 'networking',
      title: 'Networking',
      description: 'Mạng máy tính thực tiễn: TCP/IP, routing, load balancing, observability.',
      image:
        "url('https://images.unsplash.com/photo-1558494947-04bc3bfbf0d5?q=80&w=2070&auto=format&fit=crop')",
    },
    {
      key: 'applied-ml',
      title: 'Machine Learning ứng dụng',
      description: 'Pipeline, huấn luyện, triển khai, MLOps và theo dõi hiệu năng mô hình.',
      image:
        "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2067&auto=format&fit=crop')",
    },
    {
      key: 'llm',
      title: 'LLM',
      description: 'RAG, fine-tuning, prompt engineering, bảo mật dữ liệu và giám sát.',
      image:
        "url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2070&auto=format&fit=crop')",
    },
  ]

  return (
    <>
      <Head>
        <title>Đào tạo - Glutisify Vietnam</title>
        <meta
          name="description"
          content="Chương trình đào tạo chuyên sâu: AWS, Tailscale, Networking, Machine Learning ứng dụng, LLM."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://glutisify.com.vn/training" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <PageHero
          title="Đào Tạo Chuyên Sâu"
          subtitle="Chương trình thực tiễn, bám sát dự án, tập trung năng lực triển khai"
          backgroundImage="url('https://images.unsplash.com/photo-1523246191828-85a4413d6a87?q=80&w=2069&auto=format&fit=crop')"
        />

        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {topics.map((topic) => (
                <div
                  key={topic.key}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-large border border-gray-100"
                >
                  <div
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: topic.image }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl text-center mx-auto">
              <p className="text-gray-700">
                Quan tâm chương trình riêng cho đội ngũ của bạn? Hãy liên hệ để được tư vấn
                lộ trình phù hợp và lịch đào tạo linh hoạt.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 hover:from-primary-600 hover:via-primary-700 hover:to-accent-600 shadow-lg border border-primary-400/20"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}


