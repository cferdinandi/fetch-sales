---
title: "Demo: Opening Pets in a New Tab"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

By default, the pet listing on Petfinder opens in the current window. You can open a new window or tab using the `newTab` settings.

<div data-fetch>
    <p class="loading"><strong>Loading...</strong></p>
</div>

<script>
	var fetchOptions = {
		newTab: true
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
        newTab: true
    });
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID" newtab="true"]
Loading...
[/fetch2]
```