import { useNavigate } from "react-router";
import IframeConstructor from "../components/iframeConstructor";

const Main = ({ apiRequest, videoData }) => {
  // const [video, videoState] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/archive");
  };
  const splashSubmit = () => {
    navigate("/");
  };

  const submitApi = (event) => {
    event.preventDefault();
    apiRequest();
  };
  return (
    <div>
      <h1>Main</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="archive" />
      </form>
      <form onSubmit={splashSubmit}>
        <input type="submit" value="splash" />
      </form>
      <form onSubmit={submitApi}>
        <input type="submit" value="api request" />
      </form>
      <p>{JSON.stringify(videoData)}</p>
    </div>
  );
};

export default Main;
