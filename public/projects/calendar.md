# Calendrier prévisionnel

## Présentation

Le Calendrier Prévisionnel est un logiciel de gestion d'appels d'offre de la Ville de Montréal.
Ce logiciel prend différente sources d'information et les réunit en une interface.
Ces sources sont les appels d'offre à venir, celles qui sont disponibles aux publique, et les contrats établits avec des compagnies.

## Contexte

Ce projet a été fait dans le contexte de mon stage à la Ville de Montréal et s'est poursuivi pendant mon contrat en tant que Consultant externe. À la base, le but était de faire une preuve de concept, et finalement s'est transformé en réel logiciel fonctionnel, ce qui explique l'ajout de certaines fonctionnalité de manière "_patchwork_".

###

À la base, ce logiciel n'offrait qu'une interface d'administration pour les appels d'offre à venir. Par la suite, deux autres sources d'information ont été ajoutées, c'est-à-dire celle pour les appels d'offre en cours de négociation, ainsi que celle pour les contrats en cours provenant d'appels d'offre.

## Fonctionnalités

### Statistiques

Le logiciel offrait différente interfaces offrant une vue d'ensemble sur la situation actuelle des appels d'offres et de leur statut:

- Un calendrier montrant par date les changements d'états pour les appels d'offre à venir, en préparation ou en cours.
- Un diagramme de gantt permettant de visualiser chaque étape d'un appel d'offre par date.
- Des statistiques comparant la situation actuelle par rapport à celle de l'année précédente.

### Administration

Plusieurs interfaces d'administration était disponible pour ajouter des informations sur l'application aux appels d'offres qui ne serait pas nécessairement utile dans les sources d'information originales, mais qui a une réelle valeur ajoutée lorsqu'on utilise une application donnant un résumé des 3 sources.

### Communication

Une interface de chat room est aussi disponible, ce qui permet de voir toutes les interactions faites à propos d'un appel d'offre facilement et rapidement. Cette interface permettait notamment de mentionner des appels d'offre et d'ajouter des gens au salon.

## Technologies

### Base de données

MySQL

### Backend et Frontend

PHP (sans framework)
