var a = new Date();
var t = a.getHours();
var c = a.getMinutes();
var k = 60-c;
console.log (c + ' ' + k);
console.log(t + 'server saati');
console.log('justice ain\'t gonna dispence itself');

var Twit = require('twit');

var config = require ('./config2');
var T = new Twit(config)
var stream = T.stream('user');
stream.on('tweet',tweetEvent);

var HNT = 'IT\'S HIGH NOOOOOOOOOOON'

HNTweet();
var r = Math.floor(Math.random()*23 + 1);
var sure = 1000*60*60*r;
console.log(r + '  buna göre setlenecek');
setInterval(HNTweet,sure);
//console.log('kontrol2');
function HNTweet(){

	if(c!==00){
		console.log('bekliyorum şu an ' + k + ' kadar');
		setTimeout (posting, 1000*60*k);
		
		
		
}
	
	
}
//stream.on('tweet',tweetEvent);
function tweeted (err, data, response){
			if(err){
			console.log("something went wrong!!");
			}else {
			 console.log("it worked");
			}
}
function tweetEvent(eventMsg){
		//console.log('kontrol');
		var text = eventMsg.text;
		var twitId = eventMsg.id_str;
		var from = eventMsg.user.screen_name;
		if (from === 'heykirdibot'){	
			if(text === HNT){
				
				if( t !== 8){
					var tweet = { in_reply_to_status_id: twitId, status: '@' + from + ' Well, it\'s high noon somewhere in the world'}
					T.post('statuses/update', tweet, tweeted);
				}
			}
		}
	}
function posting (){
	T.post('statuses/update', {status: HNT}, tweeted);

	r = Math.floor(Math.random()*23 + 1);


} 

