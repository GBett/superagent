
/**
 * Module dependencies.
 */

var request = require('..');

var url = 'https://github.com/GBett/superagent-master/blob/main/examples/simple-get.js';

request.get(url, function(err, res){
  if (err) throw err;
  console.log(res.text);
});
