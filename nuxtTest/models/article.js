const mongoose = require('mongoose')
const articleSchema = mongoose.Schema(
  {  
    id : Number,
    title : String,
    author : String,
    date : String,
    content : String
  }, { collection: 'article'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，
//我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。这里不写第二个参数的话，后面你会遇到坑。
//导出model模块
const Article = mongoose.model('article', articleSchema);
module.exports = Article
