import { hyper } from 'hyperhtml/esm';

class Http extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.html = hyper.bind(this);
  }
  connectedCallback() {
    this.render();
  }

  render() {
    return this.html`
    <div class="content-area">
      <h2>Http</h2>
      <button class="btn btn-primary">Primary</button>
      <app-modal show-modal="${'visible'}"></app-modal>
    </div>
    `;
  }
}

export default customElements.define('page-http', Http);
