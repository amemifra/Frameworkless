import { hyper } from 'hyperhtml/esm';
import { hyperGetAttribute } from '../../utils/hyper.utils';
import { getStore, setStore, getStoreValue } from '../../state-management/state.management';

import './modal.css';

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
    getStore().subscribe(store => {
      this.render();
      this.listener();
    });
  }

  render() {
    return getStoreValue()['show-modal'] ?
      this.html`
<div class="modal">
  <div class="modal-dialog animated fadeInDown" role="dialog" aria-hidden="true">
    <div class="modal-content">
    <div class="modal-header">
      <button aria-label="Close" class="close" type="button">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
      </button>
      <h3 class="modal-title">I have a nice title</h3>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
        <button class="btn btn-outline ko" type="button">Cancel</button>
        <button class="btn btn-primary ok" type="button">Ok</button>
    </div>
    </div>
  </div>
</div>
<div class="modal-backdrop fade in" aria-hidden="true"></div>
` : this.html``;
  }

  listener() {
    if (getStoreValue()['show-modal']) {
      this.querySelector('button.ko').addEventListener('click', () => this.koCallback());
      this.querySelector('button.ok').addEventListener('click', () => this.okCallback());
      this.querySelector('button.close').addEventListener('click', () => setStore(false, 'show-modal'));
      this.querySelector('.modal-body').innerHTML = getStoreValue()['modal-body'];
    }
  }

  okCallback() {
    console.log('ok');
    this.setAttribute('show-modal', false);
    setStore(false, 'show-modal');
  }

  koCallback() {
    console.log('ko');
    this.setAttribute('show-modal', false);
    setStore(false, 'show-modal');
  }
}

export default customElements.define('app-modal', Modal);
