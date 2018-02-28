---
title: "Demo: Hiding the Filters"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: false
isDemo: true
---

Fetch automatically generates filters to help visitors sort through your adoptable animals. You can hide certain ones, or hide them altogether using the `showFilters` attribute.

<div class="fetch-container">
	<p class="loading">Loading...</p>
	<p>If this is taking a while, please see our available pets at <a href="#">/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
	var fetchOptions = {
		showFilters: false
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
        showFilters: false,
    });
</script>
```

### If you're using WordPress

```html
[fetch key="YOUR API KEY" shelter="YOUR SHELTER ID" showFilters="false"]
Anything you want to display if Fetch isn't supported by the visitor's browser.
[/fetch]
```