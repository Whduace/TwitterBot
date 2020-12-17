console.log('IT\'S ALIVEEE!!!');

var Twit = require('twit');

var config = require ('./config3');
var T = new Twit(config)
var stream = T.stream('user');

stream.on('tweet',tweetEvent);
function tweetEvent(eventMsg){
	
	var screnName = eventMsg.source.screen_name;
	if(screnName !== 'WhduaceV2'){
		if( screnName !== 'heykirdibot'){
			var newTwitId = eventMsg.source.id_str;
			//console.log (newTwitId);
			T.post('favorites/create',{id : newTwitId},tweeted);
		}
	}

}
function tweeted (err, data, response){
			if(err){
			console.log("something went wrong!!");
			}else {
			 console.log("it worked");
			}
}
