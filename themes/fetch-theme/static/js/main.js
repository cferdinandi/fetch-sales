/*!
 * fetch-theme v1.0.0: The theme for fetch.gomakethings.com
 * (c) 2018 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/go-make-things
 * Open Source Credits: https://github.com/toddmotto/fluidvids, http://prismjs.com, https://github.com/filamentgroup/loadJS/, https://github.com/filamentgroup/loadCSS, https://github.com/bramstein/fontfaceobserver
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
;(function (window, document, undefined) {

	'use strict';

	// Variables
	var buyNow = document.querySelectorAll('.edd-buy-now-button');

	// Handle "buy now" clicks
	// Don't run if right-click or command/control + click
	var buyNowHandler = function (event) {
		if (!event.target.classList.contains('edd-buy-now-button')) return;
		if (event.button !== 0 || event.metaKey || event.ctrlKey) return;
		event.target.innerHTML = 'Adding to cart...';
		event.target.classList.add('disabled');
	};

	// Listen for "buy now" clicks
	if (buyNow.length > 0) {
		document.addEventListener('click', buyNowHandler, false);
	}

})(window, document);
/*! Fetch v1.0.3 | (c) 2017 Chris Ferdinandi | MIT License | https://cferdinandi@bitbucket.org/cferdinandi/fetch.git | Open Source Credits: https://gist.github.com/gitgrimbo/6451492, http://photoswipe.com, https://github.com/cferdinandi/right-height, https://github.com/cferdinandi/houdini */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var o=e.prototype,i=this,r=i.EventEmitter;o.getListeners=function(e){var t,n,o=this._getEvents();if("object"==typeof e){t={};for(n in o)o.hasOwnProperty(n)&&e.test(n)&&(t[n]=o[n])}else t=o[e]||(o[e]=[]);return t},o.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},o.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},o.addListener=function(e,n){var o,i=this.getListenersAsObject(e),r="object"==typeof n;for(o in i)i.hasOwnProperty(o)&&-1===t(i[o],n)&&i[o].push(r?n:{listener:n,once:!1});return this},o.on=n("addListener"),o.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},o.once=n("addOnceListener"),o.defineEvent=function(e){return this.getListeners(e),this},o.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},o.removeListener=function(e,n){var o,i,r=this.getListenersAsObject(e);for(i in r)r.hasOwnProperty(i)&&(o=t(r[i],n),-1!==o&&r[i].splice(o,1));return this},o.off=n("removeListener"),o.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},o.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},o.manipulateListeners=function(e,t,n){var o,i,r=e?this.removeListener:this.addListener,a=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(o=n.length;o--;)r.call(this,t,n[o]);else for(o in t)t.hasOwnProperty(o)&&(i=t[o])&&("function"==typeof i?r.call(this,o,i):a.call(this,o,i));return this},o.removeEvent=function(e){var t,n=typeof e,o=this._getEvents();if("string"===n)delete o[e];else if("object"===n)for(t in o)o.hasOwnProperty(t)&&e.test(t)&&delete o[t];else delete this._events;return this},o.removeAllListeners=n("removeEvent"),o.emitEvent=function(e,t){var n,o,i,r,a=this.getListenersAsObject(e);for(i in a)if(a.hasOwnProperty(i))for(o=a[i].length;o--;)n=a[i][o],n.once===!0&&this.removeListener(e,n.listener),r=n.listener.apply(this,t||[]),r===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},o.trigger=n("emitEvent"),o.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},o.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return i.EventEmitter=r,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],(function(){return e})):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),(function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,o=function(){};n.addEventListener?o=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(o=function(e,n,o){e[n+o]=o.handleEvent?function(){var n=t(e);o.handleEvent.call(o,n)}:function(){var n=t(e);o.call(e,n)},e.attachEvent("on"+n,e[n+o])});var i=function(){};n.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(o){e[t+n]=void 0}});var r={bind:o,unbind:i};"function"==typeof define&&define.amd?define("eventie/eventie",r):e.eventie=r})(this),(function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],(function(n,o){return t(e,n,o)})):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)})(window,(function(e,t,n){function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e){return"[object Array]"===p.call(e)}function r(e){var t=[];if(i(e))t=e;else if("number"==typeof e.length)for(var n=0,o=e.length;o>n;n++)t.push(e[n]);else t.push(e);return t}function a(e,t,n){if(!(this instanceof a))return new a(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=r(e),this.options=o({},this.options),"function"==typeof t?n=t:o(this.options,t),n&&this.on("always",n),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var i=this;setTimeout((function(){i.check()}))}function s(e){this.img=e}function l(e){this.src=e,f[e]=this}var c=e.jQuery,u=e.console,d="undefined"!=typeof u,p=Object.prototype.toString;a.prototype=new t,a.prototype.options={},a.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var o=n.nodeType;if(o&&(1===o||9===o||11===o))for(var i=n.querySelectorAll("img"),r=0,a=i.length;a>r;r++){var s=i[r];this.addImage(s)}}},a.prototype.addImage=function(e){var t=new s(e);this.images.push(t)},a.prototype.check=function(){function e(e,i){return t.options.debug&&d&&u.log("confirm",e,i),t.progress(e),n++,n===o&&t.complete(),!0}var t=this,n=0,o=this.images.length;if(this.hasAnyBroken=!1,!o)return void this.complete();for(var i=0;o>i;i++){var r=this.images[i];r.on("confirm",e),r.check()}},a.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout((function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)}))},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout((function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}}))},c&&(c.fn.imagesLoaded=function(e,t){var n=new a(this,e,t);return n.jqDeferred.promise(c(this))}),s.prototype=new t,s.prototype.check=function(){var e=f[this.img.src]||new l(this.img.src);if(e.isConfirmed)return void this.confirm(e.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this;e.on("confirm",(function(e,n){return t.confirm(e.isLoaded,n),!0})),e.check()},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var f={};return l.prototype=new t,l.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},l.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},l.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},l.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},a})),(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.houdini=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n={},o="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),i={selector:"[data-collapse]",toggleActiveClass:"active",contentActiveClass:"active",initClass:"js-houdini",callback:function(){}},r=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,r=e.length;r>i;i++)t.call(n,e[i],i,e)},a=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=a(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return e},s=function(e,t){var n,o,i=t.charAt(0);for("["===i&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===i&&e.classList.contains(t.substr(1)))return e;if("#"===i&&e.id===t.substr(1))return e;if("["===i&&e.hasAttribute(n[0])){if(!o)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},l=function(e,t){if(!e.classList.contains(t)){var n=e.querySelector("iframe"),o=e.querySelector("video");if(n){var i=n.src;n.src=i}o&&o.pause()}},c=function(e,t){if(!e.classList.contains(t.toggleActiveClass)&&e.hasAttribute("data-group")){var n=e.getAttribute("data-group"),o=document.querySelectorAll('[data-group="'+n+'"]');r(o,(function(e){var n=document.querySelector(e.getAttribute("data-collapse"));e.classList.remove(t.toggleActiveClass),n.classList.remove(t.contentActiveClass)}))}};n.toggleContent=function(e,t,n){var o=a(o||i,n||{}),r=document.querySelector(t);c(e,o),e.classList.toggle(o.toggleActiveClass),r.classList.toggle(o.contentActiveClass),l(r,o.contentActiveClass),o.callback(e,t)};var u=function(e){var o=s(e.target,t.selector);if(o){("a"===o.tagName.toLowerCase()||"button"===o.tagName.toLowerCase())&&e.preventDefault();var i=o.hasAttribute("data-collapse")?o.getAttribute("data-collapse"):o.parentNode.getAttribute("data-collapse");n.toggleContent(o,i,t)}};return n.destroy=function(){t&&(document.documentElement.classList.remove(t.initClass),document.removeEventListener("click",u,!1),t=null)},n.init=function(e){o&&(n.destroy(),t=a(i,e||{}),document.documentElement.classList.add(t.initClass),document.addEventListener("click",u,!1))},n})),(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.petfinderAPI=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n,o,i,r,a,s={},l="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_")&&"localStorage"in e&&!!Array.prototype.indexOf,c={},u={},d={},p={key:null,shelter:null,count:25,status:"A",offset:null,expiration:60,newestFirst:!0,selectorAppMain:'[data-petfinder="main"]',selectorAppAside:'[data-petfinder="aside"]',templates:{allPets:null,onePet:null,asideAllPets:null,asideOnePet:null},initClass:"js-petfinder-api",allClass:"js-petfinder-api-all-pets",oneClass:"js-petfinder-api-one-pet",titlePrefix:"{{name}} | ",loading:"Fetching the latest pet info...",noPet:'Sorry, but this pet is no longer available. <a data-petfinder-async href="{{url.all}}">View available pets.</a>',classPrefix:"pf-",toggleAll:"Select/Unselect All",noImage:"",animalUnknown:"Not Known",breedDelimiter:", ",sizeUnknown:"Not Known",sizeS:"Small",sizeM:"Medium",sizeL:"Large",sizeXL:"Extra Large",ageUnknown:"Not Known",ageBaby:"Baby",ageYoung:"Young",ageAdult:"Adult",ageSenior:"Senior",genderUnknown:"Not Known",genderM:"Male",genderF:"Female",optionsSpecialNeeds:"Special Needs",optionsNoDogs:"No Dogs",optionsNoCats:"No Cats",optionsNoKids:"No Kids",optionsNoClaws:"No Claws",optionsHasShot:"Has hots",optionsHousebroken:"Housebroken",optionsAltered:"Spayed/Neutered",optionsNoDogsCatsKids:"No Dogs/Cats/Kids",optionsNoDogsCats:"No Dogs/Cats",optionsNoDogsKids:"No Dogs/Kids",optionsNoCatsKids:"No Cats/Kids",contactName:"",contactEmail:"",contactPhone:"",contactAddress1:"",contactAddress2:"",contactCity:"",contactState:"",contactZip:"",contactFax:"",callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,r=e.length;r>i;i++)t.call(n,e[i],i,e)},m=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=m(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return e},h=function(e){var n=e?t.titlePrefix+d.title:d.title;n=n.replace(/\{\{name\}\}/,e),document.title=n},g=function(e,n,o){var i=o,r=function(t,n){e.options.option&&f(e.options.option,(function(e){e.$t===t&&(i=n)}))};if("description"===n&&(i=w(e.description.$t),i=y(i),i='<div style="white-space: pre-wrap;">'+i+"</div>"),"breeds"===n){if("[object Object]"===Object.prototype.toString.call(e.breeds.breed))return i=e.breeds.breed.$t;f(e.breeds.breed,(function(e,n){i+=0===n?"":t.breedDelimiter,i+=e.$t}))}if("size"===n&&("S"===e.size.$t&&(i=t.sizeS),"M"===e.size.$t&&(i=t.sizeM),"L"===e.size.$t&&(i=t.sizeL),"XL"===e.size.$t&&(i=t.sizeXL)),"age"===n&&("Baby"===e.age.$t&&(i=t.ageBaby),"Young"===e.age.$t&&(i=t.ageYoung),"Adult"===e.age.$t&&(i=t.ageAdult),"Senior"===e.age.$t&&(i=t.ageSenior)),"gender"===n&&("M"===e.sex.$t&&(i=t.genderM),"F"===e.sex.$t&&(i=t.genderF)),"animal"===n&&(i="unknown"===e.animal.$t?t.animalUnknown:e.animal.$t),"multiOptions"===n){var a,s,l;if(!e.options.option)return i;f(e.options.option,(function(e){"noCats"===e.$t&&(a=!0),"noDogs"===e.$t&&(s=!0),"noKids"===e.$t&&(l=!0)})),a===!0&&s===!0&&l===!0?i=t.optionsNoDogsCatsKids:a===!0&&s===!0?i=t.optionsNoDogsCats:s===!0&&l===!0?i=t.optionsNoDogsKids:a===!0&&l===!0?i=t.optionsNoCatsKids:s===!0?i=t.optionsNoDogs:a===!0?i=t.optionsNoCats:l===!0&&(i=t.optionsNoKids)}return"specialNeeds"===n&&r("specialNeeds",t.optionsSpecialNeeds),"noDogs"===n&&r("noDogs",t.optionsNoDogs),"noCats"===n&&r("noCats",t.optionsNoCats),"noKids"===n&&r("noKids",t.optionsNoKids),"noClaws"===n&&r("noClaws",t.optionsNoClaws),"hasShot"===n&&r("hasShots",t.optionsHasShots),"housebroken"===n&&r("housebroken",t.optionsHousebroken),"altered"===n&&r("altered",t.optionsAltered),i},v=function(e,n,o){if(!e.media||!e.media.photos||!e.media.photos.photo||0===e.media.photos.photo.count)return"";var i,r=t.noImage;return"large"===n&&(i="x"),"medium"===n&&(i="pn"),"thumbSmall"===n&&(i="t"),"thumbMedium"===n&&(i="pnt"),"thumbLarge"===n&&(i="fpm"),f(e.media.photos.photo,(function(e){return e["@size"]===i&&e["@id"]===o?void(r=e.$t):void 0})),r},b=function(e,n){var o="";return"name"===n&&(o=e.contact.name&&e.contact.name.$t?e.contact.name.$t:t.contactName),"email"===n&&(o=e.contact.email&&e.contact.email.$t?e.contact.email.$t:t.contactEmail),"phone"===n&&(o=e.contact.phone&&e.contact.phone.$t?e.contact.phone.$t:t.contactPhone),"address1"===n&&(o=e.contact.address1&&e.contact.address1.$t?e.contact.address1.$t:t.contactAddress1),"address2"===n&&(o=e.contact.address2&&e.contact.address2.$t?e.contact.address2.$t:t.contactAddress2),"city"===n&&(o=e.contact.city&&e.contact.city.$t?e.contact.city.$t:t.contactCity),"state"===n&&(o=e.contact.state&&e.contact.state.$t?e.contact.state.$t:t.contactState),"zip"===n&&(o=e.contact.zip&&e.contact.zip.$t?e.contact.zip.$t:t.contactZip),"fax"===n&&(o=e.contact.fax&&e.contact.fax.$t?e.contact.fax.$t:t.contactFax),o},y=function(e){if(e){var t,n,o,i;return n=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,t=e.replace(n,'<a href="$1" target="_blank">$1</a>'),o=/(^|[^\/])(www\.[\S]+(\b|$))/gim,t=t.replace(o,'$1<a href="http://$2" target="_blank">$2</a>'),i=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,t=t.replace(i,'<a href="mailto:$1">$1</a>')}},w=function(e){return e&&""!==e?e.replace(/<p><\/p>/g,"").replace(/<p> <\/p>/g,"").replace(/<p>&nbsp;<\/p>/g,"").replace(/&nbsp;/g,"").replace(/<span>/g,"").replace(/<\/span>/g,"").replace(/<font>/g,"").replace(/<\/font>/g,""):void 0},x=function(e,n){return e&&""!==e?(n&&(e=t.classPrefix+e),e.replace(/\(/g,"").replace(/\)/g,"").replace(/\&/g,"-").replace(/\//g,"-").replace(/ /g,"-").toLowerCase()):void 0},C=function(e){if("[object Object]"===Object.prototype.toString.call(e.breeds.breed))return" "+x(e.breeds.breed.$t,!0);var t="";return f(e.breeds.breed,(function(e,n){t+=" "+x(e.$t,!0)})),t},S=function(e){return[t.classPrefix+"pet",x(g(e,"age",t.ageUnknown),!0),x(e.animal.$t,!0),C(e),x(g(e,"specialNeeds",""),!0),x(g(e,"noDogs",""),!0),x(g(e,"noCats",""),!0),x(g(e,"noKids",""),!0),x(g(e,"noClaws",""),!0),x(g(e,"hasShots",""),!0),x(g(e,"housebroken",""),!0),x(g(e,"altered",""),!0),x(g(e,"gender",t.genderUnknown),!0),x(g(e,"size",t.sizeUnknown),!0)].join(" ")},A=function(e,n){if(u[e])return u[e];var i=[],r=[];return f(o.pets,(function(o){var r=g(o,e,n);if("breeds"===e){var a=r.split(t.breedDelimiter);return void f(a,(function(e){-1===i.indexOf(e)&&i.push(e)}))}-1===i.indexOf(r)&&i.push(r)})),i.sort(),"size"===e&&(-1!==i.indexOf(t.sizeS)&&r.push(t.sizeS),-1!==i.indexOf(t.sizeM)&&r.push(t.sizeM),-1!==i.indexOf(t.sizeL)&&r.push(t.sizeL),-1!==i.indexOf(t.sizeXL)&&r.push(t.sizeXL),i=r),"age"===e&&(-1!==i.indexOf(t.ageBaby)&&r.push(t.ageBaby),-1!==i.indexOf(t.ageYoung)&&r.push(t.ageYoung),-1!==i.indexOf(t.ageAdult)&&r.push(t.ageAdult),-1!==i.indexOf(t.ageSenior)&&r.push(t.ageSenior),i=r),u[e]=i,i},k=function(e,t){var n="",o=A(e,t);return f(o,(function(e){n+="<li>"+e+"</li>"})),n},E=function(e,n,o){var i="",r="",a="breeds"===e?"breeds":"attributes",s=A(e,n);return f(s,(function(t){var n=x(t,!0);i+='<label><input type="checkbox" data-petfinder-sort="'+a+'" data-petfinder-sort-type="'+e+'" data-petfinder-sort-target=".'+n+'" checked> '+t+"</label>"})),o&&(r='<label><input type="checkbox" data-petfinder-sort="toggle" data-petfinder-sort-target="[data-petfinder-sort-type='+e+']" checked> '+t.toggleAll+"</label>"),r+i},L=function(e,n,o){return e?n.replace(/\{\{name\}\}/g,e.name.$t).replace(/\{\{id\}\}/g,e.id.$t).replace(/\{\{animal\}\}/g,e.animal.$t).replace(/\{\{age\}\}/g,g(e,"age",t.ageUnknown)).replace(/\{\{gender\}\}/g,g(e,"gender",t.genderUnknown)).replace(/\{\{size\}\}/g,g(e,"size",t.sizeUnknown)).replace(/\{\{breeds\}\}/g,g(e,"breeds","")).replace(/\{\{description\}\}/g,g(e,"description","")).replace(/\{\{photo.1.large\}\}/g,v(e,"large","1")).replace(/\{\{photo.2.large\}\}/g,v(e,"large","2")).replace(/\{\{photo.3.large\}\}/g,v(e,"large","3")).replace(/\{\{photo.1.medium\}\}/g,v(e,"medium","1")).replace(/\{\{photo.2.medium\}\}/g,v(e,"medium","2")).replace(/\{\{photo.3.medium\}\}/g,v(e,"medium","3")).replace(/\{\{photo.1.thumbnail.small\}\}/g,v(e,"thumbSmall","1")).replace(/\{\{photo.2.thumbnail.small\}\}/g,v(e,"thumbSmall","2")).replace(/\{\{photo.3.thumbnail.small\}\}/g,v(e,"thumbSmall","3")).replace(/\{\{photo.1.thumbnail.medium\}\}/g,v(e,"thumbMedium","1")).replace(/\{\{photo.2.thumbnail.medium\}\}/g,v(e,"thumbMedium","2")).replace(/\{\{photo.3.thumbnail.medium\}\}/g,v(e,"thumbMedium","3")).replace(/\{\{photo.1.thumbnail.large\}\}/g,v(e,"thumbLarge","1")).replace(/\{\{photo.2.thumbnail.large\}\}/g,v(e,"thumbLarge","2")).replace(/\{\{photo.3.thumbnail.large\}\}/g,v(e,"thumbLarge","3")).replace(/\{\{options.multi\}\}/g,g(e,"multiOptions","")).replace(/\{\{options.specialNeeds\}\}/g,g(e,"specialNeeds","")).replace(/\{\{options.noDogs\}\}/g,g(e,"noDogs","")).replace(/\{\{options.noCats\}\}/g,g(e,"noCats","")).replace(/\{\{options.noKids\}\}/g,g(e,"noKids","")).replace(/\{\{options.noClaws\}\}/g,g(e,"noClaws","")).replace(/\{\{options.hasShots\}\}/g,g(e,"hasShots","")).replace(/\{\{options.housebroken\}\}/g,g(e,"housebroken","")).replace(/\{\{options.altered\}\}/g,g(e,"altered","")).replace(/\{\{contact.name\}\}/g,b(e,"name")).replace(/\{\{contact.email\}\}/g,b(e,"email")).replace(/\{\{contact.phone\}\}/g,b(e,"phone")).replace(/\{\{contact.address1\}\}/g,b(e,"address1")).replace(/\{\{contact.address2\}\}/g,b(e,"address2")).replace(/\{\{contact.city\}\}/g,b(e,"city")).replace(/\{\{contact.state\}\}/g,b(e,"state")).replace(/\{\{contact.zip\}\}/g,b(e,"zip")).replace(/\{\{contact.fax\}\}/g,b(e,"fax")).replace(/\{\{url.all\}\}/g,r).replace(/\{\{url.pet\}\}/g,r+"?petID="+e.id.$t).replace(/\{\{url.petfinder\}\}/g,"https://www.petfinder.com/petdetail/"+e.id.$t).replace(/\{\{classes\}\}/g,S(e)).replace(/\{\{number\}\}/g,o).replace(/\{\{total\}\}/g,a):n.replace(/\{\{list.ages\}\}/,k("age",t.ageUnknown)).replace(/\{\{list.animals\}\}/,k("animal",t.animalUnknown)).replace(/\{\{list.breeds\}\}/,k("breeds","","breed")).replace(/\{\{list.options\}\}/,k("options","","option")).replace(/\{\{list.genders\}\}/,k("sex",t.genderUnknown)).replace(/\{\{list.sizes\}\}/,k("size",t.sizeUnknown)).replace(/\{\{checkbox.ages\}\}/,E("age",t.ageUnknown)).replace(/\{\{checkbox.animals\}\}/,E("animal",t.animalUnknown)).replace(/\{\{checkbox.breeds\}\}/,E("breeds","")).replace(/\{\{checkbox.options\}\}/,E("options","")).replace(/\{\{checkbox.genders\}\}/,E("gender",t.genderUnknown)).replace(/\{\{checkbox.sizes\}\}/,E("size",t.sizeUnknown)).replace(/\{\{checkbox.ages.toggle\}\}/,E("age",t.ageUnknown,!0)).replace(/\{\{checkbox.animals.toggle\}\}/,E("animal",t.animalUnknown,!0)).replace(/\{\{checkbox.breeds.toggle\}\}/,E("breeds","",!0)).replace(/\{\{checkbox.options.toggle\}\}/,E("options","",!0)).replace(/\{\{checkbox.genders.toggle\}\}/,E("gender",t.genderUnknown,!0)).replace(/\{\{checkbox.sizes.toggle\}\}/,E("size",t.sizeUnknown,!0)).replace(/\{\{total\}\}/g,a)},I=function(e){var t={};return f(o.pets,(function(n,o){n.id.$t===e&&(t.pet=n,t.number=o.toString())})),t},_=function(e){if(c.aside){var t=e?L(null,e):"";c.aside.innerHTML=t}},T=function(){var e="";f(o.pets,(function(n,o){e+=L(n,t.templates.allPets,o)})),c.main.innerHTML=e,h(),document.documentElement.classList.add(t.allClass),document.documentElement.classList.remove(t.oneClass)},O=function(e){var n=I(e);if(!n.pet||!n.number)return void(c.main.innerHTML=t.noPet.replace(/\{\{url.all\}\}/,r));var o=L(n.pet,t.templates.onePet,n.number);c.main.innerHTML=o,h(n.pet.name.$t),document.documentElement.classList.add(t.oneClass),document.documentElement.classList.remove(t.allClass)},D=function(){t.loading&&(c.main.innerHTML=t.loading)},P=function(e,n){return e?(O(e[1]),_(t.templates.asideOnePet),void t.callback()):(T(),_(t.templates.asideAllPets),void t.callback())},M=function(){if(!o)return c.main.innerHTML=d.content,void console.log("Unable to retrieve Petfinder data from the API or localStorage.");t.newestFirst&&o.pets.reverse(),a=o.pets.length;var n=/[\\?&]petID=([^&#]*)/i.exec(e.location.href);P(n)};s.destroy=function(){t&&(document.documentElement.classList.remove(t.initClass),document.documentElement.classList.remove(t.allClass),document.documentElement.classList.remove(t.oneClass),c.main&&d.content&&(c.main.innerHTML=d.content),c.aside&&(c.aside.innerHTML=""),d.title&&(document.title=d.title),c={},u={},d={},t=null,n=null,o=null,i=null,r=null,a=null)};var N=function(e){var n="//api.petfinder.com/shelter.getPets?format=json",o="";return o+="&key="+t.key,o+="&id="+t.shelter,o+="&count="+parseInt(t.count,10),o+="&status="+t.status,o+="&output=full",t.offset&&(o+="&offset="+parseInt(t.offset,10)),e&&(o+="&callback="+e),n+o},z=function(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=e,t.parentNode.insertBefore(n,t),n.onload=function(){this.remove()}};s.setAPIData=function(e){if("100"!==e.petfinder.header.status.code.$t)return console.log("Unable to get data from Petfinder. Using expired localStorage data instead."),void M();var n=60*parseInt(t.expiration,10)*1e3;o={pets:e.petfinder.pets.pet,timestamp:(new Date).getTime()+n},localStorage.setItem(i,JSON.stringify(o)),M()};var F=function(){if(o=JSON.parse(localStorage.getItem(i)),o&&(new Date).getTime()<o.timestamp)return void M();var e=N("petfinderAPI.setAPIData");z(e)};return s.init=function(n){if(l){if(s.destroy(),t=m(!0,p,n||{}),!t.key||!t.shelter)return void console.log("You must provide a Petfinder API key and shelter ID to use petfinderAPI4everybody.js");if(!t.templates.allPets)return void console.log("You must provide a template for all pets to use petfinderAPI4everybody.js");document.documentElement.classList.add(t.initClass),c.main=document.querySelector(t.selectorAppMain),c.aside=document.querySelector(t.selectorAppAside),c.main&&(i=[t.key,t.shelter,t.count,t.status,t.offset].join(""),d.content=c.main.innerHTML,d.title=document.title,r=[e.location.protocol,"//",e.location.host,e.location.pathname].join(""),D(),F())}},s})),(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.petfinderSort=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n,o,i,r,a,s,l,c={},u="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),d="petfinderSortStates",p={initClass:"js-petfinder-sort",callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,r=e.length;r>i;i++)t.call(n,e[i],i,e)},m=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=m(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return e},h=function(e,t){var n,o,i=t.charAt(0);for("["===i&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===i&&e.classList.contains(t.substr(1)))return e;if("#"===i&&e.id===t.substr(1))return e;if("["===i&&e.hasAttribute(n[0])){if(!o)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},g=function(n){if(e.sessionStorage){var i=n.getAttribute("data-petfinder-sort-target");if(n.checked===!1)return o[i]="unchecked",sessionStorage.setItem(d,JSON.stringify(o)),void t.callback(n);delete o[i],sessionStorage.setItem(d,JSON.stringify(o)),t.callback(n)}},v=function(t){if(e.sessionStorage){var n=t.getAttribute("data-petfinder-sort-target");o&&o[n]&&"unchecked"===o[n]&&(t.checked=!1)}},b=function(){f(r,(function(e){v(e)})),f(a,(function(e){v(e)})),f(s,(function(e){v(e)}))},y=function(e,t){return t?(e.style.display="none",void(e.style.visibility="hidden")):(e.style.display="block",void(e.style.visibility="visible"))},w=function(e){var t=document.querySelectorAll(e.getAttribute("data-petfinder-sort-target"));return e.checked===!0?void f(t,(function(e){e.checked=!0,g(e)})):void f(t,(function(e){e.checked=!1,g(e)}))},x=function(){f(i,(function(e){return l?void y(e,!0):void y(e)})),f(r,(function(e){if(e.checked===!0){var t=document.querySelectorAll(e.getAttribute("data-petfinder-sort-target"));f(t,(function(e){y(e)}))}})),f(a,(function(e){if(e.checked===!1){var t=document.querySelectorAll(e.getAttribute("data-petfinder-sort-target"));f(t,(function(e){y(e,!0)}))}}))},C=function(){f(i,(function(e){y(e)})),f(r,(function(e){e.checked=!0})),f(a,(function(e){e.checked=!0})),f(s,(function(e){e.checked=!0}))},S=function(e){var t=e.target,n=h(t,"[data-petfinder-sort]");n&&(g(n),"toggle"===n.getAttribute("data-petfinder-sort")&&w(n),x())};return c.destroy=function(){t&&(document.documentElement.classList.remove(t.initClass),C(),document.removeEventListener("click",S,!1),o=null,t=null,n=null,i=null,r=null,a=null,s=null,l=null)},c.init=function(n){u&&(c.destroy(),t=m(!0,p,n||{}),i=document.querySelectorAll(".pf-pet"),r=document.querySelectorAll('[data-petfinder-sort="breeds"]'),a=document.querySelectorAll('[data-petfinder-sort="attributes"]'),s=document.querySelectorAll('[data-petfinder-sort="toggle"]'),l=0===r.length?!1:!0,e.sessionStorage&&(o=sessionStorage.getItem(d)?JSON.parse(sessionStorage.getItem(d)):{}),o=e.sessionStorage?JSON.parse(sessionStorage.getItem(d))||{}:{},document.documentElement.classList.add(t.initClass),b(),x(),document.addEventListener("click",S,!1))},c})),(function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()})(this,(function(){"use strict";var e=function(e,t){var n,o,i,r,a,s,l,c,u,d,p,f,m,h,g,v,b,y,w,x=this,C=!1,S=!0,A=!0,k={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return e.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return e.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},E=function(e){if(v)return!0;e=e||window.event,g.timeToIdle&&g.mouseUsed&&!u&&z();for(var n,o,i=e.target||e.srcElement,r=i.getAttribute("class")||"",a=0;a<q.length;a++)n=q[a],n.onTap&&r.indexOf("pswp__"+n.name)>-1&&(n.onTap(),o=!0);if(o){e.stopPropagation&&e.stopPropagation(),v=!0;var s=t.features.isOldAndroid?600:30;b=setTimeout((function(){v=!1}),s)}},L=function(){return!e.likelyTouchDevice||g.mouseUsed||screen.width>g.fitControlsWidth},I=function(e,n,o){t[(o?"add":"remove")+"Class"](e,"pswp__"+n)},_=function(){var e=1===g.getNumItemsFn();e!==h&&(I(o,"ui--one-slide",e),h=e)},T=function(){I(l,"share-modal--hidden",A)},O=function(){return A=!A,A?(t.removeClass(l,"pswp__share-modal--fade-in"),setTimeout((function(){A&&T()}),300)):(T(),setTimeout((function(){A||t.addClass(l,"pswp__share-modal--fade-in")}),30)),A||P(),!1},D=function(t){t=t||window.event;var n=t.target||t.srcElement;return e.shout("shareLinkClick",t,n),n.href?n.hasAttribute("download")?!0:(window.open(n.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),A||O(),!1):!1},P=function(){for(var e,t,n,o,i,r="",a=0;a<g.shareButtons.length;a++)e=g.shareButtons[a],n=g.getImageURLForShare(e),o=g.getPageURLForShare(e),i=g.getTextForShare(e),t=e.url.replace("{{url}}",encodeURIComponent(o)).replace("{{image_url}}",encodeURIComponent(n)).replace("{{raw_image_url}}",n).replace("{{text}}",encodeURIComponent(i)),r+='<a href="'+t+'" target="_blank" class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>",g.parseShareButtonOut&&(r=g.parseShareButtonOut(e,r));l.children[0].innerHTML=r,l.children[0].onclick=D},M=function(e){for(var n=0;n<g.closeElClasses.length;n++)if(t.hasClass(e,"pswp__"+g.closeElClasses[n]))return!0},N=0,z=function(){clearTimeout(w),N=0,u&&x.setIdle(!1)},F=function(e){e=e?e:window.event;var t=e.relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(w),w=setTimeout((function(){x.setIdle(!0)}),g.timeToIdleOutside))},j=function(){g.fullscreenEl&&!t.features.isOldAndroid&&(n||(n=x.getFullscreenAPI()),n?(t.bind(document,n.eventK,x.updateFullscreen),x.updateFullscreen(),t.addClass(e.template,"pswp--supports-fs")):t.removeClass(e.template,"pswp--supports-fs"))},R=function(){g.preloaderEl&&(H(!0),d("beforeChange",(function(){clearTimeout(m),m=setTimeout((function(){e.currItem&&e.currItem.loading?(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth)&&H(!1):H(!0)}),g.loadingIndicatorDelay)})),d("imageLoadComplete",(function(t,n){e.currItem===n&&H(!0)})))},H=function(e){f!==e&&(I(p,"preloader--active",!e),f=e)},Z=function(e){var n=e.vGap;if(L()){var a=g.barsSize;if(g.captionEl&&"auto"===a.bottom)if(r||(r=t.createEl("pswp__caption pswp__caption--fake"),r.appendChild(t.createEl("pswp__caption__center")),o.insertBefore(r,i),t.addClass(o,"pswp__ui--fit")),g.addCaptionHTMLFn(e,r,!0)){var s=r.clientHeight;n.bottom=parseInt(s,10)||44}else n.bottom=a.top;else n.bottom="auto"===a.bottom?0:a.bottom;n.top=a.top}else n.top=n.bottom=0},U=function(){g.timeToIdle&&d("mouseUsed",(function(){
t.bind(document,"mousemove",z),t.bind(document,"mouseout",F),y=setInterval((function(){N++,2===N&&x.setIdle(!0)}),g.timeToIdle/2)}))},K=function(){d("onVerticalDrag",(function(e){S&&.95>e?x.hideControls():!S&&e>=.95&&x.showControls()}));var e;d("onPinchClose",(function(t){S&&.9>t?(x.hideControls(),e=!0):e&&!S&&t>.9&&x.showControls()})),d("zoomGestureEnded",(function(){e=!1,e&&!S&&x.showControls()}))},q=[{name:"caption",option:"captionEl",onInit:function(e){i=e}},{name:"share-modal",option:"shareEl",onInit:function(e){l=e},onTap:function(){O()}},{name:"button--share",option:"shareEl",onInit:function(e){s=e},onTap:function(){O()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){a=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){p=e}}],$=function(){var e,n,i,r=function(o){if(o)for(var r=o.length,a=0;r>a;a++){e=o[a],n=e.className;for(var s=0;s<q.length;s++)i=q[s],n.indexOf("pswp__"+i.name)>-1&&(g[i.option]?(t.removeClass(e,"pswp__element--disabled"),i.onInit&&i.onInit(e)):t.addClass(e,"pswp__element--disabled"))}};r(o.children);var a=t.getChildByClass(o,"pswp__top-bar");a&&r(a.children)};x.init=function(){t.extend(e.options,k,!0),g=e.options,o=t.getChildByClass(e.scrollWrap,"pswp__ui"),d=e.listen,K(),d("beforeChange",x.update),d("doubleTap",(function(t){var n=e.currItem.initialZoomLevel;e.getZoomLevel()!==n?e.zoomTo(n,t,333):e.zoomTo(g.getDoubleTapZoom(!1,e.currItem),t,333)})),d("preventDragEvent",(function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&e.type.indexOf("mouse")>-1&&(o.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)})),d("bindEvents",(function(){t.bind(o,"pswpTap click",E),t.bind(e.scrollWrap,"pswpTap",x.onGlobalTap),e.likelyTouchDevice||t.bind(e.scrollWrap,"mouseover",x.onMouseOver)})),d("unbindEvents",(function(){A||O(),y&&clearInterval(y),t.unbind(document,"mouseout",F),t.unbind(document,"mousemove",z),t.unbind(o,"pswpTap click",E),t.unbind(e.scrollWrap,"pswpTap",x.onGlobalTap),t.unbind(e.scrollWrap,"mouseover",x.onMouseOver),n&&(t.unbind(document,n.eventK,x.updateFullscreen),n.isFullscreen()&&(g.hideAnimationDuration=0,n.exit()),n=null)})),d("destroy",(function(){g.captionEl&&(r&&o.removeChild(r),t.removeClass(i,"pswp__caption--empty")),l&&(l.children[0].onclick=null),t.removeClass(o,"pswp__ui--over-close"),t.addClass(o,"pswp__ui--hidden"),x.setIdle(!1)})),g.showAnimationDuration||t.removeClass(o,"pswp__ui--hidden"),d("initialZoomIn",(function(){g.showAnimationDuration&&t.removeClass(o,"pswp__ui--hidden")})),d("initialZoomOut",(function(){t.addClass(o,"pswp__ui--hidden")})),d("parseVerticalMargin",Z),$(),g.shareEl&&s&&l&&(A=!0),_(),U(),j(),R()},x.setIdle=function(e){u=e,I(o,"ui--idle",e)},x.update=function(){S&&e.currItem?(x.updateIndexIndicator(),g.captionEl&&(g.addCaptionHTMLFn(e.currItem,i),I(i,"caption--empty",!e.currItem.title)),C=!0):C=!1,A||O(),_()},x.updateFullscreen=function(o){o&&setTimeout((function(){e.setScrollOffset(0,t.getScrollY())}),50),t[(n.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")},x.updateIndexIndicator=function(){g.counterEl&&(a.innerHTML=e.getCurrentIndex()+1+g.indexIndicatorSep+g.getNumItemsFn())},x.onGlobalTap=function(n){n=n||window.event;var o=n.target||n.srcElement;if(!v)if(n.detail&&"mouse"===n.detail.pointerType){if(M(o))return void e.close();t.hasClass(o,"pswp__img")&&(1===e.getZoomLevel()&&e.getZoomLevel()<=e.currItem.fitRatio?g.clickToCloseNonZoomable&&e.close():e.toggleDesktopZoom(n.detail.releasePoint))}else if(g.tapToToggleControls&&(S?x.hideControls():x.showControls()),g.tapToClose&&(t.hasClass(o,"pswp__img")||M(o)))return void e.close()},x.onMouseOver=function(e){e=e||window.event;var t=e.target||e.srcElement;I(o,"ui--over-close",M(t))},x.hideControls=function(){t.addClass(o,"pswp__ui--hidden"),S=!1},x.showControls=function(){S=!0,C||x.update(),t.removeClass(o,"pswp__ui--hidden")},x.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},x.getFullscreenAPI=function(){var t,n=document.documentElement,o="fullscreenchange";return n.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:o}:n.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+o}:n.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+o}:n.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){return c=g.closeOnScroll,g.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?e.template[this.enterK]():void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return g.closeOnScroll=c,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}};return e})),(function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()})(this,(function(){"use strict";var e=function(e,t,n,o){var i={features:null,bind:function(e,t,n,o){var i=(o?"remove":"add")+"EventListener";t=t.split(" ");for(var r=0;r<t.length;r++)t[r]&&e[i](t[r],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){i.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){i.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(i.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var o=e.length;o--;)if(e[o][n]===t)return o;return-1},extend:function(e,t,n){for(var o in t)if(t.hasOwnProperty(o)){if(n&&e.hasOwnProperty(o))continue;e[o]=t[o]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(i.features)return i.features;var e=i.createEl(),t=e.style,n="",o={};if(o.oldIE=document.all&&!document.addEventListener,o.touch="ontouchstart"in window,window.requestAnimationFrame&&(o.raf=window.requestAnimationFrame,o.caf=window.cancelAnimationFrame),o.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!o.pointerEvent){var r=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&a.length>0&&(a=parseInt(a[1],10),a>=1&&8>a&&(o.isOldIOSPhone=!0))}var s=r.match(/Android\s([0-9\.]*)/),l=s?s[1]:0;l=parseFloat(l),l>=1&&(4.4>l&&(o.isOldAndroid=!0),o.androidVersion=l),o.isMobileOpera=/opera mini|opera mobi/i.test(r)}for(var c,u,d=["transform","perspective","animationName"],p=["","webkit","Moz","ms","O"],f=0;4>f;f++){n=p[f];for(var m=0;3>m;m++)c=d[m],u=n+(n?c.charAt(0).toUpperCase()+c.slice(1):c),!o[c]&&u in t&&(o[c]=u);n&&!o.raf&&(n=n.toLowerCase(),o.raf=window[n+"RequestAnimationFrame"],o.raf&&(o.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!o.raf){var h=0;o.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-h)),o=window.setTimeout((function(){e(t+n)}),n);return h=t+n,o},o.caf=function(e){clearTimeout(e)}}return o.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,i.features=o,o}};i.detectFeatures(),i.features.oldIE&&(i.bind=function(e,t,n,o){t=t.split(" ");for(var i,r=(o?"detach":"attach")+"Event",a=function(){n.handleEvent.call(n)},s=0;s<t.length;s++)if(i=t[s])if("object"==typeof n&&n.handleEvent){if(o){if(!n["oldIE"+i])return!1}else n["oldIE"+i]=a;e[r]("on"+i,n["oldIE"+i])}else e[r]("on"+i,n)});var r=this,a=25,s=3,l={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};i.extend(l,o);var c,u,d,p,f,m,h,g,v,b,y,w,x,C,S,A,k,E,L,I,_,T,O,D,P,M,N,z,F,j,R,H,Z,U,K,q,$,B,Y,W,G,V,X,J,Q,ee,te,ne,oe,ie,re,ae,se,le,ce,ue,de=function(){return{x:0,y:0}},pe=de(),fe=de(),me=de(),he={},ge=0,ve={},be=de(),ye=0,we=!0,xe=[],Ce={},Se=!1,Ae=function(e,t){i.extend(r,t.publicMethods),xe.push(e)},ke=function(e){var t=Qt();return e>t-1?e-t:0>e?t+e:e},Ee={},Le=function(e,t){return Ee[e]||(Ee[e]=[]),Ee[e].push(t)},Ie=function(e){var t=Ee[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var o=0;o<t.length;o++)t[o].apply(r,n)}},_e=function(){return(new Date).getTime()},Te=function(e){le=e,r.bg.style.opacity=e*l.bgOpacity},Oe=function(e,t,n,o,i){(!Se||i&&i!==r.currItem)&&(o/=i?i.fitRatio:r.currItem.fitRatio),e[T]=w+t+"px, "+n+"px"+x+" scale("+o+")"},De=function(e){oe&&(e&&(b>r.currItem.fitRatio?Se||(pn(r.currItem,!1,!0),Se=!0):Se&&(pn(r.currItem),Se=!1)),Oe(oe,me.x,me.y,b))},Pe=function(e){e.container&&Oe(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Me=function(e,t){t[T]=w+e+"px, 0px"+x},Ne=function(e,t){if(!l.loop&&t){var n=p+(be.x*ge-e)/be.x,o=Math.round(e-bt.x);(0>n&&o>0||n>=Qt()-1&&0>o)&&(e=bt.x+o*l.mainScrollEndFriction)}bt.x=e,Me(e,f)},ze=function(e,t){var n=yt[e]-ve[e];return fe[e]+pe[e]+n-n*(t/y)},Fe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},je=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Re=null,He=function(){Re&&(i.unbind(document,"mousemove",He),i.addClass(e,"pswp--has_mouse"),l.mouseUsed=!0,Ie("mouseUsed")),Re=setTimeout((function(){Re=null}),100)},Ze=function(){i.bind(document,"keydown",r),R.transform&&i.bind(r.scrollWrap,"click",r),l.mouseUsed||i.bind(document,"mousemove",He),i.bind(window,"resize scroll",r),Ie("bindEvents")},Ue=function(){i.unbind(window,"resize",r),i.unbind(window,"scroll",v.scroll),i.unbind(document,"keydown",r),i.unbind(document,"mousemove",He),R.transform&&i.unbind(r.scrollWrap,"click",r),B&&i.unbind(window,h,r),Ie("unbindEvents")},Ke=function(e,t){var n=ln(r.currItem,he,e);return t&&(ne=n),n},qe=function(e){return e||(e=r.currItem),e.initialZoomLevel},$e=function(e){return e||(e=r.currItem),e.w>0?l.maxSpreadZoom:1},Be=function(e,t,n,o){return o===r.currItem.initialZoomLevel?(n[e]=r.currItem.initialPosition[e],!0):(n[e]=ze(e,o),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},Ye=function(){if(T){var t=R.perspective&&!D;return w="translate"+(t?"3d(":"("),void(x=R.perspective?", 0px)":")")}T="left",i.addClass(e,"pswp--ie"),Me=function(e,t){t.left=e+"px"},Pe=function(e){var t=e.fitRatio>1?1:e.fitRatio,n=e.container.style,o=t*e.w,i=t*e.h;n.width=o+"px",n.height=i+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},De=function(){if(oe){var e=oe,t=r.currItem,n=t.fitRatio>1?1:t.fitRatio,o=n*t.w,i=n*t.h;e.width=o+"px",e.height=i+"px",e.left=me.x+"px",e.top=me.y+"px"}}},We=function(e){var t="";l.escKey&&27===e.keyCode?t="close":l.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,r[t]()))},Ge=function(e){e&&(G||W||ie||q)&&(e.preventDefault(),e.stopPropagation())},Ve=function(){r.setScrollOffset(0,i.getScrollY())},Xe={},Je=0,Qe=function(e){Xe[e]&&(Xe[e].raf&&M(Xe[e].raf),Je--,delete Xe[e])},et=function(e){Xe[e]&&Qe(e),Xe[e]||(Je++,Xe[e]={})},tt=function(){for(var e in Xe)Xe.hasOwnProperty(e)&&Qe(e)},nt=function(e,t,n,o,i,r,a){var s,l=_e();et(e);var c=function(){if(Xe[e]){if(s=_e()-l,s>=o)return Qe(e),r(n),void(a&&a());r((n-t)*i(s/o)+t),Xe[e].raf=P(c)}};c()},ot={shout:Ie,listen:Le,viewportSize:he,options:l,isMainScrollAnimating:function(){return ie},getZoomLevel:function(){return b},getCurrentIndex:function(){return p},isDragging:function(){return B},isZooming:function(){return Q},setScrollOffset:function(e,t){ve.x=e,j=ve.y=t,Ie("updateScrollOffset",ve)},applyZoomPan:function(e,t,n,o){me.x=t,me.y=n,b=e,De(o)},init:function(){if(!c&&!u){var n;r.framework=i,r.template=e,r.bg=i.getChildByClass(e,"pswp__bg"),N=e.className,c=!0,R=i.detectFeatures(),P=R.raf,M=R.caf,T=R.transform,F=R.oldIE,r.scrollWrap=i.getChildByClass(e,"pswp__scroll-wrap"),r.container=i.getChildByClass(r.scrollWrap,"pswp__container"),f=r.container.style,r.itemHolders=A=[{el:r.container.children[0],wrap:0,index:-1},{el:r.container.children[1],wrap:0,index:-1},{el:r.container.children[2],wrap:0,index:-1}],A[0].el.style.display=A[2].el.style.display="none",Ye(),v={resize:r.updateSize,scroll:Ve,keydown:We,click:Ge};var o=R.isOldIOSPhone||R.isOldAndroid||R.isMobileOpera;for(R.animationName&&R.transform&&!o||(l.showAnimationDuration=l.hideAnimationDuration=0),n=0;n<xe.length;n++)r["init"+xe[n]]();if(t){var a=r.ui=new t(r,i);a.init()}Ie("firstUpdate"),p=p||l.index||0,(isNaN(p)||0>p||p>=Qt())&&(p=0),r.currItem=Jt(p),(R.isOldIOSPhone||R.isOldAndroid)&&(we=!1),e.setAttribute("aria-hidden","false"),l.modal&&(we?e.style.position="fixed":(e.style.position="absolute",e.style.top=i.getScrollY()+"px")),void 0===j&&(Ie("initialLayout"),j=z=i.getScrollY());var d="pswp--open ";for(l.mainClass&&(d+=l.mainClass+" "),l.showHideOpacity&&(d+="pswp--animate_opacity "),d+=D?"pswp--touch":"pswp--notouch",d+=R.animationName?" pswp--css_animation":"",d+=R.svg?" pswp--svg":"",i.addClass(e,d),r.updateSize(),m=-1,ye=null,n=0;s>n;n++)Me((n+m)*be.x,A[n].el.style);F||i.bind(r.scrollWrap,g,r),Le("initialZoomInEnd",(function(){r.setContent(A[0],p-1),r.setContent(A[2],p+1),A[0].el.style.display=A[2].el.style.display="block",l.focus&&e.focus(),Ze()})),r.setContent(A[1],p),r.updateCurrItem(),Ie("afterInit"),we||(C=setInterval((function(){Je||B||Q||b!==r.currItem.initialZoomLevel||r.updateSize()}),1e3)),i.addClass(e,"pswp--visible")}},close:function(){c&&(c=!1,u=!0,Ie("close"),Ue(),tn(r.currItem,null,!0,r.destroy))},destroy:function(){Ie("destroy"),Wt&&clearTimeout(Wt),e.setAttribute("aria-hidden","true"),e.className=N,C&&clearInterval(C),i.unbind(r.scrollWrap,g,r),i.unbind(window,"scroll",r),At(),tt(),Ee=null},panTo:function(e,t,n){n||(e>ne.min.x?e=ne.min.x:e<ne.max.x&&(e=ne.max.x),t>ne.min.y?t=ne.min.y:t<ne.max.y&&(t=ne.max.y)),me.x=e,me.y=t,De()},handleEvent:function(e){e=e||window.event,v[e.type]&&v[e.type](e)},goTo:function(e){e=ke(e);var t=e-p;ye=t,p=e,r.currItem=Jt(p),ge-=t,Ne(be.x*ge),tt(),ie=!1,r.updateCurrItem()},next:function(){r.goTo(p+1)},prev:function(){r.goTo(p-1)},updateCurrZoomItem:function(e){if(e&&Ie("beforeChange",0),A[1].el.children.length){var t=A[1].el.children[0];oe=i.hasClass(t,"pswp__zoom-wrap")?t.style:null}else oe=null;ne=r.currItem.bounds,y=b=r.currItem.initialZoomLevel,me.x=ne.center.x,me.y=ne.center.y,e&&Ie("afterChange")},invalidateCurrItems:function(){S=!0;for(var e=0;s>e;e++)A[e].item&&(A[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==ye){var t,n=Math.abs(ye);if(!(e&&2>n)){r.currItem=Jt(p),Se=!1,Ie("beforeChange",ye),n>=s&&(m+=ye+(ye>0?-s:s),n=s);for(var o=0;n>o;o++)ye>0?(t=A.shift(),A[s-1]=t,m++,Me((m+2)*be.x,t.el.style),r.setContent(t,p-n+o+1+1)):(t=A.pop(),A.unshift(t),m--,Me(m*be.x,t.el.style),r.setContent(t,p+n-o-1-1));if(oe&&1===Math.abs(ye)){var i=Jt(k);i.initialZoomLevel!==b&&(ln(i,he),pn(i),Pe(i))}ye=0,r.updateCurrZoomItem(),k=p,Ie("afterChange")}}},updateSize:function(t){if(!we&&l.modal){var n=i.getScrollY();if(j!==n&&(e.style.top=n+"px",j=n),!t&&Ce.x===window.innerWidth&&Ce.y===window.innerHeight)return;Ce.x=window.innerWidth,Ce.y=window.innerHeight,e.style.height=Ce.y+"px"}if(he.x=r.scrollWrap.clientWidth,he.y=r.scrollWrap.clientHeight,Ve(),be.x=he.x+Math.round(he.x*l.spacing),be.y=he.y,Ne(be.x*ge),Ie("beforeResize"),void 0!==m){for(var o,a,c,u=0;s>u;u++)o=A[u],Me((u+m)*be.x,o.el.style),c=p+u-1,l.loop&&Qt()>2&&(c=ke(c)),a=Jt(c),a&&(S||a.needsUpdate||!a.bounds)?(r.cleanSlide(a),r.setContent(o,c),1===u&&(r.currItem=a,r.updateCurrZoomItem(!0)),a.needsUpdate=!1):-1===o.index&&c>=0&&r.setContent(o,c),a&&a.container&&(ln(a,he),pn(a),Pe(a));S=!1}y=b=r.currItem.initialZoomLevel,ne=r.currItem.bounds,ne&&(me.x=ne.center.x,me.y=ne.center.y,De(!0)),Ie("resize")},zoomTo:function(e,t,n,o,r){t&&(y=b,yt.x=Math.abs(t.x)-me.x,yt.y=Math.abs(t.y)-me.y,Fe(fe,me));var a=Ke(e,!1),s={};Be("x",a,s,e),Be("y",a,s,e);var l=b,c={x:me.x,y:me.y};je(s);var u=function(t){1===t?(b=e,me.x=s.x,me.y=s.y):(b=(e-l)*t+l,me.x=(s.x-c.x)*t+c.x,me.y=(s.y-c.y)*t+c.y),r&&r(t),De(1===t)};n?nt("customZoomTo",0,1,n,o||i.easing.sine.inOut,u):u(1)}},it=30,rt=10,at={},st={},lt={},ct={},ut={},dt=[],pt={},ft=[],mt={},ht=0,gt=de(),vt=0,bt=de(),yt=de(),wt=de(),xt=function(e,t){return e.x===t.x&&e.y===t.y},Ct=function(e,t){return Math.abs(e.x-t.x)<a&&Math.abs(e.y-t.y)<a},St=function(e,t){return mt.x=Math.abs(e.x-t.x),mt.y=Math.abs(e.y-t.y),Math.sqrt(mt.x*mt.x+mt.y*mt.y)},At=function(){V&&(M(V),V=null)},kt=function(){B&&(V=P(kt),Zt())},Et=function(){return!("fit"===l.scaleMode&&b===r.currItem.initialZoomLevel)},Lt=function(e,t){return e&&e!==document?e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:t(e)?e:Lt(e.parentNode,t):!1},It={},_t=function(e,t){return It.prevent=!Lt(e.target,l.isClickableElement),Ie("preventDragEvent",e,t,It),It.prevent},Tt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Ot=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Dt=function(e,t,n){if(e-Z>50){var o=ft.length>2?ft.shift():{};o.x=t,o.y=n,ft.push(o),Z=e}},Pt=function(){var e=me.y-r.currItem.initialPosition.y;return 1-Math.abs(e/(he.y/2))},Mt={},Nt={},zt=[],Ft=function(e){for(;zt.length>0;)zt.pop();return O?(ue=0,dt.forEach((function(e){0===ue?zt[0]=e:1===ue&&(zt[1]=e),ue++}))):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(zt[0]=Tt(e.touches[0],Mt),e.touches.length>1&&(zt[1]=Tt(e.touches[1],Nt))):(Mt.x=e.pageX,Mt.y=e.pageY,Mt.id="",zt[0]=Mt),zt},jt=function(e,t){var n,o,i,a,s=0,c=me[e]+t[e],u=t[e]>0,d=bt.x+t.x,p=bt.x-pt.x;return n=c>ne.min[e]||c<ne.max[e]?l.panEndFriction:1,c=me[e]+t[e]*n,!l.allowPanToNext&&b!==r.currItem.initialZoomLevel||(oe?"h"!==re||"x"!==e||W||(u?(c>ne.min[e]&&(n=l.panEndFriction,s=ne.min[e]-c,o=ne.min[e]-fe[e]),(0>=o||0>p)&&Qt()>1?(a=d,0>p&&d>pt.x&&(a=pt.x)):ne.min.x!==ne.max.x&&(i=c)):(c<ne.max[e]&&(n=l.panEndFriction,s=c-ne.max[e],o=fe[e]-ne.max[e]),(0>=o||p>0)&&Qt()>1?(a=d,p>0&&d<pt.x&&(a=pt.x)):ne.min.x!==ne.max.x&&(i=c))):a=d,"x"!==e)?void(ie||X||b>r.currItem.fitRatio&&(me[e]+=t[e]*n)):(void 0!==a&&(Ne(a,!0),X=a===pt.x?!1:!0),ne.min.x!==ne.max.x&&(void 0!==i?me.x=i:X||(me.x+=t.x*n)),void 0!==a)},Rt=function(e){if(!("mousedown"===e.type&&e.button>0)){if(Xt)return void e.preventDefault();if(!$||"mousedown"!==e.type){if(_t(e,!0)&&e.preventDefault(),Ie("pointerDown"),O){var t=i.arraySearch(dt,e.pointerId,"id");0>t&&(t=dt.length),dt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Ft(e),o=n.length;J=null,tt(),B&&1!==o||(B=ae=!0,i.bind(window,h,r),K=ce=se=q=X=G=Y=W=!1,re=null,Ie("firstTouchStart",n),Fe(fe,me),pe.x=pe.y=0,Fe(ct,n[0]),Fe(ut,ct),pt.x=be.x*ge,ft=[{x:ct.x,y:ct.y}],Z=H=_e(),Ke(b,!0),At(),kt()),!Q&&o>1&&!ie&&!X&&(y=b,W=!1,Q=Y=!0,pe.y=pe.x=0,Fe(fe,me),Fe(at,n[0]),Fe(st,n[1]),Ot(at,st,wt),yt.x=Math.abs(wt.x)-me.x,yt.y=Math.abs(wt.y)-me.y,ee=te=St(at,st))}}},Ht=function(e){if(e.preventDefault(),O){var t=i.arraySearch(dt,e.pointerId,"id");if(t>-1){var n=dt[t];n.x=e.pageX,n.y=e.pageY}}if(B){var o=Ft(e);if(re||G||Q)J=o;else if(bt.x!==be.x*ge)re="h";else{var r=Math.abs(o[0].x-ct.x)-Math.abs(o[0].y-ct.y);Math.abs(r)>=rt&&(re=r>0?"h":"v",J=o)}}},Zt=function(){if(J){var e=J.length;if(0!==e)if(Fe(at,J[0]),lt.x=at.x-ct.x,lt.y=at.y-ct.y,Q&&e>1){if(ct.x=at.x,ct.y=at.y,!lt.x&&!lt.y&&xt(J[1],st))return;Fe(st,J[1]),W||(W=!0,Ie("zoomGestureStarted"));var t=St(at,st),n=Bt(t);n>r.currItem.initialZoomLevel+r.currItem.initialZoomLevel/15&&(ce=!0);var o=1,i=qe(),a=$e();if(i>n)if(l.pinchToClose&&!ce&&y<=r.currItem.initialZoomLevel){var s=i-n,c=1-s/(i/1.2);Te(c),Ie("onPinchClose",c),se=!0}else o=(i-n)/i,o>1&&(o=1),n=i-o*(i/3);else n>a&&(o=(n-a)/(6*i),o>1&&(o=1),n=a+o*i);0>o&&(o=0),ee=t,Ot(at,st,gt),pe.x+=gt.x-wt.x,pe.y+=gt.y-wt.y,Fe(wt,gt),me.x=ze("x",n),me.y=ze("y",n),K=n>b,b=n,De()}else{if(!re)return;if(ae&&(ae=!1,Math.abs(lt.x)>=rt&&(lt.x-=J[0].x-ut.x),Math.abs(lt.y)>=rt&&(lt.y-=J[0].y-ut.y)),ct.x=at.x,ct.y=at.y,0===lt.x&&0===lt.y)return;if("v"===re&&l.closeOnVerticalDrag&&!Et()){pe.y+=lt.y,me.y+=lt.y;var u=Pt();return q=!0,Ie("onVerticalDrag",u),Te(u),void De()}Dt(_e(),at.x,at.y),G=!0,ne=r.currItem.bounds;var d=jt("x",lt);d||(jt("y",lt),je(me),De())}}},Ut=function(e){if(R.isOldAndroid){if($&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout($),$=setTimeout((function(){$=0}),600))}Ie("pointerUp"),_t(e,!1)&&e.preventDefault();var t;if(O){var n=i.arraySearch(dt,e.pointerId,"id");if(n>-1)if(t=dt.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var o={4:"mouse",2:"touch",3:"pen"};t.type=o[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var a,s=Ft(e),c=s.length;if("mouseup"===e.type&&(c=0),2===c)return J=null,!0;1===c&&Fe(ut,s[0]),0!==c||re||ie||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Ie("touchRelease",e,t));var u=-1;if(0===c&&(B=!1,i.unbind(window,h,r),At(),Q?u=0:-1!==vt&&(u=_e()-vt)),vt=1===c?_e():-1,a=-1!==u&&150>u?"zoom":"swipe",Q&&2>c&&(Q=!1,1===c&&(a="zoomPointerUp"),Ie("zoomGestureEnded")),J=null,G||W||ie||q)if(tt(),U||(U=Kt()),U.calculateSwipeSpeed("x"),q){var d=Pt();if(d<l.verticalDragRange)r.close();else{var p=me.y,f=le;nt("verticalDrag",0,1,300,i.easing.cubic.out,(function(e){me.y=(r.currItem.initialPosition.y-p)*e+p,Te((1-f)*e+f),De()})),Ie("onVerticalDrag",1)}}else{if((X||ie)&&0===c){var m=$t(a,U);if(m)return;a="zoomPointerUp"}if(!ie)return"swipe"!==a?void Yt():void(!X&&b>r.currItem.fitRatio&&qt(U))}},Kt=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(o){ft.length>1?(e=_e()-Z+50,t=ft[ft.length-2][o]):(e=_e()-H,t=ut[o]),n.lastFlickOffset[o]=ct[o]-t,n.lastFlickDist[o]=Math.abs(n.lastFlickOffset[o]),n.lastFlickDist[o]>20?n.lastFlickSpeed[o]=n.lastFlickOffset[o]/e:n.lastFlickSpeed[o]=0,Math.abs(n.lastFlickSpeed[o])<.1&&(n.lastFlickSpeed[o]=0),n.slowDownRatio[o]=.95,n.slowDownRatioReverse[o]=1-n.slowDownRatio[o],n.speedDecelerationRatio[o]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(me[e]>ne.min[e]?n.backAnimDestination[e]=ne.min[e]:me[e]<ne.max[e]&&(n.backAnimDestination[e]=ne.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,nt("bounceZoomPan"+e,me[e],n.backAnimDestination[e],t||300,i.easing.sine.out,(function(t){me[e]=t,De()})))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,me[e]+=n.distanceOffset[e])},panAnimLoop:function(){return Xe.zoomPan&&(Xe.zoomPan.raf=P(n.panAnimLoop),n.now=_e(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),De(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05)?(me.x=Math.round(me.x),me.y=Math.round(me.y),De(),void Qe("zoomPan")):void 0}};return n},qt=function(e){return e.calculateSwipeSpeed("y"),ne=r.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(et("zoomPan"),e.lastNow=_e(),void e.panAnimLoop())},$t=function(e,t){var n;ie||(ht=p);var o;if("swipe"===e){var a=ct.x-ut.x,s=t.lastFlickDist.x<10;a>it&&(s||t.lastFlickOffset.x>20)?o=-1:-it>a&&(s||t.lastFlickOffset.x<-20)&&(o=1)}var c;o&&(p+=o,0>p?(p=l.loop?Qt()-1:0,c=!0):p>=Qt()&&(p=l.loop?0:Qt()-1,c=!0),(!c||l.loop)&&(ye+=o,ge-=o,n=!0));var u,d=be.x*ge,f=Math.abs(d-bt.x);return n||d>bt.x==t.lastFlickSpeed.x>0?(u=Math.abs(t.lastFlickSpeed.x)>0?f/Math.abs(t.lastFlickSpeed.x):333,u=Math.min(u,400),u=Math.max(u,250)):u=333,ht===p&&(n=!1),ie=!0,Ie("mainScrollAnimStart"),nt("mainScroll",bt.x,d,u,i.easing.cubic.out,Ne,(function(){tt(),ie=!1,ht=-1,(n||ht!==p)&&r.updateCurrItem(),Ie("mainScrollAnimComplete")})),n&&r.updateCurrItem(!0),n},Bt=function(e){return 1/te*e*y},Yt=function(){var e=b,t=qe(),n=$e();t>b?e=t:b>n&&(e=n);var o,a=1,s=le;return se&&!K&&!ce&&t>b?(r.close(),!0):(se&&(o=function(e){Te((a-s)*e+s)}),r.zoomTo(e,0,200,i.easing.cubic.out,o),!0)};Ae("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,o,i){E=e+t,L=e+n,I=e+o,_=i?e+i:""};O=R.pointerEvent,O&&R.touch&&(R.touch=!1),O?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):R.touch?(e("touch","start","move","end","cancel"),D=!0):e("mouse","down","move","up"),h=L+" "+I+" "+_,g=E,O&&!D&&(D=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),r.likelyTouchDevice=D,v[E]=Rt,v[L]=Ht,v[I]=Ut,_&&(v[_]=v[I]),R.touch&&(g+=" mousedown",h+=" mousemove mouseup",v.mousedown=v[E],v.mousemove=v[L],v.mouseup=v[I]),D||(l.allowPanToNext=!1)}}});var Wt,Gt,Vt,Xt,Jt,Qt,en,tn=function(t,n,o,a){Wt&&clearTimeout(Wt),Xt=!0,Vt=!0;var s;t.initialLayout?(s=t.initialLayout,t.initialLayout=null):s=l.getThumbBoundsFn&&l.getThumbBoundsFn(p);var c=o?l.hideAnimationDuration:l.showAnimationDuration,u=function(){Qe("initialZoom"),o?(r.template.removeAttribute("style"),r.bg.removeAttribute("style")):(Te(1),n&&(n.style.display="block"),i.addClass(e,"pswp--animated-in"),Ie("initialZoom"+(o?"OutEnd":"InEnd"))),a&&a(),Xt=!1};if(!c||!s||void 0===s.x)return Ie("initialZoom"+(o?"Out":"In")),b=t.initialZoomLevel,Fe(me,t.initialPosition),De(),e.style.opacity=o?0:1,Te(1),void(c?setTimeout((function(){u()}),c):u());var f=function(){var n=d,a=!r.currItem.src||r.currItem.loadError||l.showHideOpacity;t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),o||(b=s.w/t.w,me.x=s.x,me.y=s.y-z,r[a?"template":"bg"].style.opacity=.001,De()),et("initialZoom"),o&&!n&&i.removeClass(e,"pswp--animated-in"),a&&(o?i[(n?"remove":"add")+"Class"](e,"pswp--animate_opacity"):setTimeout((function(){i.addClass(e,"pswp--animate_opacity")}),30)),Wt=setTimeout((function(){if(Ie("initialZoom"+(o?"Out":"In")),o){var r=s.w/t.w,l={x:me.x,y:me.y},d=b,p=le,f=function(t){1===t?(b=r,me.x=s.x,me.y=s.y-j):(b=(r-d)*t+d,me.x=(s.x-l.x)*t+l.x,me.y=(s.y-j-l.y)*t+l.y),De(),a?e.style.opacity=1-t:Te(p-t*p)};n?nt("initialZoom",0,1,c,i.easing.cubic.out,f,u):(f(1),Wt=setTimeout(u,c+20))}else b=t.initialZoomLevel,Fe(me,t.initialPosition),De(),Te(1),a?e.style.opacity=1:Te(1),Wt=setTimeout(u,c+20)}),o?25:90)};f()},nn={},on=[],rn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Gt.length}},an=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},sn=function(e,t,n){var o=e.bounds;o.center.x=Math.round((nn.x-t)/2),o.center.y=Math.round((nn.y-n)/2)+e.vGap.top,o.max.x=t>nn.x?Math.round(nn.x-t):o.center.x,o.max.y=n>nn.y?Math.round(nn.y-n)+e.vGap.top:o.center.y,o.min.x=t>nn.x?0:o.center.x,o.min.y=n>nn.y?e.vGap.top:o.center.y},ln=function(e,t,n){if(e.src&&!e.loadError){var o=!n;if(o&&(e.vGap||(e.vGap={top:0,bottom:0}),Ie("parseVerticalMargin",e)),nn.x=t.x,nn.y=t.y-e.vGap.top-e.vGap.bottom,o){var i=nn.x/e.w,r=nn.y/e.h;e.fitRatio=r>i?i:r;var a=l.scaleMode;"orig"===a?n=1:"fit"===a&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=an())}if(!n)return;return sn(e,e.w*n,e.h*n),o&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=an(),e.initialPosition=e.bounds.center,e.bounds},cn=function(e,t,n,o,i,a){t.loadError||o&&(t.imageAppended=!0,pn(t,o,t===r.currItem&&Se),n.appendChild(o),a&&setTimeout((function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)}),500))},un=function(e){e.loading=!0,e.loaded=!1;var t=e.img=i.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},dn=function(e,t){return e.src&&e.loadError&&e.container?(t&&(e.container.innerHTML=""),e.container.innerHTML=l.errorMsg.replace("%url%",e.src),!0):void 0},pn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var o=n?e.w:Math.round(e.w*e.fitRatio),i=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=o+"px",e.placeholder.style.height=i+"px"),t.style.width=o+"px",t.style.height=i+"px"}},fn=function(){if(on.length){for(var e,t=0;t<on.length;t++)e=on[t],e.holder.index===e.index&&cn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);on=[]}};Ae("Controller",{publicMethods:{lazyLoadItem:function(e){e=ke(e);var t=Jt(e);t&&(!t.loaded&&!t.loading||S)&&(Ie("gettingData",e,t),t.src&&un(t))},initController:function(){i.extend(l,rn,!0),r.items=Gt=n,Jt=r.getItemAt,Qt=l.getNumItemsFn,en=l.loop,Qt()<3&&(l.loop=!1),Le("beforeChange",(function(e){var t,n=l.preload,o=null===e?!0:e>=0,i=Math.min(n[0],Qt()),a=Math.min(n[1],Qt());for(t=1;(o?a:i)>=t;t++)r.lazyLoadItem(p+t);for(t=1;(o?i:a)>=t;t++)r.lazyLoadItem(p-t)})),Le("initialLayout",(function(){r.currItem.initialLayout=l.getThumbBoundsFn&&l.getThumbBoundsFn(p)})),Le("mainScrollAnimComplete",fn),Le("initialZoomInEnd",fn),Le("destroy",(function(){for(var e,t=0;t<Gt.length;t++)e=Gt[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);on=null}))},getItemAt:function(e){return e>=0&&void 0!==Gt[e]?Gt[e]:!1},allowProgressiveImg:function(){return l.forceProgressiveLoading||!D||l.mouseUsed||screen.width>1200},setContent:function(e,t){l.loop&&(t=ke(t));var n=r.getItemAt(e.index);n&&(n.container=null);var o,a=r.getItemAt(t);if(!a)return void(e.el.innerHTML="");Ie("gettingData",t,a),e.index=t,e.item=a;var s=a.container=i.createEl("pswp__zoom-wrap");if(!a.src&&a.html&&(a.html.tagName?s.appendChild(a.html):s.innerHTML=a.html),dn(a),ln(a,he),!a.src||a.loadError||a.loaded)a.src&&!a.loadError&&(o=i.createEl("pswp__img","img"),o.style.opacity=1,o.src=a.src,pn(a,o),cn(t,a,s,o,!0));else{if(a.loadComplete=function(n){if(c){if(e&&e.index===t){if(dn(n,!0))return n.loadComplete=n.img=null,ln(n,he),Pe(n),void(e.index===p&&r.updateCurrZoomItem());n.imageAppended?!Xt&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):R.transform&&(ie||Xt)?on.push({
item:n,baseDiv:s,img:n.img,index:t,holder:e,clearPlaceholder:!0}):cn(t,n,s,n.img,ie||Xt,!0)}n.loadComplete=null,n.img=null,Ie("imageLoadComplete",t,n)}},i.features.transform){var u="pswp__img pswp__img--placeholder";u+=a.msrc?"":" pswp__img--placeholder--blank";var d=i.createEl(u,a.msrc?"img":"");a.msrc&&(d.src=a.msrc),pn(a,d),s.appendChild(d),a.placeholder=d}a.loading||un(a),r.allowProgressiveImg()&&(!Vt&&R.transform?on.push({item:a,baseDiv:s,img:a.img,index:t,holder:e}):cn(t,a,s,a.img,!0,!0))}Vt||t!==p?Pe(a):(oe=s.style,tn(a,o||a.img)),e.el.innerHTML="",e.el.appendChild(s)},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var mn,hn={},gn=function(e,t,n){var o=document.createEvent("CustomEvent"),i={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};o.initCustomEvent("pswpTap",!0,!0,i),e.target.dispatchEvent(o)};Ae("Tap",{publicMethods:{initTap:function(){Le("firstTouchStart",r.onTapStart),Le("touchRelease",r.onTapRelease),Le("destroy",(function(){hn={},mn=null}))},onTapStart:function(e){e.length>1&&(clearTimeout(mn),mn=null)},onTapRelease:function(e,t){if(t&&!G&&!Y&&!Je){var n=t;if(mn&&(clearTimeout(mn),mn=null,Ct(n,hn)))return void Ie("doubleTap",n);if("mouse"===t.type)return void gn(e,t,"mouse");var o=e.target.tagName.toUpperCase();if("BUTTON"===o||i.hasClass(e.target,"pswp__single-tap"))return void gn(e,t);Fe(hn,n),mn=setTimeout((function(){gn(e,t),mn=null}),300)}}}});var vn;Ae("DesktopZoom",{publicMethods:{initDesktopZoom:function(){F||(D?Le("mouseUsed",(function(){r.setupDesktopZoom()})):r.setupDesktopZoom(!0))},setupDesktopZoom:function(t){vn={};var n="wheel mousewheel DOMMouseScroll";Le("bindEvents",(function(){i.bind(e,n,r.handleMouseWheel)})),Le("unbindEvents",(function(){vn&&i.unbind(e,n,r.handleMouseWheel)})),r.mouseZoomedIn=!1;var o,a=function(){r.mouseZoomedIn&&(i.removeClass(e,"pswp--zoomed-in"),r.mouseZoomedIn=!1),1>b?i.addClass(e,"pswp--zoom-allowed"):i.removeClass(e,"pswp--zoom-allowed"),s()},s=function(){o&&(i.removeClass(e,"pswp--dragging"),o=!1)};Le("resize",a),Le("afterChange",a),Le("pointerDown",(function(){r.mouseZoomedIn&&(o=!0,i.addClass(e,"pswp--dragging"))})),Le("pointerUp",s),t||a()},handleMouseWheel:function(e){if(b<=r.currItem.fitRatio)return l.modal&&(!l.closeOnScroll||Je||B?e.preventDefault():T&&Math.abs(e.deltaY)>2&&(d=!0,r.close())),!0;if(e.stopPropagation(),vn.x=0,"deltaX"in e)1===e.deltaMode?(vn.x=18*e.deltaX,vn.y=18*e.deltaY):(vn.x=e.deltaX,vn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(vn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?vn.y=-.16*e.wheelDeltaY:vn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;vn.y=e.detail}Ke(b,!0);var t=me.x-vn.x,n=me.y-vn.y;(l.modal||t<=ne.min.x&&t>=ne.max.x&&n<=ne.min.y&&n>=ne.max.y)&&e.preventDefault(),r.panTo(t,n)},toggleDesktopZoom:function(t){t=t||{x:he.x/2+ve.x,y:he.y/2+ve.y};var n=l.getDoubleTapZoom(!0,r.currItem),o=b===n;r.mouseZoomedIn=!o,r.zoomTo(o?r.currItem.initialZoomLevel:n,t,333),i[(o?"remove":"add")+"Class"](e,"pswp--zoomed-in")}}});var bn,yn,wn,xn,Cn,Sn,An,kn,En,Ln,In,_n,Tn={history:!0,galleryUID:1},On=function(){return In.hash.substring(1)},Dn=function(){bn&&clearTimeout(bn),wn&&clearTimeout(wn)},Pn=function(){var e=On(),t={};if(e.length<5)return t;var n,o=e.split("&");for(n=0;n<o.length;n++)if(o[n]){var i=o[n].split("=");i.length<2||(t[i[0]]=i[1])}if(l.galleryPIDs){var r=t.pid;for(t.pid=0,n=0;n<Gt.length;n++)if(Gt[n].pid===r){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Mn=function(){if(wn&&clearTimeout(wn),Je||B)return void(wn=setTimeout(Mn,500));xn?clearTimeout(yn):xn=!0;var e=p+1,t=Jt(p);t.hasOwnProperty("pid")&&(e=t.pid);var n=An+"&gid="+l.galleryUID+"&pid="+e;kn||-1===In.hash.indexOf(n)&&(Ln=!0);var o=In.href.split("#")[0]+"#"+n;_n?"#"+n!==window.location.hash&&history[kn?"replaceState":"pushState"]("",document.title,o):kn?In.replace(o):In.hash=n,kn=!0,yn=setTimeout((function(){xn=!1}),60)};Ae("History",{publicMethods:{initHistory:function(){if(i.extend(l,Tn,!0),l.history){In=window.location,Ln=!1,En=!1,kn=!1,An=On(),_n="pushState"in history,An.indexOf("gid=")>-1&&(An=An.split("&gid=")[0],An=An.split("?gid=")[0]),Le("afterChange",r.updateURL),Le("unbindEvents",(function(){i.unbind(window,"hashchange",r.onHashChange)}));var e=function(){Sn=!0,En||(Ln?history.back():An?In.hash=An:_n?history.pushState("",document.title,In.pathname+In.search):In.hash=""),Dn()};Le("unbindEvents",(function(){d&&e()})),Le("destroy",(function(){Sn||e()})),Le("firstUpdate",(function(){p=Pn().pid}));var t=An.indexOf("pid=");t>-1&&(An=An.substring(0,t),"&"===An.slice(-1)&&(An=An.slice(0,-1))),setTimeout((function(){c&&i.bind(window,"hashchange",r.onHashChange)}),40)}},onHashChange:function(){return On()===An?(En=!0,void r.close()):void(xn||(Cn=!0,r.goTo(Pn().pid),Cn=!1))},updateURL:function(){Dn(),Cn||(kn?bn=setTimeout(Mn,800):Mn())}}}),i.extend(r,ot)};return e})),(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.rightHeight=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n,o,i={},r="querySelector"in document&&"addEventListener"in e,a={selector:"[data-right-height]",selectorContent:"[data-right-height-content]",callback:function(){}},s=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,r=e.length;r>i;i++)t.call(n,e[i],i,e)},l=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=l(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return e},c=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},u=function(e){var t=e.item(0),n=e.item(1);return t&&n?c(t)-c(n)===0?!1:!0:!1},d=function(e){e.style.height="",e.style.minHeight=""},p=function(e,t){return e.offsetHeight>t&&(t=e.offsetHeight),t},f=function(e,t){e.style.height=t+"px"};i.adjustContainerHeight=function(e,t){var n=l(n||a,t||{}),o=e.querySelectorAll(n.selectorContent),i=u(o),r="0";s(o,(function(e){d(e)})),i||(s(o,(function(e){r=p(e,r)})),s(o,(function(e){f(e,r)}))),n.callback(e)},i.runRightHeight=function(e){s(e,(function(e){i.adjustContainerHeight(e,t)}))};var m=function(){o||(o=setTimeout((function(){o=null,i.runRightHeight(n,t)}),66))};return i.destroy=function(){t&&(s(n,(function(e){var n=e.querySelectorAll(t.selectorContent);s(n,(function(e){d(e)}))})),e.removeEventListener("resize",m,!1),t=null,n=null,o=null)},i.init=function(o){r&&(i.destroy(),t=l(a,o||{}),n=document.querySelectorAll(t.selector),i.runRightHeight(n,o),e.addEventListener("load",i.runRightHeight,!1),e.addEventListener("resize",m,!1))},i})),(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.fetch=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n={},o="querySelector"in document&&"classList"in document.createElement("_"),i={key:null,shelter:null,count:25,allPetsTitle:"Our Pets",allPetsText:"",adoptionFormLink:null,adoptionFormText:"Fill out an adoption form",adoptionFormClass:"",showFilters:!0,filterAnimals:!0,filterSizes:!0,filterAges:!0,filterGenders:!0,filterBreeds:!0,filtersToggleClass:"",hasSidebar:!1,selectorContent:".fetch-container",selectorAppMain:'[data-petfinder="main"]',selectorAppAside:'[data-petfinder="aside"]',selectorRightHeight:"[data-right-height]",initClass:"js-fetch",allClass:"js-fetch-all-pets",oneClass:"js-fetch-one-pet",hasSidebarClass:"js-fetch-has-sidebar",titlePrefix:"{{name}} | ",loading:"Fetching the latest pet info...",noPet:'<div>Sorry, but this pet is no longer available. <a href="{{url.all}}">View available pets.</a></div>',noImage:"",animalUnknown:"Not Known",breedDelimiter:", ",sizeUnknown:"Not Known",sizeS:"Small",sizeM:"Medium",sizeL:"Large",sizeXL:"Extra Large",ageUnknown:"Not Known",ageBaby:"Baby",ageYoung:"Young",ageAdult:"Adult",ageSenior:"Senior",genderUnknown:"Not Known",genderM:"Male",genderF:"Female",optionsSpecialNeeds:"Special Needs",optionsNoDogs:"No Dogs",optionsNoCats:"No Cats",optionsNoKids:"No Kids",optionsNoClaws:"No Claws",optionsHasShot:"Has hots",optionsHousebroken:"Housebroken",optionsAltered:"Spayed/Neutered",optionsNoDogsCatsKids:"No Dogs/Cats/Kids",optionsNoDogsCats:"No Dogs/Cats",optionsNoDogsKids:"No Dogs/Kids",optionsNoCatsKids:"No Cats/Kids",callback:function(){l(),c(),u(),d(),f("[data-photoswipe]"),p({selector:t.selectorRightHeight}),petfinderSort.init({initClass:"js-fetch-sort"}),houdini.init()}},r=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=r(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var a=arguments[n];i(a)}return e},a=function(){var e={allPets:'<article class="fetch-grid-dynamic fetch-text-center {{classes}}" data-right-height-content><header><a href="{{url.pet}}"><figure><img class="fetch-img-photo fetch-img-limit-height" src="{{photo.1.medium}}"></figure><h2 class="fetch-all-pets-heading fetch-no-padding-top fetch-no-margin-top fetch-no-padding-bottom fetch-no-margin-bottom">{{name}}</h2></a></header><aside class="fetch-text-small"><p>{{size}}, {{age}}, {{gender}}<br><span class="fetch-text-muted">{{breeds}}</span><span class="fetch-text-muted" data-fetch-options-multi="{{options.multi}}"></span><span class="fetch-text-muted" data-fetch-options-special-needs="{{options.specialNeeds}}"></span></p></aside></article>',onePet:'<article><header><h1 class="fetch-no-margin-bottom fetch-no-padding-bottom">{{name}}</h1><aside><p><a href="{{url.all}}">&larr; Back to All Pets</a></p></aside></header><div data-fetch-images="{{name}}" data-fetch-img-1="{{photo.1.large}}" data-fetch-img-2="{{photo.2.large}}" data-fetch-img-3="{{photo.3.large}}"></div><p data-fetch-options-multi="{{options.multi}}" data-fetch-options-special-needs="{{options.specialNeeds}}"><strong>Size:</strong> {{size}}<br><strong>Age:</strong> {{age}}<br><strong>Gender:</strong> {{gender}}<br><strong>Breeds:</strong> {{breeds}}</p>'+(t.adoptionFormLink?'<p><a class="'+t.adoptionFormClass+'" href="'+t.adoptionFormLink+'">'+t.adoptionFormText+"</a></p>":"")+"<div>{{description}}</div></article>",asideAllPets:'<div class="fetch-filters" id="fetch-filters">'+(t.showFilters&&t.filterAnimals?"<div><h2>Animals</h2>{{checkbox.animals}}</div>":"")+(t.showFilters&&t.filterSizes?"<div><h2>Size</h2>{{checkbox.sizes}}</div>":"")+(t.showFilters&&t.filterAges?"<div><h2>Age</h2>{{checkbox.ages}}</div>":"")+(t.showFilters&&t.filterGenders?"<div><h2>Gender</h2>{{checkbox.genders}}</div>":"")+(t.showFilters&&t.filterBreeds?"<div><h2>Breeds</h2>{{checkbox.breeds.toggle}}</div>":"")+"</div>"+(t.showFilters?'<p class="fetch-filters-toggle"><button class="'+t.filtersToggleClass+'" data-collapse="#fetch-filters">Filter Results</button></p>':"")};return e},s=function(){var e=document.querySelector(t.selectorContent);e&&(e.innerHTML='<div class="fetch-margin-bottom" data-petfinder="aside"></div><div class="fetch-margin-bottom" data-petfinder="main" data-right-height>'+e.innerHTML+'</div><p id="fetch-powered-by"><em>Powered by <a rel="nofollow" href="https://www.petfinder.com/">Petfinder</a> using the <a href="http://fetch.gomakethings.com">Fetch plugin</a>.</em></p>')},l=function(){var e=document.querySelector(t.selectorContent),n=e.querySelector(t.selectorAppMain),o=e.querySelector(t.selectorAppAside),i=e.querySelector("#fetch-powered-by");if(n&&o){if(document.documentElement.classList.contains(t.allClass)){if(n.innerHTML='<div class="fetch-row">'+n.innerHTML+"</div>",!t.showFilters||t.hasSidebar)return;return e.classList.add("fetch-row"),n.classList.add("fetch-grid-three-fourths"),o.classList.add("fetch-grid-fourth"),void i.classList.add("fetch-grid-full")}t.hasSidebar||(e.classList.add("fetch-container-small"),e.classList.add("fetch-float-center"))}},c=function(){if(document.documentElement.classList.contains(t.allClass)){var e=document.querySelector(t.selectorAppMain);e&&(e.innerHTML="<header><h1>"+t.allPetsTitle+'</h1><div class="fetch-margin-bottom">'+t.allPetsText+"</div></header>"+e.innerHTML)}},u=function(){var e,t,n,o,i=document.querySelectorAll("[data-fetch-options-multi]"),r=document.querySelectorAll("[data-fetch-options-special-needs]");for(e=0,t=i.length;t>e;e++)n=i[e].getAttribute("data-fetch-options-multi"),n&&(i[e].innerHTML+='<br><em class="fetch-text-muted1">'+n+"</em>");for(e=0,t=r.length;t>e;e++)o=r[e].getAttribute("data-fetch-options-special-needs"),o&&(r[e].innerHTML+='<br><em class="fetch-text-muted1">'+o+"</em>")},d=function(){if(document.documentElement.classList.contains(t.oneClass)){var e=document.querySelector("[data-fetch-images]");if(e){var n=e.getAttribute("data-fetch-images"),o=e.getAttribute("data-fetch-img-1"),i=e.getAttribute("data-fetch-img-2"),r=e.getAttribute("data-fetch-img-3"),a='<div data-photoswipe data-pswp-uid="0" class="fetch-row fetch-row-start-xsmall fetch-text-center fetch-margin-bottom-small">'+(o?'<a class="fetch-grid-third" data-size href="'+o+'" ><img class="fetch-img-photo fetch-img-limit-height" alt="A photo of '+n+'" src="'+o+'"></a>':"")+(i?'<a class="fetch-grid-third" data-size href="'+i+'" ><img class="fetch-img-photo fetch-img-limit-height" alt="A photo of '+n+'" src="'+i+'"></a>':"")+(r?'<a class="fetch-grid-third" data-size href="'+r+'" ><img class="fetch-img-photo fetch-img-limit-height" alt="A photo of '+n+'" src="'+r+'"></a>':"")+'</div><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';e.innerHTML=a,imagesLoaded(e,(function(){for(var t=e.querySelectorAll("[data-size]"),n=0,o=t.length;o>n;n++){var i=t[n].querySelector("img");i&&t[n].setAttribute("data-size",i.naturalWidth+"x"+i.naturalHeight)}}))}}},p=function(){var e=document.querySelector(t.selectorRightHeight);e&&imagesLoaded(e,(function(){rightHeight.init({selector:t.selectorRightHeight})}))},f=function(e){var t=function(e){for(var e,t,n,o,i=e.childNodes,r=i.length,a=[],s=0;r>s;s++)if(e=i[s],1===e.nodeType){t=e.children,n=e.getAttribute("data-size").split("x"),o={src:e.getAttribute("href"),w:parseInt(n[0],10),h:parseInt(n[1],10),author:e.getAttribute("data-author")},o.el=e,t.length>0&&(o.msrc=t[0].getAttribute("src"),t.length>1&&(o.title=t[1].innerHTML));var l=e.getAttribute("data-med");l&&(n=e.getAttribute("data-med-size").split("x"),o.m={src:l,w:parseInt(n[0],10),h:parseInt(n[1],10)}),o.o={src:o.src,w:o.w,h:o.h},a.push(o)}return a},n=function a(e,t){return e&&(t(e)?e:a(e.parentNode,t))},o=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,o=n(t,(function(e){return"A"===e.tagName}));if(o){for(var r,a=o.parentNode,s=o.parentNode.childNodes,l=s.length,c=0,u=0;l>u;u++)if(1===s[u].nodeType){if(s[u]===o){r=c;break}c++}return r>=0&&i(r,a),!1}},i=function(e,n,o,i){var r,a,s,l=document.querySelectorAll(".pswp")[0];if(s=t(n),a={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=s[e].el.children[0],n=window.pageYOffset||document.documentElement.scrollTop,o=t.getBoundingClientRect();return{x:o.left,y:o.top+n,w:o.width}},addCaptionHTMLFn:function(e,t,n){return e.title?(t.children[0].innerHTML=e.title+"<br/><small>Photo: "+e.author+"</small>",!0):(t.children[0].innerText="",!1)}},i)if(a.galleryPIDs){for(var c=0;c<s.length;c++)if(s[c].pid==e){a.index=c;break}}else a.index=parseInt(e,10)-1;else a.index=parseInt(e,10);if(!isNaN(a.index)){for(var u=document.getElementsByName("gallery-style"),d=0,p=u.length;p>d;d++)if(u[d].checked){"radio-all-controls"==u[d].id||"radio-minimal-black"==u[d].id&&(a.mainClass="pswp--minimal--dark",a.barsSize={top:0,bottom:0},a.captionEl=!1,a.fullscreenEl=!1,a.shareEl=!1,a.bgOpacity=.85,a.tapToClose=!0,a.tapToToggleControls=!1);break}o&&(a.showAnimationDuration=0),r=new PhotoSwipe(l,PhotoSwipeUI_Default,s,a);var f,m,h=!1,g=!0;r.listen("beforeResize",(function(){var e=window.devicePixelRatio?window.devicePixelRatio:1;e=Math.min(e,2.5),f=r.viewportSize.x*e,f>=1200||!r.likelyTouchDevice&&f>800||screen.width>1200?h||(h=!0,m=!0):h&&(h=!1,m=!0),m&&!g&&r.invalidateCurrItems(),g&&(g=!1),m=!1})),r.listen("gettingData",(function(e,t){!h&&"m"in t?(t.src=t.m.src,t.w=t.m.w,t.h=t.m.h):(t.src=t.o.src,t.w=t.o.w,t.h=t.o.h)})),r.init()}},r=document.querySelectorAll(e);r.length>0&&imagesLoaded(r[0],(function(){for(var e=0,t=r.length;t>e;e++)r[e].setAttribute("data-pswp-uid",e+1),r[e].onclick=o}))};return n.init=function(e){if(o){if(t=r(i,e||{}),!t.key||!t.shelter)return void console.log("You must provide a Petfinder API key and shelter ID to fetch pets from Petfinder");t.filterAnimals||t.filterSizes||t.filterAges||t.filterGenders||t.filterBreeds||(t.showFilters=!1);var n=a();t.templates=r(t.templates,{allPets:n.allPets,onePet:n.onePet,asideAllPets:n.asideAllPets}),s(),t.hasSidebar&&document.documentElement.classList.add(t.hasSidebarClass),petfinderAPI.init(t)}},n}));
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.fluidvids = factory();
  }
})(this, (function () {

  'use strict';

  var fluidvids = {
    selector: ['iframe'],
    players: ['www.youtube.com', 'player.vimeo.com']
  };

  var css = [
    '.fluidvids {',
      'width: 100%; max-width: 100%; position: relative;',
    '}',
    '.fluidvids-item {',
      'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
    '}'
  ].join('');

  var head = document.head || document.getElementsByTagName('head')[0];

  var matches = function (src) {
    return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);
  };

  var getRatio = function (height, width) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  };

  var fluid = function (elem) {
    if (!matches(elem.src) || !!elem.getAttribute('data-fluidvids')) return;
    var wrap = document.createElement('div');
    elem.parentNode.insertBefore(wrap, elem);
    elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
    elem.setAttribute('data-fluidvids', 'loaded');
    wrap.className += 'fluidvids';
    wrap.style.paddingTop = getRatio(elem.height, elem.width);
    wrap.appendChild(elem);
  };

  var addStyles = function () {
    var div = document.createElement('div');
    div.innerHTML = '<p>x</p><style>' + css + '</style>';
    head.appendChild(div.childNodes[1]);
  };

  fluidvids.render = function () {
    var nodes = document.querySelectorAll(fluidvids.selector.join());
    var i = nodes.length;
    while (i--) {
      fluid(nodes[i]);
    }
  };

  fluidvids.init = function (obj) {
    for (var key in obj) {
      fluidvids[key] = obj[key];
    }
    fluidvids.render();
    addStyles();
  };

  return fluidvids;

}));
/**
 * Add links to headings
 * @param {String} selector The headings to get in the DOM (uses querySelectorAll)
 * @param {String} content  The content to add to the anchor link [default: #]
 * @param {String} styles   The class(es) to add to the link [default: anchor-link]
 */
 var addHeadingLinks = function (selector, content, styles) {

 	'use strict';

 	// Make sure a selector was provided
 	if (!selector) return;

 	// Variables
 	var headings = document.querySelectorAll(selector);
 	content = content || '#';
 	styles = styles || 'anchor-link';

 	// Loop through each heading and add an anchor link
 	for (var i = 0; i < headings.length; i++) {
 		if (!headings[i].id) continue;
 		headings[i].innerHTML += ' <a class="' + styles + '" href="#' + headings[i].id + '">' + content + '</a>';
 	}

 };
