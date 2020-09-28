const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Mideleware 
app.use(bodyParser.json());
app.use(cors());


//links routes
const get = require('./routes/api/get');
const posts = require('./routes/api/posts');

app.use('/api/get' , get);
app.use('/api/posts' , posts);

app.use('/static', express.static(__dirname + '/static'));

// Handel production
if(process.env.NODE_ENV === 'production' || false)
{
    //Static folder
    app.use(express.static(__dirname + '/public'));

    //Handel Singel Page app
    app.get(/.*/ , (req , res) => {
        res.sendFile(__dirname + '/public/index.html')
    });
}

const port = process.env.PORT || 4500;

app.listen(port , () => {console.log(`the port is ${port}`);
})
