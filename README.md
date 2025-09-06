# Paraline Vietnam - Pixel Perfect Clone

Đây là bản sao pixel-perfect của website Paraline Vietnam được xây dựng bằng React, Next.js và TailwindCSS.

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

## 🎨 Customization

### Colors
Chỉnh sửa colors trong `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Primary color palette - exact từ website gốc
  },
  secondary: {
    // Secondary color palette
  },
  accent: {
    // Accent color palette
  },
  brand: {
    // Custom brand colors
  }
}
```

### Fonts
Thay đổi fonts trong `styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### Content
Chỉnh sửa nội dung trong các component files:
- `components/Hero.jsx` - Hero section content
- `components/About.jsx` - About section content
- `components/Services.jsx` - Services content
- `components/Projects.jsx` - Projects content
- `components/Contact.jsx` - Contact form fields

### Images
Thay thế placeholder images:
```javascript
// Ví dụ trong Hero.jsx
backgroundImage: "url('https://your-image-url.com/image.jpg')"
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎭 Animations & Effects

### Framer Motion Animations
- **Page Load**: Fade in animations cho tất cả sections
- **Scroll Effects**: Intersection Observer cho scroll-triggered animations
- **Hover Effects**: Scale, rotate, và color transitions
- **Button Interactions**: Scale và shadow effects
- **Loading States**: Skeleton loading và spinners

### Custom Animations
- **Floating Elements**: Hero section floating particles
- **Gradient Animations**: Text gradient effects
- **Parallax Effects**: Background image parallax
- **Stagger Animations**: Grid items với staggered timing

## 🚀 Performance Optimizations

### Next.js Optimizations
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **Static Generation**: Pre-rendered pages

### TailwindCSS Optimizations
- **Purge CSS**: Unused styles removal
- **Custom Components**: Reusable utility classes
- **Responsive Design**: Mobile-first approach
- **Custom Properties**: CSS variables for theming

## 🔍 SEO Features

### Meta Tags
- **Title & Description**: Optimized cho từng page
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Canonical URLs**: Duplicate content prevention

### Structured Data
- **Organization Schema**: Company information
- **Service Schema**: Services offered
- **Contact Schema**: Contact information
- **Breadcrumb Schema**: Navigation structure

### Technical SEO
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine crawling rules
- **Performance**: Core Web Vitals optimization
- **Accessibility**: WCAG 2.1 compliance

## 🧪 Testing

### Manual Testing
```bash
# Test responsive design
npm run dev
# Mở DevTools và test các breakpoints

# Test performance
npm run build
npm run start
# Sử dụng Lighthouse để test performance
```

### Browser Testing
- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version
- **Edge**: Latest version

### Device Testing
- **iPhone**: iOS Safari
- **Android**: Chrome Mobile
- **iPad**: iPadOS Safari
- **Desktop**: All major browsers

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Deploy to Traditional Hosting
```bash
npm run build
npm run start
# Upload to your server
```

## 🔧 Troubleshooting

### Lỗi thường gặp:

1. **Module not found**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use**
   ```bash
   npm run dev -- -p 3001
   ```

3. **Build errors**
   ```bash
   rm -rf .next
   npm run build
   ```

4. **TailwindCSS not working**
   ```bash
   # Kiểm tra tailwind.config.js
   # Kiểm tra import trong globals.css
   ```

### Performance Issues:
- Kiểm tra image sizes
- Optimize animations
- Reduce bundle size
- Enable compression

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

### Code Style
- Sử dụng Prettier cho formatting
- Tuân thủ ESLint rules
- Comment code phức tạp
- Test responsive design

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.

## 📞 Support

- **Website**: [paraline.com.vn](https://paraline.com.vn)
- **Email**: info@paraline.com.vn
- **Phone**: +84 123 456 789
- **GitHub Issues**: Tạo issue trên GitHub repository

## 🙏 Acknowledgments

- **Paraline Vietnam** - Website gốc
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Next.js** - React framework
- **Lucide** - Icon library

---

**Được phát triển với ❤️ bởi Paraline Vietnam**

*Pixel-perfect clone với tất cả animations, responsive design và SEO optimization.*
