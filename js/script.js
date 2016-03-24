/* The URL for quotesondesign.com to request a random quote */
var quoteURL = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=my_function";
/* The colors array hold the colors which the page will switch to every time a new quote
 is grabbed. */
var colors = ["#0072C6", "#077568", "#2B579A", "#A4373A", "#217346", "#80397B", "#D24726"];
/* The following variable holds the index of the color to be displayed. */
var colorIndex = [1];

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

/* A function to change the color of the page each time a quote is grabbed. */
function generateColor(){
	/* The color to be displayed is selected from the colors array. */
	var color = colors[colorIndex];
	/* The if statements checks for the colorIndex, if all colors have been displayed, colorIndex
	is reset to zero, if not it is incremented by 1. */
	if (colorIndex == 6){
		colorIndex = 0;
	} else {
		colorIndex++;
	}
	/* The colors of the body and quote-area div are changed. */
	$("body").css({"backgroundColor": color, "color": color});
	$(".quote-area").css({"backgroundColor": color});
}