# Gestion d'inventaire

## Présentation

Le but initial de ce logiciel était de créer un outil que je pourrais mettre moi-même en service afin de me familiariser avec l'infrastructure de mon club. Comme le département d'inventaire souhaitait délaisser les fichiers Excel pour gérer son inventaire, c'était l'occasion idéale de découvrir un nouveau framework et de créer des configurations pour l'infrastructure du club, gérée avec Argo CD.

## Contexte

Pour donner un peu plus de contexte, je venais tout juste d'obtenir le rôle de gestionnaire de l'infrastructure dans le cadre de notre partenariat avec le club Cédille. J'avais alors très peu d'expérience avec Kubernetes, Ansible et Argo CD, les trois principaux composants de l'infrastructure des clubs.

### Configuration des serveurs des clubs

Nous avons huit serveurs, tous dans un cluster Proxmox.
Chacun de ces serveurs fait aussi partie du cluster Kubernetes, qui peut utiliser autant de ressources que nécessaire.
Kubernetes, quant à lui, est configuré avec Argo CD, qui vise à faire de nos dépôts Git la seule source de vérité.
Argo CD surveille plusieurs dépôts pour détecter les changements de configuration. Si l'un d'eux est modifié, les changements sont déployés automatiquement et, en cas de problème, les membres de Cédille en sont avisés immédiatement.

Dans mon rôle, mes tâches consistent à configurer les applications du LAN ETS, à m'assurer que tout fonctionne correctement et à créer les machines virtuelles demandées sur le cluster Proxmox, qui permet aussi d'en créer avec les ressources restantes.

## Fonctionnalités

- Gestion des emplacements et des articles de l'inventaire
- Demandes de matériel par les membres du club (accès direct aux données de l'inventaire) ou par des personnes externes (formulaire ne révélant pas le contenu exact de l'inventaire)
- Statistiques sur l'état de l'inventaire (demandes en attente, prêts arrivant à échéance, achats nécessaires)

## Technologies

### Frontend

Angular

### Backend

Node.js (TypeScript)

### Base de données

PostgreSQL

### Infrastructure

- Kubernetes, ArgoCD (Déploiement)
- Docker (Environnement de développement)
