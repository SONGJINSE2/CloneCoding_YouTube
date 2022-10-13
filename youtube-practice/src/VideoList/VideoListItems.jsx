import React from "react";
import { v4 } from "uuid";
import "./VideoList.css";
import { useNavigate } from "react-router-dom";

const VideoListItems = (props) => {
  const navigate = useNavigate();

  const videos = props.videoDatas.map((video) => {
    console.log("바보", video);
    return (
      <li
        className="c2"
        key={v4()}
        onClick={() => navigate(`/detail?id=${video.id.videoId}`)}
        // onClick={() => props.onSetVideoId(video.id.videoId)}
      >
        <figure>
          <img
            className="thumbnailImg"
            src={video.snippet.thumbnails.high.url}
            alt="영상이미지"
          />
          <div className="Video-list-text-box">
            <img
              className="channelImg"
              src={video.snippet.channelThumb.high.url}
            />
            <figcaption>{video.snippet.title},</figcaption>
          </div>
        </figure>
      </li>
    );
  });
  return <>{videos}</>;
};

export default VideoListItems;
