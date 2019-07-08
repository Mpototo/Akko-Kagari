const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    var servericon = message.guild.iconURL || `https://cdn.discordapp.com/emojis/597708994139914243.png?v=1`
    const embed = new Discord.RichEmbed()
    .setTitle(`**Informações do servidor!**`)
    .setThumbnail(`${servericon}`)
    .setColor(`#c542f5`)
    .addField(`**Numero Total De Membros**`, `**${message.guild.memberCount}** membros`, true)
    .addField(`**Numero Total De Canais**`, `**${message.guild.channels.size}** canais`, true)
    .addField(`**Numero Total De Cargos**`, `**${message.guild.roles.size}** cargos`, true)
    .addField(`**Dono**`, `**${message.guild.owner}**`, true)
    .addField("**Região**", region[message.guild.region], true)
    .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Comando informações do servidor!"
}