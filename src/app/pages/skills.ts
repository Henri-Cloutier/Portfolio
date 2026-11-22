import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  template: `
    <main>
      <header class="page-header">
        <p class="eyebrow">Profil technique</p>
        <h1>Mes compétences</h1>
        <p>
          Voici les technologies, outils ou logiciels que j'ai été porté à utiliser dans le cadre de
          mon parcours.
        </p>
      </header>

      <section class="skill-grid" aria-label="Liste des compétences">
        <article class="skill-card">
          <h2>Langages</h2>
          <ul>
            <li>C</li>
            <li>C#</li>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
            <li>NoSQL</li>
            <li>SQL</li>
          </ul>
        </article>

        <article class="skill-card">
          <h2>Infrastructure</h2>
          <ul>
            <li>ASP.NET</li>
            <li>Node.js</li>
            <li>Angular</li>
            <li>React</li>
            <li>React Native</li>
          </ul>
        </article>

        <article class="skill-card">
          <h2>Services</h2>
          <ul>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>ArgoCD</li>
            <li>Ansible</li>
            <li>AWS</li>
          </ul>
        </article>

        <article class="skill-card">
          <h2>Logiciels</h2>
          <ul>
            <li>Word</li>
            <li>Excel</li>
            <li>PowerPoint</li>
            <li>Power Automate</li>
            <li>IntelliJ IDEA</li>
            <li>Visual Studio Code</li>
            <li>Visual Studio Community</li>
            <li>Cisco Packet Tracer</li>
          </ul>
        </article>
        <article class="skill-card">
          <h2>Systèmes d'exploitations</h2>
          <ul>
            <li>Windows 10</li>
            <li>Windows 11</li>
            <li>Ubuntu Desktop</li>
            <li>Arch Linux</li>
            <li>Linux mint</li>
            <li>Windows Server 2022</li>
            <li>Ubuntu server</li>
            <li>Proxmox</li>
          </ul>
        </article>
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
      margin-bottom: 10px;
    }

    .eyebrow {
      color: #508484;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
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

    .skill-grid {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 20px;
      align-items: stretch;
      justify-content: center;
    }

    .skill-card {
      flex: 0 1 500px;
      min-height: 300px;
      border-radius: 16px;
      background: #fffff2;
      padding: 28px;
      box-sizing: border-box;
    }

    .skill-card h2 {
      margin: 0 0 24px;
      color: #01161e;
      font-size: 1.75rem;
      letter-spacing: -0.03em;
    }

    .skill-card ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .skill-card li {
      flex: 1 1 140px;
      box-sizing: border-box;
      padding: 7px 10px;
      border-radius: 5px;
      background-color: #ececdf;
      color: #01161e;
      min-width: 200px;
    }

    @media (max-width: 700px) {
      .skill-card {
        flex-basis: 100%;
      }
    }
  `,
})
export class SkillsPage {}
