var fs = require('fs')
var k = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(k);
