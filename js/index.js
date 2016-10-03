$.ajaxSetup ({
  cache: false
});

var myApi = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";


var getQuote = function() {
  $.getJSON(myApi, function(a) {
  $("#quoteText").html(a[0].content + "<p>— " + a[0].title + "</p>")
  });   
}

$("#quoteText").text(getQuote);

$('.twitter-share-button').click(function() {
  var quote = $('#quoteText').text();
  console.log(quote);
  window.open('https://twitter.com/intent/tweet?text='+quote.trim(''));
});

$('#newQuote').click(function(){
  getQuote();
});