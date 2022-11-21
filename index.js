const mineflayer = require('mineflayer')

const botArgs = {
  host: 'game1.falixserver.net',
  port: '14775',
  username: "Ikszde_BOT",
  version: '1.18'
};

const initBot = () => {

  // Setup bot connection
  let bot = mineflayer.createBot(botArgs);

  bot.on('login', () => {
      let botSocket = bot._client.socket;
      console.log(`Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);
      setTimeout(function(){
        bot.chat("/register asdmiezlol123")
        bot.chat("/login asdmiezlol123")
    }, 2000);
  });

  bot.on('end', () => {
      console.log(`Disconnected`);

      // Attempt to reconnect
      setTimeout(initBot, 60000);
  });

  const antiafk = require("mineflayer-antiafk");
    bot.loadPlugin(antiafk);
    bot.on("spawn", () => {
    bot.afk.start();
  });

  bot.on('error', (err) => {
      if (err.code === 'ECONNREFUSED') {
          console.log(`Failed to connect to ${err.address}:${err.port}`)
      }
      else {
          console.log(`Unhandled error: ${err}`);
      }
  });
};

initBot();
