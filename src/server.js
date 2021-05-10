const express = require('express');
const axios = require('axios');
const app = express();

app.listen(8080, () => console.log('server ON!'));

app.use(express.static('./.'));

app.get('/ConsultarCep',(req,res) => {
    const cep = req.query.cep;
    getAddress(cep).then(x => res.send(x.data));
    })

async function getAddress(cep){
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/unicode/`)
}
