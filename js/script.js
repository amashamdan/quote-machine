/* The URL for quotesondesign.com to request a random quote */
var quoteURL = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=my_function";

/* When the page is loaded, getQuote function is called to get a random quote */
$(document).ready(function(){
	generateColor();
	getQuote();
});

/* The getQuote function send an AJAX resquest to get a quote. */
function getQuote(){
	$.ajax ({
	    url: quoteURL,
	    dataType: "jsonp",
	    success: function(response) {
	    	console.log(response);
	    	/* Upon a successful request, the quote is displayed in the quote-text div */
	        $(".quote-text").html(response.quote);
	        $(".quote-author").html(response.author);
	    }
	});
}

/* A click handler to get a quote when the Genereta button is clicked */
$(".generate").click(function(){
	generateColor();
	getQuote();
});

/* A function to randomly generate a color each time a quote is grabbed. */
function generateColor(){
	var letters = "0123456789abcdef".split("");
	var color = "#";
	for (var i = 0; i < 6; i++){
		var index = Math.floor(Math.random()*16);
		color += letters[index];
	}
	$(".container").css({"backgroundColor": color});
}