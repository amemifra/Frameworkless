import { hyper } from 'hyperhtml/esm';

export const dependecyInjection = contentContainer => {
  hyper.bind(contentContainer)`
  <div class="content-area">
    <h2>Dependecy Injection</h2>
  </div>
  `;
};
