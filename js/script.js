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
	    	console.log(response);
	    	/* Upon a successful request, the quote is displayed in the quote-text div */
	        $(".quote-text").html(response.quote);
	    }
	});
}

