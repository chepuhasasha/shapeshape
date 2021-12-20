export default class ShapeShape {
  constructor(el) {
    this.init(el)
  }

  init(el) {
    this._svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    this._parent = el
    this._parent.appendChild(this._svg);
  }
}



// export default class ShapeShape {
//   constructor() {
//     this.svgns = "http://www.w3.org/2000/svg"
//   }

//   parse(config) {
//     this.svg = document.createElementNS(this.svgns,'svg');
//     this.svg.setAttributeNS(null, "width", config.props.width);
//     this.svg.setAttributeNS(null, "height", config.props.height);
//     this.container = config.container
//     this.container.appendChild(this.svg);
//   }
// }


