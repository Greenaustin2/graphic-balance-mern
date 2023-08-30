import query from "./utils/queryGeneration";
import {
  videoIdListGeneration,
  snippetContentDetailsConcatenation,
  durationNameFilter,
  randomVideo,
} from "./utils/queryProcessing";

const apiKey = "AIzaSyBbjPfpogUhfCptQKixNdKI445O_XFP3hs";

const apiRequest = async (part, value) => {
  let url;
  //If statement that differentiates between a Content Details and Snippet API requests
  if (part === "contentDetails") {
    url = `https://www.googleapis.com/youtube/v3/videos?id=${value}&part=contentDetails&key=${apiKey}`;
  } else if (part === "snippet") {
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&videoEmbeddable=true&maxResults=10&videoDefinition=high&q=${value}`;
  } else if (part === "singleSnippet") {
    url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=${value}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const YoutubeApi = async () => {
  while (true) {
    //A search query is generated at random
    var queryValue = query();
    //A Snipped API request is made using the randombly generated search query
    var snippet = await apiRequest("snippet", queryValue);
    console.log(snippet);
    //Video ID's are extracted and combined into a list for use int he Content Details API request
    var videoIdList = videoIdListGeneration(snippet);
    console.log(videoIdList);
    // ContentDetails API request
    var contentDetails = await apiRequest("contentDetails", videoIdList);
    console.log(contentDetails);
    //Both Snippet and Content Details API requests are combined
    var combinedLists = snippetContentDetailsConcatenation(
      contentDetails,
      snippet
    );
    //Filters out video results that do not direstly match the query value or duration requirements
    var filteredList = durationNameFilter(combinedLists, queryValue);
    //A video is chosen at random from the filtered video list
    if (Object.keys(filteredList).length < 2) {
      continue;
    } else {
      var randVideo = randomVideo(filteredList);
      console.log("random video selection from api.js " + randVideo["id"]);
      return randVideo;
    }
  }
};

export { apiRequest };
export default YoutubeApi;
