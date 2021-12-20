class SVG {
  constructor(el) {
    this.init(el)
  }

  init(el) {
    this._svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    this._parent = el
    this._parent.appendChild(this._svg);
  }

  update() {
    Object.keys(this).forEach(key => {
      if (!key.includes('_')) {
        this._svg.setAttributeNS(null, key, this[key]);
      }
    })
  }
}

export default {
  SVG(el) {
    const svg = new SVG(el)
    return new Proxy(svg, {
      get: function(item, property){
        console.log(`Получение свойства: '${property}'`);
        svg.update();
        return item[property];
      },
      set: function(item, property, val){
        console.log(`Установка свойства: '${property}'`);
        item[property] = val
        svg.update();
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


