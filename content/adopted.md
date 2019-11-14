---
title: "Demo: Adopted"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
isDemo: true
---

You can also use Fetch to show a list of pets that have already been adopted by changing the `status` setting to `adopted`.

When showing adopted pets, it's highly recommended that you also set the `limit` setting to avoid having the API timeout/take too long.

<div data-fetch>
    <p class="loading"><strong>Loading...</strong></p>
    <p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
</div>

<script>
	var fetchOptions = {
		status: 'adopted',
		limit: 100
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
        status: 'adopted',
        limit: 100
    });
</script>
```

### If you're using WordPress

```html
[fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID" status="adopted" limit="100"]
<p>Loading...</p>
<p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=SHELTER_ID</a>.</p>
[/fetch2]
```