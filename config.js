const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session Id Here",
MONGODB: process.env.MONGODB || "mongodb://mongo:ugUHcTyXvgPmrGpmWtrCwrrWoUSQxDbZ@autorack.proxy.rlwy.net:11616",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "𝙼𝙰𝙻𝚅𝙸𝙽-𝙼𝙳",
BOT_NUMBER: process.env.BOT_NUMBER || "263714757857",
AUTO_AI: process.env.AUTO_AI || "false",
LANG: process.env.LANG || "SI"
};

