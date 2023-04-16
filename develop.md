---
layout: page
title: develop
permalink: /develop/
topnav: true
---

This page contains a range of resources to help you create a new mod or maintain an existing mod.

### Getting started

* An up-to date template mod can be found on [github](https://github.com/babric/fabric-example-mod).

### Latest Versions

<noscript style="color:red">You need Javascript to show the latest Versions</noscript>
<div class="fabric-component" data-component="Versions"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">
