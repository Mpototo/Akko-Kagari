const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`**Comandos Úteis**`)
    .setColor(`#c542f5`)
    .addField(`**ak!avatar {@menção}**`, `Comando para ver avatar das pessoas.`)
    .addField(`**ak!servericon**`, `Comando para ver icone do servidor.`)
    .addField(`**ak!serverinfo**`, `Comando para ver as informações do servidor.`)
    .addField(`**ak!ping**`, `Comando para ver a latência e a Latência da API.`)
    .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
    .setTimestamp();
    message.channel.send(`${message.author}`,embed).then(() => {
        const embed = new Discord.RichEmbed()
        .setTitle(`**Espere que já, já vem mais!**`)
        .setColor(`#c542f5`)
        .setDescription(`O bot esta em criação, ainda havera mais comandos no futuro!`)
        message.channel.send(embed)
    })
}

module.exports.help = {
    name: "help",
    description: "Comando para ter ajuda dos comandos"
}  