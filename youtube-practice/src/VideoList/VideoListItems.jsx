import React from "react";
import { v4 } from "uuid";
import "./VideoList.css";
import { useNavigate } from "react-router-dom";

const VideoListItems = (props) => {
  const navigate = useNavigate();

  const videos = props.videoDatas.map((video) => {
    return (
      <li
        className="c2"
        key={v4()}
        onClick={() => navigate(`/detail?id=${video.id.videoId}`)}
        // onClick={() => props.onSetVideoId(video.id.videoId)}
      >
        <figure>
          <img
            className="c5"
            src={video.snippet.thumbnails.high.url}
            alt="영상이미지"
          />
          <figcaption>{video.snippet.title},</figcaption>
        </figure>
      </li>
    );
  });
  return <>{videos}</>;
};

export default VideoListItems;
