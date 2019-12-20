import React from 'react';
import VideoItem from '../VideoItem';
import './index.css';

function VideoList(props) {
    const { videoData } = props;
    let listItem = videoData.map((video,index) => {
        return (<VideoItem key={index} video={video}></VideoItem>);
    });
    return (
        <div className="list-container">{listItem}</div>
    )
}

export default VideoList;