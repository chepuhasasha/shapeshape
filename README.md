# SHAPE SHAPE!!!

### install.
```
npm install shapeshape
```
### start.
```html
<div id='container'></div>
```
```js
import SS from 'shapeshape';

const container = document.getElementById('container');

const svg = SS.SVG({
  id: 'my-svg',
  width: 500,
  height: 500,
}, container);
```
result:
```html
<div id='container'>
  <svg id='my-svg' width='500' height='500'></svg>
</div>
```

### make element.
```js
const rect = SS.rect({ 
  x: 10,
  y: 10,
  width: 100,
  height: 50,
  fill: 'red'
});
svg.add(rect)
```
result:
```html
<div id='container'>
  <svg id='my-svg' width='500' height='500'>
    <rect x='10' y='10' width='100' height='50' fill='red'></rect>
  </svg>
</div>
```
