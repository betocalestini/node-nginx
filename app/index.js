const express = require('express');
const os = require('os');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const dados = os.networkInterfaces();
const tudo = JSON.stringify(dados);

const ip = dados.eth0[0].address;

app.get('/', (req, res) => {
   res.send(`<pre>${ip}</pre>`);
});

app.listen(PORT, HOST);
