import React from "react";
import "./VideoPlayer.css";
import { useSearchParams } from "react-router-dom";

const VideoPlayer = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("id");

  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="video-player-wrap">
        <div className="video-player-wrap2">
          <iframe src={url} title={videoId} className="video-player" />
        </div>
        <div className="video-player-wrap3">
          <div className="video-player-wrap3"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
