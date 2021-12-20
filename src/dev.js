import SS from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const svg = SS.SVG(element)
svg.a = 'red'
console.log(svg.a)