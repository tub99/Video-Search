import React from 'react';
import VideoItem from '../VideoItem';
import './index.css';

function VideoList(props) {
    const { videoData } = props;
    let listItem = videoData.map(video => {
        return (<VideoItem key={video.id.videoId || video.id.playlistId || video.etag} video={video}></VideoItem>);
    });
    return (
        <div className="list-container">{listItem}</div>
    )
}

export default VideoList;