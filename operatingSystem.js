const os = require('os');

var freeMemory = (`${(os.freemem()/Math.pow(1024,3)).toFixed(2)}GB`);
var totalMemory = (`${(os.totalmem()/Math.pow(1024,3))}GB`);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);