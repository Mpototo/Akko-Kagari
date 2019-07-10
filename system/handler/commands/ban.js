const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`❌ Você não tem permissão para usar esse comando!`)
        if(args.length === 0) return message.reply("📃 Utilize ak!ban <@usuário> <motivo>!");
        let banMember = message.mentions.users.first() || message.guild.users.get(args[0]);
        if(!banMember) return message.reply(`🔍 Não foi possível encontrar este usuário! ${message.author}`);
        let banReason = args.join(" ").slice(22) || args.slice(1).join(" ");
        if(!banReason){
            banReason = "A razão não foi informada!"
        }
    
        try {
            message.guild.member(banMember).ban(banReason);
            const embed = new Discord.RichEmbed()
            .setTitle(`**Banido!**`)
            .setColor(`#c542f5`)
            .setDescription(`O usuário ${banMember} foi **banido** com sucesso pelo **motivo**: ${banReason}`)
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/party-popper_1f389.png')
            .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
            .setTimestamp();
            message.channel.send(`**${banMember} BANIDO!!**`, {embed});
        } catch (error) {
            message.reply(`${error}`);
        }
    
}

module.exports.help = {
    name: "ban",
    description: "Comando para banir pessoas"
}