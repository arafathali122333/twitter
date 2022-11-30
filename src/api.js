const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express. Router ();


var twitter = require('ntwitter'); 
var twit = new twitter({
consumer_key: 'qasPL7uYFGH8ovXR6bYTTeHsA',
consumer_secret: 'fVsVgPFDqALbuBp8YZPW32TEiUTuQQC4OG9bm5Zm2AcUh3IjZR',
access_token_key: '1580894099334275072-i7cdarUgUBvkOF7o6qGyTtmXj00Yu1',
access_token_secret: 'AcWGRXGglxRre2iSjQRAt7DajgOPDXDtUZQS6ANAzLJlM'
});

router.get('/', (req, res) => {
    twit.updateStatus(req.query.data + twitter.VERSION, function (err, data) {
        res.json(data);
     });
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless (app);