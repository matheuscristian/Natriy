![ConfBot Logo](./assets/images/ConfBotLogo.jpg)

# Info
ConfBot is a configurable bot for Discord in order to help people who don't know how to program create their bots easily just by changing a json configuration file.

# Index
- [How to use](https://github.com/M4THEWS2/ConfBot#how-to-use)
    - [Get Started](https://github.com/M4THEWS2/ConfBot#get-started)
    - [Functions & Commands](https://github.com/M4THEWS2/ConfBot#functions-&-commands)

# How to use
## Get started
You can download the bot by clicking here:
[Download here!!](https://github.com/M4THEWS2/ConfBot/archive/refs/heads/main.zip)

To start the bot, go to the `boot` folder and open `init.bat`.

![Init.bat image](./assets/images/init.bat.png)

If everything opens correctly you are ready to proceed, go to the website: https://discord.com/developers/applications, login to your account, and create a bot. Configure it how you prefer.

![Dicord Developer Portal Image](./assets/images/Discord-Developer-Portal.png)

Press copy token, go to the configuration file: `config.json` and paste your token there.

```json
"token": "TOKEN HERE",
"prefix": "!"
```

Now, to put the bot on your server, copy your bot's ID, go to the website: https://discordapi.com/permissions.html, paste the ID, check the administrator permissions and click on the link.

![Permission calculator image](./assets/images/permission-calculator.png)

You can open the `init.bat` on the boot folder again.

## Functions & Commands
Commands are what people will type, eg `!help`. Now functions are what will happen after people send the command, example: After typing `!help`, the bot sends a message saying something.
An example configuration:
```json
"name": "help",
"functions": [
    {
        "name": "embed",
        "embedContent": {
            "author": "",
            "title": "ConfBot Ajuda",
            "description": ">>> Este é o ConfBot!!!\n Para ter mais detalhes sobre a configuração deste bot, acesse: https://github.com/M4THEWS2/ConfBot/",
            "color": "",
            "thumnail (URL)": "",
            "image (URL)": ""
        }
    }
]
```
In the example above, the bot sends an embed message in the chat after someone dictates the `!help` command (the prefix is ​​also set), the function that sends the embed has its name: `embed`.

# Functions
## Embed
Send a MessageEmbed.
    
    - options:
        embedContent: Contains embed data, they can be:
            - author
            - title
            - description
            - thumnail
            - image
            - color
    
        reply?: decides whether the embed will be sent as a reply.
## Reply
Just reply a message

    - options:
        content: The content of the message.
## Send
Send a message in the channel

    - options:
        content: The content of the message.