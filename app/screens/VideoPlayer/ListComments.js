import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

const ListComments = ({comments}) => {
  return (
    <View style={styles.conatinerFlatList}>
      <FlatList
        data={comments}
        renderItem={({item}) => <CellComment comment={item} />}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListHeaderComponent={() => (
          <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>{comments.length} COMMENTS</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.containerFooter}>
            <View style={styles.seperatorFooter} />
            <Image
              style={styles.imageFooterUser}
              source={require('../../resources/images/icon/img_icon_user.png')}
            />
            <Text style={styles.textFooter}>ADD A COMMENT...</Text>
            <Image
              style={styles.imageFooterArrow}
              source={require('../../resources/images/icon/img_icon_arrow.png')}
            />
          </View>
        )}
      />
    </View>
  );
};

const CellComment = ({comment}) => {
  return (
    <View style={styles.containerCell}>
      <View style={styles.containerCommentHeader}>
        <Image
          style={styles.imageCommentUser}
          source={require('../../resources/images/icon/img_icon_user.png')}
        />
        <View style={styles.containerCommentHeaderText}>
          <Text style={styles.textName}>{comment.name}</Text>
          <Text style={styles.textPosition}>{comment.position}</Text>
        </View>
        <Text style={styles.textTimestamp}>{comment.timestamp}</Text>
      </View>
      <Text style={styles.textComment}>{comment.comment}</Text>
      <View style={styles.containerLike}>
        <Text style={styles.textLike}>LIKE</Text>
        <Image
          style={styles.imageLike}
          source={require('../../resources/images/icon/img_icon_like_filled.png')}
        />
        <Text style={styles.textLikeCount}>{comment.countLike}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatinerFlatList: {
    backgroundColor: '#f8f8f8',
  },
  containerHeader: {
    height: 40,
    justifyContent: 'flex-end',
  },
  textHeader: {
    marginLeft: 10,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#4a4a4a',
  },

  containerCommentHeader: {
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  },
  imageCommentUser: {
    marginLeft: 10,
    height: 40,
    width: 40,
  },
  containerCommentHeaderText: {
    marginLeft: 10,
  },
  textName: {
    paddingBottom: 4,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 14,
    color: '#1276d6',
  },
  textPosition: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#4a4a4a',
  },
  textTimestamp: {
    position: 'absolute',
    right: 10,
    top: 24,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 10,
    color: '#aaaaaa',
  },

  textComment: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 14,
    padding: 10,
    color: '#727272',
  },

  containerLike: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textLike: {
    marginLeft: 10,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#c73c13',
  },
  imageLike: {
    marginLeft: 15,
    height: 10,
    width: 10,
    marginBottom: 1,
  },
  textLikeCount: {
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#aaaaaa',
  },

  seperator: {
    position: 'absolute',
    height: StyleSheet.hairlineWidth,
    left: 10,
    right: 10,
    bottom: 0,
    backgroundColor: 'black',
  },

  containerFooter: {
    backgroundColor: '#eff8ff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  seperatorFooter: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
  },
  imageFooterUser: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },
  textFooter: {
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    color: '#67686a',
    flex: 1,
  },
  imageFooterArrow: {
    marginRight: 10,
    height: 16,
    width: 16,
  },
});

export default ListComments;
