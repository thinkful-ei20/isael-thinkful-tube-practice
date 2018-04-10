'use strict';
const store = (function(){
  let videos = [];
  const setVideos = function(video){
    this.videos = video;
  };

  return {
    videos,
    setVideos,
  };
}());