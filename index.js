const wiot = require('wiot');


let m = [];
m[0] = new wiot.node.nodemcu('e31fd');

let w = [];
w[0] = new wiot.wire(0, true),
w[1] = new wiot.wire(0),
w[2] = new wiot.wire(0, true),
w[3] = new wiot.wire();


wiot.gpio(m[0], wiot.OUTPUT, m[0].D2, w[0]);

wiot.buffer(m[0], w[0], w[2]);

wiot.bigiot(m[0], 21249, 'ee37b3a2a', w[3], w[1]);

wiot.operate(m[0], `${wiot.if(`$1=='play'`, 1, wiot.if(`$1=='stop'`, 0, `$0`))}`, w[2], w[3], w[1]);

