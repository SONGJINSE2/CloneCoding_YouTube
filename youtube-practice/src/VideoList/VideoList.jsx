import React from "react";
import VideoListItems from "./VideoListItems";

const VideoList = (props) => {
  return (
    <ul className="c1">
      <VideoListItems {...props}></VideoListItems>
    </ul>
  );
};

export default VideoList;
