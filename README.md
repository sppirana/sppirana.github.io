# Piranavan Sivanesan - Portfolio Website

A modern, responsive React portfolio website showcasing my projects, skills, and experience as a Software Engineer and Full-Stack Developer.

## 🌟 Live Demo

Visit the live site: [https://sppirana.github.io](https://sppirana.github.io)

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: Smooth scroll, hover effects, and animated transitions
- **Project Showcase**: Detailed cards highlighting key projects with technologies used
- **Skills Section**: Visual representation of technical skills organized by category
- **Contact Form**: Functional form with validation for easy communication
- **SEO Optimized**: Meta tags and Open Graph tags for better search visibility
- **Performance**: Optimized build with lazy loading and code splitting

## 🛠️ Technologies Used

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About me section
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Skills.jsx         # Technical skills
│   │   ├── Education.jsx      # Education details
│   │   ├── Leadership.jsx     # Leadership experience
│   │   ├── Contact.jsx        # Contact form
│   │   └── Footer.jsx         # Footer
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── .gitignore
├── index.html                  # HTML template
├── package.json               # Dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js 18+ and npm installed on your machine

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sppirana/sppirana.github.io.git
cd sppirana.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `deploy.yml` workflow will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### GitHub Pages Setup

1. Go to your repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The site will be available at `https://sppirana.github.io`

## 📧 Contact

- **Email**: sppirana007@gmail.com
- **LinkedIn**: [linkedin.com/in/piranavan-sivanesan](https://linkedin.com/in/piranavan-sivanesan)
- **GitHub**: [github.com/sppirana](https://github.com/sppirana)
- **Phone**: +94 706310123
- **Location**: Colombo 6, Sri Lanka

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ by Piranavan Sivanesan
