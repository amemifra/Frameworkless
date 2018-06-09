import { hyper } from 'hyperhtml/esm';

export const stateManagement = contentContainer => {
  hyper.bind(contentContainer)`
    <div class="content-area">
      <h2>State Management</h2>
    </div>
  `;
};
