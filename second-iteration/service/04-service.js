const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const got = require("got");
const messageTypes = require('./messageTypes');
const polly = require('polly-js');
const {logger, middleware: loggingMiddleware} = require("./extras/logging");
const authMiddleware = require("./extras/auth");
const {middleware: metricsMiddleware} = require("./extras/monitoring");
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(metricsMiddleware);
app.use(loggingMiddleware);

async function fetchUserDetails(userId){
    const res = await polly()
    .retry(4)
    .executeForPromise(() =>  
    got(
    `http://users/api/users/${userId}`,
    {json:true}));
    
    return res.body;
}

async function sendMessage(userId, message){
    await polly()
    .retry(4)
    .executeForPromise(()=> 
    got.post(
    `http://messages/api/users/${userId}/messages`, 
    {body: {message}, json:true}));
}

function formatMessage(messageType, context){
    return messageTypes[messageType](context);
}

app.post('/api/notifications',  authMiddleware, async (req, res) => {
    const {user, messageType} = req.body;
    try{
        const {name} = await fetchUserDetails(user);
        const message = formatMessage(messageType, {name});
        await sendMessage(user, message); 
    } catch (e){
        logger.error("failed to send notification: " + e.response.body);
        res.send(500);
    }
    return res.send(200);
});

app.listen(3000, () => console.log('Waiting for notification requests'))