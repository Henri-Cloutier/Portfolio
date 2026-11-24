import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../pages/projects';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav>
      <div>
        <a class="brand" routerLink="/home" aria-label="Accueil du portfolio">HC</a>
        <ul class="nav-list">
          <li class="nav-dropdown">
            <a routerLink="/projects" aria-haspopup="true" aria-controls="projects-menu">Projets</a>
            <ul id="projects-menu" class="dropdown-list">
              @for (project of projects; track project.slug) {
                <li><a [routerLink]="['/projects', project.slug]">{{ project.title }}</a></li>
              }
            </ul>
          </li>
          <li><a routerLink="/skills">Compétences</a></li>
          <li><a routerLink="/contact-me">Me contacter</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: `
    :host {
      position: sticky;
      top: 0;
      z-index: 100;
      display: block;
      width: 100%;
      background: #fffff2;
      border-bottom: 1px solid #508484;
    }

    nav {
      width: 100%;
    }

    nav > div {
      display: grid;
      grid-template-columns: max-content auto;
      min-height: 72px;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
      align-items: center;
      color: #01161e;
    }

    .brand {
      color: #01161e;
      font-size: 1.15rem;
      font-weight: 850;
      letter-spacing: -0.06em;
      text-decoration: none;
    }
    .nav-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      padding: 0;
      margin-left: auto;
      margin-top: 0;
      margin-bottom: 0;
    }

    .nav-list a {
      display: block;
      border-radius: 999px;
      padding: 10px 12px;
      color: #01161e;
      font-size: 0.92rem;
      text-decoration: none;
      cursor: pointer;
    }

    .nav-list a:hover {
      background: #508484;
      color: #fffff2;
    }

    .nav-dropdown {
      position: relative;
    }

    .dropdown-list {
      position: absolute;
      top: 100%;
      left: 50%;
      z-index: 1;
      display: none;
      min-width: max-content;
      margin: 0;
      padding: 8px;
      border: 1px solid #508484;
      border-radius: 12px;
      background: #fffff2;
      box-shadow: 0 8px 20px rgb(1 22 30 / 12%);
      list-style: none;
      transform: translateX(-50%);
    }

    .nav-dropdown:hover .dropdown-list,
    .nav-dropdown:focus-within .dropdown-list {
      display: block;
    }

    .dropdown-list a {
      border-radius: 6px;
    }

    @media (max-width: 620px) {
      nav > div {
        min-height: 64px;
        grid-template-columns: 42px minmax(0, 1fr);
        padding: 0 18px;
      }
      .nav-list {
        gap: 0;
      }

      .nav-list a {
        padding: 8px 6px;
        font-size: 0.78rem;
      }
    }
  `,
})
export class HomeComponent {
  protected readonly projects = projects;
}
