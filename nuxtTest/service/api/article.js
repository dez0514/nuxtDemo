import { Router } from 'express'
const router = Router()

// 连接mongoDb
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017' // mongo数据库服务地址
const dbName = 'dezz' // 库名
const chartName = 'article' // 表名

MongoClient.connect(url, (err, client) => {
  const col = client.db(dbName).connect(chartName)
  router.get('/article',(req, res, next) => { // get方式
    // mongoDb查询 find
    col.find({}).toArray((err, item) => {
      res,json(item)
    })
  })
})