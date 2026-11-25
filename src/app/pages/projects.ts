import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';

export const projects = [
  {
    slug: 'inventory',
    title: $localize`:@@projectInventory:Gestion d'inventaire`,
    markdownFile: 'inventory.md',
  },
  {
    slug: 'calendar',
    title: $localize`:@@projectCalendar:Calendrier prévisionnel`,
    markdownFile: 'calendar.md',
  },
  {
    slug: 'management',
    title: $localize`:@@projectManagement:Gestion de personnel`,
    markdownFile: 'management.md',
  },
  {
    slug: 'portfolio',
    title: $localize`:@@projectPortfolio:Portfolio`,
    markdownFile: 'portfolio.md',
  },
] as const;

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink],
  template: `
    <main>
      <header class="page-header">
        <p class="eyebrow" i18n="@@projectsEyebrow">Portfolio</p>
        <h1 i18n="@@projectsTitle">Mes projets</h1>
        <p i18n="@@projectsDescription">
          Parcourez mes projets et ouvrez leur page pour en découvrir les détails.
        </p>
      </header>

      <section
        class="project-grid"
        aria-label="Tous les projets"
        i18n-aria-label="@@projectsAriaLabel"
      >
        @for (project of projects; track project.slug) {
          <a class="project-card" [routerLink]="['/projects', project.slug]">
            <span class="project-label" i18n="@@projectsProjectLabel">Projet</span>
            <h2>{{ project.title }}</h2>
            <span class="project-action">
              <span i18n="@@projectsOpen">Voir le projet</span>
              <span aria-hidden="true">→</span>
            </span>
          </a>
        }
      </section>
    </main>
  `,
  styles: `
    main {
      max-width: 1120px;
      margin: 0 auto;
      padding: 72px 24px 96px;
    }

    .page-header {
      max-width: 720px;
      margin-bottom: 48px;
    }

    .eyebrow,
    .project-label {
      color: #508484;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .eyebrow {
      margin: 0 0 12px;
    }

    h1 {
      margin: 0 0 18px;
      color: #01161e;
      font-size: clamp(3rem, 7vw, 5.5rem);
      line-height: 1;
      letter-spacing: -0.055em;
    }

    .page-header > p:last-child {
      margin: 0;
      color: #01161e;
      font-size: 1.1rem;
      line-height: 1.7;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
      gap: 20px;
    }

    .project-card {
      display: flex;
      min-height: 220px;
      flex-direction: column;
      align-items: flex-start;
      border: 1px solid #508484;
      border-radius: 16px;
      background: #fffff2;
      padding: 28px;
      color: #01161e;
      text-decoration: none;
      transition:
        transform 160ms ease,
        background 160ms ease;
    }

    .project-card:hover {
      transform: translateY(-4px);
      background: #ececdf;
    }

    .project-card h2 {
      margin: 18px 0 24px;
      font-size: 1.5rem;
    }

    .project-action {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      color: #356b6b;
      font-weight: 750;
    }

    @media (max-width: 700px) {
      main {
        padding: 48px 18px 72px;
      }
    }
  `,
})
export class ProjectsPage {
  protected readonly projects = projects;
}

@Component({
  selector: 'app-project-page',
  template: `
    <main>
      @if (loading()) {
        <p role="status" i18n="@@projectLoading">Chargement du projet...</p>
      } @else if (loadError()) {
        <p class="load-error" role="alert">{{ loadError() }}</p>
      } @else {
        <article class="markdown-content" [innerHTML]="html()"></article>
      }
    </main>
  `,
  styles: `
    main {
      max-width: 1120px;
      margin: 0 auto;
      padding: 72px 24px 96px;
    }

    .load-error {
      color: #01161e;
    }
  `,
})
export class ProjectPage {
  protected readonly html = signal('');
  protected readonly loading = signal(true);
  protected readonly loadError = signal('');
  private readonly route = inject(ActivatedRoute);

  constructor() {
    void this.loadMarkdown();
  }

  private async loadMarkdown(): Promise<void> {
    const defaultMarkdownFile: unknown = this.route.snapshot.data['markdownFile'];
    const markdownFile =
      typeof defaultMarkdownFile === 'string' &&
      document.documentElement.lang.toLowerCase().startsWith('en')
        ? defaultMarkdownFile.replace(/\.md$/, '.en.md')
        : defaultMarkdownFile;

    try {
      if (typeof markdownFile !== 'string' || !/^[a-z0-9-]+(?:\.en)?\.md$/.test(markdownFile)) {
        throw new Error('Project route is missing a valid Markdown filename.');
      }

      const url = new URL(`projects/${markdownFile}`, document.baseURI);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Markdown request failed with status ${response.status}.`);
      }

      const markdown = await response.text();
      this.html.set(await marked.parse(markdown));
    } catch (error) {
      console.error(`Unable to load project Markdown file "${markdownFile}".`, error);
      this.loadError.set(
        $localize`:@@projectLoadError:Le contenu de ce projet n’a pas pu être chargé.`,
      );
    } finally {
      this.loading.set(false);
    }
  }
}
