console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var fs = require('fs');
tweetIt();


function tweetIt(){
	processing();
		function processing(){
			var filename = 'OhWait.gif';
			var params = {
				encoding: 'base64'
			}
			var b64 = fs.readFileSync(filename, params)
			T.post('media/upload', { media_data: b64 }, uploaded);
			function uploaded(err, data, response){
				var id = data.media_id_string;
				var tweet = {
					 status: 'OhWait',
					 media_ids: [id]
				}
			T.post('statuses/update',tweet, tweeted);
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






