// create a basic express server and listen on port 3000
// and listen for requests in a route "/" and send a "Hello World" response
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);





