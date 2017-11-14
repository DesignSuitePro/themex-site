---
title: "Hooks"
layout: single
sitemap: false
permalink: /hooks
sidebar:
  nav: "hooks-sidebar"
---
## Naming
Hook file naming follows:

> hook-`template`-`rule`-`section`.liquid

Where `template` is either of these: 

- **[theme](#theme)**
- **[product](#product)**
- **[product-grid-tem](#product-grid-item)**
- **[collection](#collection)**

Where `rule` is one of the following:

- **before**
- **replace**
- **after**

Where `section` is one of the sections shown on this page.

``Example: hook-theme-after-head.liquid``

## theme 

- head `hook-theme-before-head.liquid` `hook-theme-replace-head.liquid` `hook-theme-after-head.liquid`
- body
    - header
    - inside-header
    - footer
        - top-footer
        - bottom-footer

## product

- images
    - image
    - thumbnails
        - thumbnail
- product
    - title
    - vendor
    - collection `v1.5`
    - meta // prices and reviews badge
    - fields
    - customizer
    - top-description
    - description
    - cart-button
    - badges
    - timer
    - bottom-description
    - social
- related-products
- reviews

## collection

- container
    - inside-container
        - sidebar
        - main
            - description
            - header
            - products
                - product
        - pagination


## product-grid-item

- container
    - image-container
        - image
    - title
    - price-container
        - price
        - sale
    - reviews


