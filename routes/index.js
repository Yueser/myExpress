import sichuanjianguan from './sichuanjianguan'

//导出一个方法
module.exports = function(app) {
  app.use('/sichuanjianguan', sichuanjianguan)
}