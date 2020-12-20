---
layout: base
title: Newest products
date: Created
pagination:
 data: collections.products
 size: 5
permalink: /{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html
---

<div class="text-3xl mb-3 text-white">Newest products A change here</div>

<div class="grid grid-cols-5 gap-4 text-sm">
<div class="col-span-1 py-2 px-4 bg-white">
{% include "categorieslinks.njk" %}
</div>
{% set products = pagination.items %}
<div class="col-span-4">
<div class="grid grid-cols-4 gap-4 mb-6">
{% include "productslinks.njk" %}
</div>
{% include "pagination.njk" %}
</div>
</div>