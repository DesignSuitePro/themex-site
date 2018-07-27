---
title: "Guide"
layout: single
sitemap: false
permalink: /guide
sidebar:
  nav: "guide-sidebar"
---

## General

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bml_iHxcKBM?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Updating

Shopify doesn't offer any way to update themes yet, and while ThemeX is meant to be updateable there are a few points to consider:

1. We need a private App **[API key](#api-key)** setup with [**theme** and **script** privileges](#api-key) in order to be able to update the theme for you. 
2. Any Changes made directly to the theme files will be overwritten once updated.

For those two reasons we do not update any themes without prior request.
Using the [hooks](#hooks) feature is the best way to preserve changes after updates.
{: .notice--info}

[Update Now](/update){: .btn .btn--large .btn--success}

### API Key
To create or retrieve your API key you need to go to:
Apps -> Manage private apps (at the bottom) -> Create a new private app

Name it ThemeX and make sure to have these 2 permissions set to read & write 

![API Permissions](assets/images/api_permissions.png)

### How to look for theme version

On the theme customizer click Info at the top on the right sidebar.

![ThemeX Version](assets/images/themex-version.png)




## Hooks

Hooks are files included in certain parts of the theme. Their purpose is to insert or replace current parts of the theme.

**Examples:**

> To replace the cart button you would add a file called:
> `snippets/hook-product-replace-cart-button.liquid`
>
> If you wanted to include something after the cart you would create:
> `snippets/hook-product-after-cart-button.liquid`

For a full list of hooks available [click here](/hooks)

## Variables (Metafields)

<iframe width="640" height="360" src="https://www.youtube.com/embed/QuI8cSnf7eA?showinfo=0" frameborder="0" allowfullscreen></iframe>



While all theme settings can be configured on the theme Customizer to be able to use per product or per collection specific settings, metafields settings are necessary.

### Setting Priority

1. Product Custom Fields
2. Collection Custom Fields
3. Theme Customizer Settings

Meaning per product settings will always override collection and theme settings.


### How to set metafields

First you need to install **[Shopify FD](https://chrome.google.com/webstore/detail/shopifyfd-dashboard-tool/lffljkleilfpjlmcdnoaghhcbnemelge?hl=en)**

Shopify doesn't have any section to update metafields, for that reason installing a chrome extension is necessary.
{: .notice--info}

Once installed while still on Shopify click the shopify FD icon to load the tool. You will need to do this every time you refresh shopify.

Once loaded just fill the fields and click save.

Namespace is always "**themex**".

![Shopify FD MetaField Creation](assets/images/shopifyfd-metafields.png)

For a list of Variables available [click here](/variables).

## Setup

All settings are configurable globally via the theme customizer. For per product or per collection settings look at [variables](#variables-metadata).


### Skip Cart

Note: Make sure the Cart is set to Page and not modal or any other option.
{: .notice--info}


### Facebook Pixel Conversion
No longer needed make sure to remove any previous code from the checkout section if you are using ThemeX.
{: .notice--info}

### Hide Paypal Button on Checkout Page and Expand drawer on mobile
```html
<script type="text/javascript">
(function(fn){
(document.readyState == 'loading') ? document.addEventListener('DOMContentLoad', fn) : fn();
})(function(){
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
eventFire(document.getElementsByClassName("order-summary-toggle")[0], "click");
var toHide = document.querySelectorAll('.alt-payment-list-container, .alternative-payment-separator');
for(var i = 0; i < toHide.length; i++){ toHide[i].style.display = 'none'; }
});
</script>
```
