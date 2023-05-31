import React from "react";
import Youtube from "react-youtube";

class IframeConstructor extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log(this.props);
    // this.state = { videoData: props.videoData };
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        playsInline: 1,
        rel: 0,
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        color: "white",
        fs: 1,
      },
    };

    // console.log("video data" + JSON.stringify(props.videoData));

    return (
      <div>
        <Youtube
          videoId={this.props.videoData["id"]}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.loadVideoById(this.props.videoData["id"]);
  }
}

// function IframeConstructor({ videoData }) {
//   console.log("iframe constructor called");
//   const opts = {
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//       playsInline: 1,
//       rel: 0,
//       autoplay: 1,
//       modestbranding: 1,
//       controls: 1,
//       color: "white",
//       fs: 1,
//     },
//   };

//   return (
//     <div>
//       <div>
//         <Youtube
//           videoId={videoData["id"]}
//           // containerClassName="embed embed-youtube"
//           // onStateChange={(e) => checkElapsedTime(e)}
//           opts={opts}
//         />
//       </div>
//     </div>
//   );
// }

export default IframeConstructor;
