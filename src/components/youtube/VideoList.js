import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedLists = videos.map( (video) => {
    return <VideoItem 
      key={video.id.videoId} 
      onVideoSelect={onVideoSelect} 
      video={video} 
      />;
  });

  return(
    // will have access to parent's state
    <div className="ui relaxed divided list">
      {renderedLists}
    </div>
  )
}

export default VideoList;