/*!
 * smooth-scroll v12.1.5: Animate scrolling to anchor links
 * (c) 2017 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

/**
 * closest() polyfill
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (window.Element && !Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i,
			el = this;
		do {
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== el) {}
		} while ((i < 0) && (el = el.parentElement));
		return el;
	};
}

/**
 * requestAnimationFrame() polyfill
 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license MIT
 */
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
		                              window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout((function() { callback(currTime + timeToCall); }),
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.SmoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Feature Test
	//

	var supports =
		'querySelector' in document &&
		'addEventListener' in window &&
		'requestAnimationFrame' in window &&
		'closest' in window.Element.prototype;


	//
	// Default settings
	//

	var defaults = {
		// Selectors
		ignore: '[data-scroll-ignore]',
		header: null,

		// Speed & Easing
		speed: 500,
		offset: 0,
		easing: 'easeInOutCubic',
		customEasing: null,

		// Callback API
		before: function () {},
		after: function () {}
	};


	//
	// Utility Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					extended[prop] = obj[prop];
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function (elem) {
		return parseInt(window.getComputedStyle(elem).height, 10);
	};

	/**
	 * Escape special characters for use with querySelector
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	var escapeCharacters = function (id) {

		// Remove leading hash
		if (id.charAt(0) === '#') {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function (settings, time) {
		var pattern;

		// Default Easing Patterns
		if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

		// Custom Easing Patterns
		if (!!settings.customEasing) pattern = settings.customEasing(time);

		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Determine the document's height
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Calculate how far to scroll
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function (anchor, headerHeight, offset) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = Math.max(location - headerHeight - offset, 0);
		return location;
	};

	/**
	 * Get the height of the fixed header
	 * @param  {Node}   header The header
	 * @return {Number}        The height of the header
	 */
	var getHeaderHeight = function (header) {
		return !header ? 0 : (getHeight(header) + header.offsetTop);
	};

	/**
	 * Bring the anchored element into focus
	 * @param {Node}     anchor      The anchor element
	 * @param {Number}   endLocation The end location to scroll to
	 * @param {Boolean}  isNum       If true, scroll is to a position rather than an element
	 */
	var adjustFocus = function (anchor, endLocation, isNum) {

		// Don't run if scrolling to a number on the page
		if (isNum) return;

		// Otherwise, bring anchor element into focus
		anchor.focus();
		if (document.activeElement.id !== anchor.id) {
			anchor.setAttribute('tabindex', '-1');
			anchor.focus();
			anchor.style.outline = 'none';
		}
		window.scrollTo(0 , endLocation);

	};

	/**
	 * Check to see if user prefers reduced motion
	 * @param  {Object} settings Script settings
	 */
	var reduceMotion = function (settings) {
		if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
			return true;
		}
		return false;
	};


	//
	// SmoothScroll Constructor
	//

	var SmoothScroll = function (selector, options) {

		//
		// Variables
		//

		var smoothScroll = {}; // Object for public APIs
		var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;


		//
		// Methods
		//

		/**
		 * Cancel a scroll-in-progress
		 */
		smoothScroll.cancelScroll = function () {
			// clearInterval(animationInterval);
			cancelAnimationFrame(animationInterval);
		};

		/**
		 * Start/stop the scrolling animation
		 * @param {Node|Number} anchor  The element or position to scroll to
		 * @param {Element}     toggle  The element that toggled the scroll event
		 * @param {Object}      options
		 */
		smoothScroll.animateScroll = function (anchor, toggle, options) {

			// Local settings
			var animateSettings = extend(settings || defaults, options || {}); // Merge user options with defaults

			// Selectors and variables
			var isNum = Object.prototype.toString.call(anchor) === '[object Number]' ? true : false;
			var anchorElem = isNum || !anchor.tagName ? null : anchor;
			if (!isNum && !anchorElem) return;
			var startLocation = window.pageYOffset; // Current location on the page
			if (animateSettings.header && !fixedHeader) {
				// Get the fixed header if not already set
				fixedHeader = document.querySelector( animateSettings.header );
			}
			if (!headerHeight) {
				// Get the height of a fixed header if one exists and not already set
				headerHeight = getHeaderHeight(fixedHeader);
			}
			var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt((typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset), 10)); // Location to scroll to
			var distance = endLocation - startLocation; // distance to travel
			var documentHeight = getDocumentHeight();
			var timeLapsed = 0;
			var start, percentage, position;

			/**
			 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
			 * @param {Number} position Current position on the page
			 * @param {Number} endLocation Scroll to location
			 * @param {Number} animationInterval How much to scroll on this loop
			 */
			var stopAnimateScroll = function (position, endLocation) {

				// Get the current location
				var currentLocation = window.pageYOffset;

				// Check if the end location has been reached yet (or we've hit the end of the document)
				if ( position == endLocation || currentLocation == endLocation || ((startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight )) {

					// Clear the animation timer
					smoothScroll.cancelScroll();

					// Bring the anchored element into focus
					adjustFocus(anchor, endLocation, isNum);

					// Run callback after animation complete
					animateSettings.after(anchor, toggle);

					// Reset start
					start = null;

					return true;

				}
			};

			/**
			 * Loop scrolling animation
			 */
			var loopAnimateScroll = function (timestamp) {
				if (!start) { start = timestamp; }
				timeLapsed += timestamp - start;
				percentage = (timeLapsed / parseInt(animateSettings.speed, 10));
				percentage = (percentage > 1) ? 1 : percentage;
				position = startLocation + (distance * easingPattern(animateSettings, percentage));
				window.scrollTo(0, Math.floor(position));
				if (!stopAnimateScroll(position, endLocation)) {
					window.requestAnimationFrame(loopAnimateScroll);
					start = timestamp;
				}
			};

			/**
			 * Reset position to fix weird iOS bug
			 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
			 */
			if (window.pageYOffset === 0) {
				window.scrollTo( 0, 0 );
			}

			// Run callback before animation starts
			animateSettings.before(anchor, toggle);

			// Start scrolling animation
			smoothScroll.cancelScroll();
			window.requestAnimationFrame(loopAnimateScroll);


		};

		/**
		 * Handle has change event
		 */
		var hashChangeHandler = function (event) {

			// Only run if there's an anchor element to scroll to
			if (!anchor) return;

			// Reset the anchor element's ID
			anchor.id = anchor.getAttribute('data-scroll-id');

			// Scroll to the anchored content
			smoothScroll.animateScroll(anchor, toggle);

			// Reset anchor and toggle
			anchor = null;
			toggle = null;

		};

		/**
		 * If smooth scroll element clicked, animate scroll
		 */
		var clickHandler = function (event) {

			// Don't run if the user prefers reduced motion
			if (reduceMotion(settings)) return;

			// Don't run if right-click or command/control + click
			if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

			// Check if a smooth scroll link was clicked
			toggle = event.target.closest(selector);
			if (!toggle || toggle.tagName.toLowerCase() !== 'a' || event.target.closest(settings.ignore)) return;

			// Only run if link is an anchor and points to the current page
			if (toggle.hostname !== window.location.hostname || toggle.pathname !== window.location.pathname || !/#/.test(toggle.href)) return;

			// Get the sanitized hash
			var hash;
			try {
				hash = escapeCharacters(decodeURIComponent(toggle.hash));
			} catch(e) {
				hash = escapeCharacters(toggle.hash);
			}

			// If the hash is empty, scroll to the top of the page
			if (hash === '#') {

				// Prevent default link behavior
				event.preventDefault();

				// Set the anchored element
				anchor = document.body;

				// Save or create the ID as a data attribute and remove it (prevents scroll jump)
				var id = anchor.id ? anchor.id : 'smooth-scroll-top';
				anchor.setAttribute('data-scroll-id', id);
				anchor.id = '';

				// If no hash change event will happen, fire manually
				// Otherwise, update the hash
				if (window.location.hash.substring(1) === id) {
					hashChangeHandler();
				} else {
					window.location.hash = id;
				}

				return;

			}

			// Get the anchored element
			anchor = document.querySelector(hash);

			// If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
			if (!anchor) return;
			anchor.setAttribute('data-scroll-id', anchor.id);
			anchor.id = '';

			// If no hash change event will happen, fire manually
			if (toggle.hash === window.location.hash) {
				event.preventDefault();
				hashChangeHandler();
			}

		};

		/**
		 * On window scroll and resize, only run events at a rate of 15fps for better performance
		 */
		var resizeThrottler = function (event) {
			if (!eventTimeout) {
				eventTimeout = setTimeout((function() {
					eventTimeout = null; // Reset timeout
					headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
				}), 66);
			}
		};

		/**
		 * Destroy the current initialization.
		 */
		smoothScroll.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('resize', resizeThrottler, false);

			// Cancel any scrolls-in-progress
			smoothScroll.cancelScroll();

			// Reset variables
			settings = null;
			anchor = null;
			toggle = null;
			fixedHeader = null;
			headerHeight = null;
			eventTimeout = null;
			animationInterval = null;
		};

		/**
		 * Initialize Smooth Scroll
		 * @param {Object} options User settings
		 */
		smoothScroll.init = function (options) {

			// feature test
			if (!supports) return;

			// Destroy any existing initializations
			smoothScroll.destroy();

			// Selectors and variables
			settings = extend(defaults, options || {}); // Merge user options with defaults
			fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header
			headerHeight = getHeaderHeight(fixedHeader);

			// When a toggle is clicked, run the click handler
			document.addEventListener('click', clickHandler, false);

			// Listen for hash changes
			window.addEventListener('hashchange', hashChangeHandler, false);

			// If window is resized and there's a fixed header, recalculate its size
			if (fixedHeader) {
				window.addEventListener('resize', resizeThrottler, false);
			}

		};


		//
		// Initialize plugin
		//

		smoothScroll.init(options);


		//
		// Public APIs
		//

		return smoothScroll;

	};

	return SmoothScroll;

}));
/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com']
});

// Smooth scrolling anchor links
if (document.querySelector('a[href*="#"]')) {
	var scroll = new SmoothScroll('a[href*="#"]');
}

// Run Fetch
if (document.querySelector('.fetch-container')) {
	if (typeof fetchOptions === 'undefined') {
		fetchOptions = {};
	}
	fetchOptions.key = 'f72651cb74b19ac20c6f25adbab93457';
	fetchOptions.shelter = 'RI77';
	fetch.init(fetchOptions);
}