import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import VideoComponent from './VideoComponent';
import ListComments from './ListComments';

import {
  RCCount,
  RCTitle,
  RCDescription,
  RCCellFeaturing,
} from '../ReusableComponents';

import styles from './styles';

class VideoPlayer extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.log('Params are ', navigation.state.params);
    return {
      title: navigation.getParam('title'),
    };
  };

  constructor(props) {
    super(props);
    this.courseDetails = require('../../resources/dummyData/data.json');
    this.videoDetails = this.courseDetails.videos[
      this.props.navigation.state.params.videoId - 1
    ];
    this.state = {
      displayStrings: {
        lblTitle: this.videoDetails.title,
        lblViewCount: this.videoDetails.countViews,
        lblLikeCount: this.videoDetails.countLike,
        lblCommentCount: this.videoDetails.comments.length,
        lblShareCount: this.videoDetails.countShare,
        lblDescription: this.videoDetails.description,
      },
      tutor: this.videoDetails.tutor,
      comments: this.videoDetails.comments,
    };

    // console.log('RCCOunt is ', RCCount);
  }

  componentWillMount() {
    // this.props.navigation.setParams({otherParam: this.videoDetails.title});
  }

  render() {
    return (
      <View style={styles.containerView}>
        <ScrollView>
          <VideoComponent />
          <RCTitle title={this.state.displayStrings.lblTitle} />
          <Text style={{padding: 10}}>
            <RCCount
              countValue={this.state.displayStrings.lblViewCount}
              countString="VIEWS"
            />
            {'   '}
            <RCCount
              countValue={this.state.displayStrings.lblLikeCount}
              countString="LIKES"
            />
            {'   '}
            <RCCount
              countValue={this.state.displayStrings.lblCommentCount}
              countString="COMMENTS"
            />
            {'   '}
            <RCCount
              countValue={this.state.displayStrings.lblShareCount}
              countString="SHARES"
            />
          </Text>
          <RCDescription text={this.state.displayStrings.lblDescription} />
          <Text style={styles.textFeaturingHeader}>FEATURING</Text>
          <RCCellFeaturing props={[this.state.tutor]} />

          <View style={[styles.seperator, {marginTop: 20}]} />
          <View style={styles.containerCourseDetails}>
            <Text style={styles.textCourseStatic}>This video is part of</Text>
            <Text style={styles.textCourseTitle}>
              {this.courseDetails.title}
            </Text>
            <TouchableOpacity style={styles.buttonSubscribe}>
              <Text style={styles.textSubscribe}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator} />
          <View style={styles.containerVideoActions}>
            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonAction}>
                <Image
                  style={styles.imageIconLike}
                  source={require('../../resources/images/icon/img_icon_like_filled.png')}
                />
                <Text style={styles.textButtonAction}>{'  '}LIKE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonAction}>
                <Image
                  style={styles.imageIconBookMark}
                  source={require('../../resources/images/icon/img_icon_star.png')}
                />
                <Text style={styles.textButtonAction}>{'  '}BOOKMARK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonAction}>
                <Image
                  style={styles.imageIconLike}
                  source={require('../../resources/images/icon/img_icon_share.png')}
                />
                <Text style={styles.textButtonAction}>{'  '}SHARE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator} />
          <ListComments comments={this.state.comments} />
          <View style={{height: 50}} />
        </ScrollView>
        <TouchableOpacity style={styles.buttonAddCommentBottom}>
          <View style={styles.containerButtonAdd}>
            <Image
              style={styles.imageButtonAdd}
              source={require('../../resources/images/icon/img_icon_plus.png')}
            />
            <Text style={styles.textButtonAddComment}>ADD A COMMENT</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default VideoPlayer;
