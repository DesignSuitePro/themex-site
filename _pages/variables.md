---
title: "Variables"
layout: single
sitemap: false
permalink: /variables
sidebar:
  nav: "variables-sidebar"
---
## Introduction
Variables in ~~*italic*~~ can't be overriden via custom fields.
Color fields can't be overriden either in a per product basis, but that could change on future versions of the theme.

Custom field types are:

- `Text` - Means any text can be used as value
- `Enable` - Means only Boolean values should be used as values. To ensure compatibility better stick to **1** and **0** only.
- `Number` - Means only numbers should be used as values.
- `Option` - Means only one of the options listed can be used as value.

Namespace is always "**themex**".
 
## General
- social_twitter_link `Text`
- social_facebook_link `Text`
- social_pinterest_link `Text`
- social_google_plus_link `Text`
- social_instagram_link `Text`
- social_tumblr_link `Text`
- social_youtube_link `Text`
- social_vimeo_link `Text`
- social_fancy_link `Text`
- ajax_cart_method `Option` *options:* `page` `drawer` `flip` `modal` *default:* `page`
- ajax_search_enable `Enable` 
- breadcrumb_enable `Enable` 
- ~~*facebook_pixel_id*~~
- ~~*header_logo_hide_mobile*~~

## Header Section
- logo_use_image `Enable`
- header_message `Text`


## Footer Section

- footer_content_enable `Enable`
- footer_social_enable `Enable`
- footer_content_text `Enable`
- footer_newsletter_enable `Enable`
- footer_quicklinks_enable `Enable`
- footer_legallinks_enable `Enable`


## Collection Page

- collection_prod_image_sizes `Option` Possible Values: `compact` `large`
- collection_sidebar_filters `Option` Possible Values: `groups` `tags` `multiple`
- collection_sidebar_show_groups `v1.5.0` `Enable`
- collection_sidebar_show_vendor_full_list `v1.5.0` `Enable`
- collection_sidebar_show_tags `v1.5.0` `Enable`

## Product Page

- product_vendor_enable `Enable`
- product_collection_enable `v1.5.0` `Enable`
- product_quantity_message `Enable`
- product_image_zoom_enable `Enable`
- product_reviews_enable `Enable`
- product_quantity_enable `Enable`
- product_cart_icon_enable `Enable`
- product_badges_enable `Enable` *default:* `true`
- product_secure_badges_enable `Enable` *default:* `true`
- product_social_sharing_enable `Enable`
- product_reviews_enable `Enable`
- related_products_enable `Enable` *default:* `true`
- product_show_compare_at_price `Enable` *default:* `true`
- product_show_saved_amount `Enable`
- product_skip_cart_enable `Enable`
- product_description_enable `Enable` *default:* `true`
- product_description_read_more_enable `v1.5.0` `Enable` 
- product_customizer_enable `Enable` *default:* `true`
- product_description_bottom_enable `v1.5.0` `Enable`  *default:* `false`
- social_sharing_products
- product_price_compare_color `Color`
- product_add_to_cart_text `Text`
- ~~*product_ruler_height*~~

### Upsell

- product_upsell_popup_enable `Enable`
- product_upsell_qty `Number` *default:* `3`
- product_upsell_headline_text `Text` `Grab 3 and Pay Shipping Only For 2`
- product_upsell_button_yes_text `Text` `YES! I WANT THIS SPECIAL OFFER`
- product_upsell_button_no_text `Text` `No Thanks, I just want one`

### Timer

- product_timer_enable `Enable` *default:* `true`
- product_timer_cookie_enable `v1.5.0` `Enable` *default:* `false`
- product_timer_over_text_enable `Enable` *default:* `true`
- product_timer_top_text_enable `Enable` *default:* `true`
- product_progressbar_enable `Enable` *default:* `true`
- product_timer_top_text `Text` *default:* `ONLY [num] LEFT AT THIS PRICE`
- product_timer_time_left `Number` *default:* `10800`
- product_timer_over_text `Text` *default:* `The sale will be over once the timer hits zero`




