# Gestion d'inventaire

## Présentation

Le but de ce logiciel était, à la base, pour avoir un logiciel que je pouvais utiliser pour me familiariser avec l'infrastructure de mon club en le mettant en service moi-même. Étant donné que le département d'inventaire du club souhaitait s'éloigner des fichiers excel pour le maintien de l'inventaire, c'était une opportunité parfaite pour me familiariser avec un nouveau framework ainsi que la création de configurations pour l'infrastrcuture des clubs configurée avec ArgoCD.

## Contexte

Pour un petit peu plus de contexte, je venais tout juste d'obtenir le rôle de gestionnaire de l'infrastructure dans notre relation avec le club Cédille, et j'avais très peu d'expérience avec Kubernetes, Ansible et ArgoCD, qui sont les 3 plus grands composants de l'infrastructure des clubs.

### Configuration des serveurs des clubs

Nous avons 8 serveurs, tous dans un cluster Proxmox.
Chacun de ces serveurs fait aussi partie du cluster Kubernetes, qui peut prendre autant de ressources que celui-ci demande.
Kubernetes, quant à lui, est configuré avec ArgoCD, qui a pour but de faire à ce que nos repos Git sont la seule source de vérité.
ArgoCD a plusieurs repositories qu'il vérifie pour des changements de configuration. Si une d'entre elle est modifiée, le tout sera automatiquement déployé, et en cas de problème, les membres de Cédille seront avisés immédiatement.

###

Dans mon contexte, mes tâches sont de faire les configurations pour les applications du Lan ETS, de m'assurer que le tout fonctionne correctement et de créer les machines virtuelles que l'on me demande sur le cluster Proxmox, qui permet tout de même de créer des VMs avec ses ressources restantes.

## Fonctionnalités

- Gestion des emplacements d'inventaire et des items en inventaire
- Demande de matériel de gens faisant partie du club (accès directe aux données d'inventaires), ou de gens externes au club (formulaire n'affichant pas le contenu exacte de l'inventaire)
- Statistique sur l'état de l'inventaire (Demandes en attente, prêts arrivant à échéance, achats nécessaires)

## Technologies

### Frontend

Angular

### Backend

Node.ts

### Base de données

PostgreSQL

### Infrastructure

- Kubernetes, ArgoCD (Déploiement)
- Docker (Environnement de développement)
