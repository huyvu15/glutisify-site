# Glutisify Vietnam - Pixel Perfect Clone

Đây là bản sao pixel-perfect của website Glutisify Vietnam được xây dựng bằng React, Next.js và TailwindCSS.

## 🎯 Tính năng chính

- **Pixel-Perfect Design**: Tái tạo chính xác thiết kế, layout, màu sắc và typography của website gốc
- **Responsive Design**: Tối ưu hoàn hảo cho mọi thiết bị từ mobile đến desktop
- **Smooth Animations**: Sử dụng Framer Motion cho animations mượt mà và chuyên nghiệp
- **SEO Optimized**: Tối ưu hóa SEO với meta tags, structured data và sitemap
- **Performance**: Tối ưu hiệu suất với Next.js và image optimization
- **Accessibility**: Tuân thủ các tiêu chuẩn accessibility WCAG 2.1
- **Modern UI/UX**: Thiết kế hiện đại với TailwindCSS và custom components

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18, Next.js 13.5.6
- **Styling**: TailwindCSS 3.3.6 với custom theme
- **Animations**: Framer Motion 10.16.16
- **Icons**: Lucide React 0.294.0
- **Scroll Effects**: React Intersection Observer
- **Fonts**: Inter, Poppins, JetBrains Mono (Google Fonts)

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- NPM >= 8.0.0 hoặc Yarn >= 1.22.0

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd option3
```

### Bước 2: Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Bước 3: Chạy development server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

### Bước 4: Mở trình duyệt
Truy cập: [http://localhost:3000](http://localhost:3000)

## 🏗️ Cấu trúc project

```
option3/
├── components/              # React components
│   ├── Header.jsx          # Navigation header với dropdown menu
│   ├── Hero.jsx            # Hero section với animations
│   ├── About.jsx           # About section với features
│   ├── Services.jsx        # Services grid với 6 dịch vụ
│   ├── Projects.jsx        # Projects portfolio với filter
│   ├── Contact.jsx         # Contact form với validation
│   └── Footer.jsx          # Footer với newsletter & social links
├── pages/                  # Next.js pages
│   ├── _app.js             # App wrapper với global styles
│   └── index.jsx           # Home page chính
├── styles/                 # Global styles
│   └── globals.css         # TailwindCSS + custom styles
├── public/                 # Static files
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── tailwind.config.js      # TailwindCSS config với custom theme
├── next.config.js          # Next.js config với optimizations
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies & scripts
└── README.md               # Documentation
```



**Được phát triển với ❤️ bởi Glutisify Vietnam**

*Pixel-perfect clone với tất cả animations, responsive design và SEO optimization.*
