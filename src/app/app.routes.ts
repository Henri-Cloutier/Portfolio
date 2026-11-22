import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { SkillsPage } from './pages/skills';

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
    path: '**',
    redirectTo: 'home',
  },
];
