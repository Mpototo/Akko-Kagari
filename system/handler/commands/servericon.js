const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    let nyfofo = message.guild.iconURL || "https://loritta.website/assets/img/unknown.png";
    let nylindo = new Discord.RichEmbed()
    .setTitle('**Server icon!**')
    .setDescription(`Clique [aqui](${nyfofo}) para abrir a imagem!`)
    .setColor(`#c542f5`)
    .setImage(`${nyfofo}${message.guild.iconURL ? "?size=2048" : ""}`)
    .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
    .setTimestamp();
    message.channel.send(nylindo);
    
}

module.exports.help = {
    name: "servericon",
    description: "Comando para ver o icone do servidor"
}