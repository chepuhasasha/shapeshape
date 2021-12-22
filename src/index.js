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
  constructor(name = 'svg', attrs = {}, container) {
    this.element = null;
    this.attrs = attrs;
    this.modes = {};
    this.childs = [];
    this.createElement(name);
    this.update(this.attrs);
    this.add(this.element, container);
  }

  createElement(name) {
    this.element = document.createElementNS('http://www.w3.org/2000/svg',name);
  }

  addChild(el) {
    if (Array.isArray(el)) {
      el.forEach(item => {
        this.childs.push(item);
        this.add(item.element, this.element)
      })
      return
    }
    this.childs.push(el);
    this.add(el.element, this.element)
  }

  add(el, container) {
    if (container) {
      container.appendChild(el);
    }
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
  SVG(attrs = {}, container) {
    return PROXY(new Element('svg', attrs, container));
  },
  rect(attrs = {}) {
    return PROXY(new Element('rect', attrs));
  }
}