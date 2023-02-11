const tmi = require('tmi.js');

const options = {
  options: {
    debug: true
  },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'jwho303',
    password: 'd5r418pjszhmw645tqx6e41po1lbee'
  },
  channels: [
    'jwho303'
  ]
};

const client = new tmi.Client(options);

client.connect();

client.on('chat', (channel, user, message, self) => {
  if (self) return;
  
  if (message === '/command') {
    client.whisper(user.username, 'This is a private message from the chatbot.');
  }
});