var express = require('express');
var router = express.Router();

var index = require('../data/index.json');
var comments = require('../data/comment.json');
var item = require('../data/item.json');
var service = require('../data/service.json');

// 创建路由
// 首页
router.get('/index', function (req, res) {
  res.send(index)
})

// 评价
router.get('/item', function (req, res) {
  res.send(item)
})

//商家信息
router.get('/service', function (req,res) {
  res.send(service)
})

// 服务商
router.get('/comments', function (req, res) {


  if(req.query.page){
    var page = req.query.page/1;
    var comment = comments.slice((page)*10, 10*(page+1))
    res.send(comment)
  } else {
    var arr = []
    for (var i = 1; i <= comments.length/10; i++) {
      arr.push(i)
    }
    res.send(arr)
  }
})


//暴露
module.exports = router;