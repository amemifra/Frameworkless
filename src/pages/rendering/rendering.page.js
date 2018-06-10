import { hyper } from 'hyperhtml/esm';

export const rendering = contentContainer => {
  hyper.bind(contentContainer)`
    <app-sidenav navigation-map="${JSON.stringify({ Rendering: ['DOM manipulation', 'hyperHTML'] })}"></app-sidenav>
    <div class="content-area animation fadeIn">
      <h2>Rendering</h2>
    </div>
  `;
};
