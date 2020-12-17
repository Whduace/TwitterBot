console.log('IT\'S ALIVEEE!!!');

var Twit = require('twit');

var config = require ('./config2');
var T = new Twit(config)
var stream = T.stream('user');


var stat = 'My name is heykırdıelon, but everybody calls me heykır'; 
//staTweet();
//var tweet = {status: stat}
var r1 = Math.floor(Math.random()*8 + 20);
console.log(r1);
setInterval(staTweet,1000*60*60*r1);//günlük yaklaşık
console.log(r1 + 'değiştimi r1');
function staTweet(){
	var r = Math.floor(Math.random()*16);
	r1 = Math.floor(Math.random()*8 + 20);
	console.log('alooo');
	switch(r) {
	    case 0:
		stat='Mess with the best, die like the rest';
		break;
	    case 1:
		stat='Aaaaawkwaaaaaard!!';
		break;
	    case 2:
		stat='Where’s your crown, King Nothing?';
		break;
	    case 3:
		stat='Gideyim de biraz boş duyar kasayım';
		break;
	    case 4:
		stat='3Edgy5Me';
		break;
	    case 5:
		stat='Tes émotions vous rendent vulnérable';
		break;
	    case 6:
		stat='I don\'t stalk women. I just go on romantic walks with them without them knowing.';
		break;
	    case 7:
		stat='AM I EVIL?';
		break;
	    case 8:
		stat='Bu nerenin otu, Gandalf?';
		break;
	    case 9:
		stat='The right man in the wrong place can make all the difference in the world';
		break;
	    case 10:
		stat='The cake may not be a lie';
		break;
	    case 11:
		stat='When life gives you lemons, DON\'T MAKE LEMONADE, INVENT COMBUSTIBLE LEMONS!!';
		break;
	    case 12:
		stat='BRING ME ANOTHER!!!';
		break;
	    case 13:
		stat='You cannot judge me! I am justice itself!';
		break;
	    case 14:
		stat='Did I ever tell you what the definition of insanity is?';
		break;
	    default:
		stat='My name is heykırdıelon, but everybody calls me heykır';
	} 
	console.log(stat);
	console.log(r);
	T.post('statuses/update', {status: stat}, tweeted);

}	
stream.on('follow', followed);
function followed (eventMsg){
	console.log('ses?');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	if(screenName !== 'heykirdibot'){
	T.post('statuses/update', {status:'.@' + screenName + ' have you ever danced with the devil in the pale moonlight?'},tweeted);
	T.post('friendships/create', {screen_name: screenName}, tweeted);
	}
}
/*stream.on('tweet',tweetEvent);
function tweetEvent(eventMsg){
	
	var screnName = eventMsg.source.screen_name;
	if(screnName !== 'WhduaceV2' && screnName !== 'heykirdibot'){
		var newTwitId = eventMsg.source.id_str;
		//console.log (newTwitId);
		T.post('favorites/create',{id : newTwitId},tweeted);
	}

}*/
function tweeted (err, data, response){
			if(err){
			console.log("something went wrong!!");
			}else {
			 console.log("it worked");
			}
}
