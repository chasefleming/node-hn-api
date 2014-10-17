var request = require('request'),
    ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/{itemId}.json',
    USER_URL = 'https://hacker-news.firebaseio.com/v0/user/{userName}.json',
    TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json',
    MAX_ITEM_URL = 'https://hacker-news.firebaseio.com/v0/maxitem.json';


function respond (callback) {
  return function (error, response, body) {
    if (!error && response.statusCode == 200) {
      try {
        var data = JSON.parse(body);
      } catch (err) {
        callback(err);
      }
      return callback(null, data);
    }
    return callback(error);
  }
}


function getItem(itemId, callback) {
  request(ITEM_URL.replace('{itemId}', itemId), respond(callback));
}

function getUser(userName, callback) {
  request(USER_URL.replace('{userName}', userName), respond(callback));
}

function getTopStories(callback) {
  request(TOP_STORIES_URL, respond(callback));
}

function getMaxItem(callback) {
  request(MAX_ITEM_URL, respond(callback));
}



module.exports = {
  item: getItem,
  user: getUser,
  topStories: getTopStories,
  maxItem: getMaxItem
}