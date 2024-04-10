var mqtt = require("mqtt");

var client = mqtt.connect('mqtt://broker.hivemq.com');

function startMQTTPublisher(){

    client.on('connect', function () {
        console.log('Connected to MQTT broker');
        setInterval(() => {
            let value = Math.random();
            client.publish('sensor', JSON.stringify({ value: value }));
        }, 500);
    })

}

module.exports={
    client,
    startMQTTPublisher
}