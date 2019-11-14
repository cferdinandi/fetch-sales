---
title: "Demo: Hiding the Filters"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: false
isDemo: true
---

Fetch automatically generates filters to help visitors sort through your adoptable animals. You can hide certain ones, or hide them altogether using the `showFilters` setting.

<div data-fetch>
    <p class="loading"><strong>Loading...</strong></p>
</div>

<script>
	var fetchOptions = {
		showFilters: false
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
    }, {
        showFilters: false
    });
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID" showfilters="false"]
Loading...
[/fetch2]
```