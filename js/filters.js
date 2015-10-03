// Filters related features

function update_filter() {

	var selector = document.getElementById('filter');
	
	var chosen_filter = selector.options[selector.selectedIndex].value;
	var content_iframe = document.getElementById('content');
	
	console.log('applying filter: #' + chosen_filter);
	//content_iframe.style.filter = 'url(filters.svg#' + chosen_filter + ')';	
	//content_iframe.style.filter = 'url(#' + chosen_filter + ')';	
	content_iframe.style.cssText = '-webkit-filter: url(#' + chosen_filter + ');'
										 + 'filter: url(#' + chosen_filter + ');';
}
