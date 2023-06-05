const videoIdListGeneration = (data) => {
  var videoIdList = "";
  for (let i = 0; i < data.items.length; i++) {
    if (i == data.items.length - 1) {
      videoIdList += data.items[i]["id"]["videoId"];
    } else {
      videoIdList += data.items[i]["id"]["videoId"] + "%2C";
    }
  }
  return videoIdList;
};

const snippetContentDetailsConcatenation = (contentDetails, snippet) => {
  for (let i = 0; i < contentDetails.items.length - 1; i++) {
    contentDetails.items[i]["snippet"] = snippet.items[i]["snippet"];
  }
  return contentDetails;
};

const durationNameFilter = (combinedLists, queryValue) => {
  var x = 0;
  var filteredList = {};
  for (let i = 0; i < combinedLists.items.length - 1; i++) {
    if (combinedLists.items[i]["snippet"]["title"] === queryValue) {
      filteredList[x] = combinedLists.items[i];
      x += 1;
    }
  }
  return filteredList;
};

const randomVideo = (filteredList) => {
  if (Object.keys(filteredList).length > 1) {
    var randNumber = Math.floor(
      Math.random() * Object.keys(filteredList).length
    );
  }
  return filteredList[randNumber];
};

export {
  videoIdListGeneration,
  snippetContentDetailsConcatenation,
  durationNameFilter,
  randomVideo,
};
