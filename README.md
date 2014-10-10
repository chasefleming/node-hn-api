# Hacker News API - Node Wrapper

`npm install hn-api`

```
var hn = require("hn-api");
```

## Get Item
```
var title = hn.item(8863).title;
var url = hn.item(8863).url;
var score = hn.item(8863).score;
var author = hn.item(8863).author;
var commentIds = hn.item(8863).commentIds;
```

## Get User
```
var user = hn.user('lj');
var karma = hn.user('lj').karma;
var about = hn.user('lj').about;
var submitted = hn.user('lj').submitted;
```

## Get Top Stories
```
var topStories = hn.topStories();
```

## Get Max Item
```
var maxItem = hn.maxItem();
```

Would love to get some more help on this project to make it awesome! Please contribute.