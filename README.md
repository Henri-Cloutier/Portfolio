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

L'application est ensuite disponible à l'adresse <http://localhost:4200>.

## Commandes disponibles

```bash
npm start       # Lance le serveur de développement
npm run build   # Génère une version de production
npm test        # Exécute les tests
npm run watch   # Compile en continu
```

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

## Auteur

Henri Cloutier

## Palette de couleurs

- `#01161E`
- `#508484`
- `#FFFFF2`
