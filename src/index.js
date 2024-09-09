const express = require('express');
const PORT = 4000;
const app = express();
var mongoose = require('mongoose');

const username = 'root'
const password = 'example'
const port = '27017'

var host = 'mongo'

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}`)
.then(() => console.log('Connectted to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB, ', err)) ;


app.get('/', (req, res) => {    
    res.send('<h1>Hello World! From Alaa 12 </h1>'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

