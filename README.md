
## Contribuindo com códigos

Para contribuir com códigos é fácil! Basta realizar o processo padrão de [instalação e recursos do Discord.js](https://blog.usejournal.com/how-can-you-create-and-deploy-your-own-discord-bot-using-javascript-node-js-e6b0fed9952d) e fazer um fork do [repositório oficial](https://github.com/csj-bot/csj-bot). 
Para contribuir com códigos é fácil! faça um fork do [repositório oficial](https://github.com/csj-bot/csj-bot). 
Já o processo de teste do bot você precisará de um [token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)(na sessão "Fetching your bot's token").

Baixe o código. Instale as dependências abrindo o terminal na pasta do projeto e digitando `npm i`

Crie um arquivo ".env" na pasta do projeto e adicione o Token do seu bot lá:

![image](https://user-images.githubusercontent.com/72351688/122563784-00243780-d01b-11eb-8f5d-9929f87a35ec.png)

E realizar a execução do csj-bot por meio de:

```bash
cd diretorio/do/bot
node index.js
```

Após isso, seu bot já deve estar sendo executado nos servidores na qual ele foi incluído! Nós também recomendamos que você siga o [Style-guide de Javascript da Google](https://google.github.io/styleguide/jsguide.html) para facilitar a leitura e padronização de nosso código de modo a facilitar a inclusão de recursos por qualquer um que no mínimo tenha uma [noção básica de Javascript](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics). Boa sorte!

## Dependências
[discord.js](https://www.npmjs.com/package/discord.js)
[wax-command-handler](https://www.npmjs.com/package/wax-command-handler)
[mongoose](https://www.npmjs.com/package/mongoose)
