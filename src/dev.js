import SS from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const svg = SS.SVG(element)
svg.id = 'test'
svg.width = 300
svg.height = 300

const c = SS.circle()
c.r = 10
c.cx = 20
c.cy = 20
c.fill = 'red'

svg.add(c)