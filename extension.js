(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.commandsCommand = {
            command: 'commands',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Here are the commands for the bot: https://github.com/Yemasthui/basicBot/blob/master/commands.md And !bacon");
                }
            }
        }
        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon who said BACON??!?");
                }
            }
        }
        //Change the bots default settings

        bot.settings = {
            botName: "Darlington",
            language: "english",
            chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
            maximumAfk: 120,
            afkRemoval: true,
            maximumDc: 60,
            bouncerPlus: true,
            lockdownEnabled: false,
            lockGuard: false,
            maximumLocktime: 10,
            cycleGuard: true,
            maximumCycletime: 10,
            timeGuard: true,
            maximumSongLength: 10,
            autodisable: true,
            commandCooldown: 5,
            usercommandsEnabled: true,
            lockskipPosition: 1,
            lockskipReasons: [
                ["theme", "This song does not fit the room theme. "],
                ["op", "This song is on the OP list. "],
                ["history", "This song is in the history. "],
                ["dumb", "The song you played is just plain stupid. "],
                ["sound", "The song you played had bad sound quality or no sound. "],
                ["nsfw", "The song you contained was NSFW (image or sound). "],
                ["na", "The song you played was not available for some users. "],
                ["wtf", "What the F**k is this XD? "]
            ],
            afkpositionCheck: 15,
            afkRankCheck: "ambassador",
            motdEnabled: false,
            motdInterval: 5,
            motd: "Welcone to Exile Prison's plug.dj!",
            filterChat: true,
            etaRestriction: false,
            welcome: true,
            opLink: "Their is not Over Played List",
            rulesLink: "In The Desc.!",
            themeLink: "The theme is anything!",
            fbLink: "None :(",
            youtubeLink: "None :(",
            website: "http://www.exile-prison.com/",
            intervalMessages: [],
            messageInterval: 5,
            songstats: false,
            commandLiteral: "!"
        };

        //after settings have been set, load the chat package again to account for any changes
        bot.loadChat();

    }

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
