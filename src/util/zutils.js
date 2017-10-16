var zutils = {}

zutils.test = function() {
  function test() {
    console.log('wow')
    return 'shit'
  }
  return test
}

module.exports = zutils
