module.exports = {
    name: "format",
    description: "mande código no discord de forma certa!",
    aliases: ["formatar", "formatacao"],
    usage: "!!format",
    cooldown: 5,

    execute(client, message, args) {
        message.channel.send("Como usar a formatação do Discord para exibir um bloco de código:\n\\`\\`\\` <lang>\nSeu código aqui\n\\`\\`\\`\n\nSubstitua <lang> pela linguagem do seu script. Aqui vão algumas opções:\n    swift : Para GDScript\n    cs : Para C#\n    cpp : Para C++\n    c : Para C\n\nExemplo:\n```swift\nfunc _ready() -> void:\n    print('Exemplo de código para GDScript')\n```\n\nFormatação usada:\n\\`\\`\\`swift\nfunc _ready() -> void:\n    print('Exemplo de código para GDScript')\n\\`\\`\\`");
    },
};