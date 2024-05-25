import _ from 'lodash';
import printMe from './print';

import "./style.css"

function component() {
  const element = document.createElement('div');
  const btn = document.createElement("button")

  const newBtn = document.createElement("button")

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "Click me and see the consosle"
  btn.onclick = printMe;

  newBtn.innerHTML = "This is a new button"

  element.appendChild(btn);
  element.appendChild(newBtn)

  return element;
}

document.body.appendChild(component());