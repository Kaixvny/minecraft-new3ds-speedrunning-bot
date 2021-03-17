const discord = require('discord.js');

const client = new discord.Client();
 
const prefix =  'n3ds!';

client.on('ready', () => {
 console.log('ONLINE! NO ERRORS FOUND!')
});

client.once('ready', () => { client.user.setActivity('https://www.speedrun.com/mc3ds | n3ds!', { type: "WATCHING" }); });

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    

if(command === 'ss'){
        message.channel.send({embed: {
            "title": "Any% - Set Seed - 9m 54s 033ms - By \"blunderpolicy\"",
            "description": "**Seed:** 66898262\n\n[Run on speedrun.com](https://www.speedrun.com/mc3ds/run/yd90epxz)",
            "color": 382794
          }});
        }

    if(command === 'ssg'){
        message.channel.send('*There are no runs.*')
        }

    if(command === 'rsg'){
            message.channel.send('*There are no runs.*')
            }

            if(command === 'rs'){
                message.channel.send('*There are no runs.*')
                }

                if(command === 'coopss'){
                    message.channel.send('*There are no runs.*')
                    }

                    if(command === 'cooprs'){
                        message.channel.send('*There are no runs.*')
                        }

                        if(command === 'cooprsg'){
                            message.channel.send('*There are no runs.*')
                            }

                            if(command === 'coopssg'){
                                message.channel.send('*There are no runs.*')
                                }

                                if(command === 'help'){
                                    message.channel.send('List of commands! \n ss - shows Any% Set Seed world record, time, run, user, and seed! \n rs - shows Any% Random Seed world record, time, run, user, and (sometimes) seed! \n ssg - shows Any% Glitchless Set Seed world record, time, run, user, and seed! \n rsg - shows Any% Random Seed world record, time, run, user, and (sometimes) seed! \n coopss - shows Any% Co-op Set Seed world record, time, run, user, and seed! \n cooprs - shows Any% Co-op Random Seed world record, time, run, user, and (sometimes) seed! \n coopssg - shows Any% Co-op Set Seed world record, time, run, user, and seed! \n cooprsg - shows Any% Co-op Glitchless Random Seed world record, time, run, user, and (sometimes) seed! \n *for more categories do* **n3ds!help misc** *or* **n3ds!help fun**')
                                    }

                                    if(command === 'guides'){
                                        message.channel.send({embed: {
                                            "title": "**Guides for \"Minecraft: New Nintendo 3DS Edition\" on speedrun.com!**",
                                            "description": "[How To Install a New3DS Emulator](https://www.speedrun.com/mc3ds/guide/i3vd1) - User: [Firewall](https://www.speedrun.com/user/Firewall) - Last update: 1 month ago\n\n[Minecraft: New 3DS Edition In-Game Controls](https://www.speedrun.com/mc3ds/guide/d1e5c) - User: [daffective](https://www.speedrun.com/user/daffective) - Last updated: 5 months ago\n\n [RSG Route](https://www.speedrun.com/mc3ds/guide/5yzg6) - User: [CadenG150](https://www.speedrun.com/user/CadenG150) - Last updated: 5 months ago\n\n**Select the guide you want to read with** `n3ds!guide1, 2, or 3`\n\n**NOTE: These guides are created by runners and not game moderators unless stated otherwise!**",
                                            "color": 3680148
                                        }});
                                    }

                                        if(command === 'guide1'){
                                            message.channel.send('By Firewall - Last updated 1 month ago \n \n 1- Click On The Link Down Below \nhttps://citra-emu.org/download/ \n2-Install \n \n **NOTE: These guides are created by runner and not game moderators unless stated otherwise!**')
                                            }

                                            if(command === 'guide2'){
                                                message.channel.send('By daffective - Last updated 5 months ago \n \n I made a diagram for the in-game controls. \n \n https://docs.google.com/drawings/d/1FJPcXMRTyGQ01oKDU4-er_5vW6QDD39Pl1spJCLucbQ/edit?usp=sharing \n \n In case you cant access it, here they are in just text: \n \n Volume Slider: Change volume \n Circle Pad: Move/Sprint \n DPad-Up: Toggle perspective \n DPad-Right, DPad-Left, ZR, ZL: Cycle through items \n C-stick: Camera controls \nA: Jump/Fly/Stop Flying \n B: Drop Item \n X: Open Inventory \n Y: Open Crafting Menu \n R: Attack/Destroy \n L: Place/Use \n \n **NOTE: These guides are created by runners and not game moderators unless stated otherwise!**')
                                                }

                                                if(command === 'guide3'){
                                                    message.channel.send('By CadenG150 - Last updated 5 months ago \N \N 1. Get nether \n 2. 6/7rods \n 3. 1 enderman (nether/overworld) \n 4. Make 1 eye \n -Locate stronghold using eye \n 5. Check if theres a librarian and cleric (if not reset, its gonna take a while kinda) \n 6. Go to stronghold library \n 7. Farm a ton of books (take paper from chests too) \n 8. Trade and get pearls \n 9. Done \n \n - Note : the gold you need should be from a chest in a fortress or just mine near the stronghold at y32 or below \n \n Credit: Khalooody \n \n **NOTE: These guides are created by runners and not game moderators unless stated otherwise!**')
                                                    }

                                                    if(command === 'request'){
                                                        message.channel.send('Request sent to <@447818513906925588> !')
                                                        }

                                                        if(command === 'updaterequest'){
                                                            message.channel.send('Update request sent to <@447818513906925588> !')
                                                            }


                                                    if(command === 'mods'){
                                                        message.channel.send({embed: {
                                                            "title": "**Moderators for \"Minecraft: New 3DS Edition\"**",
                                                            "description": "<:Supermod:802707602667601940>  [ReniSR](https://www.speedrun.com/user/ReniSR)\n<:Supermod:802707602667601940>  [DarkSRC](https://www.speedrun.com/user/DarkSRC)\n<:Supermod:802707602667601940>  [_Riley](https://www.speedrun.com/user/_Riley)\n<:Supermod:802707602667601940>  [Insert](https://www.speedrun.com/user/Insert)\n<:Mod:802707941596856320>  [Khalooody](https://www.speedrun.com/user/Khalooody)\n<:Mod:802707941596856320>  [blunderpolicy](https://www.speedrun.com/user/blunderpolicy)",
                                                            "color": 12788772,
                                                            "footer": {
                                                              "text": "Source from speedrun.com"
                                                          }}})};

                                                        if(command === 'bedrockssg'){
                                                            message.channel.send({embed: {
                                                                "title": "Misc. - Glitchless - Set Seed - 1m 14s - By \"That1Guy05\"",
                                                                "description": "**Seed:** 2684184464\n\n[Run on speedrun.com](https://www.speedrun.com/mc3ds/run/z1o10ljm)",
                                                                "color": 11010048
                                                              }});
                                                            }

                                                            if(command === 'how2getgirl'){
                                                                message.channel.send('https://cdn.discordapp.com/attachments/806655639999873037/808173196050169886/unknown.png')
                                                                }

                                                            if(command === 'bedrockssg'){
                                                                message.channel.send({embed: {
                                                                    "title": "**Guides for \"Minecraft: New Nintendo 3DS Edition\" on speedrun.com!**",
                                                                    "description": "[How To Install a New3DS Emulator](https://www.speedrun.com/mc3ds/guide/i3vd1) - User: [Firewall](https://www.speedrun.com/user/Firewall) - Last update: 1 month ago\n\n[Minecraft: New 3DS Edition In-Game Controls](https://www.speedrun.com/mc3ds/guide/d1e5c) - User: [daffective](https://www.speedrun.com/user/daffective) - Last updated: 5 months ago\n\n [RSG Route](https://www.speedrun.com/mc3ds/guide/5yzg6) - User: [CadenG150](https://www.speedrun.com/user/CadenG150) - Last updated: 5 months ago\n\n**Select the guide you want to read with** `n3ds!guide1, 2, or 3`\n\n**NOTE: These guides are created by runners and not game moderators unless stated otherwise!**",
                                                                    "color": 8502783
                                                                  }});
                                                                }

                                                                if(command === 'ikylikeschicken'){
                                                                    message.channel.send('https://cdn.discordapp.com/attachments/746911020773146687/808909706986782750/unknown.png')
                                                                    }

});



