const url = require('url')
var log4js = require('log4js')
const urlString = 'http://www.baidu.com:443/path/index.html?id=2#tag=3'
console.log(url.parse(urlString))//解析成一个对象

const urlPrams = new URLSearchParams(urlString.search)
logger.debug(urlPrams.get('id'))//2