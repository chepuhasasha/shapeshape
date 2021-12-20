import ShapeShape from './index';
// import SS from './index';

const element = document.createElement('div');
document.body.appendChild(element);

const config = {
  container: element,
  props: {
    width: 300,
    height: 300,
  },
  childs: [
    {
      type: 'g',
      props: {},
      childs: [
        {
          type: 'circle',
          props: {
            cx: 65,
            cy: 65,
            r: 20,
            fill: 'blue'
          }
        },
        {
          type: 'circle',
          props: {
            cx: 45,
            cy: 45,
            r: 40,
            fill: 'red'
          }
        }
      ]
    }
  ]
}

const SS = new ShapeShape()
console.log(SS)
SS.parse(config)