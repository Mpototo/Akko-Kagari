const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    const m = await message.channel.send(`Calculando a latência`)
    m.edit(`**Pong!**, ${message.author}
╠═**>**Latência: ${block}${m.createdTimestamp - message.createdTimestamp}ms${block}
╚═**>**Latência Da Api: ${block}${Math.round(client.ping)}ms${block}
`)
    
}

module.exports.help = {
    name: "ping",
    description: "Comando para ver a sua latencia e a da api"
}