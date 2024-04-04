// sub.js
import { connect } from "mqtt/*";

const { createSensorValue } = require('../services/server-service');

const client = connect('mqtt://broker.hivemq.com');

function startMQTTSubscriber() {
    client.on('connect', function () {
        client.subscribe('sensor', function (err) {
            if (!err) {
                console.log('Successfully subscribed to sensor topic');
            }
        });
    });

    client.on('message', async function (topic, message) {
        console.log(message.toString());
        const data = JSON.parse(message.toString())
        try{
            await createSensorValue(data);
        }catch{
            console.log('Error saving data');
        }
    });
}

module.exports = {
    client,
    startMQTTSubscriber
}
