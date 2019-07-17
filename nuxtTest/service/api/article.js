//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017' // mongo数据库服务地址
const dbName = 'dezz' // 库名
//引入数据模型模块
const Article = require("../../models/article"); // 包含表名
//连接数据库
mongoose.connect(url + '/' + dbName, {useNewUrlParser: true})
mongoose.connection.on('connected', () => {
  console.log("连接成功");
  router.get('/article',(req, res) => { // get方式
    Article.find({}).then(data => {
      console.log(333,data)
      res.json(data);
    }).catch(err => {      
      console.log('err');
      res.json(err);
    });
  })
  router.post('/article', bodyParser.json(), (req, res) => { // post方式
    console.log(req.body)  
    Article.create(req.body, (err, data) => { 
      if (err) {
        console.log('post==err',555)
        res.json(err);
      } else {
        console.log('post===suc',666)
        res.json(data);
      }
    });
  })
})
mongoose.connection.on('error', () => {
  console.log("连接失败");
})
mongoose.connection.on('disconnected', () => {
  console.log("断开连接");
})

module.exports = router;