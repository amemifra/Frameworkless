import { hyper } from 'hyperhtml/esm';
import { rendering } from '../pages/rendering/rendering.page';
import { homepage } from '../pages/homepage/homepage';
import { routing } from '../pages/routing/routing.page';
import { dependecyInjection } from '../pages/dependency-injection/dependecy-injection.page';

const routes = {
  rendering: contentContainer => rendering(contentContainer),
  routing: contentContainer => routing(contentContainer),
  http: contentContainer => hyper.bind(contentContainer)`<page-http></page-http>`,
  'state-management': contentContainer => hyper.bind(contentContainer)`<page-state-management></page-state-management>`,
  'dependency-injection': contentContainer => dependecyInjection(contentContainer),
  '': contentContainer => homepage(contentContainer)
};

export default routes;
