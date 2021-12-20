export default class ShapeShape {
  constructor(el) {
    this.container = el;
    this.svgns = "http://www.w3.org/2000/svg"
  }

  static SVG(props) {
    return new SVG(props);
  }

  static circle(props) {
    return new Element('circle', props)
  }
}

class SVG {
  constructor(props) {
    this.elements = [];
    this.svgns = "http://www.w3.org/2000/svg"
    this.svg = document.createElementNS(this.svgns,'svg');
    this.svg.setAttributeNS(null, "width", props.width);
    this.svg.setAttributeNS(null, "height", props.height);
    this.container = props.container
    this.container.appendChild(this.svg);
  }

  add(el) {
    this.elements.push(el.element)
    this.svg.appendChild(el.element)
  }
}

class Element {
  constructor(name, props) {
    this.fill = 'red',
    this.svgns = "http://www.w3.org/2000/svg"
    this.element = document.createElementNS(this.svgns, name)
    Object.keys(props).forEach(key => {
      this.element.setAttributeNS(null, key, props[key]);
    })
    return this
  }
}