const express = require('express');
const PORT = 4000;
const app = express();
const redis = require('redis');
const {Pool, Client} = require('pg');
const os = require('os');
const redisClient = redis.createClient({
    url: `redis://redis:6379`,
});
redisClient.on('error', (err) => console.log('Error connecting to redis  ' + err));
redisClient.on('connect', () => console.log('Connected to redis'));

redisClient.connect();

const username = 'root'
const password = 'example'
const port = '5432'
var host = 'postgres'

const URI = `postgres://${username}:${password}@${host}:${port}`;

const cleint = new Client({
    connectionString: URI
});

cleint.connect()
.then(() => console.log('Connected to Postgres'))
.catch(err => console.log('Error connecting to Postgres ' + err));

app.get('/', (req, res) => {    
    console.log('Request received from ' + os.hostname());
    res.send('<h1>Hello World! From AWS, using Docker Hub</h1>'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

