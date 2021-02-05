const discord = require('discord.js');

const client = new discord.Client();
 
const prefix =  'n3ds!';

client.on('ready', () => {
 console.log('N3DS Bot is online! LETS GOOOOOO!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ss'){
    message.channel.send('Any% - Set Seed - 9m 54s 033ms - By "blunderpolicy" \n Seed: 66898262 \n Run: https://www.speedrun.com/mc3ds/run/yd90epxz')
    }
});

client.login('INSERT YOUR TOKEN HERE');
