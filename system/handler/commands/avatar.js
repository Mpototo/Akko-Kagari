const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    let aTaged = message.mentions.users.first() || message.author
    const embed = new Discord.RichEmbed()
    .setTitle(`**Avatar!**`)
    .setColor(`#c542f5`)
    .setDescription(`Clique [aqui](${aTaged.displayAvatarURL}) para abrir a imagem!`)
    .setImage(`${aTaged.displayAvatarURL}`)
    .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
    .setTimestamp();
    message.channel.send(`📸 Aqui esta o avatar`, {embed})
}

module.exports.help = {
    name: "avatar",
    description: "Comando para ver o avatar de uma pessoa"
}