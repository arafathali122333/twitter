const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express. Router ();


var twitter = require('ntwitter'); 
var twit = new twitter({
consumer_key: 'WHKtKzM1lNlWxlRiXdQOQzyXM',
consumer_secret: 'PCbElfbVxZi4EBmeeC1DoXb0hUXt0LaoY1Sw9kyOPpnRgQM0Es',
access_token_key: '1580894099334275072-9TRkknQFixHadfV2OT6QXuNRssNEQi',
access_token_secret: 'kwXwdOrMeodqgSDR4upFBAOE3MPS4ISnzTT9kxgkDkTOM'
});

router.get('/', (req, res) => {
    twit.updateStatus(req.query.data, function (err, response) {
        res.json(response);
     });
});
9000

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless (app);