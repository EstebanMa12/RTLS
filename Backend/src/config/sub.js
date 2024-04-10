// sub.js
var mqtt = require("mqtt");

const { createSensorValue } = require('../services/server-service');

const client = mqtt.connect('mqtt://broker.hivemq.com');

function startMQTTSubscriber() {
    client.on('connect', function () {
        client.subscribe('sensor', function (err) {
            if (!err) {
                console.log('Successfully subscribed to sensor topic');
            }
        });
    });

    client.on('message', async function (topic, message) {
        const data = JSON.parse(message.toString())
        console.log(data.value);
        try{
            await createSensorValue(data.value);
        }catch{
            console.log('Error saving data');
        }
    });
}

module.exports = {
    client,
    startMQTTSubscriber
}
