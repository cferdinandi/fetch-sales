---
title: "Demo: Out-of-the-Box"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

This is the out-of-the-box implementation of Fetch. All you need is a Petfinder API key and secret, and a shelter ID.

<div data-fetch>
	<p class="loading"><strong>Loading...</strong></p>
</div>

<script>
	var fetchOptions = {
		filterButtonClass: 'btn'
	};
</script>

## What to put on your site

```html
<link rel="stylesheet" type="text/css" href="/css/fetch2.css">
<script src="/css/fetch2.js"></script>

<div data-fetch>
    <p>Loading...</p>
</div>

<script>
	new Fetch('[data-fetch]', {
		key: 'YOUR API KEY',
		secret: 'YOUR API SECRET',
		shelter: 'YOUR SHELTER ID'
	});
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID"]
Loading...
[/fetch2]
```