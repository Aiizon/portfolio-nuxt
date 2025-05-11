---
id: 1
title: Altays
slug: altays
shortDescription: Stage de première année en développement web au sein de l'entreprise Altays, spécialisée dans le développement d'une suite de gestion RH en SaaS.
bannerImage: /img/internships/altays/altays-banner.png
smallImage: /img/internships/altays/altays-small.svg
---

## À propos de l'entreprise

Altays est l’**éditeur français** d’une solution logicielle de **gestion RH** portant le même nom. Localisée à Laval avec des locaux à Paris, et forte de ses près de **70 membres**, 
elle conçoit, développe, fait évoluer et maintient cette logicielle proposée à plus de **600 entreprises** dont la **SNCF** ou **GRDF** par exemple.

La solution de gestion RH Altays se compose de **modules indépendants**, maintenus et développés par différences équipes. 
**4 équipes** de développement coexistent au sein de l’entreprise, et chacune est responsable d’un ou plusieurs modules.

![roue.png](/img/internships/altays/roue.png)

Chaque équipe est chapeautée d’un **lead developer**, responsable de l’**implémentation technique** des diverses fonctionnalités, 
d’un **product owner**, dont le rôle est d’écouter les diverses demandes exercées pour décider de l’**ordre de réalisation des tâches**,
et enfin d’un **product manager**, maîtrisant le produit et proposant des **évolutions** en fonction des **besoins** exprimés par les clients actuels et futurs.

On trouve également une équipe support et relation client, qui interagit au quotidien avec les utilisateurs de la suite pour transmettre leurs requêtes, incidents et demandes. 
Une équipe assurance qualité est aussi présente pour assurer la qualité de nouveaux ajouts avant de les proposer aux clients.

## Présentation de mes missions

### Les projets sur lesquels j'ai travaillé

Le SIRH (Système Informatisé de Ressources Humaines) Altays est composé d’un ensemble de modules interconnectés. 
Au cours de mon stage, j’ai eu l’occasion de travailler sur les modules **Dossier des Salariés** (abrégé en **DS**) et **Entretiens**, bien qu’il en existe d’autres.

Ces modules sont constitués d'un back-end utilisant Symfony, ainsi que d'un front-end utilisant VueJS. Pour les projets les plus anciens, dont ces deux derniers, 
le front-end utilise encore le moteur de template de Symfony, Twig.

#### DS

Le module DS permet est le **cœur de la suite**, permettant de gérer les dossiers des salariés. On peut y renseigner les **informations des salariés**, 
leurs **documents administratifs**, les **formations** accomplies, gérer les **droits des salariés** ayant accès à la suite, gérer les **référentiels de données**, 
et gérer les **imports de données**.

::ContentAccordion{title="Illustrations"}
![profil.png](/img/internships/altays/ds/profil.png)
![profil2.png](/img/internships/altays/ds/profil2.png)
![config.png](/img/internships/altays/ds/config.png)
![import.png](/img/internships/altays/ds/import.png)
::

#### Entretiens

Le module Entretiens, permet de créer et compléter des **campagnes d’entretiens personnalisées** à destination des collaborateurs. 
Les administrateurs peuvent y consulter les campagnes passées et créer des **reportings** par exemple.

::ContentAccordion{title="Illustrations"}
![collaborateurs.png](/img/internships/altays/entretiens/collaborateurs.png)
![avancement.png](/img/internships/altays/entretiens/avancement.png)
![relance.png](/img/internships/altays/entretiens/relance.png)
![config.png](/img/internships/altays/entretiens/config.png)
::

### Quelques missions

#### Purge des données temporaires de relance des participants à un entretien

Dans le module Entretiens, il est possible de **relancer des participants** à une campagne s’ils ne l’ont pas encore complété. 
Pour symboliser que cette relance a été effectuée et donc **éviter de renvoyer un mail en cas de problème dans le code**, 
une **entrée est créée en base de donnée** pour chaque participant relancé. Ces entrées étaient **supprimées à la fin du traitement**.

Ainsi, si un problème survenait après que toutes les relances étaient effectuées, elles étaient **toutes refaites**, ce qui pouvait créer des centaines de mails par participant.

Ma mission ici consistait à éviter la suppression des entrées de relance en fin de traitement, et à **reporter cette suppression** sous la forme d’une **commande en console**, 
pouvant être programmée pour être exécutée de manière régulière.

#### Récupération de statistiques d’utilisation des modules

L’équipe Support et Relation Client (SRC) a exprimé un besoin de **statistiques sur l’utilisation** de certains éléments de la suite 
afin de mieux répondre aux besoins des clients et de mieux vendre les produits. 
Mon rôle a été, au départ, d’effectuer des **analyses sur la source de ces données**, et la **forme** sous laquelle elles seraient restituées.

Tout d’abord, des statistiques sur le nombre de **connection à chaque module**. Ces statistiques peuvent être collectées au niveau du portail.

Ensuite, des statistiques d’**utilisation des composants** sur le module Entretiens. Ici, un composant est une **question pour un entretien**, ils sont **réutilisables** pour faciliter
la répétition d'un entretien déjà réalisé dans le passé.

Enfin, des statistiques sur le **nombre de formations dans le catalogue** d’un client, et le nombre de formations **réalisées par année** ces quelques dernières années.

Je me suis concentré sur ces deux dernières, et il a été convenu qu’elles prendraient la forme d’un **e-mail envoyé à intervalles réguliers**.

Ensuite, j’ai pu intégrer deux commandes permettant de faire l’agrégation de ces statistiques, de les compiler sous la forme d’un **tableau CSV**, puis de les envoyer à une liste d’adresses mail.
Ces commandes seraient exécutées régulièrement et paramétrables facilement.