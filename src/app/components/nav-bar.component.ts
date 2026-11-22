import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div>
        <a class="brand" href="#accueil" aria-label="Accueil du portfolio">HC</a>
        <ul class="nav-list">
          <a href="projects">Projets</a>
          <a href="skills">Compétences</a>
          <a href="contactme">Me contacter</a>
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
    }

    .nav-list a {
      display: block;
      border-radius: 999px;
      padding: 10px 12px;
      color: #01161e;
      font-size: 0.92rem;
      text-decoration: none;
    }
    .nav-list a:hover {
      background: #508484;
      color: #fffff2;
    }

    @media (max-width: 620px) {
      nav > div {
        min-height: 64px;
        grid-template-columns: 42px minmax(0, 1fr);
        padding: 0 18px;
      }
      .nav-list {
        gap: 2px;
      }
      .nav-list li:nth-child(1),
      .nav-list li:nth-child(2) {
        display: none;
      }
      .nav-list a {
        padding: 8px 7px;
        font-size: 0.82rem;
      }
    }
  `,
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
