console.log('The replier bot is starting');

var Twit = require('twit');

var config = require ('./config');
var T = new Twit(config);

var tweetAtan = 'WhduaceV2';

var stream = T.stream('user');

stream.on('tweet',tweetEvent);
var fs = require('fs');

function tweetEvent(eventMsg){
	
	var text = eventMsg.text;
	var twitId = eventMsg.id_str;
	var from = eventMsg.user.screen_name;
	var n = text.length;
	if (from === tweetAtan){	
		if(n%2===0){
			tweetIt(from,twitId);
	/*T.post('statuses/update', {in_reply_to_status_id: twitId,
        status: '@' + from + ' Oh Wait'},
        function(error, tweetEvent, response){
            if(error) throw error;
            console.log("it worked");  // Tweet body
});*/

		}
	}
}
function tweetIt(from,twitId){
	processing(from,twitId);
		function processing(from,twitId){
			var filename = 'OhWait.gif';
			var params = {
				encoding: 'base64'
			}
			var b64 = fs.readFileSync(filename, params)
			T.post('media/upload', { media_data: b64 }, uploaded);

			function uploaded(err, data, response){
				var id = data.media_id_string;
				var tweet = {
					in_reply_to_status_id: twitId,
					 status: '@' + from + ' Oh Wait',
					 media_ids: [id]
				}
			T.post('statuses/update', tweet, tweeted);
			}
		function tweeted (err, data, response){
			if(err){
			console.log("something went wrong!!");
			}else {
			 console.log("it worked");
			}
		}
	}
}
