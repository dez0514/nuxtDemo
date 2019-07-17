const express = require('express')
const app = express()
const article = require('./api/article')
app.use(express.static('public'))
app.all('*',(req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'OPTIONS,PUT,GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  next();
})

const bodyParser = require('body-parser')
 //解决后端识别前端传参数的问题
app.use(bodyParser.urlencoded({extended: true}))

//引入刚才定义的article路由
app.use('/api',article) // 这个'/api' 就是接口的前面的部分 此处表示接口地址为 'http://localhost:3001/api/article'
// app.listen(port, host)
// console.log('server listiening on ' + host + ':' + port)
app.listen(3001,() => {  
    console.log(`app listening on port 3001.`)
})