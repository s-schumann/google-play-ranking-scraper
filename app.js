var cheerio = require('cheerio');
var request = require('request');
var url = "_GOOGLE_PLAY_APP_URL_";

request(url, function(err, resp, body){
  $ = cheerio.load(body);

  $('meta').each(function() {
    if($( this ).attr("itemprop") === "ratingValue")
      console.log($( this ).attr("itemprop") +": "+ $( this ).attr("content"))
    if($( this ).attr("itemprop") === "ratingCount")
      console.log($( this ).attr("itemprop") +": "+ $( this ).attr("content"))
  });

  var ratings = ['one', 'two', 'three', 'four', 'five'];

  for (rating = 0; rating < ratings.length; rating++) {
    var data = $('.rating-bar-container').each(function() {
    if($( this ).attr("class") === "rating-bar-container "+ratings[rating])
        console.log("Rating " + ratings[rating] + ": " + $("span.bar-number", this).text());
    });
  }
});
