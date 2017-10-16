const http = require('http')
const fs = require('fs')

const url = 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=146469'

const savePath = 'test.html'
const outfile = fs.createWriteStream(savePath)

http.get(url, function (res) {
  console.log('go?')
  res.pipe(outfile)
  res.on('end', function () {
    outfile.close()
    console.log('ok')
  })
})
