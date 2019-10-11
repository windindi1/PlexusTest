import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import DataManipulator from './DataManipulator';
import CellVideo from './CellVideo';
import {
  RCCount,
  RCTitle,
  RCDescription,
  RCCellFeaturing,
} from '../ReusableComponents';

class ChannelDetails extends React.Component {
  constructor(props) {
    super(props);
    this.dataManipulator = new DataManipulator();
    this.state = {
      displayStrings: {
        lblTitle: '',
        lblVideoCount: '',
        lblViewCount: '',
        lblSubscriberCount: '',
        lblDescription: '',
        lblSubscriptionCost: '',
      },
      featuringList: [],
      videoList: [],
    };
    this.loadData();
    // console.log('Loaded data is ', this.state);
  }

  loadData = () => {
    this.state = {
      ...this.state,
      displayStrings: this.dataManipulator.getDisplayStrings(),
      featuringList: this.dataManipulator.getFeaturingList(),
      videoList: this.dataManipulator.getVideosList(),
    };
  };

  btnVideoSelected = (id, title) => {
    this.props.navigation.navigate('VideoPlayer', {videoId: id, title});
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                resizeMode="stretch"
                source={require('../../resources/images/img_cover_course.png')}
              />
            </View>
            <RCTitle title={this.state.displayStrings.lblTitle} />
            <Text style={{padding: 10}}>
              <RCCount
                countValue={this.state.displayStrings.lblVideoCount}
                countString="VIDEOS"
              />
              {'   '}
              <RCCount
                countValue={this.state.displayStrings.lblViewCount}
                countString="VIEWS"
              />
              {'   '}
              <RCCount
                countValue={this.state.displayStrings.lblSubscriberCount}
                countString="SUBSCRIBERS"
              />
            </Text>
            <RCDescription text={this.state.displayStrings.lblDescription} />

            <Text style={styles.textFeaturingHeader}>FEATURING</Text>
            <View>
              <FlatList
                data={this.state.featuringList}
                renderItem={({item}) => <RCCellFeaturing props={item.tutors} />}
                keyExtractor={item => item.key}
                ItemSeparatorComponent={() => (
                  <View style={styles.cellSeperator} />
                )}
              />
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.buttonSubscribe}>
                <Text style={styles.textButtonSubscribe}>
                  SUBSCRIBE ({this.state.displayStrings.lblSubscriptionCost})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonShare}>
                <Text style={styles.textButtonShare}>SHARE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerListFeaturing}>
              <Text style={styles.textHeaderVideos}>ALL VIDEOS</Text>
              <FlatList
                data={this.state.videoList}
                renderItem={({item}) => (
                  <CellVideo
                    props={{
                      ...item,
                      onPress: () => this.btnVideoSelected(item.id, item.title),
                    }}
                  />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                  <View style={styles.cellSeperator} />
                )}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default ChannelDetails;
