# KliraStudio Landing Page

A responsive landing page for KliraStudio design agency based in Jakarta, Indonesia. Features a loading screen that transitions to the main page with modern design and smooth animations.

## Features

- 🎨 Modern design based on Figma specifications
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ⚡ Fast loading with optimized assets
- 🎭 Smooth loading screen transition
- 🎯 Interactive CTA button
- 🌟 Smooth animations and hover effects
- ♿ Accessible design with keyboard navigation
- 📦 Ready for deployment to Netlify/Vercel

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Instrument Sans, Jost)
- SVG Graphics

## Project Structure

```
klirastudio-landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with responsive design
├── script.js           # JavaScript functionality
├── package.json        # NPM configuration
├── README.md          # This file
└── assets/            # Image and SVG assets
    ├── background.png
    ├── logo-vector.svg
    └── logo-text.svg
```

## Local Development

### Option 1: Simple HTTP Server
```bash
# Using Python (if installed)
python -m http.server 3000

# Using Node.js serve package
npx serve . -p 3000

# Using live-server for auto-reload
npx live-server --port=3000
```

### Option 2: Using NPM Scripts
```bash
# Install dependencies (optional)
npm install

# Start development server
npm run dev

# Start production preview
npm run preview
```

Then open http://localhost:3000 in your browser.

## Deployment

### Deploy to Netlify

#### Method 1: Drag & Drop
1. Go to [Netlify](https://netlify.com)
2. Drag the entire project folder to the deploy area
3. Your site will be live instantly!

#### Method 2: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run build` (or leave empty)
   - Publish directory: `.` (root directory)
4. Deploy!

### Deploy to Vercel

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

#### Method 2: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure settings:
   - Framework Preset: Other
   - Build Command: Leave empty
   - Output Directory: Leave empty
5. Deploy!

### Deploy to GitHub Pages
1. Push code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

## Customization

### Colors
The main colors used in the design:
- Primary Dark: `#00110F`
- Accent Teal: `#007769`
- Bright Yellow: `#FEFE31`
- Gradient: `#FF5093` → `#FFBE18` → `#FFFFFF`

### Fonts
- Primary: Instrument Sans (400, 500)
- Secondary: Jost (400, 700)

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Small Mobile: <480px

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and SVGs
- Minimal JavaScript
- CSS animations using GPU acceleration
- Preloaded critical resources
- Responsive images for different screen sizes

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## License

MIT License - feel free to use this code for your own projects!

## Contact

For questions about this landing page:
- Email: hello@klirastudio.com
- Location: Jakarta, Indonesia

---

**KliraStudio** - About story, beauty, usable and accessible design.