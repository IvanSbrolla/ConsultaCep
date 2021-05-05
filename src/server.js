const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.listen(8080, () => console.log('server ON!'));

app.use(express.static('./.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());