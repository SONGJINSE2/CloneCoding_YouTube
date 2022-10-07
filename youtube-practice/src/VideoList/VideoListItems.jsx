import React from 'react';
import {v4} from 'uuid';
import './VideoList.css';

const VideoListItems = (props) => {
    const videos = props.videoDatas.map(video => {
    return <li className="c2" key={v4()} onClick={() => props.onSetVideoId(video.id.videoId)} >
        <figure>
            <img className="c5" src={video.snippet.thumbnails.high.url} alt="영상이미지"/>
            <figcaption>{video.snippet.title}</figcaption>
        </figure>
    </li>
    })
    return (
    <>
    {videos}
    </>
    );
}


export default VideoListItems;