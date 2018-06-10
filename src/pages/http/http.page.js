import { hyper } from 'hyperhtml/esm';
import { hyperGetAttribute, hyperSetAttribute } from '../../utils/hyper.utils';

import './http.page.css';
import { setStore } from '../../state-management/state.management';

class Http extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.html = hyper.bind(this);
    this.openModal = false;
    this.help = false;
  }

  connectedCallback() {
    this.render();
    this.listener();
  }

  render() {
    return this.html`
    <div class="content-area animation fadeIn">
      <h2>Http</h2>
      <button class="btn btn-primary">fetch</button>
      <app-modal show-modal="${this.openModal}"></app-modal>
    </div>
    `;
  }

  listener() {
    const b = this.querySelector('button');
    b.addEventListener(
      'click',
      () => {
        fetch('https://www.google.com').then(res => console.log(res));
        setStore(true, 'show-modal');
      }
    );
    const modalAtrObserver = new MutationObserver(() => {
      this.openModal = hyperGetAttribute('show-modal', this.querySelector('app-modal'));
      this.render();
    });
    modalAtrObserver.observe(this.querySelector('app-modal'), { attributes: true });
  }
}

export default customElements.define('page-http', Http);
