import { hyper } from 'hyperhtml/esm';

class Modal extends HTMLElement {
  static get observedAttributes() {
    return ['show-modal'];
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
    return this.getAttribute('show-modal') === true ?
      this.html`
<div class="modal">
  <div class="modal-dialog fadeDown in" role="dialog" aria-hidden="true">
    <div class="modal-content">
    <div class="modal-header">
      <button aria-label="Close" class="close" type="button">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
      </button>
      <h3 class="modal-title">I have a nice title</h3>
    </div>
    <div class="modal-body">
        <p>But not much to say...</p>
    </div>
    <div class="modal-footer">
        <button class="btn btn-outline" type="button">Cancel</button>
        <button class="btn btn-primary" type="button">Ok</button>
    </div>
    </div>
  </div>
</div>
<div class="modal-backdrop fade in" aria-hidden="true"></div>
` : this.html``;
  }
}

export default customElements.define('app-modal', Modal);
