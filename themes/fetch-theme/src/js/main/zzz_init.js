/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com']
});

// Smooth scrolling anchor links
if (document.querySelector('a[href*="#"]')) {
	var scroll = new SmoothScroll('a[href*="#"]');
}

// Run Fetch
if (document.querySelector('.fetch-container')) {
	if (typeof fetchOptions === 'undefined') {
		fetchOptions = {};
	}
	fetchOptions.key = 'f72651cb74b19ac20c6f25adbab93457';
	fetchOptions.shelter = 'RI77';
	fetch.init(fetchOptions);
}