const config = require('../config');
const { cmd, commands } = require('../command');
const wiki = require('wikipedia');

cmd({
  pattern: "wiki",
  desc: "Search Wikipedia for information",
  category: "main",
  react: "🔗",
  filename: __filename
}, async (conn, mek, m, {
  from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
  try {
    if (!q) {
      return reply('Please provide a search query.');
    }
    const summary = await wiki.summary(q);
    
    let replyText = `*📚 Wikipedia Summary 📚*\n\n🔍 *Query*: _${q}_\n\n💬 *Title*: _${summary.title}_\n\n📝 *Summary*: _${summary.extract}_\n\n🔗 *URL*: ${summary.content_urls.desktop.page}\n\n${sensitiveData.siteUrl}\n${sensitiveData.footerText}\n\n​\u200B​\u200B​\u200B​https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z`;
    await conn.sendMessage(from, {
      image: { url: summary.originalimage.source },
      caption: replyText
    }, { quoted: mek });
  } catch (e) {
    console.log(e);
    reply(`Error: ${e.message}`);
  }
});
