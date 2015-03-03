# html-parser

parse html into dom tree

[![modulex-json](https://nodei.co/npm/modulex-json.png)](https://npmjs.org/package/modulex-json)
[![NPM downloads](http://img.shields.io/npm/dm/modulex-json.svg)](https://npmjs.org/package/modulex-json)
[![Build Status](https://secure.travis-ci.org/modulex/json.png?branch=master)](https://travis-ci.org/modulex/json)
[![Coverage Status](https://img.shields.io/coveralls/modulex/json.svg)](https://coveralls.io/r/modulex/json?branch=master)
[![Dependency Status](https://gemnasium.com/modulex/json.png)](https://gemnasium.com/modulex/modulex-json)

## use on node

```javascript
var HtmlParser = require('../../');

console.log(HtmlParser.parse('<html><div>1</div><img src="http://g.cn"/></html>'));
```