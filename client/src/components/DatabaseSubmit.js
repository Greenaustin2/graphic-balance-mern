import { apiRequest } from "../api";
import { useState } from "react";
import axios from "axios";

const DatabaseSubmit = () => {
  const [textInput, setTextInput] = useState("");
  const requestApi = async (e) => {
    e.preventDefault();
    const video = e.target[0].value;
    const snippet = await apiRequest("singleSnippet", video);
    const contentDetails = await apiRequest("contentDetails", video);

    submitToArchive(snippet, contentDetails);
  };

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
    axios
      .post("http://localhost:5000/archive/add/", videoFile)
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
