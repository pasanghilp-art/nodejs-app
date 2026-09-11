/*
const logger = require('./logger');

logger.log('hello');
*/

/*
console.log(__filename);
console.log(__dirname);
const log = require('./logger');

log('say hello to my little friend');
*/

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log('messageLogged',arg)
});

logger.log('message');