const express = require('express');


const PORT = 4000;
const app = express();


app.get('/', (req, res) => {    
    res.send('<h1>Hello World! From Alaa 12 </h1>'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 