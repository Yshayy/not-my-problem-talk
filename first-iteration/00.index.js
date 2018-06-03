const express = require('express')
const bodyParser = require('body-parser')
const got = require("got");
const messageTypes = require('./messageTypes');
const app = express()
app.use(bodyParser.json())

async function fetchUserDetails(userId){
    const res =  await got(`http://users/api/users/${userId}`, {json:true});
    return res.body;
}

async function sendMessage(user, message){
    await got.post(`http://messages/api/users/${userId}/messages`, {body: {message}, json:true});
}

function formatMessage(messageType, context){
    return messageTypes[messageType](context);
}

app.post('/api/notifications', async (req, res) => {
    const {user, messageType} = req.body;
    const {name} = await fetchUserDetails(user);
    const message = formatMessage(messageType, {name});
    return res.sendStatus(200);
});

app.listen(3000, () => console.log('Waiting for notification requests'))