const request = require('request')
const cheerio = require('cheerio')
const client = require('cheerio-httpcli')
const fs = require('fs')

const url = 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=146469'

const savePath = 'test.html'
const outfile = fs.createWriteStream(savePath);

client.fetch(url, {}, (err, $, res, body) => {
  if (err) {
    throw Error('fetch err:' + err)
  }

  outfile.write(body)
  outfile.end()

  const loadedBody = $.html()

  $('meta').each((i, e) => {
    let temp = $(e).text()
    console.log(temp)
  })
})
