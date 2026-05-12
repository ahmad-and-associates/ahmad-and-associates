# Ahmad & Associates - Website

A modern, responsive Next.js website for Ahmad and Associates, a premier architecture liaising and government approvals consultancy in Mumbai with 25+ years of expertise.

## 🌐 Features

- **Modern Design**: Clean, professional, and premium corporate aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Lighthouse 90+ scores
- **SEO Ready**: Proper meta tags, semantic HTML, and structured data
- **Interactive Sections**:
  - Hero section with animations
  - Services showcase with detailed cards
  - Process timeline
  - Why choose us section
  - Contact form with validation
  - Testimonials section
  
## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📋 Pages

- **Home** (`/`) - Landing page with all key information
- **About** (`/about`) - Company history and founder information  
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ahmad-and-associates.git
   cd ahmad-and-associates
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
ahmad-and-associates/
├── app/
│   ├── (routes)/          # Route groups
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   └── contact/       # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       └── SectionHeading.tsx
├── lib/
│   └── data.ts            # Content and data
├── public/                # Static assets
└── next.config.ts         # Next.js configuration
```

## 🌐 GitHub Pages Deployment

### Setup

1. **Create Repository**:
   - Repository name: `ahmad-and-associates.github.io`
   - Make it public
   - Don't initialize with README

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial Ahmad and Associates website"
   git remote add origin https://github.com/ahmad-and-associates/ahmad-and-associates.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The deployment will run automatically

### Your Site URL
```
https://ahmad-and-associates.github.io
```

### Automatic Deployment

The GitHub Actions workflow automatically:
- Builds the Next.js app when you push to `main`
- Uses `--legacy-peer-deps` to handle React 19 compatibility
- Exports static files to `/out`
- Deploys to GitHub Pages

## 🎨 Customization

### Colors
Edit color values in `app/globals.css`:
```css
--color-navy: #0f172a;
--color-blue: #1d4ed8;
--color-gold: #c8a96b;
```

### Content
All company information and service details are in `lib/data.ts`. Update:
- `companyInfo` - Company details
- `services` - Service descriptions
- `whyChooseUs` - Key benefits
- `processSteps` - Process workflow
- `testimonials` - Client testimonials

### Contact Email
Update email in `components/layout/Footer.tsx` and `lib/data.ts`

## ✉️ Contact Information

- **Email**: ahmadandassociates23@gmail.com
- **Founder**: Sharif Ahmad
- **Location**: Mumbai, India
- **Experience**: 25+ years

## 📝 License

This project is proprietary to Ahmad and Associates.

## 📧 Support

For any issues or questions about the website, contact: ahmadandassociates23@gmail.com

---

Built with Next.js and Tailwind CSS. Deployed on GitHub Pages.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
