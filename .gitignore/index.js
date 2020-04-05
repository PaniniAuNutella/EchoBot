const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/";
const fs = require('fs');

client.login("NjY4NDU5MzY0MzAyMTkyNjYx.Xj3DRQ.H44w3o99y85Iit3Zi75uVC_dYZY");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});


fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});

client.on("guildMemberAdd", user =>{

    let joinEmbed = new Discord.RichEmbed()
        .setColor("#1895a7")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Bienvenue " + user + " sur le serveur **" + user.guild.name + "** !  :partying_face:")
        .setFooter("BGLand | Echo by ραηίηί");
    user.guild.channels.get("668477935488991282").send(joinEmbed);
    user.addRole("668516535177969715")
});



//Echo by ραηίηί
