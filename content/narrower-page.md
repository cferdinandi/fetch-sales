---
title: "Demo: Narrower Page"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: false
isDemo: true
---

If you have a page with a narrow layout, you can force the filters to always hide behind an expand-and-collapse button using the `narrowLayout` setting.

<div data-fetch>
	<p class="loading"><strong>Loading...</strong></p>
</div>

<script>
	var fetchOptions = {
		filterButtonClass: 'btn',
		narrowLayout: true
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
        narrowLayout: true
    });
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID" narrowlayout="true"]
Loading...
[/fetch2]
```