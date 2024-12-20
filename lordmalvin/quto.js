const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "๐ฌ",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
๐ฌ "${quote.content}"
- ${quote.author}
๐๐๐๐๐๐๐ ๐๐ -MALVIN-๐๐ ๐๐๐๐๐๐
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("ยขฯฯโโ ฮทฯั ฦััยขะฝ ฮฑ qฯฯัั. ฯโัฮฑัั? ััั ฮฑgฮฑฮนฮท โฮฑััั?.");
    }
});