module.exports = {
    name: 'ping',
    async execute(message, args, MessageEmbed, Util, client){
        const embed = new MessageEmbed()
            .setTitle('Hola mundo')
            .setDescription(message.author.username)
            .setColor("GREEN")
        message.channel.send({ embeds: [embed] });
    },
};