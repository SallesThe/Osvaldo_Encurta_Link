// Token Acess: dea101ea0e249ef000c9b0e1a6dc1d05f563c26f

const token = "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f";

// var fetch = require('node-fetch');

fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {token}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
});