export default class ShapeShape {
  constructor(el) {
    this.container = el;
    this.elements = [];
  }

  static init(props) {
    // const element = document.createElement('svg');
    // element.id = props.id
    // // element.setAttribute('width', props.width + 'px')
    // // element.setAttribute('height', props.height + 'px')
    // element.style.width = props.width + 'px'
    // element.style.height = props.height + 'px'
    // element.innerHTML = 'test'
    // props.container.appendChild(element);
    
    const svgns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgns,'svg');
    var shape = document.createElementNS(svgns, "circle");
    shape.setAttributeNS(null, "cx", 25);
    shape.setAttributeNS(null, "cy", 25);
    shape.setAttributeNS(null, "r",  20);
    shape.setAttributeNS(null, "fill", "green"); 
    svg.appendChild(shape);
    props.container.appendChild(svg);
  }

  static rect() {
    return new Element();
  }
}

class Element {
  constructor() {
    this.a = 23;
  }
}


