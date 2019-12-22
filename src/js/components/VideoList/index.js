import React from 'react';
import VideoItem from '../VideoItem';
import PropTypes from 'prop-types';
import './index.css';

function VideoList(props) {
    const { videoData } = props;
    let listItem = videoData.map((video, index) => {
        return (<VideoItem key={index} video={video}></VideoItem>);
    });
    return (
        <div className="list-container">{listItem}</div>
    )
}

VideoList.propTypes = {
    videoData: PropTypes.array
}
VideoList.defaultProps = {
    videoData: []
}
export default VideoList;