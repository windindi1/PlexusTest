import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RCCellFeaturing = ({props}) => {
  // console.log(props);
  let {name, position, id} = props[0];
  let containerWidth = props.length > 1 ? '49%' : '98%';

  return (
    <View style={styles.container}>
      <View style={[styles.containerTutor, {width: containerWidth}]}>
        <Image
          source={require('../../resources/images/img_tutor_1.png')}
          style={styles.image}
        />
        <View style={[styles.containerText]}>
          <Text style={styles.textName} numberOfLines={1}>
            {props[0].name}
          </Text>
          <Text style={styles.textPosition} numberOfLines={1}>
            {props[0].position}
          </Text>
        </View>
      </View>
      {props.length == 1 ? null : (
        <View style={styles.containerTutor}>
          <Image
            source={require('../../resources/images/img_tutor_2.png')}
            style={styles.image}
          />
          <View style={styles.containerText}>
            <Text style={styles.textName} numberOfLines={1}>
              {props[1].name}
            </Text>
            <Text style={styles.textPosition} numberOfLines={1}>
              {props[1].position}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  containerTutor: {
    width: '49%',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  containerText: {
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textName: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 11,
    color: '#4a4a4a',
  },
  textPosition: {
    width: '100%',
    fontFamily: 'HelveticaNeue',
    fontSize: 10,
    color: '#4a4a4a',
  },
});

export default RCCellFeaturing;
