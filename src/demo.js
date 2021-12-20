import ShapeShape from './index';

const SS = new ShapeShape('#container', {
  width: 300,
  height: 300,
  adaptive: false,
})

const c = SS.circle({
  r: 15,
  cx: 10,
  cy: 10,
  fill: 'red'
})
const c1 = SS.circle({
  r: 15,
  cx: 15,
  cy: 15,
  fill: 'blue'
})

const g = SS.group({})
g.add([c, c1])

SS.add(g)

SS.delete(SS.findByID(1))

// SS.parse({
//   width: 300,
//   height: 300,
//   adaptive: false,
//   childs: [
//     {
//       type: 'g',
//       props: {},
//       childs: []
//     }
//   ]
// })