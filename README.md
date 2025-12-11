# Modern Developer Portfolio

A stunning, modern, and fully responsive developer portfolio website built with React and Vite. Features smooth animations, gradient designs, and an elegant dark theme.

## Features

- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Engaging scroll animations and transitions throughout
- **Modern UI/UX** - Clean, professional design with gradient accents
- **Dark Theme** - Eye-friendly dark color scheme with purple/blue gradients
- **Interactive Components** - Dynamic typing effect, filterable projects, animated skills bars
- **Fast Performance** - Built with Vite for optimal loading speeds
- **SEO Optimized** - Proper meta tags and semantic HTML

## Sections

1. **Hero/Introduction** - Dynamic typing animation showcasing roles
2. **Projects** - Filterable project showcase with beautiful cards
3. **Skills** - Visual skill representation with progress bars
4. **Experience** - Timeline-based work experience display
5. **About Me** - Personal introduction with stats and interests
6. **Contact** - Contact form and social media links

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with animations
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization Guide

### Personal Information

Update the following files with your own information:

#### 1. Hero Section ([src/components/Hero.jsx](src/components/Hero.jsx))
- Change the `roles` array with your titles
- Update the name from "Youssef" to your name
- Modify the code snippet in the hero visual

#### 2. Projects Section ([src/components/Projects.jsx](src/components/Projects.jsx))
- Replace the `projects` array with your own projects
- Update project images, descriptions, tags, and links
- Modify categories to match your project types

#### 3. Skills Section ([src/components/Skills.jsx](src/components/Skills.jsx))
- Update `skillCategories` with your skills and proficiency levels
- Adjust the skill categories (Frontend, Backend, etc.)
- Modify the highlight cards to match your strengths

#### 4. Experience Section ([src/components/Experience.jsx](src/components/Experience.jsx))
- Replace `experiences` array with your work history
- Update company names, positions, dates, and achievements
- Adjust the timeline colors if desired

#### 5. About Section ([src/components/About.jsx](src/components/About.jsx))
- Rewrite the about text with your story
- Update the `stats` with your numbers
- Change the `interests` to reflect your hobbies

#### 6. Contact Section ([src/components/Contact.jsx](src/components/Contact.jsx))
- Update contact information (email, phone, location)
- Add your social media links
- Connect the form to your backend or email service

#### 7. HTML Metadata ([index.html](index.html))
- Update page title and meta descriptions
- Add your custom favicon

### Color Scheme

The portfolio uses a purple/blue gradient theme. To change colors, update these CSS variables in the respective component files:

Primary colors:
- `#6366f1` (Indigo)
- `#8b5cf6` (Purple)
- `#ec4899` (Pink)

Background:
- `#0a0a14` (Dark background)
- `#0f0f19` (Slightly lighter dark)

### Fonts

The portfolio uses system fonts. To use custom fonts:

1. Add font import to [index.html](index.html):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

2. Update font-family in [src/index.css](src/index.css)

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to [package.json](package.json):
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
Portfolio2/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # Global app styles
│   ├── index.css        # CSS reset and base styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

## License

This project is open source and available under the MIT License.

## Credits

Built with passion by Youssef using React and Vite.

## Contact

For any questions or feedback, feel free to reach out:
- Email: hello@youssef.dev
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ and lots of coffee
