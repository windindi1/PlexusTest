import numeral from 'numeral';

const DataManipulator = () => {
  let courseDetails = require('../../resources/dummyData/data.json');

  let getDisplayStrings = () => {
    let lblTitle = courseDetails.title;
    let lblVideoCount = courseDetails.videos.length;
    let lblViewCount = `  ${getViewCount()}`;
    let subscriptionCount = courseDetails.countSubscribers;
    let lblSubscriberCount = `  ${subscriptionCount}`;
    let lblDescription = courseDetails.description;
    let lblSubscriptionCost = courseDetails.subscriptionCost;

    return {
      lblTitle,
      lblVideoCount,
      lblViewCount,
      lblSubscriberCount,
      lblDescription,
      lblSubscriptionCost,
    };
  };

  getViewCount = () => {
    let array = courseDetails.videos;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      count += element.countViews;
    }

    return count;
  };

  getFeaturingList = () => {
    let array = courseDetails.videos;
    let arrayFeaturing = [];
    let currentIndex = 0;
    let dictFeaturing = {};
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (dictFeaturing[element.tutor.id] == undefined) {
        dictFeaturing[element.tutor.id] = 1;
        if (currentIndex >= arrayFeaturing.length) {
          arrayFeaturing.push({
            key: currentIndex.toString(),
            tutors: new Array(),
          });
        }
        arrayFeaturing[currentIndex].tutors.push(element.tutor);
        if (arrayFeaturing[currentIndex].tutors.length == 2) {
          currentIndex += 1;
        }
      }
    }
    return arrayFeaturing;
  };

  getVideosList = () => {
    return courseDetails.videos;
  };

  return {
    getDisplayStrings,
    getFeaturingList,
    getVideosList,
  };
};

export default DataManipulator;
