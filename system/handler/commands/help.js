const Discord = module.require("discord.js");
module.exports.run = async(client, message, args, block, errorblock) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`**Ajuda? Aqui está**`)
    .setDescription(`Escolha a opção que quer ajuda!`)
    .addField(`**Opções!**`, `**🔧** > Comandos Úteis\n**🛠** > Comandos De Moderação`)
    .setColor(`#c542f5`)
    .setFooter(`Akko Kagari`)
    
    
    await message.channel.send(embed).then(msg => { //MENSAGEM QUE VAI RECEBER A REACTION
        msg.react("🔧") //EMOJI QUE VAI APARECER NA REACTION
        msg.react("🛠")

        let filtro = (reaction, user) => reaction.emoji.name === "🔧" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK 
        let filtro2 = (reaction, user) => reaction.emoji.name === "🛠" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK

        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR
        const coletor2 = msg.createReactionCollector(filtro2, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR

        coletor.on("collect", () => {
            const embed = new Discord.RichEmbed()
        .setTitle(`**Comandos Úteis**`)
        .setColor(`#c542f5`)
        .addField(`**ak!avatar {@menção}**`, `Comando para ver avatar das pessoas.`)
        .addField(`**ak!servericon**`, `Comando para ver icone do servidor.`)
        .addField(`**ak!serverinfo**`, `Comando para ver as informações do servidor.`)
        .addField(`**ak!ping**`, `Comando para ver a latência e a Latência da API.`)
        .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
        .setTimestamp();
        msg.edit(embed)
        });

        coletor2.on("collect", () => {
            const embed = new Discord.RichEmbed()
            .setTitle(`**Comandos De Moderação**`)
            .setColor(`#c542f5`)
            .addField(`**ak!say {mensagem}**`, `Comando para fazer o bot mandar mensagens.`)
            .addField(`**ak!ban {@menção} {razão}**`, `Comando para banir membros.`)
            .addField(`**ak!kick {@menção} {razão}**`, `Comandos para kickar membros.`)
            .setFooter(`Akko Kagari`, `${client.user.avatarURL}`)
            .setTimestamp();
            msg.edit(embed)
        })

    });        
}

module.exports.help = {
    name: "help",
    description: "Comando para ter ajuda dos comandos"
}  