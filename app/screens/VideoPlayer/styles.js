import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerView: {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },

  textFeaturingHeader: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 14,
    color: '#aaaaaa',
  },

  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
  },

  containerCourseDetails: {
    margin: 10,
    flex: 1,
    height: 50,
  },
  textCourseStatic: {
    position: 'absolute',
    top: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#aaaaaa',
  },
  textCourseTitle: {
    position: 'absolute',
    bottom: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 14,
    color: '#1276d6',
  },
  buttonSubscribe: {
    position: 'absolute',
    right: 0,
    top: 8,
    backgroundColor: '#c73c13',
    borderRadius: 5,
    padding: 8,
  },
  textSubscribe: {
    fontFamily: 'HelveticaNeue-Bold',
    color: 'white',
  },

  containerVideoActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },
  buttonAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIconLike: {
    height: 14,
    width: 14,
  },
  imageIconBookMark: {
    height: 14,
    width: 14,
  },
  textButtonAction: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#4a4a4a',
  },

  buttonAddCommentBottom: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    backgroundColor: '#2882d8dd',
  },
  containerButtonAdd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButtonAdd: {
    height: 10,
    width: 10,
  },
  textButtonAddComment: {
    marginLeft: 8,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#ffffff',
  },
});
