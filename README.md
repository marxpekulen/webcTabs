# webcTabs

Tabs for content with scalable html structure

<a href="https://marxpekulen.github.io/webcTabs/" target="_blank">Demo</a>

## Usage

2. Add some HTML Code

```html
<ul class="tabs-links">
  <li class="active">
    <a href="#tab1">Active</a>
  </li>
  <li>
    <a href="#tab2">Pending</a>
  </li>
  <li>
    <a href="#tab3">Declined</a>
  </li>
</ul>
<div class="tabs-container">
  <div class="webcTab" id="tab1">1</div>
  <div class="webcTab" id="tab2">2</div>
  <div class="webcTab" id="tab3">3</div>
</div>
```

2. Connect jQuery 1.12.1 or higher and webcTabs lib
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<script src="webcTabs.js"></script>
```

3. Initialize

```js
$(".tabs-links").webcTabs();
```

4. Add some properties

```js
$(".tabs-links").webcTabs({
  links : $(".tabs-links a'), // link to tab (active class will be added to link parent)
  tabContent : $(".webcTab"), // tab element
  hideFirst : true // hide all tabs instead of tabContent first-child
});
```
