const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: v' + ayarlar.surum + ' Yapımcı: CrazyAvenela (Kel Batur) **Sohbet ve Oyun**\n\n_**BOTU EKLEMEK İÇİN LİNK:**_\n\nhttps://discordapp.com/oauth2/authorize?client_id=473379256941019146&scope=bot&permissions=2146958591 \n\n_**Linkler:**_\n\n**Sohbet ve Oyun** sunucusunun davet linki: https://discord.gg/E9TY9Z \nBotun davet linki: https://discordapp.com/oauth2/authorize?client_id=473379256941019146&scope=bot&permissions=2146958591 \n\n**:copyright: 2017 Sohbet ve Oyun**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
