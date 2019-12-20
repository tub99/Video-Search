import React from 'react';
import './index.css';

function VideoItem(props) {
    const { video } = props;
    return (
        <div className='video-item item'>
            <img className='video-thumbnail' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <img className='video-thumbnail-mobile' src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
            <div className='video-content'>
                <div className='video-title'><strong>{video.snippet.title}</strong></div>
                <small className="video-channel">{video.snippet.channelTitle}</small>
                <p className='video-description'>{video.snippet.description}</p>
                <p><small>{new Date(video.snippet.publishedAt).toLocaleString()}</small></p>
            </div>
        </div>
    );
}

export default VideoItem;