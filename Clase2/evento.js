const Event = require('events');

class Eventito extends Event {}

let event = new Eventito();

event.on('click', e => {
    console.log('Me clickearon');
});