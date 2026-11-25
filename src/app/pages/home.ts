import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <section class="hero" id="accueil">
        <div class="hero-copy">
          <p class="eyebrow">Portfolio</p>
          <h1>
            <span i18n="@@homeGreeting">Bonjour, je suis</span>
            <span>Henri Cloutier</span>.
          </h1>
          <p class="intro" i18n="@@homeIntro">
            Développeur passionné, je conçois des applications modernes, fiables et pensées pour
            offrir une excellente expérience utilisateur.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projets" i18n="@@homeProjects">
              Voir mes projets
            </a>
            <a class="button button-secondary" href="#contact" i18n="@@homeContact">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      <section class="section" id="apropos">
        <p class="eyebrow" i18n="@@homeAboutEyebrow">À propos</p>
        <h2 i18n="@@homeAboutTitle">Créer des solutions utiles et élégantes</h2>
        <p class="section-copy" i18n="@@homeAboutText">
          Ce portfolio présente mon parcours, mes compétences et les projets auxquels j'ai
          participé. J'éprouve un réel plaisir à faire de mes idées une réalité.
        </p>
      </section>

      <section class="contact" id="contact">
        <p class="eyebrow" i18n="@@homeContactEyebrow">Contact</p>
        <h2 i18n="@@homeContactTitle">Travaillons ensemble</h2>
        <p i18n="@@homeContactText">Vous avez un projet ou une opportunité à me proposer?</p>
        <div class="contactOptions">
          <a
            class="button button-primary"
            href="mailto:henri.cloutier@outlook.com"
            i18n="@@homeEmail"
          >
            Envoyer un courriel
          </a>
          <a
            class="button button-primary"
            href="https://www.linkedin.com/in/henri-cloutier-85136b2a3/"
            target="_blank"
          >
            <span i18n="@@homeLinkedin">Profil LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  `,
  styles: `
    :host {
      display: block;
    }

    main {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
    }

    [id] {
      scroll-margin-top: 88px;
    }

    .hero {
      min-height: 560px;
      display: grid;
      grid-template-columns: 1fr 280px;
      align-items: center;
      gap: 64px;
      padding: 72px 0;
    }

    .hero-copy {
      max-width: 720px;
    }

    .eyebrow {
      margin: 0 0 12px;
      color: #508484;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0;
      color: #01161e;
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      line-height: 0.98;
      letter-spacing: -0.055em;
    }

    h1 span {
      color: #508484;
    }

    .intro,
    .section-copy {
      max-width: 660px;
      color: #01161e;
      font-size: 1.12rem;
      line-height: 1.75;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      margin-top: 32px;
    }

    .button {
      display: inline-block;
      border-radius: 999px;
      padding: 13px 20px;
      font-weight: 750;
      text-decoration: none;
      transition:
        transform 160ms ease,
        background 160ms ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .button-primary {
      background: #508484;
      color: #fffff2;
    }

    .button-primary:hover {
      background: #01161e;
    }

    .button-secondary {
      border: 1px solid #508484;
      color: #01161e;
    }

    .section {
      border-top: 1px solid #508484;
      padding: 88px 0;
    }

    h2 {
      margin: 0 0 24px;
      color: #01161e;
      font-size: clamp(2rem, 4vw, 3.25rem);
      letter-spacing: -0.04em;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 36px;
    }

    .card {
      min-height: 180px;
      border: 1px solid #508484;
      border-radius: 16px;
      background: #fffff2;
      padding: 28px;
    }

    .card h3 {
      margin: 0 0 12px;
      color: #01161e;
    }

    .card p {
      color: #01161e;
      line-height: 1.65;
    }

    .project-card {
      display: flex;
      flex-direction: column;
    }

    .project-number,
    .tags {
      color: #508484;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .project-number {
      margin-bottom: 48px;
    }

    .tags {
      margin-top: auto;
    }

    .contact {
      margin: 24px 0 72px;
      border-radius: 24px;
      background: #01161e;
      color: #fffff2;
      padding: 72px;
      text-align: center;
    }

    .contact h2,
    .contact p {
      color: #fffff2;
    }

    .contact h2 {
      margin-bottom: 12px;
    }

    .contact p {
      margin: 0 0 28px;
    }
    .contactOptions {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      text-align: center;
    }

    @media (max-width: 800px) {
      main {
        padding: 0 18px;
      }

      .hero {
        grid-template-columns: 1fr;
        min-height: auto;
        gap: 40px;
        padding: 56px 0;
      }

      .hero-mark {
        width: 180px;
        justify-self: center;
        box-shadow: 14px 14px 0 #508484;
      }

      .hero-mark span {
        font-size: 3.5rem;
      }

      .card-grid {
        grid-template-columns: 1fr;
      }

      .contact {
        padding: 56px 20px;
      }
    }

    @media (max-width: 480px) {
      .hero-actions {
        align-items: stretch;
        flex-direction: column;
      }

      .button {
        text-align: center;
      }
    }
  `,
})
export class HomePage {}
