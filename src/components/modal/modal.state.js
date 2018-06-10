import { BehaviorSubject } from 'rxjs';

export class ModalState {
  constructor() {
    this.initialState = {
      'show-modal': false,
      'modal-body': '<p>But not much to say...</p>'
    };
    this.store = new BehaviorSubject(this.initialState);
  }

  getModalStore() {
    this.store.asObservable();
  }

  getModalStoreValue() {
    this.store.getValue();
  }
  setModalStore(newState, context) {
    const theStore = this.store.getValue();
    if (theStore.hasOwnProperty(context)) {
      theStore[context] = newState;
      this.store.next(theStore);
    }
  }
}

