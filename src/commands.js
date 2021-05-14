const prefix = "!!"
const client = require('../index.js')

module.exports = (message) => {
  const content = message.content
  if (!content.startsWith(prefix) || message.author.bot) return;
  
  const args = content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  
  console.log(content)
  try {
    require(`./commands/${command}.js`)(client,message,args)
  } catch(err) {
    console.log(err)
  }
}
