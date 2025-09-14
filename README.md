# Happioca Café Website

A premium, single-page website for Happioca café featuring modern design, responsive layout, and accessibility-first approach. Built by five friends with one dream - creating infinite cravings through authentic Kerala tapioca experiences.

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add images** to the `image/` folder (see Image Requirements below)
3. **Open** `index.html` in your browser
4. **Deploy** to your preferred hosting service

## 📁 Project Structure

```
Happioca/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete stylesheet with CSS variables
├── main.js            # Vanilla JavaScript for interactions
├── README.md          # This file
└── image/             # Image assets folder
    ├── logo.png       # Main logo (160x48px)
    ├── logo@2x.png    # Retina logo (320x96px) - optional
    ├── hero.webp      # Hero section image (2400x1600px)
    ├── dish-01.webp   # About section image (900x900px)
    ├── dish-01-small.webp # Mobile version (450x450px)
    ├── insta-01.webp  # Instagram grid images (720x720px each)
    ├── insta-02.webp
    ├── insta-03.webp
    ├── insta-04.webp
    ├── insta-05.webp
    ├── insta-06.webp
    └── social-preview.jpg # OpenGraph image (1200x630px)
```

## 🖼️ Image Requirements

### Required Images

| File | Dimensions | Format | Description |
|------|------------|--------|-------------|
| `logo.png` | 160×48px | PNG | Main brand logo |
| `logo@2x.png` | 320×96px | PNG | Retina logo (optional) |
| `hero.webp` | 2400×1600px | WebP | Hero dish photo |
| `dish-01.webp` | 900×900px | WebP | About section photo |
| `dish-01-small.webp` | 450×450px | WebP | Mobile version |
| `insta-01.webp` to `insta-06.webp` | 720×720px | WebP | Instagram grid |
| `social-preview.jpg` | 1200×630px | JPG | Social media preview |

### Image Guidelines

- **Format**: Use WebP for photos (better compression), PNG for logos
- **Quality**: Optimize for web while maintaining premium appearance
- **Content**: Focus on tapioca dishes, café atmosphere, and Kerala culture
- **Style**: Warm, inviting, and professional food photography

### Replacing Placeholder Images

1. Save your images with the exact filenames listed above
2. Place them in the `image/` folder
3. Ensure dimensions match the specifications
4. Test the website to verify all images load correctly

## 🎨 Design System

### Colors
```css
--cream: #FFF8E8        /* Background */
--tapioca: #FCD581      /* Highlight/CTA */
--poppy: #D52941        /* Accent/Hover */
--maroon: #990D35       /* Deep accent */
--text: #222222         /* Primary text */
--muted: #6B645E        /* Secondary text */
```

### Typography
- **Headings**: Playfair Display (400, 600, 700)
- **Body**: Inter (300, 400, 500)
- **Scale**: Responsive from 36px (mobile) to 64px (desktop) for h1

### Glassmorphism
The site uses a custom glassmorphism component with:
- Backdrop blur: 12px
- Semi-transparent backgrounds
- Subtle borders and shadows
- Hover effects with glow

## 🛠️ Technical Features

### Performance
- **Critical CSS**: Inlined for above-the-fold content
- **Lazy Loading**: Images load as needed
- **Preloading**: Logo and critical fonts
- **Optimized**: Vanilla JS, no frameworks

### Accessibility
- **WCAG AA**: Color contrast compliant
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Skip Links**: Direct navigation to main content
- **Focus Management**: Visible focus indicators

### Responsive Design
- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**: 320px, 480px, 768px, 1024px, 1366px, 1920px
- **Flexible Grid**: CSS Grid with 12-column layout
- **Touch Friendly**: 48px minimum touch targets

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Android Browsers**: Optimized for mobile Chrome and Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers
- **Progressive Enhancement**: Core functionality works without JS

## 🚀 Deployment Options

### Static Hosting (Recommended)
1. **Netlify**: Drag and drop the folder to Netlify
2. **Vercel**: Connect your Git repository
3. **GitHub Pages**: Push to a GitHub repository
4. **Firebase Hosting**: Use Firebase CLI

### Traditional Hosting
1. **Upload** all files to your web server
2. **Ensure** the server supports HTTPS
3. **Configure** proper MIME types for WebP images
4. **Enable** gzip compression for better performance

### Local Development
```bash
# Simple HTTP server (Python)
python -m http.server 8000

# Or using Node.js
npx serve .

# Then visit http://localhost:8000
```

## 🔧 Customization

### Content Updates
- **Text**: Edit content directly in `index.html`
- **Colors**: Modify CSS variables in `styles.css`
- **Layout**: Adjust grid and spacing in CSS
- **Images**: Replace files in `image/` folder

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `styles.css`
3. Update navigation links if needed
4. Test responsive behavior

### SEO Optimization
- Update `<title>` and meta description in `index.html`
- Replace social media preview image
- Add Google Analytics code to `main.js`
- Submit sitemap to search engines

## 📱 Testing Checklist

### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1200px+)
- [ ] Large screens (1920px+)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Android browsers (Chrome, Samsung Internet)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible
- [ ] Skip links functional

### Performance Testing
- [ ] Page loads under 3 seconds
- [ ] Images optimized and loading
- [ ] No JavaScript errors
- [ ] Smooth animations

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths and names match exactly
- Ensure images are in the `image/` folder
- Verify file formats (WebP, PNG, JPG)
- Check browser console for 404 errors

### Layout Issues
- Verify CSS file is linked correctly
- Check for typos in class names
- Ensure viewport meta tag is present
- Test with browser developer tools

### JavaScript Not Working
- Check browser console for errors
- Ensure `main.js` is linked with `defer` attribute
- Verify all required HTML elements exist
- Test with JavaScript disabled for fallbacks

## 📞 Support

For technical issues or customization help:
1. Check the browser console for error messages
2. Validate HTML and CSS using W3C validators
3. Test in different browsers and devices
4. Review the code comments for guidance

## 📄 License

This project is created for Happioca café. All rights reserved.

---

**Built with ❤️ for Happioca - Onnu Vannu Noka**

*Five friends. One dream. Infinite cravings.*
