const config = require(`${process.cwd()}/config.json`);
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let EveryoneList = JSON.parse(fs.readFileSync(`${process.cwd()}/EveryList.json`, 'utf8'));

client.on("message", async (msg) => {
    if (msg.author.bot) return; //如果是機器人就返回
    if (msg.mentions.has(message.guild.roles.cache.find(r => r.id === msg.guild.roles.everyone.id))) { //偵測到有人Tag所有人
        if (msg.author.id === 237474630900776962) return;//如果偵測到紙片就跳過處理
        let quantity = EveryoneList[guild.id][msg.author.id];
        EveryoneList[guild.id][msg.author.id] = quantity + 1 //紀錄次數
        fs.writeFileSync(`${process.cwd()}/EveryList.json`, JSON.stringify(EveryoneList)); //寫入檔案
        if (quantity >= 3) {
            //最終偵測到後要處理的事情，例如刪除他的訊息或踢出他或者記錄到後台等
            msg.delete(); //刪除該訊息
        }
    }
});

client.on("ready", () => {
    console.log("機器人準備完成!");
});

client.login(config.token).then(r => {
    console.log(`${client.user.username} 登入成功`)
})