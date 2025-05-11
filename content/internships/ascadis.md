---
id: 2
title: Ascadis
slug: ascadis
shortDescription: Stage de deuxième année en développement web au sein de l'entreprise Ascadis, spécialisée dans le développement d'applications web avec cahier des charges.
bannerImage: /img/internships/ascadis/ascadis-banner.png
smallImage: /img/internships/ascadis/ascadis-small.png
---

## À propos de l'entreprise

Ascadis est une entreprise française de développement logiciel. Ils réalisent des **applications spécifiques pour leurs clients** à partir d'un cahier des charges,
puis assurent la **maintenance** et les **évolutions** de ces applications pour répondre au mieux aux **besoins du client**. Elle compte actuellement deux membres à temps plein, 
et propose des formations en plus de leurs activités de développement.

Ainsi, ils développent et maintiennent des applications dans de nombreux domaines, dont des **ERP** (Progiciels de Gestion Intégrés), des sites web **vitrines** et **e-commerce**, 
ou encore des outils spécifiques comme un **logiciel d'appels automatisés** utilisant l'Intelligence Artificielle.

## Présentation de mes missions

### Ascadémie

Ascadémie est un projet de site web interne ayant l'objectif de **gérer les formations** proposées par Ascadis. On peut y créer des formations, les **programmer dans des sessions**, 
associer ces sessions à des **clients** par des **conventions**, ou encore gérer des **demandes d'inscriptions** depuis le site web de l'entreprise.

Le projet est réalisé avec Symfony en utilisant son moteur de templates Twig.

#### Quelques missions

- Implémentation de champs avec recherche pour la création de conventions

Lors de la création d'une convention, il faut sélectionner un client et une session à associer. Cette sélection se complexifie au fur et à mesure de l'agrandissement du volume 
de données. J'ai donc créé des champs personnalisés avec champs de recherche pour faciliter le processus.

- Ajout du planning de session

Une session est la réalisation d'une formation donnée sur une période donnée. Ainsi, la temporalité est très importante. J'ai donc ajouté un système permettant de sélectionner 
des jours de formation et de les visualiser sur la page d'une session.

- Gestion des demandes d'inscriptions

Un projet d'ajout de demandes d'inscriptions a été entrepris pour le site web d'Ascadis. J'ai donc ajouté une route API pour réceptionner les demandes d'inscription ainsi que 
des pages pour les visualiser.

::ContentAccordion{title="Illustrations"}
![navbar.png](/img/internships/ascadis/ascademie/navbar.png)
![champ1.png](/img/internships/ascadis/ascademie/champ1.png)
![champ2.png](/img/internships/ascadis/ascademie/champ2.png)
![planning1.png](/img/internships/ascadis/ascademie/planning1.png)
![planning2.png](/img/internships/ascadis/ascademie/planning2.png)
![inscr1.png](/img/internships/ascadis/ascademie/inscr1.png)
![inscr2.png](/img/internships/ascadis/ascademie/inscr2.png)
::

### Truecoach

Truecoach est également un projet de site web interne, il a pour objectif de créer des **quiz et tests intéractifs**, et d'y **inscrire des participants** qui pourront y **répondre**. 
Il s'interface avec Ascadémie pour permettre depuis ce dernier d'**envoyer des candidatures** à des tests au cours de formations.

Le projet est originellement réalisé avec le framework interne à Ascadis, Leap, et le moteur de template Smarty.

#### Quelques missions

- Réécriture du projet

Le projet Truecoach a été commencé il y a environ huit ans, avant d'être rapidement laissé de côté à cause d'un manque de temps. Mon arrivée a permis de relancer le projet, 
en commençant par moderniser sa base de code vieillissante. J'ai donc réécrit ce qui existait pour donner au projet une structure moderne : un back-end Symfony et front-end VueJS, 
le code front écrit avec TypeScript et SCSS, le tout dans un conteneur Docker prêt à être déployé.

- Ajout de la liste des candidats

La liste des candidats était jusqu'ici enregistrée en base de données, mais invisible pour l'utilisateur. J'ai donc créé une page permettant de lister les candidats et une 
seconde page pour gérer ses informations.

::ContentAccordion{title="Illustrations"}
![questio1.png](/img/internships/ascadis/truecoach/questio1.png)
![questio2.png](/img/internships/ascadis/truecoach/questio2.png)
![test1.png](/img/internships/ascadis/truecoach/test1.png)
![test2.png](/img/internships/ascadis/truecoach/test2.png)
![test3.png](/img/internships/ascadis/truecoach/test3.png)
![candidat.png](/img/internships/ascadis/truecoach/candidat.png)
::

### Les Folies d'Eugénie

Les Folies d'Eugénie est une entreprise commerçant des **objets de luxe de seconde main**. Leurs clients y **vendent** et **achètent** des objets de luxe dans des **boutiques physiques** 
ainsi que sur une **e-boutique**. Ils ont confié le développement, et désormais la maintenance, de leur application de gestion à Ascadis.

Cette application de gestion permet d'enregistrer des **clients**, les **achats réalisés** par l'entreprise (ou encaissements), les **ventes réalisées**. Elle permet de plus de gérer 
les **produits** eux-mêmes ainsi que les **stocks sur l'e-boutique**.

Le projet est réalisé avec un back-end utilisant le framework interne Leap et un front-end utilisant VueJS.

#### Quelques missions

- Améliorations sur la gestion des photos de produits

Sur l'ERP, il est possible d'ajouter des photos aux produits. Elles se décomposent en deux parties : les photos d'expertise, qui servent à garder une trace de l'apparence 
visuelle des produits, ainsi que des photos commerciales, qui sont envoyées sur l'e-boutique pour illustrer le produit. Ces photos sont visualisables 
sur l'application dans un format miniature peu pratique.

Ma mission a donc été de faire en sorte que l'on puisse visualiser les photos en plein écran, ainsi que de faire en sorte que l'on puisse les ordonner pour faciliter la 
gestion de l'e-boutique.

- Historisation de la restitution

Lorsqu'un produit est déposé par un client, il lui est possible de le récupérer en échange du montant reçu à l'achat. Ces restitutions sont désormais historisées et visualisables 
sur l'application.

::ContentAccordion{title="Illustrations"}
![photo1.png](/img/internships/ascadis/lfe/photo1.png)
![photo2.png](/img/internships/ascadis/lfe/photo2.png)
![photo3.png](/img/internships/ascadis/lfe/photo3.png)
![histo.png](/img/internships/ascadis/lfe/histo.png)
::