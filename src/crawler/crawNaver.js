const fs = require('fs')
const cheerio = require('cheerio')

const html = fs.readFileSync('test.html', 'utf-8')
$ = cheerio.load(html)

const title = $(`meta[property='me2:category2']`).attr('content')
console.log(title)


