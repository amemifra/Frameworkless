import { hyper } from 'hyperhtml/esm';

export const dependecyInjection = contentContainer => {
  hyper.bind(contentContainer)`
  <div class="content-area animation fadeIn">
    <h2>Dependecy Injection</h2>
  </div>
  `;
};
