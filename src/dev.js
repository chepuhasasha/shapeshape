import ShapeShape from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const SS = new ShapeShape(element)
const circle = SS.circle({fill: 'red'})
console.log(circle)
