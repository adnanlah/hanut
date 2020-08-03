---
pagination:
 data: collections.map-layout-base-njk-name-chairs
 size: 5
permalink: /category/{{name}}/{{pagination.pageNumber+1}}/index.html
layout: base.njk
name: chairs
---

{% include "paginateproducts.njk" %}