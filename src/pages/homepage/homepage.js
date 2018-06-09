import { hyper } from 'hyperhtml/esm';

export const homepage = contentContainer => {
  hyper.bind(contentContainer)`
  <app-sidenav navigation-map="${JSON.stringify({ Introduzione: ['Browser', 'Librerie'] })}"></app-sidenav>
    <div class="content-area">
      <h2>Frameworkless</h2>
      <h4>Lo sviluppo frontend in puro javascript utilizzando piccole librerie ed API di basso livello</h4>
      <section class="homepage-timeline">
        <div class="card">
          <div class="card-header">Introduzione</div>
          <div class="card-block">
            I browser sono passati da essere motori javascript con qualche API di basso livello, stimolando quindi la nascita
            la crescita e lo sviluppo dei framework frontend e dei loro ecosistemi. Fino ad arrivare ad oggi,
            in cui sono diventati veri e propri ecosistemi. Support offline attraverso i service worker,
            Animazioni grafiche di alta qualità attraverso WebGl, Integrazione delle funzionalità di jQuery nell'oggetto document,
            Introduzione dell'API fetch(), Le Promise e le funzioni async/await.
          </div>
        </div>
      </section>

    </div>`;
};
