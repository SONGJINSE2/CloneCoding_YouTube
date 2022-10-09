import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  const url = `https://youtube.com/embed/${props.videoId}`;
  return (
    <div>
      <div className="video-player-wrap">
        <div className="video-player-wrap2">
          <iframe src={url} title={props.videoId} className="video-player" />
        </div>
        <div className="video-player-wrap3">
          <div className="video-player-wrap3"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
