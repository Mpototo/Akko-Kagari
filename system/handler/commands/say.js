const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ Você não tem permissão para usar esse comando!`)
        message.delete().catch();
        let botmessage = args.join(" ");
        message.channel.send(botmessage)
}

module.exports.help = {
    name: "say",
    description: "Comando para o bot mandar mensagens"
}