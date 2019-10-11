import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RCDescription = ({text = ''}) => {
  return (
    <View>
      {text.length > 0 ? (
        <Text style={styles.textDescription} numberOfLines={4}>
          {text}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textDescription: {
    padding: 10,
    paddingTop: 0,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#4a4a4a',
  },
});

export default RCDescription;
