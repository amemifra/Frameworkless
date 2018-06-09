import routes from './routes';

const contentContainer = document.querySelector('main');

const routing = () => {
  const path = window.location.hash.substr(2);
  if (routes.hasOwnProperty(path)) {
    routes[path](contentContainer);
  }
};

export default window.onhashchange = routing;
