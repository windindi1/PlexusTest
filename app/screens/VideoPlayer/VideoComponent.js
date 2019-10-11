import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VideoComponent = () => {
  //   const video = require();
  return (
    <View style={styles.containerVideo}>
      <Video
        source={require('../../resources/videos/video_sample.mp4')} // Can be a URL or a local file.
        ref={ref => {
          // this.player = ref;
        }} // Store reference
        //   onBuffer={this.onBuffer} // Callback when remote video is buffering
        //   onError={this.videoError} // Callback when video cannot be loaded
        style={styles.containerVideo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerVideo: {
    width: '100%',
    aspectRatio: 1.77,
    overflow: 'hidden',
  },
});

export default VideoComponent;
