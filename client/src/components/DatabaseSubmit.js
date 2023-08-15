import { apiRequest } from "../api";
import { useState } from "react";
import axios from "axios";
import instance from "../axiosConfig";

/**
 * For Admin use only, allows an externally sourced video to be submitted to the database
 */
const DatabaseSubmit = () => {
  const [textInput, setTextInput] = useState("");
  const requestApi = async (e) => {
    e.preventDefault();
    const video = e.target[0].value;

    // two seperate API calls to retireve both snippet and content details data sets
    const snippet = await apiRequest("singleSnippet", video);
    const contentDetails = await apiRequest("contentDetails", video);

    submitToArchive(snippet, contentDetails);
  };

  // inserts relevant data into archive schema and submits to the database
  const submitToArchive = (snippet, contentDetails) => {
    const snippetData = snippet["items"][0]["snippet"];
    const contentData = contentDetails["items"][0]["contentDetails"];
    console.dir(contentData);
    console.log(snippetData);
    console.dir(contentDetails);
    const videoFile = {
      _id: snippet["items"][0]["id"],
      videoTitle: snippetData["title"],
      channelId: snippetData["channelId"],
      channelTitle: snippetData["channelTitle"],
      description: snippetData["description"],
      publisheTime: snippetData["publishedAt"],
      dateAdded: Date(),
      duration: contentData["duration"],
      thumbnailHigh: snippetData["thumbnails"]["high"]["url"],
      userRating: 0,
    };
    instance
      .post("archive-data/add/", videoFile)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <div>
      <form onSubmit={requestApi}>
        <input
          type="text"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default DatabaseSubmit;
