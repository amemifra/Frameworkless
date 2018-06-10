import { hyper } from 'hyperhtml/esm';

export const routing = contentContainer => {
  hyper.bind(contentContainer)`
    <app-sidenav nav-collapsible="true" navigation-map="${JSON.stringify({ 'Single Page Application': ['Hash', 'Standard', 'Navigo'], 'Multi Page Application': ['PWA way'] })}"></app-sidenav>
    <div class="content-area animation fadeIn">
      <h2>Routing</h2>
      <h4>Navigazione frontend di una single page application</h4>
      <section class="homepage-timeline">
        <div class="card">
          <div class="card-header">Hash</div>
          <div class="card-block">
            L'elemento window del browser ha l'api all'evento di routing: <b>onhashcange</b> <br/>
            Il cambio pagina in una Single Page Application viene gestito attraverso l'aggiunta di #/ all'inizio di tutte le rotte
          </div>
        </div>
        <div class="card">
          <div class="card-header">Esempio</div>
          <div class="card-block">

import routes from './routes';<br/><br/>

const contentContainer = document.querySelector('main.content-container');<br/>
<br/>
const routing = () => {<br/>
  const path = window.location.hash.substr(2);<br/>
  if (routes.hasOwnProperty(path)) {<br/>
    routes[path](contentContainer);<br/>
  }<br/>
};<br/>
<br/>
export default window.onhashchange = routing;
<br/>

          </div>
        </div>
      </section>
    </div>
  `;
};
