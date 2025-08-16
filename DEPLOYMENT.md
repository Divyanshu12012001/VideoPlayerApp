# Deployment Guide

## Web Deployment

### Option 1: Expo Web Build
```bash
npm run build:web
npm run serve
```

### Option 2: Netlify Deployment
1. Build the project:
```bash
npm run build:web
```

2. Deploy the `dist` folder to Netlify

### Option 3: Vercel Deployment
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run build:web
vercel --prod
```

## Mobile Deployment

### Android
```bash
npm run android
```

### iOS (macOS required)
```bash
npm run ios
```

## Environment Setup

### Prerequisites
- Node.js 16+
- Expo CLI
- For mobile: Android Studio (Android) or Xcode (iOS)

### Installation
```bash
git clone <repository-url>
cd VideoPlayerApp
npm install --legacy-peer-deps
```

### Development
```bash
npm run web    # Web development
npm run android # Android development
npm run ios     # iOS development
```

## Custom Content

### Adding Your Video
1. Place video file in `assets/videos/`
2. Update `videoSource` in `App.js`:
```javascript
const videoSource = require('./assets/videos/your-video.mp4');
```

### Adding Your Subtitles
1. Place .ass file in `assets/subtitles/`
2. Update subtitle loading in `App.js`
3. Or provide URL to remote .ass file

## Performance Tips

- Use compressed video formats (MP4 H.264)
- Optimize subtitle files (remove unnecessary styling)
- Test on target devices for performance
- Consider lazy loading for large subtitle files

## Troubleshooting

### Common Issues
1. **React version conflicts**: Use `--legacy-peer-deps`
2. **Video not playing**: Check video format compatibility
3. **Subtitles not showing**: Verify .ass file format
4. **Build errors**: Clear node_modules and reinstall

### Platform-Specific Issues
- **Web**: Ensure react-dom is installed
- **Android**: Check Android SDK setup
- **iOS**: Verify Xcode configuration