import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { ContactMePage } from './pages/contactme';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'contact-me',
    component: ContactMePage,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
