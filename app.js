'use strict';

let app_id = 'simple-demo';
const socket = io('localhost:3000');
let sessionid;
// register room to the server
socket.on('connect', function () {
    console.log('socket.io connected!');
    sessionid = socket.io.engine.id;
    socket.emit('app_id', app_id);
});


$('.red').click(function () {
    const msg = {};
    msg.app_id = app_id;
    msg.color = "red",
        socket.emit('message', msg);
    console.log("emtitted");
});

$('.yellow').click(function () {
    const msg = {};
    msg.app_id = app_id;
    msg.color = "yellow",
        socket.emit('message', msg);
    console.log("emtitted");
});


$('.blue').click(function () {
    const msg = {};
    msg.app_id = app_id;
    msg.color = "blue",
        socket.emit('message', msg);
    console.log("emtitted");
});


socket.on('message', function (data) {
    console.log('color changed');
    if (data.color === "red") {
        $('.box').css("background-color", "red");
        $('.red').prop('checked', true);
    } else if (data.color === "blue") {
        $('.box').css("background-color", "blue");
        $('.blue').prop('checked', true);
    } else if (data.color === "yellow") {
        $('.box').css("background-color", "yellow");
        $('.yellow').prop('checked', true);
    }
})