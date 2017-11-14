---
title: "Guide"
layout: single
sitemap: false
permalink: /guide
sidebar:
  nav: "home-sidebar"
---
## Updating

Shopify doesn't offer any way to update themes yet, and while ThemeX is meant to be updateable there are a few points to consider:

1. We need a private App **API key** setup with **theme** privileges in order to be able to update the theme for you. (You only need to provide this once)
2. Any Changes made directly to the theme files will be overwritten once updated.

For those two reasons we do not update any themes without prior request.
Using the [hooks](#hooks) feature is the best way to preserve changes after updates.
{: .notice--info}


### How to look for theme version

On the theme customizer click Info at the top on the right sidebar.

![ThemeX Version](images/themex-version.png)




## Hooks

Hooks are files included in certain parts of the theme. Their purpose is to insert or replace current parts of the theme.

**Examples:**

> To replace the cart button you would add a file called:
> `snippets/hook-product-replace-cart-button.liquid`
>
> If you wanted to include something after the cart you would create:
> `snippets/hook-product-after-cart-button.liquid`

For a full list of hooks available [click here](/ThemeX/hooks)

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

![Shopify FD MetaField Creation](images/shopifyfd-metafields.png)

For a list of Variables available [click here](/ThemeX/variables).

## Setup

All settings are configurable globally via the theme customizer. For per product or per collection settings look at [variables](#variables-metadata).


### Skip Cart

Note: Make sure the Cart is set to Page and not modal or any other option.
{: .notice--info}


### Facebook Pixel Conversion

Do not forget to change XXXX to your own fb id.
{: .notice--warning}

{% raw %}
```html
<!-- Facebook Pixel Code -->
{% if first_time_accessed %}
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'xxxxxxxxxxxx');

var content_ids = []

{% for line in checkout.line_items %}
  productId = {{line.variant_id | json}};
  content_ids.push(productId);
{% endfor %}

totalPrice = {{ checkout.total_price | money_without_currency }};
fbq('track', 'Purchase', {
   content_ids: content_ids,
   value: totalPrice,
   currency:'{{shop.currency}}',
   content_type: 'product'
});

</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=xxxxxxxxxxx&ev=Purchase&cd[value]={{ checkout.total_price | money_without_currency }}&noscript=1"
/></noscript>
{% endif %}
<!-- End Facebook Pixel Code -->
```
{% endraw %}

### Hide Paypal Button on Checkout Page
```html
<script type="text/javascript">
(function(fn){
    var d = document;
    (d.readyState == 'loading') ? d.addEventListener('DOMContentLoad', fn) : fn();
})(function(){
    document.getElementById("paypal-express-checkout-btn").style.visibility = "hidden";
    var toHide = document.querySelectorAll('.alt-payment-list-container, .alternative-payment-separator');
    for(var i = 0; i < toHide.length; i++){
        toHide[i].style.display = 'none';
    }
});
</script>
```
