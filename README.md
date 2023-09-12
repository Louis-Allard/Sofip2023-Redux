## Tuto Redux

# Installation

```
npm i redux react-redux
```

# Objectif

Utiliser un store redux pour gérer les states de deux inputs placés dans deux composants différents, un troisième composant devra comparer les valeurs numériques des deux autres inputs en comparants les states.

# PWA

Cette branche contiens la version PWA de la branche principale.

Ressource : https://www.codeur.com/blog/creer-progressive-web-app-pwa/


## Qu'est-ce que c'est ?

Une PWA (Progressive web application), est une alternative au developpement d'applications mobiles et aux framework adapté type ReactNative. Elle permet donc de pousser une application web sur le store androide et d'avoir une application à partir d'un developpement en ReactJS sans devoir tout recoder. 

## Quelles sont les objectifs d'une PWA ?

- Fonctionner tout les navigateurs (ou les principaux), que ce soit sur ordinateur de bureau ou sur mobile.

- S'adapter à la taille de tout les écrans.

- Fonctionner quelque soit la qualité de la connexion, voir sans connexion.

- Fournir la même expérience utilisateur qu'une application classique, nottamment les "notifications push", ou l'utilisation de l'appareil photo.

- Etre accessible via un lien https, et donc ne pas de voir nécessairement être posté sur un store.
 
- Etre installable sur les écrans d'accueil de tout mobile.

## Quelles sont les intérets par rapport à une application classique ?

- Avoir un scope d'utilisateur plus large.

- Ne pas être soumis aux règles des stores.

- Les utilisateurs n'ont pas à devoir gérer les mises à jour.

- Sensible au SEO

- Moins coûteux en développement.

## Quelles sont les inconvénients par rapport à une application classique ?

- L'installation sur l'acceuil des mobiles n'est pas automatique, il faut le faire à la main en passant par le lien.

- Des fonctionnalités plus limités du fait de la complexité d'accès à certaines fonctionnalités du smartphone (le bluethooth par exemple).

- Des différences entre les fonctionnalités prises en charge par IOS et Android.ù

- Des performances un peu pluis faibles.

## Mise en place

### Le service worker

Ils permettent d'avoir accès aux avantages de la PWA, telles que les notifications push, la mise en cache ou les invites d'installations.

Ressource : https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers


### Le manifeste

Il sagit d'un fichier json placé à la racine de l'application. Il permet de décrire l'application : icones (toutes les tailles d'icones pour les différents appareil doivent apparaitre),nom, description et écran d'acceuil; on peux y ajouter également la configuration de l'apparence de l'application. 

### Les outils

- Un framework de base, ReactJS par exemple.

- Polymer 

-  Webpack, pour aller plus loin que Polymer.

- AMP (Accelerated Mobile Page), pour gérer la compression des images.

- Lighthouse => Permet de tester l'application