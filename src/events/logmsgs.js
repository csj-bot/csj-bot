module.exports = async (message) => {
    if (message.author.bot) return

    console.log(`${message.author.tag}: ${message.content}`)
}