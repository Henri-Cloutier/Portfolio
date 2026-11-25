# Portfolio

Portfolio personnel développé avec Angular.

## Technologies utilisées

- Angular 22
- TypeScript
- Tailwind CSS
- RxJS
- Docker

## Prérequis

- Node.js 24 ou plus récent
- npm 11 ou plus récent
- Docker et Docker Compose (facultatif)

## Installation locale

```bash
npm install
```

## Lancement

```bash
npm start
```

L'application est ensuite disponible en français à l'adresse <http://localhost:4200>. Pour la servir en anglais pendant le développement, utilisez `ng serve --configuration english`.

## Commandes disponibles

```bash
npm start       # Lance le serveur de développement
npm run build   # Génère une version de production
npm test        # Exécute les tests
npm run watch   # Compile en continu
```

## Intégration continue

Le workflow GitHub Actions exécute le lint, les tests et le build de production sur un runner auto-hébergé pour chaque pull request et chaque push. Il utilise Node.js 24 et le label standard `self-hosted`.

## Lancement avec Docker

Depuis le dossier parent contenant le fichier `docker-compose.yml` :

```bash
docker compose up --build
```

Angular tourne dans le conteneur. Le dossier `public/projects` est monté dans le conteneur et surveillé : les modifications aux fichiers Markdown sont prises en compte sans lancer npm sur la machine hôte.

## Structure du projet

```text
src/
  app/       # Composants, pages et routes Angular
  public/    # Ressources publiques
  styles.css # Styles globaux
```

## Langues

L'interface utilise l'i18n intégré à Angular. Le build de production génère la version française à la racine et la version anglaise sous `/en/`; les boutons FR/EN de la barre de navigation changent de version en conservant la page courante. Les détails des projets utilisent `public/projects/<slug>.md` pour le français et `public/projects/<slug>.en.md` pour l'anglais. Les traductions de l'interface anglaise sont dans `src/locale/messages.en.xlf`.

## Auteur

Henri Cloutier

## Palette de couleurs

- `#01161E`
- `#508484`
- `#FFFFF2`
