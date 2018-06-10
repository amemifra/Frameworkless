import { hyper } from 'hyperhtml/esm';
import { getMapKeys } from '../../utils/map.utils';
import { hyperGetAttribute } from '../../utils/hyper.utils';

class Sidenav extends HTMLElement {
  static get observedAttributes() {
    return ['navigation-map', 'nav-collapsible'];
  }
  constructor(...args) {
    super(...args);
    this.html = hyper.bind(this);
  }
  attributeChangedCallback() {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    return this.html`
    ${getMapKeys(hyperGetAttribute('navigation-map', this))
    .reduce((prev, curr, index) => {
      const section = hyper.wire()`
      <section class="${'nav-group' + (hyperGetAttribute('nav-collapsible', this) === true ? ' collapsible' : '')}">
          <input id="${'sidenavcbx' + index}" type="checkbox">
          <label for="${'sidenavcbx' + index}">${curr}</label>
    ${hyperGetAttribute('navigation-map', this)[curr]
    .reduce((pre, cur) => {
      const li = hyper.wire()`
        <li>
          <a class="nav-link"></a>
        </li>
      `;
      li.hasChildNodes() ? li.firstElementChild.innerText = cur : null;
      pre.appendChild(li);
      return pre;
    }, hyper.wire()`<ul class="nav-list"></ul>`)}
      </section>
      `;
      prev.appendChild(section);
      return prev;
    }, hyper.wire()` <nav class = "sidenav" style = "height: 100%"> `)}
    `;
  }
}

export default customElements.define('app-sidenav', Sidenav);
