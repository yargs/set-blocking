#!/usr/bin/env node

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
