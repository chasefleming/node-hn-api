# Hacker News API - Node Wrapper

`npm install hn-api`

```
var hn = require("hn-api");
```

## Get Item
```
hn.item(8422599, function (err, item) {
  if (!err) {
    console.log(item.by); // kevin
    console.log(item.id); // 8422599
    console.log(item.kids); // array
    console.log(item.score); // 1677
    console.log(item.time); // 1412703525
    console.log(item.title); // Hacker News API
    console.log(item.url); // http://blog.ycombinator.com/hacker-news-api
  }
});
```

## Get User
```
hn.user('pg', function (err, user) {
  if (!err) {
    console.log(user.created); // 1160418092
    console.log(user.delay); // 2
    console.log(user.id); // pg
    console.log(user.karma); // 155040
    console.log(user.submitted); // [ 7494555, ... ]
    console.log(user.about); // Bug fixer.
  }
});
```

## Get Top Stories
```
hn.topStories(function(err, stories){
  if (!err) {
    console.log(stories); // array
  }
});
```

## Get Max Item
```
hn.maxItem(function(err, max){
  if(!err) {
    console.log('max ', max); // id
  }
})
```

Would love to get some more help on this project to make it awesome! Please contribute.