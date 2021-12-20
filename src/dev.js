import SS from './index';

const element = document.createElement('div');
element.innerHTML = 'test'
document.body.appendChild(element);

const svg = SS.SVG({
  id: '123',
  width: 300,
  height: 300,
  container: element
})

const circle = SS.circle()
svg.add(circle)