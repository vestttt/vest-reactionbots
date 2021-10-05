const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let config = {
"cekilis": "",
"etkinlik": "",
"botOwner": "",
"token": ""
};

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === ".button" && config.botOwner == message.author.id) {
    let cekilis = new disbut.MessageButton().setStyle('green').setLabel('Çekiliş Katılımcısı!').setID('cekilis')
    let etkinlik = new disbut.MessageButton().setStyle('red').setLabel('Etkinlik Katılımcısı!').setID('etkinlik')
    message.channel.send('Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın. @everyone', {
        buttons: [cekilis, etkinlik]
    })
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'cekilis') {
        if (button.clicker.member.roles.cache.get(config.cekilis)) {
            await button.clicker.member.roles.remove(config.cekilis);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.cekilis);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinize verildi.")
        }
    }
    if (button.id === 'etkinlik') {
        if (button.clicker.member.roles.cache.get(config.etkinlik)) {
            await button.clicker.member.roles.remove(config.etkinlik);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.etkinlik);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinize verildi.")
        }

    }
});


client.login(config.token)
