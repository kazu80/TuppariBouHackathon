/**
 * Created by kawakamikazuyoshi on 2016/06/12.
 */

var usonic = require('r-pi-usonic/lib/usonic.js');

var NCMB = require('ncmb');
var ncmb = new NCMB("","");

var TestClass = ncmb.DataStore("TestClass");
var delay = 1000 * 1;

var socket2;

var io  = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
    socket2 = socket;

    socket.on("init", function (data) {});
    socket.on('disconnect', function () { socket2 = undefined; });
    socket.on('message', function(data){
        socket.emit('message', data.data2);
    });
});

usonic.init(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        var sensor = usonic.createSensor(18, 17, 1000);
        setTimeout(function() {
            setInterval(function () {
                if (socket2 != undefined) {
                    socket2.emit('message', sensor().toFixed(2));
                }
            }, delay);
        }, 60);
    }
});






