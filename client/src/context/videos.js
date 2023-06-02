import { useState, createContext } from "react";
import YoutubeApi from "../api";

const VideosContext = createContext();

function Provider({ children }) {
  const [video, setVideo] = useState([]);
  const submitRequest = async () => {
    const result = await YoutubeApi();
    setVideo(result);
  };
  const videoFunctions = {
    submitRequest,
  };
  return (
    <VideosContext.Provider value={{ videoFunctions }}>
      {children}
    </VideosContext.Provider>
  );
}

export { Provider };
export default VideosContext;
