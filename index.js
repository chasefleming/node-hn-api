var request = require('request');

exports.item = function (itemId) {
  request('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var item = JSON.parse(body);
      return {
        title: item.title,
        url: item.url,
        score: item.score,
        author: item.by,
        commentIds: item.kids
      };
    }
  });
};

exports.user = function (userName) {
  request('https://hacker-news.firebaseio.com/v0/user/' + userName + '.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var user = JSON.parse(body);
      return {
        karma: user.karma,
        about: user.about,
        submitted: user.submitted
      };
    }
  });
};

exports.topStories = function () {
  request('https://hacker-news.firebaseio.com/v0/topstories.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return JSON.parse(body);
    }
  });
};

exports.maxItem = function () {
  request('https://hacker-news.firebaseio.com/v0/maxitem.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return JSON.parse(body);
    }
  });
};