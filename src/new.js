function PROXY(target) {
  return new Proxy(target, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, val) {
      target[prop] = val;
      return target[prop];
    }
  })
}

class Element {
  constructor(name = 'svg', attrs = {}) {
    this.element = null;
    this.attrs = attrs;
    this.modes = {};
    this.childs = [];
    this.createElement(name);
    this.update(this.attrs);
  }

  createElement(name) {
    this.element = document.createElementNS('http://www.w3.org/2000/svg',name);
  }

  addChild(el) {
    this.childs.push(el);
  }

  update(attrs) {
    Object.keys(attrs).forEach(key => {
      this.element.setAttributeNS(null, key, attrs[key]);
    })
  }

  setMode(name) {
    this.update(this.modes[name]);
  }

  listen(name, f){
    this.element.addEventListener(name, f.bind(this));
  }
}

export default {
  SVG(attrs = {}) {
    return PROXY(new Element('svg', attrs));
  },
  rect(attrs = {}) {
    return PROXY(new Element('rect', attrs));
  }
}