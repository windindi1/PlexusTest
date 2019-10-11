import React from 'react';
import {Text, StyleSheet} from 'react-native';

const RCTitle = ({title = ''}) => {
  return <Text style={styles.textTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    padding: 10,
    paddingTop: 25,
    marginBottom: -5,
    paddingBottom: 0,
    color: '#1276d6',
  },
});

export default RCTitle;
