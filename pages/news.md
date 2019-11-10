---
layout: default
title:  News
description: CLC Stiders Running Club in Cheltenham Spa, Gloucestershire

---

<div class="strava-box" style="float:right; margin-left:2em;">
<h2>Latest Activity</h2>
<iframe height="600" width="300" frameborder="0" allowtransparency="true" scrolling="no" 
        src="https://www.strava.com/clubs/13109/latest-rides/3b253f647806de5a116ec437654e4b6feb2e9062?show_rides=true"></iframe>
</div>


<h2>Important News</h2>
<ul class="posts">
{% for post in site.posts | limit: 1 %}
  <li class="{{ post.popular }} {{ post.new }}">
    <a href="{{ post.url }}">{{ post.title }}</a> 
          <br/>
    <span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
    <span class="num-words"><em>{{ post.content | number_of_words }}</em> words</span>
    <span class="miles"><em>{% if post.tags != empty %}{% for tag in post.tags %}{{ tag }}{% endfor %}{% endif %}</em> total miles</span>
  </li>
    {% endfor %}
</ul>

<h2>News</h2>
<ul class="posts">
{% for post in site.posts | limit: 10 offset: 1 %}
  <li class="{{ post.popular }} {{ post.new }}">
    <a href="{{ post.url }}">{{ post.title }}</a> 
          <br/>
    <span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
    <span class="num-words"><em>{{ post.content | number_of_words }}</em> words</span>
    <span class="miles"><em>{% if post.tags != empty %}{% for tag in post.tags %}{{ tag }}{% endfor %}{% endif %}</em> total miles</span>
  </li>
  {% endfor %}
</ul>