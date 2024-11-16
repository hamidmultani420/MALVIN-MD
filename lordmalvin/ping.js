const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '> MALVIN-MD...' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `📍 𝙼𝙰𝙻𝚅𝙸𝙽 speed : ${ping}ms`, quoted: message })
     }catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })