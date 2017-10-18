import React from 'react';

//props has properties: videoElement, onVideoSelect, key
const VideoListItem = (props)=> {
  return (
    <li onClick={()=> {
          props.onVideoSelect(props.videoElement);
        }}
        className='list-group-item'>
      <div className='video-list media'>

        <div className='media-left'>
          <img className='media-object' src={props.videoElement.snippet.thumbnails.default.url}/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>
            {props.videoElement.snippet.title}
          </div>
        </div>

      </div>
    </li>
  );
};
//export component for others to use it
export default VideoListItem;
