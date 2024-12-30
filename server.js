'use strict';
const express = require('express');


//constant 
const PORT = 8080;
const HOST = '0.0.0.0';

//app
const app = express();
app.get('/', (req, res) => {
    res.send('hellow world');
});

app.listen(PORT, () => {
    // console.log("Server is running on http://'${HOST}':'${PORT}'");
    console.log(`Server is running on http://${HOST}:${PORT}`);

});
