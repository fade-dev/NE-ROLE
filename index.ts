import DiscordJS, { Intents, Message } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')


    new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['930780779540262942'],
     })
    })  

    client.on('messageCreate', (message) => {
        if (message.content === 'cunt') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Cunt') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'dick') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Dick') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'fuck') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Fuck') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Bitch') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'bitch') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'penis') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Penis') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Cum') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'cum') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'sex') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Sex') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Vagina') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'vagina') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Tits') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'tits') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'tit') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Tit') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Cock') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'cock') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'porn') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Porn') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'shit') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Shit') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'nigger') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })

    client.on('messageCreate', (message) => {
        if (message.content === 'Nigger') {
            message.reply({
                content: 'Please refrain from using that type of language in the server. If you continue you will be warned or muted.'
            })
        }
    })


    const guildId = '930780779540262942'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'chris',
        description: 'Replies with LOL',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers',
        options: [
            {
                name: 'num1',
                description: 'The first numbers',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    }) 

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'chris') {
        interaction.reply({
            content: 'LOL',
            // ephemeral: true,
        })
    } else if (commandName === 'add') {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        interaction.reply({
            content: `The sum is ${num1 + num2}`,
            ephemeral: true
        })
    }
})


client.login(process.env.TOKEN)
