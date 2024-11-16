const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "groupmenu",
    desc: "get bot group cmd.",
    category: "group",
    react: "💻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
 group: '',
    };

      for (let i = 0; i < commands.length; i++) { if (commands[i].pattern && !commands[i].dontAddCommandList) { menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`; } }


     let madeMenu = `
*👋 Hello ${pushname}*

> 👨‍💻 ​🇲 🇦 🇱 🇻 🇮 🇳​-​🇲​​🇩​ ​🇲​​🇪​​🇳​​🇺​👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : 𝙼𝙰𝙻𝚅𝙸𝙽 𝙼𝙳💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  ᴍᴀʟᴠɪɴ ᴋɪɴɢ💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/263714757857 💫

╭───────────●●►
│📜 GROUP COMMANDS
│───────
${menu.group}
╰───────────●●►
    `
     await conn.sendMessage(from, {
          audio: { url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0232.mp3'},
          mimetype: 'audio/mp4',
          ptt: true
      }, { quoted: mek });
 await conn.sendMessage(from,{image:{url:"https://files.catbox.moe/uxnee2.jpg"},caption:madeMenu},{quoted:mek})

 }catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })
