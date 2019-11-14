---
title: "Demo: Limit Pets"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

By default, Fetch will display every adoptable pet. You can limit the number of animals displayed using the `limit` setting.

<div data-fetch>
    <p class="loading"><strong>Loading...</strong></p>
    <p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
	var fetchOptions = {
		limit: 10
	};
</script>

## What to put on your site

```html
<link rel="stylesheet" type="text/css" href="/css/fetch2.css">
<script src="/css/fetch2.js"></script>

<div data-fetch>
    <p>Loading...</p>
    <p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
    new Fetch('[data-fetch]', {
        key: 'YOUR API KEY',
        secret: 'YOUR API SECRET',
        shelter: 'YOUR SHELTER ID'
    }, {
        limit: 10
    });
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID" limit="10"]
<p>Loading...</p>
<p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
[/fetch2]
```