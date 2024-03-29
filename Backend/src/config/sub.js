import { connect } from "mqtt/*";

var client = connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
    client.subscribe('sensor');
});

client.on('message', function (topic, message) {
    console.log(message.toString());
});