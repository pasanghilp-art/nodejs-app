const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message logged', function (){
    console.log('listener called');
})

emitter.emit('message logged');

emitter.on('logging',(arg) => {
    console.log('message logged',arg);
})

emitter.emit('logging',{id: 1, data: 'message' });