import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions, Text } from 'react-native';
import { VideoPlayer } from './components/VideoPlayer';

const translateText = async (text, targetLang = 'en') => {
  return text;
};


const sampleSubtitle = `[Script Info]
Title: Upasachi Kapane - Fancy Styled
Original Script: ChatGPT
ScriptType: v4.00+
Collisions: Normal
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.601

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Narration,Arial,24,&H00FFFFFF,&H000000FF,&H64000000,&H64000000,0,0,0,0,100,100,0,0,1,3,1,2,50,50,50,1
Style: Tip,Arial,22,&H0000FF00,&H000000FF,&H64000000,&H64000000,0,0,0,0,100,100,0,0,1,3,1,8,50,50,50,1
Style: Emphasis,Arial,26,&H0000FFFF,&H000000FF,&H64000000,&H64000000,-1,0,0,0,100,100,0,0,1,4,2,2,50,50,50,1
Style: Ingredient,Arial,24,&H00FFAA00,&H000000FF,&H64000000,&H64000000,0,0,0,0,100,100,0,0,1,3,1,2,50,50,50,1
Style: CrazyNarrative,Arial,28,&H00FFFFFF,&H00FFC800,&H00000000,&H00000000,1,0,0,0,100,100,0,0,1,2,2,2,50,50,50,1
Style: CrazyEmphasis,Arial,30,&H00FFD700,&H00FF69B4,&H00000000,&H64000000,1,-1,0,0,120,120,5,0,1,4,4,2,30,30,30,1
Style: CrazyTip,Arial,26,&H0090EE90,&H000000FF,&H00000000,&H64000000,0,0,1,0,100,100,0,0,1,3,2,8,50,50,50,1
Style: CrazyIngredient,Arial,30,&H00FFC800,&H000000FF,&H00000000,&H64000000,1,0,0,0,100,100,0,0,1,3,3,2,50,50,50,1
Style: BGStyle,Arial,22,&H00FFFFFF,&H00CBC0FF,&H00000000,&HFF000000,1,0,0,0,100,100,0,0,3,0,0,2,50,50,50,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.37,0:00:02.91,BGStyle,,0,0,0,,श्रावणचा महिना सुरू झालेला आहे
Dialogue: 0,0:00:02.91,0:00:05.43,CrazyNarrative,,0,0,0,,आणि बऱ्याच लोकांचा उपासही सुरू झालेला आहे.
Dialogue: 0,0:00:06.37,0:00:11.13,CrazyEmphasis,,0,0,0,,तर, उपास करायचा म्हटलं की प्रश्न असा असतो की काय बनवू शकतो आपण उपासाला?
Dialogue: 0,0:00:11.88,0:00:16.57,CrazyEmphasis,,0,0,0,,त्यातला आज एक प्रश्न मी सोडवणार आहे, ते म्हणजे उपासाची कापणे.
Dialogue: 0,0:00:17.16,0:00:21.42,CrazyIngredient,,0,0,0,,इथे मी अर्धा किलो सुरण घेतलेलं आहे.
Dialogue: 0,0:00:21.42,0:00:28.37,CrazyTip,,0,0,0,,स्लाईसेस करायच्या आधी हाताला थोडंसं तेल चोळून घ्या — खाज टाळण्यासाठी!
Dialogue: 0,0:00:28.37,0:00:32.15,CrazyTip,,0,0,0,,कारण सुरणाला थोडीशी खाज असते.
Dialogue: 0,0:00:32.65,0:00:36.63,CrazyNarrative,,0,0,0,,आता हा सुरण आपण साफ करून स्लाईसेस करून घेऊया.
Dialogue: 0,0:00:37.69,0:00:41.11,CrazyNarrative,,0,0,0,,हा सुरण आपण आता धुऊन घेऊया.
Dialogue: 0,0:00:41.11,0:00:43.69,CrazyNarrative,,0,0,0,,त्यातली माती सगळी काढून घेऊया.
Dialogue: 0,0:00:46.31,0:00:48.32,CrazyNarrative,,0,0,0,,आता ह्याचे आपण स्लाईसेस करून घेऊया.
Dialogue: 0,0:00:50.01,0:00:56.94,CrazyTip,,0,0,0,,स्लाईसेस ~१ से.मी. जाडीचे — ना खूप जाड, ना खूप पातळ.
Dialogue: 0,0:00:58.29,0:01:04.84,CrazyEmphasis,,0,0,0,,कधी कधी सुरण खाजरा होऊ शकतो आणि घशाला खाववतो.
Dialogue: 0,0:01:05.21,0:01:07.76,CrazyTip,,0,0,0,,चिंचेच्या कोळ्यांनी हे टाळता येतं!
Dialogue: 0,0:01:08.18,0:01:12.15,CrazyTip,,0,0,0,,थोडा चिंचेचा कोळ लावा आणि बाजूला ठेवा`;

const convertGoogleDriveUrl = (url) => {
  if (url.includes('drive.google.com/file/d/')) {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
  }
  return url;
};

export default function App() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [subtitleData, setSubtitleData] = useState(null);
  const [currentSubtitles, setCurrentSubtitles] = useState([]);
  const [playbackStatus, setPlaybackStatus] = useState({});
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);
  
  const videoSource = require('./assets/videos/instagram-video.mp4');
  
  const subtitleSource = sampleSubtitle;
  

  const shortsAspectRatio = 9 / 16;
  const maxWidth = Math.min(dimensions.width, 400);
  const maxHeight = dimensions.height;
  
  let containerWidth = maxWidth;
  let containerHeight = containerWidth / shortsAspectRatio;
  
  if (containerHeight > maxHeight) {
    containerHeight = maxHeight;
    containerWidth = containerHeight * shortsAspectRatio;
  }
  
  const handleSubtitleUpdate = (subtitles, status) => {
    setCurrentSubtitles(subtitles);
    setPlaybackStatus(status);
  };
  
  const handleSubtitleData = (data) => {
    setSubtitleData(data);
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    }}>
      <StatusBar hidden />
      
      <View style={{
        width: containerWidth,
        height: containerHeight,
        backgroundColor: 'black',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative'
      }}>
        <VideoPlayer
          videoSource={videoSource}
          subtitleSource={subtitleSource}
          style={{ width: "100%", height: "100%" }}
          translateFunction={translateText}
          onSubtitleUpdate={handleSubtitleUpdate}
          onSubtitleData={handleSubtitleData}
        />
      </View>
      

      {subtitleData && currentSubtitles.length > 0 && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          elevation: 99999,
          pointerEvents: 'none',
          justifyContent: 'flex-end',
          paddingBottom: 50
        }}>
          {currentSubtitles.map((subtitle, index) => (
            <View key={index} style={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              marginHorizontal: 20,
              marginVertical: 5,
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 8,
              alignSelf: 'center',
              maxWidth: '90%'
            }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2
              }}>
                {subtitle.text}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});