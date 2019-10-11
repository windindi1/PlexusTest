import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },

  containerImage: {
    width: '100%',
    aspectRatio: 1.9,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },

  textFeaturingHeader: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 8,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 14,
    color: '#aaaaaa',
  },

  containerButtons: {
    flexDirection: 'row',
    marginTop: 20,
    height: 45,
    width: '100%',
  },
  buttonSubscribe: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#c73c13',
    width: '65%',
    height: '100%',
  },
  buttonShare: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
    flex: 1,
    height: '100%',
  },
  textButtonSubscribe: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 13,
    color: '#ffffff',
  },
  textButtonShare: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 13,
    color: '#2f4f4e',
  },

  containerListFeaturing: {
    width: '100%',
    backgroundColor: '#f1f1f1',
  },
  textHeaderVideos: {
    fontFamily: 'HelveticaNeue-Medium',
    padding: 10,
    paddingTop: 30,
  },

  cellSeperator: {
    height: 30,
  },
});
