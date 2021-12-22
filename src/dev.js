import SS from './index';

const container = document.createElement('div');
document.body.appendChild(container);

const svg = SS.SVG({
  id: 'svg',
  width: 500,
  height: 500,
}, container)

const r = SS.rect({
  x: 0,
  y: 0,
  width: 200,
  height: 100,
  fill: 'red'
})

const r2 = SS.rect({
  x: 50,
  y: 50,
  width: 200,
  height: 100,
  fill: 'blue'
})

svg.addChild([r, r2])

console.log(svg)
