# Gestion de personnel

## Présentation

Ce logiciel avait pour but d'offrir à l'équipe administrative de l'Approvisionnement un service pour réserver des bureaux pour leur équipe.

## Contexte

Ce logiciel a été développé en parallèle du [Calendrier prévisionnel](/projects/calendar) pendant une période moins chargée. Il visait à offrir une interface où chaque employé pouvait réserver son bureau pour les jours où il souhaitait se rendre au bureau. Il était devenu nécessaire à la suite d'un changement de politique selon lequel les employés devaient désormais venir au bureau trois jours par semaine au lieu de deux.

Il m'a donc été demandé de créer un logiciel simple pour résoudre ce problème, ce que j'ai pu faire en quelques jours. Par la suite, d'autres ajouts ont été demandés, tels que la simulation d'un horaire de travail dans des situations plus atypiques.

## Fonctionnalités

Le logiciel a donc deux fonctionnalités principales :

- Les employés peuvent réserver un bureau les jours de la semaine de leur choix. Les chefs de division peuvent modifier ces choix ou réserver des bureaux pour leur équipe.
- Les chefs de division peuvent générer des horaires selon des paramètres précis, par exemple la présence du chef ce jour-là, le nombre de personnes dans la division et les priorités associées par chacun aux jours de la semaine.

## Technologies

### Base de données

MySQL

### Backend et frontend

PHP (sans framework)
