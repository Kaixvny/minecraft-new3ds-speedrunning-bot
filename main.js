const discord = require('discord.js');

const client = new discord.Client();
 
const prefix =  'n3ds!';

client.on('ready', () => {
 console.log('N3DS Bot is online! LETS GOOOOOO!')
});

client.once('ready', () => { client.user.setActivity('Bots', { type: "WATCHING" }); });

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ss'){
    message.channel.send('Any% - Set Seed - 9m 54s 033ms - By "blunderpolicy" \n Seed: 66898262 \n Run: https://www.speedrun.com/mc3ds/run/yd90epxz')
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
                                        message.channel.send('**Guides on speedrun.com!** \n \n How To Install a New3DS Emulator - User: Firewall - Last update: 1 month ago \n \n Minecraft: New 3DS Edition In-Game Controls - User: daffective - Last updated: 5 months ago \n \n RSG Route - User: CadenG150 - Last updated: 5 months ago \n \n **Select the guide you want to read with** `n3ds!guide1, 2, or 3` \n \n **NOTE: These guides are created by runners and not game moderators unless stated otherwise!**')
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

                                                    if(command === 'mods'){
                                                        message.channel.send('**Moderators for "Minecraft: New 3DS Edition"** \n \n <:Supermod:802707602667601940> ReniSR \n <:Supermod:802707602667601940> DarkSRC \n <:Supermod:802707602667601940> _Riley \n <:Supermod:802707602667601940> Insert \n <:Mod:802707941596856320> Khalooody \n <:Mod:802707941596856320> blunderpolicy')
                                                        }
});

client.on('message', message =>{
    if(!message.content.startsWith('fair') || message.author.bot) return;
    message.channel.send('^^ \n fair')
});

client.login(process.env.token);
