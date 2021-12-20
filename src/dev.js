import SS from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const svg = SS.SVG(element, {
  id: 'test',
  width: 300,
  height: 300,
})
svg.id = 'test2'

const c = SS.circle({
  r: 10,
  cx: 20,
  cy: 20,
  fill: 'red'
})

const r = SS.rect({
  x: 30,
  y: 40,
  width: 50,
  height: 30,
  fill:'green'
})

r.rotate(10)
r.move(30, 30)
c.move(44, 99)

svg.add([c, r])