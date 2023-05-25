import { useNavigate } from "react-router";
// import Axios from "axios";

const Archive = () => {
  const navigate = useNavigate();

  const mainSubmit = () => {
    navigate("/main");
  };

  const splashSubmit = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Archive</h1>

      <form onSubmit={mainSubmit}>
        <input type="submit" value="main" />
      </form>
      <form onSubmit={splashSubmit}>
        <input type="submit" value="splash" />
      </form>
    </div>
  );
};

export default Archive;
