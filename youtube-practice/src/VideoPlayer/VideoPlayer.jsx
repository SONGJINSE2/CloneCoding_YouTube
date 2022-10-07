import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = (props) => {
    const url = `https://youtube.com/embed/${props.videoId}`;
    return (
    <div className="video-player-wrap">
        <iframe src={url} title={props.videoId} className="video-player" />
    </div>
    );
}

export default VideoPlayer;