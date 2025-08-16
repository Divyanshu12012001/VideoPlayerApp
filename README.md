# React Native + Expo Video Player with ASS Subtitles

A React Native video player component built with Expo that supports .ass subtitle files with proper styling, timing, and positioning.

## Features

- ✅ Video playback using expo-av
- ✅ ASS subtitle parsing and rendering
- ✅ Preserves subtitle styling (colors, fonts, positioning)
- ✅ Synchronized subtitle timing
- ✅ Works on Desktop Web and Mobile Web
- ✅ Responsive design
- ✅ Subtitle sync during seeking

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VideoPlayerApp
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run web
```

### Running on Different Platforms

- **Web**: `npm run web`
- **Android**: `npm run android` (requires Android Studio)
- **iOS**: `npm run ios` (requires Xcode on macOS)

## Usage

### Basic Usage

```javascript
import { VideoPlayer } from './components/VideoPlayer';

const App = () => {
  const videoSource = { uri: 'path/to/your/video.mp4' };
  const subtitleSource = 'path/to/your/subtitles.ass';

  return (
    <VideoPlayer
      videoSource={videoSource}
      subtitleSource={subtitleSource}
    />
  );
};
```

### Adding Your Own Content

1. Place your video file in the `assets/videos/` directory
2. Place your .ass subtitle file in the `assets/subtitles/` directory
3. Update the `videoSource` and `subtitleSource` in `App.js`

Example:
```javascript
const videoSource = require('./assets/videos/your-video.mp4');
const subtitleSource = require('./assets/subtitles/your-subtitles.ass');
```

## Project Structure

```
VideoPlayerApp/
├── components/
│   ├── VideoPlayer.js      # Main video player component
│   └── SubtitleRenderer.js # ASS subtitle renderer
├── utils/
│   └── assParser.js        # ASS file parser utility
├── assets/
│   ├── videos/             # Video files
│   └── subtitles/          # Subtitle files
├── App.js                  # Main app component
└── README.md
```

## ASS Subtitle Support

The player supports the following ASS features:

- **Timing**: Accurate start/end times
- **Styling**: Colors, fonts, bold, italic, underline
- **Positioning**: Alignment and margins
- **Text Effects**: Outlines and shadows
- **Multiple Styles**: Different styles for different dialogue

### Supported ASS Tags

- Text styling (bold, italic, underline)
- Color formatting (primary, secondary, outline)
- Positioning and alignment
- Font properties
- Margins and spacing

## Technical Details

### Components

1. **VideoPlayer**: Main component that handles video playback and subtitle synchronization
2. **SubtitleRenderer**: Renders ASS subtitles with proper styling and positioning
3. **ASSParser**: Utility class for parsing .ass files and extracting subtitle data

### Key Features

- Real-time subtitle synchronization
- Responsive design for different screen sizes
- Cross-platform compatibility (Web, iOS, Android)
- Proper ASS color format parsing
- Support for multiple subtitle styles

## Troubleshooting

### Common Issues

1. **Subtitles not showing**: Check that the .ass file is properly formatted and the path is correct
2. **Video not playing**: Ensure the video format is supported by expo-av
3. **Styling issues**: Verify the ASS file contains proper style definitions

### Dependencies

- `expo-av`: Video playback
- `react-native`: Core framework
- `expo`: Development platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple platforms
5. Submit a pull request

## License

MIT License - see LICENSE file for details