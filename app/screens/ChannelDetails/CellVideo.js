import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

import {RCCellFeaturing} from '../ReusableComponents';
import numeral from 'numeral';

const CellVideo = ({props}) => {
  // console.log(props.description);
  let {
    title,
    countLike,
    countComment,
    description,
    countViews,
    duration,
    onPress,
  } = props;
  let lblDuration = Math.floor(duration / 60) + ':' + (duration % 60);
  let lblViewCount =
    countViews % 1000 >= 100 && countViews > 1000
      ? numeral(countViews).format('0.0a')
      : numeral(countViews).format('0a');

  let image = require('../../resources/images/img_video_1.jpeg');
  switch (props.id) {
    case '2':
      image = require('../../resources/images/img_video_2.jpeg');
      break;
    case '3':
      image = require('../../resources/images/img_video_3.jpeg');
      break;
    case '4':
      image = require('../../resources/images/img_video_4.jpeg');
      break;
    case '5':
      image = require('../../resources/images/img_video_5.jpeg');
      break;
    case '6':
      image = require('../../resources/images/img_video_6.jpeg');
      break;
    case '7':
      image = require('../../resources/images/img_video_7.jpeg');
      break;
    case '8':
      image = require('../../resources/images/img_video_8.jpeg');
      break;
    case '9':
      image = require('../../resources/images/img_video_9.jpeg');
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerVideoDetails}>
        <TouchableOpacity style={styles.containerVideo} onPress={onPress}>
          <Image style={styles.image} source={image} resizeMode="stretch" />
          <View style={styles.containerVideoOverlay}>
            <Image
              style={styles.imgIconPlay}
              source={require('../../resources/images/icon/img_icon_play.png')}
              resizeMode="stretch"
            />
            <View style={styles.containerDuration}>
              <Image
                style={styles.imgIconEye}
                source={require('../../resources/images/icon/img_icon_eye.png')}
              />
              <Text style={styles.textCountView}>{lblViewCount}</Text>
            </View>
            <View
              style={[
                styles.containerDuration,
                {
                  right: 5,
                  left: null,
                  width: 44,
                },
              ]}>
              <Image
                style={styles.imgIconClock}
                source={require('../../resources/images/icon/img_icon_clock.png')}
              />
              <Text style={styles.textCountView}>{lblDuration}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.containerTextVideo}>
          <Text style={styles.textTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.textDescription} numberOfLines={1}>
            {description}
          </Text>
          <View style={styles.containerTextBottom}>
            <Image
              style={styles.imageIconStar}
              source={require('../../resources/images/icon/img_icon_star.png')}
            />
            <Text style={styles.textBookMark}>BOOKMARK</Text>
            <Text style={styles.textCount}>{countLike}</Text>
            <Image
              style={styles.imageIconLike}
              source={require('../../resources/images/icon/img_icon_like_filled.png')}
            />
            <Text style={styles.textCount}>{countComment}</Text>
            <Image
              style={styles.imageIconComment}
              source={require('../../resources/images/icon/img_icon_comment.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={styles.containerTutor}>
        <RCCellFeaturing props={[props.tutor]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerVideoDetails: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  containerTextVideo: {
    // height: '100%',
    flexShrink: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  containerTextBottom: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTutor: {
    backgroundColor: '#eff8ff',
    height: 48,
    // justifyContent: 'center',
  },
  containerVideo: {
    width: '39%',
    aspectRatio: 1.5,
  },
  containerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  containerDuration: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    left: 5,
    width: 40,
    height: 16,
    borderRadius: 5,
    backgroundColor: '#000000bb',
    borderWidth: 1,
    borderColor: '#a3a3a3',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textTitle: {
    marginTop: 0,
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 15,
    color: '#006401',
  },
  textDescription: {
    marginTop: -20,
    fontSize: 12,
  },
  textBookMark: {
    marginLeft: 4,
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 12,
    color: '#4a4a4a',
  },
  textCount: {
    marginLeft: 10,
    marginRight: 4,
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 12,
    color: '#aaaaaa',
  },
  textCountView: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 9,
    color: '#a3a3a3',
    marginBottom: 1,
  },

  image: {
    flexShrink: 1,
    width: '100%',
  },
  imageIconStar: {
    height: 12,
    width: 12,
  },
  imageIconLike: {
    height: 10,
    width: 10,
  },
  imageIconComment: {
    height: 15,
    width: 15,
  },
  imgIconPlay: {
    height: '25%',
    aspectRatio: 1,
    marginLeft: 10,
  },
  imgIconEye: {
    height: 11,
    width: 11,
  },
  imgIconClock: {
    height: 9,
    width: 9,
  },
});

export default CellVideo;
