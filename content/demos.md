---
title: "Demo: Out-of-the-Box"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

This is the out-of-the-box implementation of Fetch. All you need is a Petfinder API key and a shelter ID.

<div class="fetch-container" markdown="1">
	<p class="loading">Loading...</p>
	<p>If this is taking a while, please see our available pets at <a href="#">/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
	var fetchOptions = {
		filtersToggleClass: 'btn'
	};
</script>

## What to put on your site

```html
<link rel="stylesheet" type="text/css" href="fetch.css">
<script src="fetch.js"></script>

<div class="fetch-container">
    Anything you want to display if Fetch isn't supported by the visitor's browser.
</div>

<script>
    fetch.init({
        key: "YOUR API KEY",
        shelter: "YOUR SHELTER ID",
    });
</script>
```

### If you're using WordPress

```html
[fetch key="YOUR API KEY" shelter="YOUR SHELTER ID"]
Anything you want to display if Fetch isn't supported by the visitor's browser.
[/fetch]
```