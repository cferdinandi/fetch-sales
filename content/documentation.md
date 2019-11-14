---
title: "Documentation"
date: 2018-02-21T11:49:28-05:00
draft: false
noTitle: false
noIndex: false
layoutWide: true
---

- [Getting Started](#getting-started)
- [Getting Started with WordPress](#getting-started-with-wordpress)
- [Multiple Listings](#multiple-listings)
- [Options and Settings](#options-and-settings)
- [Styling](#styling)
- [Setting Up in SquareSpace](#setting-up-in-squarespace)
- [Examples](#examples)
- [Support](#support)
- [Common Issues](#common-issues)


## Getting started

### 1. Include Fetch on your site

Unzip `fetch2.zip`. You need to include two files on your site: `fetch2.js` and `fetch2.css`. How you do this will vary depending on which CMS (NationBuilder, Weebly, Squarespace, etc.) you use.

```html
<link rel="stylesheet" type="text/css" href="/css/fetch.css">
<script src="/js/fetch.js"></script>
```

### 2. Add the markup to your page

On the page where you want your Petfinder listings to appear, add a `div` with the `[data-fetch]` attribute.

You should include a message for people who's browsers aren't supported by Fetch&mdash;ideally a link to your listings on Petfinder.

```html
<div data-fetch>
    Whatever you want to show while the pet listings are loading (or if they fail to load).
</div>
```

*__Note:__ you can use any selector, not just `[data-fetch]`. If you're not sure what this means or what to use, just copy/paste the example above.*

### 3. Initialize Fetch

In the footer of your page, after the content, initialize a new instance of Fetch.

Pass in your selector (`[data-fetch]`, or a different selector if you used one). You also need to pass in an object with your API key, API secret, and shelter ID.

```html
<script>
	new Fetch('[data-fetch]', {
		key: 'YOUR API KEY',
		secret: 'YOUR API SECRET',
		shelter: 'YOUR SHELTER ID'
	});
</script>
```

And that's it, you're done. Nice work!

*__Note:__ Your key, secret, and shelter ID are all case-sensitive. If you don't have one already, you'll need to [get a Petfinder API key here](https://www.petfinder.com/developers/api-key).*

### An example

```html
<link rel="stylesheet" type="text/css" href="/css/fetch.css">
<script src="/js/fetch.js"></script>

<div data-fetch>
	<p>Loading...</p>
    <p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id=AA11</a>.</p>
</div>

<script>
	new Fetch('[data-fetch]', {
		key: "7zQqMRcGFeznhF3BgyH9",
		secret: 'Xb2BphxcUDwmafKFFCEGv',
		shelter: 'AA11'
	});
</script>
```


## Getting started with WordPress

If you're using WordPress, getting started with Fetch is even easier.

1. From the WordPress Dashboard, upload `fetch2.zip` under `Plugins > Add New > Upload Plugin`.
2. Activate Fetch in the Dashboard under `Plugins`.
3. On the page where you want your Petfinder listings to appear, use the `[fetch2][/fetch2]` shortcode, passing in your API key, API secret, and shelter ID:

    ```html
    [fetch2 key="YOUR API KEY" secret="YOUR API SECRET" shelter="YOUR SHELTER ID"]
    Whatever you want to show while the pet listings are loading (or if they fail to load).
    [/fetch]
    ```

### A WordPress Example

```html
[fetch2 key="7zQqMRcGFeznhF3BgyH9" secret="Xb2BphxcUDwmafKFFCEGv" shelter="AA11"]
	<p>Loading...</p>
    <p>If this is taking a while, please see our available pets at <a href="#">https://petfinder.com/search/pets-for-adoption/?shelter_id=AA11</a>.</p>
[/fetch]
```


## Multiple Listings

You may want to show different pet listings on different parts of your site.

For example, you may want to show cats on one page, and dogs on another. Or perhaps you want to show adoptable pets on one page, and successfully adopted ones on another.

**Fetch supports this out-of-the-box.**  To make this work, use a different selector for each listing.

*If you use the WordPress plugin, it's even easier. Just add your desired settings to the shortcode. The plugin handles the rest.*

### Multiple Listings Example

For this example, let's show cats on one page and dogs on another.

**Cats**

```html
<div data-fetch="cats">
	Loading...
</div>

<script>
	new Fetch('[data-fetch="cats"]', {
		key: 'abcd',
		secret: '1234',
		shelter: 'AA11'
	}, {
		oneSpecies: 'Cat'
	});
</script>
```

**Dogs**

```html
<div data-fetch="dogs">
	Loading...
</div>

<script>
	new Fetch('[data-fetch="dogs"]', {
		key: 'abcd',
		secret: '1234',
		shelter: 'AA11'
	}, {
		oneSpecies: 'Dog'
	});
</script>
```


## Options and Settings

You can update Fetch defaults and options by passing them in as a third argument when initializing Fetch.

If you're using WordPress, you can provide them as all-lowercase parameters on the shortcode.

| Option    | Description     | Default       |
|-----------|-----------------|---------------|
| `status`  | Adoption status | `"adoptable"` |
| `limit`   | Maximum number of pets to display. Use `0` for no limit. | `0` |
| `showFilters` | Display pet filters | `true` |
| `filterSizes` | Show "Sizes" filter | `true` |
| `filterAges` | Show "Ages" filter | `true` |
| `filterGenders` | Show "Genders" filter | `true` |
| `filterSpecies` | Show "Species" filter | `true` |
| `filterBreeds` | Show "Breeds" filter | `true` |
| `filterOther` | Show "Other" filter | `true` |
| `filterButtonText` | Text for the "Filter Results" toggle button when filters are hidden | `"Filter Results"` |
| `filterButtonClass` | Class(es) to add to the "Filter Results" button | `""` |
| `noImage` | An image URL to use when no photo is available. | `""` |
| `specialNeeds` | Text to use for special needs pets | `"Special Needs"` |
| `noDogs` | Text to use for pets that can't have dogs in the home | `"No Dogs"` |
| `noCats` | Text to use for pets that can't have cats in the home | `"No Cats"` |
| `noKids` | Text to use for pets that can't have kids in the home | `"No Kids"` |
| `noDogsCatsKids` | Text to use for pets that can't have dogs, cats, or kids in the home | `"No Dogs/Cats/Kids"` |
| `noDogsCats` | Text to use for pets that can't have dogs or cats in the home | `"No Dogs/Cats"` |
| `noDogsKids` | Text to use for pets that can't have dogs or kids in the home | `"No Dogs/Kids"` |
| `noCatsKids` | Text to use for pets that can't have cats or kids in the home | `"No Cats/Kids"` |
| `narrowLayout` | If `true`, filters will always be hidden. Useful on pages with a sidebar. | `false` |
| `oneSpecies` | Only show pets from a specific species. Use the species name as the value (case-sensitive) | `false` |
| `newTab` | If true, pet listings will open in a new window or tab | `false` |

For example, you can limit the number of pets display.

### A customization example

For this example, let's...

1. Turn off filters
2. Change the text for special needs pets
3. Open pet listings in a new tab

**JavaScript Example**

```js
new Fetch('[data-fetch]', {
	key: 'abcd',
	secret: '1234',
	shelther: 'AA11'
}, {
	showFilters: false,
	specialNeeds: 'Requires Extra Carer',
	newTab: true
});
```

**WordPress Plugin**

```html
[fetch2 key="abcd" secret="1234" shelter="AA11" showfilters="false" specialneeds="Requires Extra Care" newtab="true"]
Loading...
[/fetch2]
```


## Styling

Every element in Fetch has a custom class prefixed with `.fetch-*` that you can hook into to nudge-and-tweak the styling.

This is for advanced users only. Please use your browser's Developer Tools to explore the available classes and styling hooks and test changes.

*__Note:__ I cannot provide support for custom style changes.*


## Setting Up in SquareSpace

A few customers have found setting this up in SquareSpace a bit unintuitive. Here's a short video of me walking through a SquareSpace setup in case you get stuck.

<div class="margin-bottom"><iframe width="560" height="315" src="https://www.youtube.com/embed/534AeqoAQX4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>

*__Heads up:__ this video shows the setup for Fetch v1, but it's more-or-less the same process for v2.*


## Examples

To see working examples, [check out the demos](https://fetch.gomakethings.com/demos/).


## Support

Please [use the issue tracker](https://github.com/cferdinandi/fetch-bugs/blob/master/README.md) to report a bug or ask a question.

*There is no included support for Fetch, so I answer these as time allows in my spare time.*


## Common Issues

If you followed all of the instructions here and your pet listings still aren't displaying, make sure that you have sharing with other websites and via the API enabled on [Petfinder.org](http://petfinder.org).