import React from 'react';
import {Text, StyleSheet} from 'react-native';

import numeral from 'numeral';

const RCCount = ({countValue = '0', countString = ''}) => {
  // console.log('COunt value is ', countValue);

  countValue =
    countValue % 1000 >= 100 && countValue > 1000
      ? numeral(countValue).format('0.0a')
      : numeral(countValue).format('0a');
  countValue = countValue.toUpperCase();

  return (
    <Text style={styles.textCountString}>
      <Text style={styles.textCountValue}>{countValue}</Text>
      {' ' + countString}
    </Text>
  );
};

const styles = StyleSheet.create({
  textCountString: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 10,
    padding: 10,
    paddingTop: 0,
    color: '#37a379',
  },
  textCountValue: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#37a379',
  },
});

export default RCCount;
