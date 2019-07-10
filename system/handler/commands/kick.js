const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`❌ Você não tem permissão para usar esse comando!`)
    if(args.length === 0) return message.reply("📃 Utilize ak!kick <@usuário> <motivo>!");
    let kickMember = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!kickMember) return message.reply(`🔍 Não foi possível encontrar este usuário! ${message.author}`);
    let kickReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!kickReason){
        kickReason = "A razão não foi informada!"
    }

    try {
        message.guild.member(kickMember).kick(kickReason);
        const embed = new Discord.RichEmbed()
        .setTitle(`**Kickado!**`)
        .setColor(`#c542f5`)
        .setDescription(`O usuário ${kickMember} foi **kickado** com sucesso pelo **motivo**: ${kickReason}`)
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/party-popper_1f389.png')
        .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
        .setTimestamp();
        message.channel.send(`**${kickMember} KICKADO!!**`, {embed});
    } catch (error) {
        message.reply(`${error}`);
    }
    
}

module.exports.help = {
    name: "kick",
    description: "Comando para kickar pessoas"
}