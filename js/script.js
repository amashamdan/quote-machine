/* The URL for quotesondesign.com to request a random quote */
var quoteURL = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=my_function";

/* When the page is loaded, getQuote function is called to get a random quote */
$(document).ready(function(){
	getQuote();
});

/* The getQuote function send an AJAX resquest to get a quote. */
function getQuote(){
	$.ajax ({
	    url: quoteURL,
	    dataType: "jsonp",
	    success: function(response) {
	    	/* Upon a successful request, the quote is displayed in the quote-text div */
	        $(".quote-text").html(response.quote);
	        /* The author's name is also displayed */
	        $(".quote-author").html(response.author);
	        /* The content of the tweet is modified to include the new quote and its author */
	        $(".twitter-share-button").attr("href", 'https://twitter.com/share?text="' 
	        	+ response.quote + '". ' + response.author);
	    }
	});
}

/* A click handler to get a quote when the Genereta button is clicked */
$(".generate").click(function(){
	getQuote();
	generateColor();
});

/* A function to randomly generate a color each time a quote is grabbed. */
function generateColor(){
	// Generate an array of letters which make up the color code.
	var letters = "0123456789abcdef".split("");
	// The color variable which holds the color hex code.
	var color = "#";
	/* The loop chooses six random letters/digits and adds them to the color code until we have
	a full color code. */
	for (var i = 0; i < 6; i++){
		var index = Math.floor(Math.random()*16);
		color += letters[index];
	}
	/* The container div color is changed to the new color. */
	$(".container").css({"backgroundColor": color});
}