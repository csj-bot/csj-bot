

# csj-bot, o bot oficial do servidor Crie Seus Jogos!!!

Um bot realizado de membros para membros do servidor CSJ sobre Game Development e Programação.




## TODO

Temos muitas ideias de recursos para o bot! Você pode nos ajudar sugerindo novas ideias ou até mesmo implementando elas!

[Link para nosso Trello](https://trello.com/b/omGqawnB/csj-bot).

[Acesse o servidor oficial do CSJ no Discord!](https://discord.gg/VDGd2zA)

Para contribuir com códigos é fácil! faça um fork do [repositório oficial](https://github.com/csj-bot/csj-bot).


## Instalação

Para funcionar o banco de dados, precisa adicionar a url de um [mongodb](https://www.mongodb.com/) no .env em "DBURL", junto com o [Token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) e um Prefixo (como prefixo "!!" para "!!comandos", "+" para "+comandos" etc)

![](https://user-images.githubusercontent.com/72351688/122690274-e6dbe080-d1fe-11eb-8636-e12a9650a603.png)

Abra um terminal na pasta do projeto

```bash
npm i           #instalar dependencias
node index.js   #executar bot
```

Após isso, seu bot já deve estar sendo executado nos servidores na qual ele foi incluído! Nós também recomendamos que você siga o [Style-guide de Javascript da Google](https://google.github.io/styleguide/jsguide.html) para facilitar a leitura e padronização de nosso código de modo a facilitar a inclusão de recursos por qualquer um que no mínimo tenha uma [noção básica de Javascript](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics). Boa sorte!

## Dependências
[discord.js](https://www.npmjs.com/package/discord.js)

[wax-command-handler](https://www.npmjs.com/package/wax-command-handler)

[wax-logger](https://www.npmjs.com/package/wax-logger)

[mongoose](https://www.npmjs.com/package/mongoose)
