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

const c2 = SS.circle({
  r: 10,
  cx: 40,
  cy: 30,
  fill: 'blue'
})
c2.move(44, 99)

const r = SS.rect()
r.x = 30
r.y = 40
r.width = 50
r.height = 30
r.fill = 'green'

r.rotate(10)
r.move(30, 30)

svg.add([c, c2])
svg.add(r)