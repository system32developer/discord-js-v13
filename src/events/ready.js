module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`Iniciado como ${client.user.username}`);
    },
};