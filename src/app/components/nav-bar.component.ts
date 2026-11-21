import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <a href="#">Inventaire</a>
      <ul class="nav-list">
        <li class="nav-item dropdown">
          <a href="management/dashboard">Projets</a>
          <ul class="dropdown-menu">
            <li><a href="projects/inventaire">Inventaire</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    nav {
      display: flex;
      padding: 15px;
      align-items: center;
      background-color: #01161e;
      color: #fffff2;
    }
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      margin-left: auto;
    }

    .nav-item {
      position: relative;
    }

    .nav-item a {
      display: block;
      padding: 1rem 1.5rem;
      text-decoration: none;
      color: inherit;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 180px;
      list-style: none;
      margin: 0;
      padding: 0.5rem 0;
      background: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 4px;

      /* hidden by default */
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition:
        opacity 0.2s ease,
        transform 0.2s ease,
        visibility 0.2s;
    }

    .dropdown:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-menu li a {
      padding: 0.5rem 1.25rem;
      white-space: nowrap;
    }

    .dropdown-menu li a:hover {
      background: #f5f5f5;
    }
  `,
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
