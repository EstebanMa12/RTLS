var mqtt = require("mqtt");

var client = mqtt.connect('mqtt://broker.hivemq.com');

function startMQTTPublisher(){

    client.on('connect', function () {
        console.log('Connected to MQTT broker');
        setInterval(() => {
            client.publish('sensor', JSON.stringify({ value: Math.random() }));
        }, 300);
    })

}

module.exports={
    client,
    startMQTTPublisher
}