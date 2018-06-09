import { hyper } from 'hyperhtml/esm';
import { rendering } from '../pages/rendering/rendering';
import { homepage } from '../pages/homepage/homepage';
import { routing } from '../pages/routing/routing';
import { stateManagement } from '../pages/state-management/state-management';
import { dependecyInjection } from '../pages/dependency-injection/dependecy-injection';

const routes = {
  rendering: contentContainer => rendering(contentContainer),
  routing: contentContainer => routing(contentContainer),
  http: contentContainer => hyper.bind(contentContainer)`<page-http></page-http>`,
  'state-management': contentContainer => stateManagement(contentContainer),
  'dependency-injection': contentContainer => dependecyInjection(contentContainer),
  '': contentContainer => homepage(contentContainer)
};

export default routes;
