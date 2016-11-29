var cfg = require('dotenv').config();
const chalk = require('chalk');
//var tw = require('node-tweet-stream')(cfg);
//var io = require('socket.io')(80);

var tw = require('node-tweet-stream')(cfg);

 
tw.on('tweet', function (tweet) {
  console.log(chalk.yellow('NEW TWEET'));
  //console.log(chalk.green.bold(tweet.user.name));  
  //console.log(tweet.text);
  //var obj = JSON.parse(tweet);
})
 
tw.on('error', function (err) {
  console.log('Oh no')
})
 
tw.track('clinton')

//tw.track('trump')

//console.log(cfg);
//console.log(chalk.green.bold('Hello world!'));
//tw.track('socket.io');
//tw.track('javascript');
//tw.on('tweet', function(tweet){
//  io.emit('tweet', tweet);
//});

