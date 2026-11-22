import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { SkillsPage } from './pages/skills';
import { ContactMePage } from './pages/contactme';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'skills',
    component: SkillsPage,
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
