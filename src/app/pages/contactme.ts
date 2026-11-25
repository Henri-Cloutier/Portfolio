import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  template: `
    <main>
      <header class="page-header">
        <p class="eyebrow" i18n="@@contactEyebrow">Contact</p>
        <h1 i18n="@@contactTitle">Me contacter</h1>
        <p i18n="@@contactDescription">
          Une question, une opportunité ou un projet à discuter? Choisissez le moyen de
          communication qui vous convient.
        </p>
      </header>

      <section
        class="contact-grid"
        aria-label="Options de contact"
        i18n-aria-label="@@contactAriaLabel"
      >
        <a class="contact-card" href="mailto:henri.cloutier@outlook.com">
          <span class="contact-label" i18n="@@contactEmailLabel">Courriel</span>
          <strong>henri.cloutier@outlook.com</strong>
          <span class="contact-action" i18n="@@contactEmailAction">Envoyer un courriel</span>
        </a>

        <a class="contact-card" href="tel:+15551234567">
          <span class="contact-label" i18n="@@contactPhoneLabel">Téléphone</span>
          <strong>+1 (438) 408-4568</strong>
          <span class="contact-action" i18n="@@contactPhoneAction">Appeler</span>
        </a>

        <a
          class="contact-card"
          href="https://www.linkedin.com/in/henri-cloutier-85136b2a3/"
          target="_blank"
        >
          <span class="contact-label" i18n="@@contactLinkedinLabel">LinkedIn</span>
          <strong>Henri Cloutier</strong>
          <span class="contact-action" i18n="@@contactLinkedinAction">Voir le profil</span>
        </a>
      </section>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: calc(100vh - 72px);
    }

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
    .contact-label,
    .contact-action {
      color: #508484;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .eyebrow {
      margin: 0 0 12px;
      font-size: 0.78rem;
    }

    h1 {
      margin: 12px 0 18px;
      color: #01161e;
      font-size: clamp(3rem, 7vw, 5.5rem);
      line-height: 1;
      letter-spacing: -0.055em;
    }

    .page-header > p:last-child {
      max-width: 620px;
      margin: 0;
      color: #01161e;
      font-size: 1.1rem;
      line-height: 1.7;
    }

    .contact-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .contact-card {
      flex: 1 1 300px;
      min-height: 220px;
      min-width: fit-content;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #508484;
      border-radius: 16px;
      background: #fffff2;
      color: #01161e;
      padding: 28px;
      text-decoration: none;
      transition:
        transform 160ms ease,
        background 160ms ease;
    }

    .contact-card:hover {
      transform: translateY(-4px);
      background: #ececdf;
    }

    .contact-label,
    .contact-action {
      font-size: 0.78rem;
    }

    .contact-card strong {
      font-size: 1.35rem;
      overflow-wrap: anywhere;
    }

    @media (max-width: 700px) {
      main {
        padding: 48px 18px 72px;
      }

      .contact-card {
        flex-basis: 100%;
      }
    }
  `,
})
export class ContactMePage {}
