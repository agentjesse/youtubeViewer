import React from 'react';

//create functional component
const VideoDetail = ({videoElement})=> {
  //check if the videoElement has actually been defined when this function is called. The ajax request may not have defined it in the parent's state yet.
  if (!videoElement){
    //since it isn't defined, return a div that says loading. when the request finishes it will update the state and cause a rerender calling this all over again with videoElement actually defined.
    return <div>Loading...</div>;
  }

  const url = `https://www.youtube.com/embed/${videoElement.id.videoId}`;

  return(
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>

      <div className='details'>
        <div>{videoElement.snippet.title}</div>
        <div>{videoElement.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
