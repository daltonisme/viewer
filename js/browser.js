// “Browsing” features

function update_content() {

	// what’s the url?
	var url_input = document.getElementById('url');
	var content_iframe = document.getElementById('content');
	var url = url_input.value;
	console.log('found url: ' + url);

	// special cases
	var test_vimeo =
		new RegExp('.*vimeo\.com/([0-9]+).*');
	var test_youtube = // fix me
		new RegExp('.*youtu(?:.be\/|be\.com\/watch\?v=)(.{8,})');
	
	if (test_vimeo.test(url)) {
		console.log('from Vimeo!');
		var url = url.replace(test_vimeo, 'https://player.vimeo.com/video/$1');
	} 
	if (test_youtube.test(url)) {
		console.log('from YouTube!');
		var url = url.replace(test_youtube, 'https://www.youtube.com/embed/$1');
	}
	
	// display the content
	console.log('displayed url: ' + url);
	content_iframe.setAttribute('src', url);
	
}
