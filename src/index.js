class SVG {
  constructor(el, props = {}) {
    this._svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    this._parent = el
    this._parent.appendChild(this._svg);
    Object.keys(props).forEach(key => {
      this._svg.setAttributeNS(null, key, props[key]);
    })
  }

  update() {
    Object.keys(this).forEach(key => {
      if (!key.includes('_')) {
        this._svg.setAttributeNS(null, key, this[key]);
      }
    })
  }

  add(el) {
    console.log(el)
    this._svg.appendChild(el._element);
  }
}

class Circle {
  constructor(props = {}) {
    this._element = document.createElementNS('http://www.w3.org/2000/svg','circle');
    Object.keys(props).forEach(key => {
      this._element.setAttributeNS(null, key, props[key]);
    })
  }

  update() {
    Object.keys(this).forEach(key => {
      if (!key.includes('_')) {
        this._element.setAttributeNS(null, key, this[key]);
      }
    })
  }
}

export default {
  SVG(el, props = {}) {
    const svg = new SVG(el, props)
    return new Proxy(svg, {
      get: function(item, property){
        console.log(`get: '${property}: ${item[property]}'`);
        svg.update();
        return item[property];
      },
      set: function(item, property, val){
        console.log(`set: '${property}: ${val}'`);
        item[property] = val
        svg.update();
        return item[property];
      }
    });
  },

  circle(props = {}) {
    const circle = new Circle(props)
    return new Proxy(circle, {
      get: function(item, property){
        console.log(`get: '${property}: ${item[property]}'`);
        circle.update();
        return item[property];
      },
      set: function(item, property, val){
        console.log(`set: '${property}: ${val}'`);
        item[property] = val
        circle.update();
        return item[property];
      }
    });
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


