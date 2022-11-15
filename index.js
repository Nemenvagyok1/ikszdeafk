const mineflayer = require('mineflayer')

var options = {
    host: 'game1.falixserver.net',
    port: 14775,
    username: 'Ikszde_BOT',
    version: '1.18'
  };
  var bot = mineflayer.createBot(options);

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('login', async function(){
	console.log("Logged In")
	//bot.chat("/vanish")
});

bot.on('chat', (username, message) => {
    console.log(`${username} said "${message}"`)
  })
  

bot.on('physicTick', lookAtNearestPlayer)

const antiafk = require("mineflayer-antiafk");
bot.loadPlugin(antiafk);
bot.on("spawn", () => {
  bot.afk.start();
});