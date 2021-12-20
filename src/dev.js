import SS from './index';

const element = document.createElement('div');
element.innerHTML = 'test'
document.body.appendChild(element);

SS.init({
  id: '123',
  width: 300,
  height: 300,
  container: element
})