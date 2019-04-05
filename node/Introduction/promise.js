const EventEmitter = require('events');
const emitter = new EventEmitter();

function getNumber(){
    let randTime = Math.floor(Math.random() * 3000 + 1000);
    let randError = Math.floor(Math.random() * 3 + 1);

    emitter.emit('randTime', randTime);
    emitter.emit('randError', !(randError > 1), randError);

    return new Promise( (resolve,reject) => {



