import SS from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const svg = SS.SVG({
  id: '123',
  width: 300,
  height: 300,
  container: element
})

const circle = SS.circle({
  cx: 45,
  cy: 45,
  r: 40,
  fill: 'red'
})
const circle2 = SS.circle({
  cx: 65,
  cy: 65,
  r: 20,
  fill: 'blue'
})


svg.add(circle)
svg.add(circle2)

circle2.fill = 'blue'
console.log(circle2)

// svg.draw()
// svg.update()
// svg.parseJSON()
// svg.parseSVG()
