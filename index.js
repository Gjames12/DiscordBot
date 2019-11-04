const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

//sets up bot
bot.once("ready", () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("Insecurity is a lil bitch");
});

bot.on("GuildMemberAdd", function(member){
  member.send("Welcome please type '|Register' followed by your in game name /n Example: '|Register ign404' ");
  //client.channels.get('640389535376605203').send("Hello! and welcome to the server!/n Please type '|Register" + member + "'/n to update your discord nickname and join the clan.")
});
//message handling
bot.on('message', message => {
  if(message.author.bot) return; //if bot sent message ignore
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]; //command eg: !play
  let args = messageArray.slice(1); //everything after command


  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarUrl;
    let botembed = new Discord.RichEmbed()
    .setDescription("Jlynn's little bot bitch")
    .setColor("#ff00ff")
    .setThumbnail(bicon)
    .addField("Name", "--"+bot.user.username)
    .addField("Commands", "--AddMember \n --UpdateMember");

    return message.channel.send(botembed);
  }
  if(message == "clan bitches" || message == "clanbitches" || message == "cb"){
    message.channel.send("Hell Yeah!")
  }

  if(cmd === `${prefix}AddMember`){
    message.channel.send("Welcome");
  }
  if(cmd === `${prefix}UpdateMember`){

  }
  if(cmd === `${prefix}Promote`){
    // let tempmem = "@" + args;
    // message.channel.send("Welcome you now have the role of Member" + tempmem);
    // if(message.member.roles.find(r => r.name === "Clan Bitch")){
    //   if(tempmem.roles.find(r => r.name === "Member")){
    //     let memberRole = message.member.guild.members.find("name", "Elder");
    //       tempmem.addRole(memberRole);
    //     }
    //     if(tempmem.roles.find(r => r.name === "Elder")){
    //       let memberRole = message.member.guild.roles.find("name", "Co-Leader");
    //     tempmem.addRole(memberRole);
    //   }
    // }
  }

  if(cmd === `${prefix}Promo`){

    // let tempmem = "@" + args;
    // let Promem = message.member.guild.members.find("name", tempmem);
    // message.channel.send("Test" + Promem);
    // if(tempmem.roles.find(r => r.name === "Member")){
    //   let memberRole = message.member.guild.roles.find("name", "Elder");
    //     Promem.addRole(memberRole);
    //   }
  }
  if(cmd === `${prefix}Register`){
    message.channel.send("Welcome you now have the role of Member");
    let memberRole = message.member.guild.roles.find("name", "Member");
    message.member.addRole(memberRole);
    message.member.setNickname(args);
  }

/* EXAMPLE
  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!");
  }
*/
});

bot.login(botconfig.token);
