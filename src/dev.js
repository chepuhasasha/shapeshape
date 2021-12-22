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

const c = SS.circle({
  cx: 200,
  cy: 100,
  r: 50,
  fill: 'blue'
})

const c2 = SS.circle({
  cx: 100,
  cy: 100,
  r: 50,
  fill: 'green'
})

r.fill = 'blue'
c.fill = 'red'

svg.add([r, c, c2])
svg.delete(c2)

console.log(svg)
