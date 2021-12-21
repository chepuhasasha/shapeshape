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
    if(Array.isArray(el)) {
      el.forEach(item => {
        this._svg.appendChild(item._element);
      })
    } else {
      this._svg.appendChild(el._element);
    }
  }
}

class Element {
  constructor(name, props = {}) {
    this._element = document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.keys(props).forEach(key => {
      this[key] = props[key]
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

  rotate(val) {
    this._element.setAttributeNS(null, 'transform', `rotate(${val})`);
  }

  move(x, y) {
    this._element.setAttributeNS(null, 'transform', `translate(${x},${y})`);
  }
}

const proxying = function(target) {
  return new Proxy(target, {
    get: function(item, property){
      target.update();
      return item[property];
    },
    set: function(item, property, val){
      item[property] = val
      target.update();
      return item[property];
    }
  });
}

export default {
  SVG(el, props = {}) {
    const svg = new SVG(el, props)
    return proxying(svg)
  },

  circle(props = {}) {
    const circle = new Element('circle', props)
    return proxying(circle)
  },

  rect(props = {}) {
    const rect = new Element('rect', props)
    return proxying(rect)
  }
}