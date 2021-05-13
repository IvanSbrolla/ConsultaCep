const express = require('express');
const axios = require('axios');
const app = express();

app.listen(8080, () => console.log(__dirname+'/../'));

app.use(express.static(__dirname+'/../'));

app.get('/ConsultarCep', (req, res) => {
    try {
        const cep = req.query.cep;
        getAddress(cep).then(x => res.send(x.data));
    }
    catch (exception) {
        return exception
    }

})

async function getAddress(cep) {
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/unicode/`)
}
