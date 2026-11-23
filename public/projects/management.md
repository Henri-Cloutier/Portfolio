# Gestion de personnel

## Présentation

Ce logiciel avait pour but d'offrir à l'équipe administrative de l'Approvisionnement un service pour réserver des bureaux pour leur équipe.

## Contexte

Ce logiciel a été développé en parallèlle du [Calendrier prévisionnel](/projects/calendar) pendant une période plus lente. Le but de ce logiciel était d'offrir une interface où chacun des employés pouvaient réserver leur bureau au jour qu'ils souhaitent aller au bureau. Ce logiciel était devenu une nécessité suite à un changement de politique qui faisait à ce que tous les employés devaient dorénavant rentrer 3 jours par semaine au lieu de 2.

###

Il m'a donc été demandé de créer un logiciel simple règlant ce problème, ce que j'ai pu fournir en quelques jours. Par la suite, d'autres ajouts ont été demandés, tel que la simulation d'un horaire de bureau dans des situations plus atypiques.

## Fonctionnalités

Le logiciel a donc 2 fonctionnalités principales:

- Les employés peuvent réserver un bureau aux jours de la semaine qu'ils souhaitent et les chefs de division peuvent modifier ces choix ou réserver pour leur équipe
- Les chefs de division peuvent générer des horaires en fonction de paramètres spécifiques, par exemple est-ce que le chef de division est présent ce jour-là, la quantité de gens dans la division, la priorité que chacun a associé aux journées de la semaine, etc.

## Technologies

### Base de données

MySQL

### Backend et frontend

PHP (sans framework)