client.on('message', message =>{
    if(!message.content.startsWith('Javascript? That hell of a messy code? That is horrible. Make your self a favor and use Python. Thank me later') || message.author.id === client.user.id) return;
    message.react('😭')
});

client.on('message', message =>{
    if(!message.content.startsWith('iky sucks') || message.author.id === client.user.id) return;
    message.channel.send('<:BlockedBitchhh:808911645484384266>')
});

client.on('message', message =>{
    if(!message.content.startsWith('<:insertirl:792920866329198632>') || message.author.id === client.user.id) return;
    message.channel.send('Imagine being a gacha-tuber')
});

client.on('message', message =>{
    if(!message.content.startsWith('april sucks') || message.author.id === client.user.id) return;
    message.channel.send('I agree.')
});

client.on('message', message =>{
    if(!message.content.startsWith('April sucks') || message.author.id === client.user.id) return;
    message.channel.send('I agree.')
});

client.on('message', message =>{
    if(!message.content.startsWith('April Sucks') || message.author.id === client.user.id) return;
    message.channel.send('I agree.')
});

client.on('message', message =>{
    if(!message.content.startsWith('april Sucks') || message.author.id === client.user.id) return;
    message.channel.send('I agree.')
});

client.on('message', message => {
    if (!message.content.startsWith('findseed') || message.author.bot) return;
        let replies = ["Yes.", "No.", "I don't see it happening anytime soon.", "Maybe.", "Maybe....... Not.", "The future looks bright.", "Definitely Yes.", "Please ask again later.", "C'mon man don't put me on the spot like that."];
        let result = Math.floor((Math.random() * replies.length));
        message.channel.send(result);
});

client.login(process.env.token);
