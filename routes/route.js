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
// 服务商
router.get('/comments', function (req, res) {
  res.send(comments)
})

// 评价
router.get('/item', function (req, res) {
  res.send(item)
})

//商家信息
router.get('/service', function (req,res) {
  res.send(service)
})

//暴露
module.exports = router;