

const telegraf = require('telegraf');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const newapiOrgKey = '4975058b5bb54c5d977fb57515cb8b0b';
const meaningCloudApiKey = "a53adc32d7acedb06d69be06a71bb05d";
const bot = new telegraf('1122030679:AAHXTdXDIXIz9DTzVoIto0CBXDNaiwACxsI');
app.use(bodyParser.json());
bot.start((ctx) => ctx.reply("Hello your are talking to Delta Bot!, News services have evolved a lot.  It's so boring to sit down and read lengthy news articles. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose. 4.COVID19 for covid19 related news and stats. /help for recieving these guidelines again, anytime."));
bot.hears('/help', (ctx) => {
  ctx.reply("Heyya, I think you are stuck somewhere. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose.4.COVID19 for covid19 related news and stats. /help for recieving these guidelines again, anytime.")
})
//the above line runs when a user interact with the bot for the first time or //type /start. Everything that goes into ctx.reply("message goes here") will be //sent as a message to the user by the bot.
bot.hears('hello', (ctx) => {
ctx.reply("Heyya! I am the kind.")
});
bot.hears('deltaaura',(ctx)=>{
    ctx.reply('https://play.google.com/store/apps/details?id=com.deltaaura.app')
    })

    bot.hears('youtube',(ctx)=>{
        ctx.reply('https://www.youtube.com/channel/UC8A4lxohSvvZzR1_9Vcd66w')
        })
bot.hears('website',(ctx)=>{
    ctx.reply('https://www.deltatheinnovators.com/')
    })
    bot.hears('android app',(ctx)=>{
        ctx.reply('https://play.google.com/store/apps/details?id=com.deltaaura.app')
        })
bot.hears('hey',(ctx)=>{
    ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
    })


    bot.hears('covid19update',(ctx,req,res)=>{
        fetch(`https://coronavirus-worlddata.herokuapp.com/world`)
        .then(res=>res.json())
        .then((json)=>{
              ctx.reply("Here is the covid19 world stats you have asked for :)")
              ctx.reply("Active Cases:"+""+json.active)
        ctx.reply("Cured Cases:"+""+json.cured)
        ctx.reply("Deaths Cases:"+""+json.deaths)
        ctx.reply("Total Cases:"+""+json.total)
        ctx.reply("Stats API by roshan.py")
          })
        })
        bot.hears('covid19India',(ctx,req,res)=>{
            fetch(`https://coronavirus-worlddata.herokuapp.com/india`)
            .then(res=>res.json())
            .then((json)=>{
                  ctx.reply("Here is the covid19 world stats you have asked for :)")
                  ctx.reply("Active Cases:"+""+json.active)
            ctx.reply("Cured Cases:"+""+json.cured)
            ctx.reply("Deaths Cases:"+""+json.deaths)
            ctx.reply("Total Cases:"+""+json.total)
            ctx.reply("Stats API by roshan.py")
              })
            })
            bot.hears('covid19india',(ctx,req,res)=>{
                fetch(`https://coronavirus-worlddata.herokuapp.com/india`)
                .then(res=>res.json())
                .then((json)=>{
                      ctx.reply("Here is the covid19 world stats you have asked for :)")
                      ctx.reply("Active Cases:"+""+json.active)
                ctx.reply("Cured Cases:"+""+json.cured)
                ctx.reply("Deaths Cases:"+""+json.deaths)
                ctx.reply("Total Cases:"+""+json.total)
                ctx.reply("Stats API by roshan.py")
                  })
                })
            bot.hears('science', (ctx, req, res) => { 
                fetch(`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${newapiOrgKey}`)
                  .then(res => res.json())
                  .then((json) => {
                    const url = json.articles[0].url
                    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                    .then(res => res.json())
                    .then((summary) => {
                      console.log("NEWS GENERATION SUCCESSFUL")
                      ctx.reply(json.articles[0].title)
                      ctx.reply(summary.summary)
                      ctx.reply(json.articles[0].url)
                    })
                  })
                })

                bot.hears('technology', (ctx, req, res) => { 
                    fetch(`http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newapiOrgKey}`)
                    .then(res => res.json())
                    .then((json) => {
                      const url = json.articles[0].url
                      fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                      .then(res => res.json())
                      .then((summary) => {
                        console.log("NEWS GENERATION SUCCESSFUL")
                        ctx.reply(json.articles[0].title)
                        ctx.reply(summary.summary)
                        ctx.reply(json.articles[0].url)
                      })
                    })
                  })

                  bot.hears('business', (ctx, req, res) => { 
                    fetch(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newapiOrgKey}`)
                    .then(res => res.json())
                    .then((json) => {
                      const url = json.articles[0].url
                      fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                      .then(res => res.json())
                      .then((summary) => {
                        console.log("NEWS GENERATION SUCCESSFUL")
                        ctx.reply(json.articles[0].title)
                        ctx.reply(summary.summary)
                        ctx.reply(json.articles[0].url)
                      })
                    })
                  })
                  bot.hears('Business', (ctx, req, res) => { 
                    fetch(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newapiOrgKey}`)
                    .then(res => res.json())
                    .then((json) => {
                      const url = json.articles[0].url
                      fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                      .then(res => res.json())
                      .then((summary) => {
                        console.log("NEWS GENERATION SUCCESSFUL")
                        ctx.reply(json.articles[0].title)
                        ctx.reply(summary.summary)
                        ctx.reply(json.articles[0].url)
                      })
                    })
                  })

                  bot.hears('Science', (ctx, req, res) => { 
                    fetch(`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${newapiOrgKey}`)
                      .then(res => res.json())
                      .then((json) => {
                        const url = json.articles[0].url
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                        .then(res => res.json())
                        .then((summary) => {
                          console.log("NEWS GENERATION SUCCESSFUL")
                          ctx.reply(json.articles[0].title)
                          ctx.reply(summary.summary)
                          ctx.reply(json.articles[0].url)
                        })
                      })
                    })

                    bot.hears('covid',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        
                        bot.hears('covidnews',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        
                        bot.hears('corona',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        bot.hears('Corona',(ctx,req,res)=>{
                            fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                            .then(res=>res.json())
                            .then((json)=>{
                            const url=json.news[1].link
                            
                            fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                                .then(res => res.json())
                                .then((summary) => {
                                  ctx.reply(json.news[1].title)
                                  ctx.reply(summary.summary)
                                  ctx.reply(json.news[1].link)
                                })
                              })
                            })
                        
                        bot.hears('COVID',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        
                        bot.hears('covid19',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        
                        bot.hears('Coronanews',(ctx,req,res)=>{
                        fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
                        .then(res=>res.json())
                        .then((json)=>{
                        const url=json.news[1].link
                        
                        fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
                            .then(res => res.json())
                            .then((summary) => {
                              ctx.reply(json.news[1].title)
                              ctx.reply(summary.summary)
                              ctx.reply(json.news[1].link)
                            })
                          })
                        })
                        bot.hears('Hi',(ctx)=>{
                            ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
                            })
                            
                            bot.hears('Hola',(ctx)=>{
                            ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
                            })
                            
                            bot.hears('hola',(ctx)=>{
                            ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
                            })
                            
                            bot.hears('Hello',(ctx)=>{
                            ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
                            })

bot.launch();
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
//bot.hears waits for the user to pass in a keyword that triggers a message or //action by the bot. It accepts the first parameter to be a keyword and then an //arrow function which has ctx.reply