var request = require('request');
var jsdom = require('jsdom');

var req_url = 'https://us.vestiairecollective.com/search/?q=gucci%20pumps%20green%207';

request({uri: req_url}, function(error, response, body){
	if(!error && response.statusCode == 200){
		var window = jsdom.jsdom(body).createWindow();
		
		var temp = window.document.getElementsByClassName('productSnippet__infos')[0]
		console.log(temp)
	}
});