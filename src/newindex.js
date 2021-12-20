export default class ShapeShape {
  constructor(el, props) {
    if (typeof el === 'string') {
      this.container = document.querySelector(el);
    } else {
      this.container = el;
    }
    this.props = props;
    this.proxy = new Proxy(this.props, this.heandler);
  }

  heandler() {
    Object.keys(props).forEach(key => {
      this[key] = props[key];
    })
  }
}