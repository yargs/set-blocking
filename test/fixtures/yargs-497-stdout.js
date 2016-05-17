#!/usr/bin/env node

// pretend we are a TTY
process.stdout.isTTY = true
process.stderr.isTTY = true

// see: https://github.com/yargs/yargs/issues/497
var buffer = ''
for (var i = 0; i < 3000; i++) {
  buffer += 'line ' + i + '\n'
}

var setBlocking = require('../../')
setBlocking(true)

console.log(buffer)
process.exit(0)

console.log('should not execute')
