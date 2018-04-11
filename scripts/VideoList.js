'use strict'; 
/* global api, store*/
const videoList = (function(){

  const generateListItem = function (video){
    return `
    <li>
    <a href=https://www.youtube.com/watch?v=${video.id.videoId ? video.id.videoId : ''}>
      <div>
      <h1>${video.title}</h1>
      </div>
      <img src='${video.thumbnail}' />
    </a>
    </li>
    `;
  };

  const render = function(){
    let html = store.videos.map(item => generateListItem(item));
    $('.results').html(html);
  };

  const handleFormSubmit = function(){
    $('form').submit(e => {
      e.preventDefault();
      let searchTerm = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(searchTerm, fetchVideosCallback);
    });
  };

  const fetchVideosCallback = function (response){
    store.setVideos(response);
    render();
  };

  const bindEventListeners = function(){
    handleFormSubmit();
  };

  return {
    render,
    bindEventListeners,
  };

}());