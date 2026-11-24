import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { SkillsPage } from './pages/skills';
import { ContactMePage } from './pages/contactme';
import { ProjectPage, ProjectsPage, projects } from './pages/projects';

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
  { path: 'projects', component: ProjectsPage },
  ...projects.map((project) => ({
    path: `projects/${project.slug}`,
    component: ProjectPage,
    data: { markdownFile: project.markdownFile },
  })),
  {
    path: '**',
    redirectTo: 'home',
  },
];
