'use strict';
const api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyBoGipKZG5KPKcv26-X1GMeYpxL8zGFu80';
  const fetchVideos = function (searchTerm, callback){
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm
    };
    
    $.getJSON(BASE_URL, query, (response) => { //get json and run an anon function that has parameter of response
      callback(test(response));// run the callback with the test method and response parameter
    });
  };
  
  const test = function (response){
    response = response.items.map(item => {
      return {
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });
    return response;
  };
  return {
    fetchVideos,
  };
}());