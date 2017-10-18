import React from 'react';
import VideoListItem from './video_list_item';

//In a functional component, the props object (holding the passed in data) is an argument. When refactoring to a class-based component, props is available anywhere inside with this.props instead.
const VideoList = (props)=> {
  //using es5 for clarity.anyways... here we are making an array of jsx for react to render later. it's very intelligent at rendering arrays of items. videoElement.etag is just consistent and unique information in each element, used to set the key for the element in the list for react to use when needed.
  const videoItems = props.videos.map(function (videoElement){
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        videoElement={videoElement}
        key={videoElement.etag}
      />
    );
  });
  //display the array of jsx by referencing it in curly braces
  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};
//export component for others to use it
export default VideoList;
