/* global describe, it */

var exec = require('child_process').exec

require('chai').should()

describe('setBlocking', function () {
  // see: https://github.com/yargs/yargs/issues/497
  it('does not truncate text printed to stdout when process.exit() is called', function (done) {
    exec('node ./test/fixtures/yargs-497-stdout.js', function (err, stdout, stderr) {
      if (err) return done(err)
      stdout.should.match(/line 2999/)
      return done()
    })
  })

  it('does not truncate text printed to stderr when process.exit() is called', function (done) {
    exec('node ./test/fixtures/yargs-497-stderr.js', function (err, stdout, stderr) {
      err.should.match(/Command failed/)
      stderr.should.match(/line 2999/)
      return done()
    })
  })
})
