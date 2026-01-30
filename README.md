# Santhosh Bommasamudram - Portfolio

A modern, responsive portfolio website featuring a Bento-grid layout, built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   - Your site will be live at: `your-project.vercel.app`

### Option 2: Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - OR connect your GitHub repository
   - Your site will be live at: `your-project.netlify.app`

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/'
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📝 Customization

### Update Profile Picture

Replace the image URL in `src/App.jsx` (around line 53):
```javascript
src="YOUR_IMAGE_URL"
```

Or use initials by keeping the fallback div.

### Update Resume Link

In `src/App.jsx` (around line 228), update:
```javascript
href="YOUR_RESUME_GOOGLE_DRIVE_LINK"
```

### Update Content

All content is in `src/App.jsx`:
- **Projects:** Lines 16-26
- **Skills:** Line 28
- **Social Links:** Lines 30-47
- **About section:** Lines 108-123

## 📦 Technologies

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 🎨 Features

- ✨ Animated background effects
- 🎯 Bento-grid layout
- 📱 Fully responsive
- 🎭 Glassmorphism design
- ⚡ Fast loading with Vite
- 🎨 Custom gradients and animations

## 📞 Contact

**Santhosh Bommasamudram**
- Email: santhoshbommasamudram@gmail.com
- LinkedIn: [linkedin.com/in/santhosh12](https://www.linkedin.com/in/santhosh12/)
- GitHub: [github.com/Santhosh1108](https://github.com/Santhosh1108)

## 📄 License

Free to use for personal projects.

---

Built with ❤️ by Santhosh Bommasamudram
