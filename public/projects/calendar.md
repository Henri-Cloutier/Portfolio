# Calendrier prévisionnel

## Présentation

Le Calendrier prévisionnel est un logiciel de gestion des appels d'offres de la Ville de Montréal.
Ce logiciel rassemble différentes sources d'information dans une même interface.
Ces sources sont les appels d'offres à venir, ceux qui sont accessibles au public et les contrats établis avec des entreprises.

## Contexte

Ce projet a été réalisé dans le cadre de mon stage à la Ville de Montréal, puis s'est poursuivi pendant mon contrat comme consultant externe. À la base, le but était de réaliser une preuve de concept. Le projet s'est finalement transformé en un véritable logiciel fonctionnel, ce qui explique l'ajout de certaines fonctionnalités de manière « patchwork ».

À la base, ce logiciel n'offrait qu'une interface d'administration pour les appels d'offres à venir. Par la suite, deux autres sources d'information ont été ajoutées : les appels d'offres en cours de négociation et les contrats en cours issus d'appels d'offres.

## Fonctionnalités

### Statistiques

Le logiciel offrait différentes interfaces donnant une vue d'ensemble de la situation actuelle des appels d'offres et de leur statut :

- Un calendrier montrant, par date, les changements d'état des appels d'offres à venir, en préparation ou en cours.
- Un diagramme de Gantt permettant de visualiser les étapes d'un appel d'offres selon les dates.
- Des statistiques comparant la situation actuelle à celle de l'année précédente.

### Administration

Plusieurs interfaces d'administration étaient disponibles pour ajouter aux appels d'offres des informations qui ne se trouvaient pas nécessairement dans les sources originales, mais qui apportaient une réelle valeur ajoutée à une application résumant les trois sources.

### Communication

Une interface de clavardage permettait de consulter facilement et rapidement toutes les interactions liées à un appel d'offres. Elle permettait notamment de mentionner des appels d'offres et d'ajouter des personnes au salon.

## Technologies

### Base de données

MySQL

### Backend et Frontend

PHP (sans framework)
