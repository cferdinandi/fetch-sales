---
title: "Demo: Adoption Forms"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

You can add a link to your adoption form on each pet profile using the `adoptionFormLink` attribute. Change the default text using the `adoptionFormText` attribute.

<div class="fetch-container">
	<p class="loading">Loading...</p>
	<p>If this is taking a while, please see our available pets at <a href="#">/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
	var fetchOptions = {
		filtersToggleClass: 'btn',
		adoptionFormLink: "#",
		adoptionFormText: "Fill out an adoption form",
		adoptionFormClass: 'btn'
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
        adoptionFormLink: "http://example.com",
        adoptionFormText: "Fill out an adoption form"
    });
</script>
```

### If you're using WordPress

```html
[fetch key="YOUR API KEY" shelter="YOUR SHELTER ID" adoptionFormLink="http://example.com" adoptionFormText="Fill out an adoption form"]
Anything you want to display if Fetch isn't supported by the visitor's browser.
[/fetch]
```