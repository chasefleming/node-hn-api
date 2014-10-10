var expect = require('chai').expect,
    hn = require('../index'),
    itemMock,
    userMock,
    topStoriesMock,
    maxItemMock;

itemMock = function () {
  return {
    title: 'Title 123',
    url: 'http://www.example.com',
    score: '111',
    author: 'Someone',
    commentIds: [123, 1234]
  };
};

userMock = function () {
  return {
    karma: 300,
    about: 'Interesting info',
    submitted: [123, 1234]
  }
};

topStoriesMock = function () {
  return [123, 124]
};

maxItemMock = function () {
  return 1234;
};

hn.item = itemMock;
hn.user = userMock;
hn.topStories = topStoriesMock;
hn.maxItem = maxItemMock;


describe('Item call', function () {

  it('should return an item title', function () {
    expect(hn.item.title).to.equal(itemMock.title);
  });

  it('should return a url', function () {
    expect(hn.item.url).to.equal(itemMock.url);
  });

  it('should return a score', function () {
    expect(hn.item.score).to.equal(itemMock.score);
  });

  it('should return an author', function () {
    expect(hn.item.author).to.equal(itemMock.author);
  });

  it('should return array of comments', function () {
    expect(hn.item.commentIds).to.equal(itemMock.commentIds);
  });

});


describe('User call', function () {

  it('should return a karma score', function () {
    expect(hn.user.karma).to.equal(userMock.karma);
  });

  it('should return an about', function () {
    expect(hn.user.about).to.equal(userMock.about);
  });

  it('should return an array of sumbission ids', function () {
    expect(hn.user.submitted).to.equal(userMock.submitted);
  });

});


describe('Top Stories call', function () {

  it('should return the top stories', function () {
    expect(hn.topStories()).to.have.length(2);
  });

});


describe('Max Item call', function () {

  it('should return the max item', function () {
    expect(hn.maxItem()).to.equal(1234);
  });

});