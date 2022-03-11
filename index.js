// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const express = require('express');
const venom = require('venom-bot');
const PORT = 3333;



venom
  .create()
  .then((client) => startVenom(client))
  .catch((erro) => {
    console.log(erro);
  });

function startVenom(client) {

  var app = express();

  app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT);
  });
  
  app.get('/:number', async(req, res) => {
    await client.sendText(req.params.number + '@c.us', 'hi from venom');
    res.json(res.query);
  }); 

  client.onMessage((message) => {
    if (message.body.includes('lle')) {
      client.sendText(message.from, 'Hello from VenomBot')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }
  });

}
