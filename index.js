const { WAConnection, MessageType } = require('@adiwajshing/baileys').default
const makeWASocket = require("@adiwajshing/baileys").default
const { exec, spawn, execSync } = require("child_process")
const fetch = require('node-fetch')
const pino = require('pino')
let qrcodee = require('qrcode')
const fs = require('fs')
const aes256 = require('aes256');
const qrcode = require("qrcode-terminal")
const { delay, useSingleFileAuthState } = require("@adiwajshing/baileys")
exec('rm -rf session.json')
const { state, saveState } = useSingleFileAuthState('./session.json')
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});

function inrlmd() {
  let inrl = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: state,
    printQRInTerminal: false,
    browser: ["Alexa Md", "Opera", "3.0.0"]
  })
  inrl.ev.on("connection.update", async (s) => {
  
  if(s) {
                
                qrcodee.toFile('./qr.png', s, 
                    color: {
                        dark: '#000',
                    }
                })
    }        
    const { connection, lastDisconnect } = s
    if (connection == "open") {
      await delay(1000 * 10)
      const session = fs.readFileSync('./session.json') 
    
        pastebin .createPasteFromFile( './session.json')
          .then((data) => {
        // we have successfully pasted it. Data contains the id
            st = (data);

let mdmm =st. replaceAll("https://pastebin.com/", "");
            
        var st = (mdmm);
var encodedString = btoa(st);
var key = 'my passphrase';
var plaintext =(encodedString);
var encryptedPlainText = aes256.encrypt(key, plaintext);
let mdmmm = encryptedPlainText. replaceAll("==", "");

const templateButtons = [
    {index: 1, urlButton: {displayText:'coppy session', url: 'https://www.whatsapp.com/otp/copy/'+("inrl~"+mdmmm)}},
    {index: 2, urlButton: {displayText: 'fork our github', url: 'https://github.com/inrl-official/inrl-bot-md/fork'}},
    {index: 3, urlButton: {displayText: 'whatsapp Group', url: 'https://chat.whatsapp.com/FOutIblZOj388UVIYfefcR'}},
]    
 const templateMessage = {
    text: "✰ᴛʜᴀɴᴋs ғᴏʀ ᴄʜᴏᴏsɪɴɢ✰\n             ✰ ɪɴʀʟ-ᴍᴅ✰\n\n        ☯︎ғᴏʀᴋ ᴏᴜʀ ʀᴇᴘᴏ☯︎\n\n ⍟ᴄᴏᴘᴘʏ ᴛʜᴇ sᴇssɪᴏɴ_ɪᴅ⍟\n\n            ߷ ᴛʜᴀɴᴋs߷",
  
    footer: 'ɪɴʀʟ-ᴍᴅ',
    templateButtons: templateButtons
}
const reply = (take) => { 
   inrl.sendMessage(inrl.user.id, templateMessage)
}
reply(templateMessage);
   console.log("inrl~"+mdmmm);
    })
    }
    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      inrlmd()
    }
  })
  inrl.ev.on('creds.update', saveState)
  inrl.ev.on('messages.upsert', () => { })
}
inrlmd()
