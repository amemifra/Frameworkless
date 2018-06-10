import { BehaviorSubject } from 'rxjs';

const initialState = {
  'show-modal': false,
  'modal-body': '<p>But not much to say...</p>'
};

const store = new BehaviorSubject(initialState);


export const getStore = () => store.asObservable();
export const getStoreValue = () => store.getValue();

export const setStore = (newState, context) => {
  const theStore = store.getValue();
  if (theStore.hasOwnProperty(context)) {
    theStore[context] = newState;
    store.next(theStore);
  }
};
