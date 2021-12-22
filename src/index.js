function PROXY(target) {
  const exceptions = [
    'childs',
    'modes',
    'element'
  ]
  return new Proxy(target, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, val) {
      if(exceptions.includes(prop)) {
        target[prop] = val;
        return target[prop];
      }
      target.attrs[prop] = val;
      target.update(target.attrs)
      return target.attrs[prop];
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
    this.addEl(this.element, container);
  }

  createElement(name) {
    this.element = document.createElementNS('http://www.w3.org/2000/svg',name);
  }

  add(el) {
    if (Array.isArray(el)) {
      el.forEach(item => {
        this.childs.push(item);
        this.addEl(item.element, this.element)
      })
      return
    }
    this.childs.push(el);
    this.addEl(el.element, this.element)
  }

  addEl(el, container) {
    if (container) {
      container.appendChild(el);
    }
  }
  removeEl(el, container) {
    if (container) {
      container.removeChild(el);
    }
  }

  delete(el) {
    const result = this.childs.filter(child => child != el)
    this.childs = result
    this.removeEl(el.element, this.element)
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
  },
  circle(attrs = {}) {
    return PROXY(new Element('circle', attrs));
  }
}