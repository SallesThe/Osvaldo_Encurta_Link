const token = "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f";

fetch('https://api-ssl.bitly.com/v4/shorten?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&code=CODE&redirect_uri=REDIRECT_URI', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
}).then((response) => response.json())
    .then((data) => console.log(data));