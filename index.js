const mineflayer = require('mineflayer')

var options = {
    host: 'IkszdeSMP.aternos.me',
    port: 26326,
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
  setTimeout(function(){
    bot.chat("/register asdmiezlol123")
    bot.chat("/login asdmiezlol123")
}, 2000);
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

bot.on('kicked', function(reason) {
  console.log("I got kicked for", reason, "lol");
  bot.quit
  bot.end
  bot = mineflayer.createBot(options);
});
