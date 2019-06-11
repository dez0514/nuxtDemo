
import express from 'express'
import { Nuxt , Builder } from 'nuxt'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const prot = process.env.PORT || 3000

app.set('port', port)

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //解决后端识别前端传参数的问题

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)
if(config.env) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(port, host)
console.log('server listiening on ' + host + ':' + port)