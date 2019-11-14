/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com']
});

// Run Fetch
if (document.querySelector('[data-fetch]')) {
	if (typeof fetchCreds === 'undefined') {
		var fetchCreds = {};
	}
	if (typeof fetchOptions === 'undefined') {
		var fetchOptions = {};
	}
	fetchCreds.key = 'Wu6Km6ewRxkHi5jGluN6wIM7BoW7ZrFYDgBnhni4qmA3SFFmNQ';
	fetchCreds.secret = 'WqxhiHyV3q6ui6SOTmFDOl9fkbyV6DVilAvJgRpR';
	fetchCreds.shelter = 'RI77';
	// Initialize Fetch
	new Fetch('[data-fetch]', fetchCreds, fetchOptions);
}