export default class ShapeShape {
  constructor(el) {
    this.container = el;
    this.elements = [];
  }
  
  circle(props) {
    console.log(props)
    const circle = document.createElement('circle');
    return circle
  }
  // add(text) {
  //   this.elements.push(text)
  //   this.container.innerHTML = this.elements;
  // }
}