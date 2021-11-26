const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("Le bot c'est bien lancé.")
});

Client.login(process.env.tocken)

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!ping
    if(message.content === prefix + "ping"){
        message.channel.send("pong !");
    }

    else if (message.content === prefix + "help"){
        message.channel.send("**les commandes disponibles : **\n (en dévellopement)")
    }

    else if (message.content === prefix + "info"){
        message.channel.send("**Les informations sur le bot :** \n\n`- Ce bot est là pour facilité le fonctionnement du serveur ansi qu'être en renfort pour le staff.` \n\n`- Le préfixe utilisé sur le serveur est < " + prefix + ">`");
    }

    else if (message.content === prefix + "site"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Apple tech")
            .setURL("http://mycruiseoverstops.com/barras_rp/acceuil.php")
            .setAuthor("Auteur du site web : M_056#3826")
            .setDescription("notre site web");
        
        message.channel.send({ embeds : [embed]});
    }
});
